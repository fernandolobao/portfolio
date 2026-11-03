export const locales = ["pt-BR", "en", "es"] as const;
export type Locale = (typeof locales)[number];

/** Used for `x-default` hreflang and when the browser language matches nothing. */
export const defaultLocale: Locale = "pt-BR";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  "pt-BR": { short: "PT", name: "Português (Brasil)" },
  en: { short: "EN", name: "English" },
  es: { short: "ES", name: "Español" },
};

/** Open Graph uses underscore locales. */
export const ogLocales: Record<Locale, string> = {
  "pt-BR": "pt_BR",
  en: "en_US",
  es: "es_ES",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Prefix an internal path ("/projects", "/") with the locale. */
export function localizePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** Pick the best supported locale from an Accept-Language header. */
export function matchLocale(header: string | null | undefined): Locale {
  if (!header) return defaultLocale;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q.split("=")[1]) : 1 };
    })
    .filter((entry) => entry.tag && !Number.isNaN(entry.q) && entry.q > 0)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    if (tag.startsWith("pt")) return "pt-BR";
    if (tag.startsWith("es")) return "es";
    if (tag.startsWith("en")) return "en";
  }
  return defaultLocale;
}
