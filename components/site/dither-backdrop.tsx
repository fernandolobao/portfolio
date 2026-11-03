"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative background inspired by video-synth "patches": a slowly evolving
 * ridge-noise field, a feedback buffer that the cursor paints into, and an
 * ordered (Bayer) dither that renders it as sparse pixels in the accent color.
 * Runs on the GPU at low resolution; falls back to a clean flat background
 * when WebGL is unavailable. Frozen (single frame) under reduced motion.
 */

const CELL = 3; // CSS pixels per dither cell

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const PRECISION = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
`;

const FEEDBACK_FRAG = `${PRECISION}
uniform sampler2D uPrev;
uniform vec2 uRes;
uniform vec2 uA;
uniform vec2 uB;
uniform float uForce;
varying vec2 vUv;

float seg(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
  return length(pa - ba * h);
}

void main() {
  vec2 uv = (vUv - 0.5) * 0.9965 + 0.5 + vec2(0.0, 0.0004);
  float v = texture2D(uPrev, uv).r * 0.955 - 0.0015;
  float asp = uRes.x / uRes.y;
  vec2 p = vec2(vUv.x * asp, vUv.y);
  float d = seg(p, vec2(uA.x * asp, uA.y), vec2(uB.x * asp, uB.y));
  v += smoothstep(0.08, 0.0, d) * uForce;
  gl_FragColor = vec4(clamp(v, 0.0, 1.0), 0.0, 0.0, 1.0);
}`;

const DISPLAY_FRAG = `${PRECISION}
uniform sampler2D uFb;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uColor;
uniform float uAlpha;
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float ridge(vec2 p) {
  float a = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    float n = 1.0 - abs(vnoise(p) * 2.0 - 1.0);
    a += n * n * amp;
    p *= 2.03;
    amp *= 0.5;
  }
  return a;
}

float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }

