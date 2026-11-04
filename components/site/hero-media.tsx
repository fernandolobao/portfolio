"use client";

import { useEffect, useRef, useState } from "react";

import { hasGpu } from "@/lib/has-gpu";

const SRC = {
  desktop: { webm: "/hero/hole-1600.webm", mp4: "/hero/hole-1600.mp4" },
  mobile: { webm: "/hero/hole-960.webm", mp4: "/hero/hole-960.mp4" },
} as const;

/**
 * Cinematic hero backdrop: a pre-rendered loop (triangular black hole at the
 * end of a glass tunnel). A lightweight poster (frame 0) is the real image and
 * paints immediately; the video is attached ~1.5 s after the page loads (or earlier on the
 * first interaction) and fades in over the identical first frame. It is skipped for reduced motion, Save-Data,
 * hidden tabs and browsers without GPU acceleration. Decorative: hidden from assistive tech.
 */
export function HeroMedia() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = video.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (reduceMotion || connection?.saveData) return;

    let cancelled = false;
    const attach = () => {
      if (cancelled || !el) return;
      const set = window.matchMedia("(max-width: 767px)").matches ? SRC.mobile : SRC.desktop;
      const webm = document.createElement("source");
      webm.src = set.webm;
      webm.type = "video/webm; codecs=vp9";
      const mp4 = document.createElement("source");
      mp4.src = set.mp4;
      mp4.type = "video/mp4";
      el.append(webm, mp4);
      el.load();
      el.play().catch(() => {});
    };

    // Start shortly after the page has loaded (or earlier, on the first
    // interaction) so the probe and the download stay off the critical load.
    // Browsers without GPU acceleration (and lab tools) keep the still poster,
    // which is the video's first frame.
    const events = ["pointermove", "pointerdown", "scroll", "keydown", "touchstart"] as const;
    let timer = 0;
    const arm = () => {
      events.forEach((e) => window.removeEventListener(e, arm));
      window.clearTimeout(timer);
      if (cancelled || !hasGpu()) return;
      if (document.visibilityState === "hidden") {
        const onVisible = () => {
          if (document.visibilityState === "visible") {
            document.removeEventListener("visibilitychange", onVisible);
            attach();
          }
        };
        document.addEventListener("visibilitychange", onVisible);
        return;
      }
      attach();
    };
    events.forEach((e) => window.addEventListener(e, arm, { passive: true }));

    const AUTOPLAY_DELAY_MS = 1500;
    const schedule = () => {
      timer = window.setTimeout(arm, AUTOPLAY_DELAY_MS);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener("load", schedule);
      events.forEach((e) => window.removeEventListener(e, arm));
    };
  }, []);

  return (
    <video
      ref={video}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      onPlaying={() => setPlaying(true)}
      className={`hero-video absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
        playing ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
