import { MetadataRoute } from "next";

import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { defaultLocale, locales } from "@/lib/i18n/config";

const paths = ["", ...Projects.filter((p) => p.caseStudy).map((p) => `/work/${p.id}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((l) => [l, `${siteConfig.url}/${l}${path}`])
          ),
          "x-default": `${siteConfig.url}/${defaultLocale}${path}`,
        },
      },
    }))
  );
}
