"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative "deep space" background, built to be cheap and faint:
 * - two star fields (tiny far stars, a few larger near ones) drawn once into
 *   canvases, plus soft dust clouds. They are static; with a mouse they shift
 *   slightly at different depths (parallax).
 * - a handful of stars that twinkle, and a rare meteor.
 * No continuous animation of large layers (that is expensive without a GPU).
 * Hidden from assistive tech; twinkle and meteors stop under
 * `prefers-reduced-motion`.
 */

const MARGIN = 60; // px around the viewport so parallax never shows an edge

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

interface FieldOptions {
  /** one star per this many px² */
  area: number;
  radius: [number, number];
  alpha: [number, number];
  seed: number;
}

function drawStars(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  dark: boolean,
  { area, radius, alpha, seed }: FieldOptions
) {
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);

  const random = rng(seed);
  const count = Math.round((width * height) / area);
  // white / pale blue / pale warm in dark mode, slate in light mode
  const tints = dark
    ? [
        [236, 240, 255],
        [200, 218, 255],
        [255, 238, 214],
      ]
    : [
        [40, 44, 64],
        [52, 60, 96],
        [70, 56, 48],
      ];

  for (let i = 0; i < count; i++) {
    const x = random() * width;
    const y = random() * height;
    const r = radius[0] + random() * (radius[1] - radius[0]);
    const a = alpha[0] + random() * (alpha[1] - alpha[0]);
    const [cr, cg, cb] = tints[Math.floor(random() * tints.length)];
    ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${a.toFixed(3)})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
}

/** Twinkling stars: two groups that pulse out of phase (one element each). */
function twinkleShadows(seed: number, count: number) {
  const random = rng(seed);
  return Array.from({ length: count }, () => {
    const x = (random() * 100).toFixed(1);
    const y = (random() * 100).toFixed(1);
    return `${x}vw ${y}vh 0 0 hsl(var(--foreground))`;
  }).join(",");
}

const TWINKLE_A = twinkleShadows(97, 9);
const TWINKLE_B = twinkleShadows(131, 9);

/** WebGL as a proxy for "has a GPU": software renderers make animation costly. */
function hasGpu(): boolean {
  try {
    const probe = document.createElement("canvas");
    const gl = probe.getContext("webgl") as WebGLRenderingContext | null;
    if (!gl) return false;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !/swiftshader|llvmpipe|software|basic render/i.test(renderer);
  } catch {
    return false;
  }
}

export function SpaceBackdrop() {
  const root = useRef<HTMLDivElement>(null);
  const dust = useRef<HTMLDivElement>(null);
  const far = useRef<HTMLDivElement>(null);
  const near = useRef<HTMLDivElement>(null);
  const farCanvas = useRef<HTMLCanvasElement>(null);
  const nearCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fc = farCanvas.current;
    const nc = nearCanvas.current;
    if (!fc || !nc) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const paint = () => {
      const dark = document.documentElement.classList.contains("dark");
      const w = window.innerWidth + MARGIN * 2;
      const h = window.innerHeight + MARGIN * 2;
      drawStars(fc, w, h, dark, { area: 8500, radius: [0.45, 0.9], alpha: [0.22, 0.6], seed: 11 });
      drawStars(nc, w, h, dark, { area: 70000, radius: [0.9, 1.5], alpha: [0.35, 0.75], seed: 29 });
      fc.dataset.ready = "true";
      nc.dataset.ready = "true";
    };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(paint, 200);
    };
    const themeObserver = new MutationObserver(paint);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    window.addEventListener("resize", onResize);

    // pointer parallax (mouse/pen only)
    let tx = 0, ty = 0, cx = 0, cy = 0, frame = 0;
    const apply = () => {
      const move = (el: HTMLDivElement | null, fx: number, fy: number) => {
        if (el) el.style.transform = `translate3d(${cx * fx}px, ${cy * fy}px, 0)`;
      };
      move(dust.current, -34, -26);
      move(far.current, 7, 5);
      move(near.current, 18, 13);
    };
    const tick = () => {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      apply();
      frame =
        Math.abs(tx - cx) < 0.002 && Math.abs(ty - cy) < 0.002
          ? 0
          : requestAnimationFrame(tick);
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      tx = (event.clientX / window.innerWidth - 0.5) * 2;
      ty = (event.clientY / window.innerHeight - 0.5) * 2;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    if (!reduceMotion) window.addEventListener("pointermove", onMove, { passive: true });

    const start = paint;

    // Twinkle and meteors are enabled on the first interaction, and only when
    // the browser has GPU acceleration (probing WebGL costs a few ms, so it is
    // kept off the initial load).
    const enableMotion = () => {
      window.removeEventListener("pointermove", enableMotion);
      window.removeEventListener("pointerdown", enableMotion);
      window.removeEventListener("scroll", enableMotion);
      window.removeEventListener("keydown", enableMotion);
      if (hasGpu() && root.current) root.current.dataset.motion = "on";
    };
    if (!reduceMotion) {
      window.addEventListener("pointermove", enableMotion, { passive: true });
      window.addEventListener("pointerdown", enableMotion, { passive: true });
      window.addEventListener("scroll", enableMotion, { passive: true });
      window.addEventListener("keydown", enableMotion);
    }

    const hasIdle = "requestIdleCallback" in window;
    const idle = hasIdle
      ? window.requestIdleCallback(start, { timeout: 1500 })
      : window.setTimeout(start, 300);

    return () => {
      if (hasIdle) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      window.clearTimeout(resizeTimer);
      themeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointermove", enableMotion);
      window.removeEventListener("pointerdown", enableMotion);
      window.removeEventListener("scroll", enableMotion);
      window.removeEventListener("keydown", enableMotion);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div ref={dust} className="space-parallax">
        <div
          className="space-dust"
          style={
            {
              left: "-18vmax",
              top: "-22vmax",
              width: "70vmax",
              height: "70vmax",
              "--c": "var(--space-a)",
            } as React.CSSProperties
          }
        />
        <div
          className="space-dust"
          style={
            {
              right: "-24vmax",
              bottom: "-26vmax",
              width: "78vmax",
              height: "78vmax",
              "--c": "var(--space-b)",
            } as React.CSSProperties
          }
        />
      </div>

      <div ref={far} className="space-parallax">
        <canvas ref={farCanvas} className="space-canvas" />
      </div>
      <div ref={near} className="space-parallax">
        <canvas ref={nearCanvas} className="space-canvas" />
        <span className="space-twinkle space-twinkle-a" style={{ boxShadow: TWINKLE_A }} />
        <span className="space-twinkle space-twinkle-b" style={{ boxShadow: TWINKLE_B }} />
      </div>

      <span
        className="space-meteor"
        style={{ left: "76%", top: "12%", "--dur": "37s", "--delay": "-4s" } as React.CSSProperties}
      />
      <span
        className="space-meteor"
        style={{ left: "46%", top: "5%", "--dur": "53s", "--delay": "-29s" } as React.CSSProperties}
      />
    </div>
  );
}
