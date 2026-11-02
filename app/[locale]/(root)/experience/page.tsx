import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/experience/timeline";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/seo";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : "en") as Locale;
  return {
  title: `${pagesConfig.experience.metadata.title} | Professional Experience Timeline`,
  description: `${pagesConfig.experience.metadata.description} Explore my professional journey and career milestones in software development.`,
  keywords: [
    "experience timeline",
    "professional experience",
    "software developer experience",
    "developer portfolio",
    "work experience",
  ],
  alternates: buildAlternates(locale, "/experience"),
  };
}

export default function ExperiencePage() {
  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <Timeline experiences={experiences} />
    </PageContainer>
  );
}
