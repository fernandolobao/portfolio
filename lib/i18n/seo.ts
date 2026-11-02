import { defaultLocale, locales, type Locale } from "./config";

/**
 * Canonical + hreflang alternates for a page. Paths are relative to
 * `metadataBase`, so Next resolves them to absolute URLs.
 */
export function buildAlternates(locale: Locale, path = "") {
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, `/${l}${path}`])
  );
  languages["x-default"] = `/${defaultLocale}${path}`;
  return { canonical: `/${locale}${path}`, languages };
}
