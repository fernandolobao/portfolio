import { Menu } from "lucide-react";
import Link from "next/link";

import { LanguageSwitcher } from "@/components/common/language-switcher";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { localizePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

const links = ["work", "about", "skills", "experience", "education", "contact"] as const;

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link
          href={localizePath(locale)}
          aria-label={dict.meta.siteName}
          className="font-heading text-lg font-semibold tracking-tight"
        >
          <span className="sm:hidden" aria-hidden="true">
            FC<span className="text-brand">.</span>
          </span>
          <span className="hidden sm:inline">
            {dict.meta.siteName}
            <span className="text-brand">.</span>
          </span>
        </Link>

        <nav
          aria-label={dict.ui.menu}
          className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex"
        >
          {links.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="transition-colors hover:text-foreground"
            >
              {dict.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} label={dict.ui.language} />
          <ThemeToggle label={dict.ui.toggleTheme} />
          <details className="group relative lg:hidden">
            <summary
              aria-label={dict.ui.menu}
              className="inline-flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-border hover:bg-muted [&::-webkit-details-marker]:hidden"
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
            </summary>
            <nav
              aria-label={dict.ui.menu}
              className="absolute right-0 top-12 w-56 rounded-lg border border-border bg-card p-2 shadow-lg"
            >
              {links.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {dict.nav[key]}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
