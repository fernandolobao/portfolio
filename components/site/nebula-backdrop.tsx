"use client";

import { useEffect, useRef } from "react";

/** Deterministic star field (same on server and client, so no hydration diff). */
function buildStars(count: number) {
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  return Array.from({ length: count }, () => {
    const x = (rand() * 100).toFixed(2);
    const y = (rand() * 100).toFixed(2);
    const alpha = (0.2 + rand() * 0.45).toFixed(2);
    return `${x}vw ${y}vh 0 0 hsl(var(--foreground) / ${alpha})`;
  }).join(",");
}

const STARS = buildStars(70);

/**
 * Decorative nebula: soft, slowly drifting clouds of color. On devices with a
 * mouse they shift in parallax with the pointer and a glow follows the
 * cursor. Touch devices and `prefers-reduced-motion` get the calm version.
 * No text, hidden from assistive tech.
 */
export function NebulaBackdrop() {
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  const c = useRef<HTMLDivElement>(null);
  const stars = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let glowX = pointerX;
    let glowY = pointerY;
    let frame = 0;

    const apply = () => {
      const move = (el: HTMLDivElement | null, fx: number, fy: number) => {
        if (el) {
          el.style.transform = `translate3d(${currentX * fx}px, ${currentY * fy}px, 0)`;
        }
      };
      move(a.current, -60, -50);
      move(b.current, 45, 35);
      move(c.current, -30, 40);
      move(stars.current, 14, 14);
      if (glow.current) {
        glow.current.style.transform = `translate3d(${glowX - 230}px, ${glowY - 230}px, 0)`;
      }
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      glowX += (pointerX - glowX) * 0.14;
      glowY += (pointerY - glowY) * 0.14;
      apply();
      const settled =
        Math.abs(targetX - currentX) < 0.002 &&
        Math.abs(targetY - currentY) < 0.002 &&
        Math.abs(pointerX - glowX) < 0.5 &&
        Math.abs(pointerY - glowY) < 0.5;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
      if (glow.current) glow.current.style.opacity = "1";
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      if (glow.current) glow.current.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        ref={a}
        className="nebula-layer"
        style={{ left: "-22vmax", top: "-26vmax", width: "82vmax", height: "82vmax" }}
      >
        <div className="nebula-blob" style={{ "--c": "var(--neb-a)", "--dur": "64s" } as React.CSSProperties} />
      </div>
      <div
        ref={b}
        className="nebula-layer"
        style={{ right: "-26vmax", top: "8vh", width: "74vmax", height: "74vmax" }}
      >
        <div className="nebula-blob" style={{ "--c": "var(--neb-b)", "--dur": "52s" } as React.CSSProperties} />
      </div>
      <div
        ref={c}
        className="nebula-layer"
        style={{ left: "18vw", bottom: "-34vmax", width: "84vmax", height: "84vmax" }}
      >
        <div className="nebula-blob" style={{ "--c": "var(--neb-c)", "--dur": "72s" } as React.CSSProperties} />
      </div>
      <div ref={stars} className="nebula-layer" style={{ left: 0, top: 0 }}>
        <div className="nebula-stars" style={{ boxShadow: STARS }} />
      </div>
      <div ref={glow} className="nebula-glow" />
    </div>
  );
}
