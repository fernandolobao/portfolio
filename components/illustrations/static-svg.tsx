import type { IllustrationId } from "@/config/constants";
import { illustrations } from "./generated";

/**
 * Pre-rendered, theme-aware SVG (colors come from CSS variables).
 * Injected as raw HTML so React does not hydrate it.
 * Source: scripts/illustrations/*.tsx
 */
export function StaticSvg({
  name,
  className,
}: {
  name:
    | "hero"
    | IllustrationId
    | "zeroserver-architecture"
    | "ragnarok-pipeline";
  className?: string;
}) {
  return (
    <div
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: illustrations[name] }}
    />
  );
}
