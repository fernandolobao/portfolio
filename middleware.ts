import { NextRequest, NextResponse } from "next/server";

import {
  isLocale,
  LOCALE_COOKIE,
  locales,
  matchLocale,
} from "@/lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/");
  const first = segments[1] ?? "";

  // Already prefixed with a valid locale.
  if (isLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();

  // /pt-br -> /pt-BR (canonical casing).
  const caseInsensitive = locales.find(
    (locale) => locale.toLowerCase() === first.toLowerCase()
  );
  if (caseInsensitive) {
    segments[1] = caseInsensitive;
    url.pathname = segments.join("/");
    return NextResponse.redirect(url, 308);
  }

  // No locale: cookie first, then Accept-Language.
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookie)
    ? cookie
    : matchLocale(request.headers.get("accept-language"));

  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(url, 307);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // Skip API routes, Next internals and any file with an extension
  // (robots.txt, sitemap.xml, images, fonts, manifest...).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
