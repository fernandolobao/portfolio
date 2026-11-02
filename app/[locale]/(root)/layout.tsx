import { notFound } from "next/navigation";

import { LanguageSwitcher } from "@/components/common/language-switcher";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { mainNavRoutes } from "@/config/routes";
import { isLocale, localizePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

interface MarketingLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function MarketingLayout({
  children,
  params,
}: MarketingLayoutProps) {
  if (!isLocale(params.locale)) notFound();
  const { locale } = params;
  const dict = getDictionary(locale);

  const items = mainNavRoutes.map(({ key, path }) => ({
    title: dict.nav[key],
    href: localizePath(locale, path),
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:shadow"
      >
        {dict.ui.skipToContent}
      </a>
      <header className="container z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav
            items={items}
            homeHref={localizePath(locale)}
            menuLabel={dict.ui.menu}
          />
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} label={dict.ui.language} />
            <ModeToggle />
          </div>
        </div>
      </header>
      <main id="main" className="container flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