void main() {
  float asp = uRes.x / uRes.y;
  vec2 p = vec2(vUv.x * asp, vUv.y) * 2.4;
  float n = ridge(p + vec2(uTime * 0.018, uTime * 0.011));
  float fb = texture2D(uFb, vUv).r;
  float v = n * 0.62 + fb * 0.8;
  float level = clamp((v - 0.41) * 2.0, 0.0, 0.42);
  float on = step(bayer4(gl_FragCoord.xy), level);
  gl_FragColor = vec4(uColor * uAlpha * on, uAlpha * on);
}`;

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)];
}

export function DitherBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let cleanup = () => {};

    const start = () => {
      const gl = canvas.getContext("webgl", {
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
      if (!gl) return;

      // Skip CPU-rasterized WebGL (SwiftShader, llvmpipe): too slow, and it
      // would also penalize lab tools such as Lighthouse. Add ?dither=on to
      // the URL to force the effect when testing without a GPU.
      const forced = new URLSearchParams(window.location.search).has("dither");
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      const renderer = debugInfo
        ? String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL))
        : "";
      if (!forced && /swiftshader|llvmpipe|software|basic render/i.test(renderer)) {
        return;
      }

      const compile = (type: number, source: string) => {
        const shader = gl.createShader(type)!;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
      };
      const program = (frag: string) => {
        const vs = compile(gl.VERTEX_SHADER, VERT);
        const fs = compile(gl.FRAGMENT_SHADER, frag);
        if (!vs || !fs) return null;
        const p = gl.createProgram()!;
        gl.attachShader(p, vs);
        gl.attachShader(p, fs);
        gl.bindAttribLocation(p, 0, "aPos");
        gl.linkProgram(p);
        return gl.getProgramParameter(p, gl.LINK_STATUS) ? p : null;
      };

      const fbProgram = program(FEEDBACK_FRAG);
      const dispProgram = program(DISPLAY_FRAG);
      if (!fbProgram || !dispProgram) return;

      const quad = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, quad);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 3, -1, -1, 3]),
        gl.STATIC_DRAW
      );
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.disable(gl.BLEND);

      const u = (p: WebGLProgram, name: string) => gl.getUniformLocation(p, name);
      const fbU = {
        prev: u(fbProgram, "uPrev"),
        res: u(fbProgram, "uRes"),
        a: u(fbProgram, "uA"),
        b: u(fbProgram, "uB"),
        force: u(fbProgram, "uForce"),
      };
      const dU = {
        fb: u(dispProgram, "uFb"),
        res: u(dispProgram, "uRes"),
        time: u(dispProgram, "uTime"),
        color: u(dispProgram, "uColor"),
        alpha: u(dispProgram, "uAlpha"),
      };

      let width = 0;
      let height = 0;
      let textures: WebGLTexture[] = [];
      let buffers: WebGLFramebuffer[] = [];
      let read = 0;

      const makeTarget = () => {
        const tex = gl.createTexture()!;
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        const fbo = gl.createFramebuffer()!;
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        return { tex, fbo };
      };

      const resize = () => {
        width = Math.max(2, Math.ceil(window.innerWidth / CELL));
        height = Math.max(2, Math.ceil(window.innerHeight / CELL));
        canvas.width = width;
        canvas.height = height;
        textures.forEach((t) => gl.deleteTexture(t));
        buffers.forEach((b) => gl.deleteFramebuffer(b));
        const t0 = makeTarget();
        const t1 = makeTarget();
        textures = [t0.tex, t1.tex];
        buffers = [t0.fbo, t1.fbo];
        read = 0;
      };

      let color: [number, number, number] = [0.78, 0.95, 0.41];
      let alpha = 0.3;
      const readTheme = () => {
        const root = document.documentElement;
        const raw = getComputedStyle(root).getPropertyValue("--brand").trim();
        const [h, s, l] = raw.split(/\s+/).map(parseFloat);
        if ([h, s, l].every((n) => Number.isFinite(n))) color = hslToRgb(h, s, l);
        alpha = root.classList.contains("dark") ? 0.22 : 0.18;
      };

      // pointer state (uv space, y up)
      let ax = 0.5, ay = 0.5, bx = 0.5, by = 0.5, force = 0;
      const onPointer = (event: PointerEvent) => {
        bx = event.clientX / window.innerWidth;
        by = 1 - event.clientY / window.innerHeight;
        force = 1;
      };

      const draw = (seconds: number) => {
        const write = 1 - read;
        gl.viewport(0, 0, width, height);

        gl.bindFramebuffer(gl.FRAMEBUFFER, buffers[write]);
        gl.useProgram(fbProgram);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, textures[read]);
        gl.uniform1i(fbU.prev, 0);
        gl.uniform2f(fbU.res, width, height);
        gl.uniform2f(fbU.a, ax, ay);
        gl.uniform2f(fbU.b, bx, by);
        gl.uniform1f(fbU.force, force * 0.32);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.useProgram(dispProgram);
        gl.bindTexture(gl.TEXTURE_2D, textures[write]);
        gl.uniform1i(dU.fb, 0);
        gl.uniform2f(dU.res, width, height);
        gl.uniform1f(dU.time, seconds);
        gl.uniform3f(dU.color, color[0], color[1], color[2]);
        gl.uniform1f(dU.alpha, alpha);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        read = write;
        ax = bx;
        ay = by;
        force = 0;
      };

      resize();
      readTheme();
      canvas.style.opacity = "1";

      let raf = 0;
      let resizeTimer = 0;
      let last = 0;
      const frameMs = 1000 / 30;

      const loop = (now: number) => {
        raf = requestAnimationFrame(loop);
        if (document.hidden || now - last < frameMs) return;
        last = now;
        draw(now / 1000);
      };

      const themeObserver = new MutationObserver(() => {
        readTheme();
        if (reduceMotion) draw(14);
      });
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      const onResize = () => {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          resize();
          if (reduceMotion) draw(14);
        }, 150);
      };
      window.addEventListener("resize", onResize);

      const onLost = (event: Event) => {
        event.preventDefault();
        cancelAnimationFrame(raf);
        canvas.style.opacity = "0";
      };
      canvas.addEventListener("webglcontextlost", onLost);

      if (reduceMotion) {
        draw(14);
      } else {
        window.addEventListener("pointermove", onPointer, { passive: true });
        window.addEventListener("pointerdown", onPointer, { passive: true });
        raf = requestAnimationFrame(loop);
      }

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.clearTimeout(resizeTimer);
        themeObserver.disconnect();
        window.removeEventListener("resize", onResize);
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("pointerdown", onPointer);
        canvas.removeEventListener("webglcontextlost", onLost);
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    };

    const hasIdle = "requestIdleCallback" in window;
    const idle = hasIdle
      ? window.requestIdleCallback(start, { timeout: 1500 })
      : window.setTimeout(start, 300);

    return () => {
      if (hasIdle) {
        window.cancelIdleCallback(idle);
      } else {
        window.clearTimeout(idle);
      }
      cleanup();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-0 transition-opacity duration-1000 [image-rendering:pixelated]"
    />
  );
}
