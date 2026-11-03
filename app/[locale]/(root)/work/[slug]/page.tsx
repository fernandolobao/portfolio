import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StaticSvg } from "@/components/illustrations/static-svg";
import { HeroBackdrop } from "@/components/site/hero-backdrop";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { formatYears } from "@/lib/format";
import { isLocale, localizePath, locales, ogLocales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildAlternates } from "@/lib/i18n/seo";

export const dynamicParams = false;

const caseStudies = Projects.filter((project) => project.caseStudy);

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    caseStudies.map((project) => ({ locale, slug: project.id }))
  );
}

function resolve(localeParam: string, slug: string) {
  if (!isLocale(localeParam)) return null;
  const project = caseStudies.find((p) => p.id === slug);
  const dict = getDictionary(localeParam);
  const text = dict.projects[slug];
  if (!project || !text?.detail) return null;
  return { locale: localeParam, project, dict, text, detail: text.detail };
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const found = resolve(params.locale, params.slug);
  if (!found) return {};
  const { locale, project, detail } = found;
  const path = `/work/${project.id}`;
  const image = {
    url: `/og/work-${project.id}-${locale}.jpg`,
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: detail.ogAlt,
  };
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    alternates: buildAlternates(locale, path),
    openGraph: {
      type: "article",
      locale: ogLocales[locale],
      url: localizePath(locale, path),
      title: detail.metaTitle,
      description: detail.metaDescription,
      images: [image],
      authors: [siteConfig.authorName],
    },
    twitter: {
      card: "summary_large_image",
      title: detail.metaTitle,
      description: detail.metaDescription,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const found = resolve(params.locale, params.slug);
  if (!found) notFound();
  const { locale, project, dict, text, detail } = found;
  const labels = dict.work.detail;
  const home = localizePath(locale);
  const pageUrl = `${siteConfig.url}${localizePath(locale, `/work/${project.id}`)}`;

  const links = [
    project.repoLink && { label: labels.repo, href: project.repoLink },
    project.downloadLink && { label: labels.download, href: project.downloadLink },
    project.siteLink && { label: labels.site, href: project.siteLink },
  ].filter(Boolean) as { label: string; href: string }[];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#app`,
        name: text.name,
        description: detail.metaDescription,
        url: pageUrl,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "macOS 13+",
        license: "https://opensource.org/licenses/MIT",
        isAccessibleForFree: true,
        inLanguage: locale,
        image: `${siteConfig.url}/og/work-${project.id}-${locale}.jpg`,
        author: { "@id": `${siteConfig.url}/#person` },
        ...(project.downloadLink ? { downloadUrl: project.downloadLink } : {}),
        ...(project.repoLink ? { sameAs: [project.repoLink] } : {}),
        offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.meta.siteName, item: `${siteConfig.url}${home}` },
          { "@type": "ListItem", position: 2, name: dict.work.title, item: `${siteConfig.url}${home}#work` },
          { "@type": "ListItem", position: 3, name: text.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* header over the same render used in the home hero (poster first, video on interaction with a GPU) */}
      <section
        aria-labelledby="case-title"
        className="relative overflow-hidden pb-14 pt-0 md:pb-20 xl:pt-16"
      >
        <HeroBackdrop focusY="36%" />
        <div className="container relative z-10 pt-8 xl:pt-0">
          <div className="max-w-2xl">
            <a
              href={`${home}#work`}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {labels.back}
            </a>

            <header className="mt-8">
              <p className="section-eyebrow">{labels.eyebrow}</p>
              <h1
                id="case-title"
                className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
              >
                {text.name}
              </h1>
              <p className="mt-3 text-muted-foreground">
                {text.role} ·{" "}
                {formatYears(project.startDate.getUTCFullYear(), project.endDate.getUTCFullYear())}
              </p>
              <p className="mt-8 max-w-xl text-xl text-foreground/90">{detail.lead}</p>
            </header>
          </div>
        </div>
      </section>

      <div className="container pb-24">
        <div className="max-w-4xl">
      <div
        className="relative mt-12 w-full overflow-hidden rounded-lg border border-border bg-muted"
        style={{ paddingTop: "62.5%" }}
      >
        <StaticSvg name={project.illustration} className="absolute inset-0 overflow-hidden" />
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-border py-8 md:grid-cols-5">
        {detail.facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {fact.label}
            </dt>
            <dd className="mt-2 text-sm font-medium">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6">
        <h2 className="sr-only">{labels.stackTitle}</h2>
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 space-y-14">
        {detail.sections.map((section, index) => (
          <section key={section.title} aria-labelledby={`sec-${index}`}>
            <h2
              id={`sec-${index}`}
              className="font-heading text-2xl font-semibold tracking-tight md:text-3xl"
            >
              {section.title}
            </h2>
            <div className="mt-5 max-w-3xl space-y-5 text-lg leading-relaxed text-foreground/90">
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className="list-disc space-y-3 pl-6 marker:text-brand">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            {section.figure === "architecture" ? (
              <figure className="mt-8">
                <div
                  className="relative w-full overflow-hidden rounded-lg border border-border bg-muted"
                  style={{ paddingTop: "62.5%" }}
                >
                  <StaticSvg
                    name="zeroserver-architecture"
                    className="absolute inset-0 overflow-hidden"
                  />
                </div>
                {section.caption ? (
                  <figcaption className="mt-3 text-sm text-muted-foreground">
                    {section.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
          </section>
        ))}
      </div>

      {links.length > 0 ? (
        <section className="mt-16 border-t border-border pt-10" aria-labelledby="links-title">
          <h2 id="links-title" className="font-heading text-2xl font-semibold tracking-tight">
            {labels.linksTitle}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-foreground/40 px-5 py-2.5 font-medium transition-colors hover:bg-muted"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
        </div>
      </div>
    </article>
  );
}
