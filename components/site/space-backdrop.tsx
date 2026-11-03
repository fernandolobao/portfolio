"use client";

import { useEffect, useRef } from "react";

import { hasGpu } from "@/lib/has-gpu";

/**
 * Decorative "deep space" background, built to be cheap and faint:
 * - two star fields (tiny far stars, a few larger near ones) drawn once into
 *   canvases, plus soft dust clouds. They are static; with a mouse they shift
 *   slightly at different depths (parallax).
 * - a handful of stars that twinkle, and a rare meteor.
 * - with a mouse, nearby stars link up around the cursor (constellation /
 *   game-navigation style); the overlay canvas is only created on first move.
 * No continuous animation of large layers (that is expensive without a GPU).
 * Hidden from assistive tech; twinkle and meteors stop under
 * `prefers-reduced-motion`.
 */

const MARGIN = 60; // px around the viewport so parallax never shows an edge
const PARALLAX = { dust: [-34, -26], far: [7, 5], near: [18, 13] } as const;

// constellation (stars linked around the cursor)
const REACH = 210; // px: stars within this distance of the cursor take part
const LINK = 150; // px: max distance between two linked stars
const IDLE_MS = 2200; // fade out after the pointer stops this long

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

interface Star {
  x: number;
  y: number;
}

function drawStars(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  dark: boolean,
  { area, radius, alpha, seed }: FieldOptions
): Star[] {
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const stars: Star[] = [];
  const ctx = canvas.getContext("2d");
  if (!ctx) return stars;
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
    stars.push({ x, y });
  }
  return stars;
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

