import Image from "next/image";

import strip1 from "@/assets/images/strip-1.webp";
import strip2 from "@/assets/images/strip-2.webp";
import strip3 from "@/assets/images/strip-3.webp";
import strip4 from "@/assets/images/strip-4.webp";

const tiles = [strip1, strip2, strip3, strip4];

/**
 * Decorative strip of stylized portraits (gradient-mapped to the site palette).
 * Each tile uses a padding-ratio box so its size never depends on percentage heights.
 */
export function PortraitStrip() {
  return (
    <ul
      aria-hidden="true"
      className="mt-16 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-4 md:gap-4"
    >
      {tiles.map((src, index) => (
        <li
          key={index}
          className="relative min-w-0 overflow-hidden rounded-lg border border-border bg-muted"
          style={{ paddingTop: "125%" }}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
