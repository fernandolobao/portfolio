"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LOCALE_COOKIE,
  localeLabels,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
}

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${locale}`;
  const rest = pathname.split("/").slice(2).join("/");
  const hrefFor = (target: Locale) => `/${target}${rest ? `/${rest}` : ""}`;

  return (
    <nav aria-label={label} className="flex items-center gap-1 text-sm">
      {locales.map((target) => {
        const active = target === locale;
        return (
          <Link
            key={target}
            href={hrefFor(target)}
            hrefLang={target}
            lang={target}
            aria-current={active ? "true" : undefined}
            onClick={() => {
              document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
            }}
            className={cn(
              "rounded-md px-2 py-1 font-medium transition-colors",
              active
                ? "bg-secondary text-foreground"
                : "text-foreground/60 hover:text-foreground"
            )}
          >
            {localeLabels[target].short}
            <span className="sr-only"> — {localeLabels[target].name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
