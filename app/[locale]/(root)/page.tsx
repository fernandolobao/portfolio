import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Education } from "@/components/site/education";
import { Experience } from "@/components/site/experience";
import { Hero } from "@/components/site/hero";
import { Skills } from "@/components/site/skills";
import { Work } from "@/components/site/work";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/config/socials";
import { isLocale, localizePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildAlternates } from "@/lib/i18n/seo";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  return {
    alternates: buildAlternates(params.locale),
  };
}

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const { locale } = params;
  const dict = getDictionary(locale);

  const personNode = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: "Fernando Camilotti Monteiro",
    alternateName: "Fernando Camilotti",
    url: `${siteConfig.url}${localizePath(locale)}`,
    image: `${siteConfig.url}/profile-img.jpeg`,
    jobTitle: dict.meta.jobTitle,
    description: dict.meta.description,
    email: SocialLinks.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Porto Alegre",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    worksFor: [
      { "@type": "Organization", name: "Solvd" },
      { "@type": "Organization", name: "Aidron", url: "https://aidron.ai" },
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidade Federal do Rio Grande do Sul" },
      { "@type": "CollegeOrUniversity", name: "Centro Universitário Ritter dos Reis (UniRitter)" },
    ],
    knowsLanguage: ["pt-BR", "en", "es", "it"],
    knowsAbout: ["Software engineering", "Design systems", "UX design", "React", "TypeScript", "Web accessibility", "Swift", "SwiftUI"],
    sameAs: [SocialLinks.linkedin, SocialLinks.github, SocialLinks.lattes],
  };

  const pageUrl = `${siteConfig.url}${localizePath(locale)}`;
  const personRef = { "@id": `${siteConfig.url}/#person` };

  // One graph: the site, this profile page (per language) and the person it is about.
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: dict.meta.siteName,
        inLanguage: ["pt-BR", "en", "es"],
        publisher: personRef,
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profilepage`,
        url: pageUrl,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage: locale,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: personRef,
        mainEntity: personRef,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/og/og-${locale}.jpg`,
          width: 1200,
          height: 630,
        },
      },
      personNode,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero dict={dict} />
      <Work dict={dict} locale={locale} />
      <About dict={dict} />
      <Skills dict={dict} />
      <Experience dict={dict} locale={locale} />
      <Education dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
