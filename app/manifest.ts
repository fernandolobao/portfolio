import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fernando Camilotti Portfolio",
    short_name: "Fernando's Portfolio",
    description:
      "I turn complex systems into simple, fast, and elegant interfaces. With experience spanning engineering, UX, and design, I build products where performance and usability work together seamlessly.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "ux/ui",
      "development",
      "nextjs",
      "react",
      "developer",
      "web development",
      "design system",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
