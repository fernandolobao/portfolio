import { HeroMedia } from "@/components/site/hero-media";

/**
 * Full-width, hero-only backdrop. Wide screens (xl+): absolute behind the text. Below: a
 * banner above the text (no overlap, so legibility never depends on the art). The poster is a plain
 * <img> so it can be the LCP element and paint without JavaScript.
 */
export function HeroBackdrop({ focusY = "50%" }: { focusY?: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ "--hero-y": focusY } as React.CSSProperties}
      className="pointer-events-none relative h-[46svh] min-h-[300px] overflow-hidden xl:absolute xl:inset-0 xl:h-auto xl:min-h-0"
    >
      <div className="hero-media-fade absolute inset-0">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/hero/hole-poster-960.webp"
            type="image/webp"
          />
          <img
            src="/hero/hole-poster-1600.webp"
            alt=""
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
            className="hero-poster absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        <HeroMedia />
      </div>
    </div>
  );
}
