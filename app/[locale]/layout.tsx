import "../globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";

import { Analytics } from "@/components/common/analytics";
import { ThemeProvider } from "@/components/common/theme-provider";
import { siteConfig } from "@/config/site";
import {
  defaultLocale,
  isLocale,
  localizePath,
  locales,
  ogLocales,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { cn } from "@/lib/utils";

const fontSans = localFont({
  src: "../../assets/fonts/Inter-Latin-400-600.woff2",
  weight: "400 600",
  variable: "--font-sans",
  display: "swap",
});

const fontHeading = localFont({
  src: "../../assets/fonts/SpaceGrotesk-SemiBold-Latin.woff2",
  weight: "600",
  variable: "--font-heading",
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export const dynamicParams = false;

export const viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark light",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  const { locale } = params;
  const dict = getDictionary(locale);

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, localizePath(l)])
  );
  languages["x-default"] = localizePath(defaultLocale);

  // Static, pre-rendered share image per language (JPEG < 300 KB so WhatsApp keeps it).
  const shareImage = {
    url: `/og/og-${locale}.jpg`,
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: dict.meta.ogAlt,
  };

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.meta.title,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.description,
    authors: [{ name: siteConfig.authorName, url: siteConfig.url }],
    creator: siteConfig.authorName,
    openGraph: {
      type: "website",
      locale: ogLocales[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocales[l]),
      url: localizePath(locale),
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: dict.meta.siteName,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [{ url: shareImage.url, alt: shareImage.alt }],
    },
    applicationName: dict.meta.siteName,
    category: "technology",
    alternates: {
      canonical: localizePath(locale),
      languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  if (!isLocale(params.locale)) notFound();
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDP74RJL"
            height="0"
            width="0"
            style={{display: "none", visibility: "hidden"}}
          ></iframe>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} themes={["light", "dark"]}>
          {children}
          {process.env.VERCEL ? <Analytics /> : null}
        </ThemeProvider>
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