export function SpaceBackdrop() {
  const root = useRef<HTMLDivElement>(null);
  const dust = useRef<HTMLDivElement>(null);
  const far = useRef<HTMLDivElement>(null);
  const near = useRef<HTMLDivElement>(null);
  const farCanvas = useRef<HTMLCanvasElement>(null);
  const nearCanvas = useRef<HTMLCanvasElement>(null);
  const netCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fc = farCanvas.current;
    const nc = nearCanvas.current;
    if (!fc || !nc) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const starsRef: { far: Star[]; near: Star[] } = { far: [], near: [] };

    const paint = () => {
      const dark = document.documentElement.classList.contains("dark");
      const w = window.innerWidth + MARGIN * 2;
      const h = window.innerHeight + MARGIN * 2;
      starsRef.far = drawStars(fc, w, h, dark, { area: 8500, radius: [0.45, 0.9], alpha: [0.16, 0.46], seed: 11 });
      starsRef.near = drawStars(nc, w, h, dark, { area: 70000, radius: [0.9, 1.5], alpha: [0.26, 0.6], seed: 29 });
      fc.dataset.ready = "true";
      nc.dataset.ready = "true";
    };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        paint();
        if (netCtx) sizeNet();
      }, 200);
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
      const move = (el: HTMLDivElement | null, f: readonly [number, number]) => {
        if (el) el.style.transform = `translate3d(${cx * f[0]}px, ${cy * f[1]}px, 0)`;
      };
      move(dust.current, PARALLAX.dust);
      move(far.current, PARALLAX.far);
      move(near.current, PARALLAX.near);
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

    // constellation overlay: stars near the cursor link up like a game nav UI
    let netCtx: CanvasRenderingContext2D | null = null;
    let netFrame = 0;
    let px = 0, py = 0, mx = 0, my = 0, intensity = 0, lastMove = 0, dpr = 1;

    const sizeNet = () => {
      const c = netCanvas.current;
      if (!c) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = Math.round(window.innerWidth * dpr);
      c.height = Math.round(window.innerHeight * dpr);
      netCtx = c.getContext("2d");
      netCtx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    interface Node { x: number; y: number; d: number }

    const drawNet = (now: number) => {
      const c = netCanvas.current;
      if (!c || !netCtx) return;
      const ctx = netCtx;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (intensity < 0.01) return;

      const dark = document.documentElement.classList.contains("dark");
      const rgb = dark ? "196, 214, 255" : "52, 60, 96";
      const k = intensity * (dark ? 1 : 0.9);

      // gather stars (at their parallax-shifted screen position) near the cursor
      const nodes: Node[] = [];
      const collect = (list: Star[], f: readonly [number, number]) => {
        const ox = cx * f[0] - MARGIN;
        const oy = cy * f[1] - MARGIN;
        for (const star of list) {
          const x = star.x + ox;
          const y = star.y + oy;
          const d = Math.hypot(x - mx, y - my);
          if (d < REACH) nodes.push({ x, y, d });
        }
      };
      collect(starsRef.far, PARALLAX.far);
      collect(starsRef.near, PARALLAX.near);

      // each star links to its two closest neighbours
      ctx.lineWidth = 0.8;
      const seen = new Set<string>();
      for (let i = 0; i < nodes.length; i++) {
        const near: { j: number; dist: number }[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < LINK) near.push({ j, dist });
        }
        near.sort((a, b) => a.dist - b.dist);
        for (const { j } of near.slice(0, 2)) {
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (seen.has(key)) continue;
          seen.add(key);
          const f = 1 - (nodes[i].d + nodes[j].d) / 2 / REACH;
          ctx.strokeStyle = `rgba(${rgb}, ${(0.3 * k * Math.pow(Math.max(f, 0), 1.2)).toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }

      // node rings
      let nearest: Node | null = null;
      for (const n of nodes) {
        if (!nearest || n.d < nearest.d) nearest = n;
        const f = 1 - n.d / REACH;
        ctx.strokeStyle = `rgba(${rgb}, ${(0.32 * k * f).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3.2, 0, Math.PI * 2);
        ctx.stroke();
      }

      // target-lock brackets on the closest star + guide line to the cursor
      if (nearest && nearest.d < 80) {
        const a = 0.5 * k * (1 - nearest.d / 80);
        ctx.strokeStyle = `rgba(${rgb}, ${a.toFixed(3)})`;
        const r = 9;
        const t = 4;
        ctx.beginPath();
        for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
          const x = nearest.x + sx * r;
          const y = nearest.y + sy * r;
          ctx.moveTo(x, y - sy * t);
          ctx.lineTo(x, y);
          ctx.lineTo(x - sx * t, y);
        }
        ctx.stroke();
        ctx.setLineDash([2, 4]);
        ctx.strokeStyle = `rgba(${rgb}, ${(a * 0.6).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(mx, my);
        ctx.lineTo(nearest.x, nearest.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // cursor reticle: thin ring, ticks and a faint dashed range circle
      ctx.strokeStyle = `rgba(${rgb}, ${(0.22 * k).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(mx, my, 11, 0, Math.PI * 2);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        ctx.moveTo(mx + dx * 15, my + dy * 15);
        ctx.lineTo(mx + dx * 20, my + dy * 20);
      }
      ctx.stroke();
      ctx.setLineDash([3, 7]);
      ctx.strokeStyle = `rgba(${rgb}, ${(0.07 * k).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(mx, my, REACH, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      void now;
    };

    const netTick = (now: number) => {
      const active = now - lastMove < IDLE_MS;
      mx += (px - mx) * 0.22;
      my += (py - my) * 0.22;
      intensity += ((active ? 1 : 0) - intensity) * (active ? 0.1 : 0.05);
      drawNet(now);
      netFrame = active || intensity > 0.01 ? requestAnimationFrame(netTick) : 0;
      if (!netFrame && netCtx) {
        netCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      tx = (event.clientX / window.innerWidth - 0.5) * 2;
      ty = (event.clientY / window.innerHeight - 0.5) * 2;
      if (!frame) frame = requestAnimationFrame(tick);

      if (!netCtx) {
        sizeNet();
        mx = event.clientX;
        my = event.clientY;
      }
      px = event.clientX;
      py = event.clientY;
      lastMove = performance.now();
      if (!netFrame) netFrame = requestAnimationFrame(netTick);
    };
    const onLeave = () => {
      lastMove = 0;
    };
    if (!reduceMotion) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
    }

    const start = paint;

    // Twinkle and meteors are enabled on the first interaction, and only when
    // the browser has GPU acceleration (probing WebGL costs a few ms, so it is
    // kept off the initial load).
    const enableMotion = () => {
      window.removeEventListener("pointermove", enableMotion);
      window.removeEventListener("pointerdown", enableMotion);
      window.removeEventListener("scroll", enableMotion);
      window.removeEventListener("keydown", enableMotion);
      if (hasGpu()) document.documentElement.dataset.motion = "on";
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
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (netFrame) cancelAnimationFrame(netFrame);
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

      <canvas ref={netCanvas} className="absolute inset-0 h-full w-full" />

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
