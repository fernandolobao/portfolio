import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { educationUnsorted } from "@/config/education";
import { pagesConfig } from "@/config/pages";
import EducationCard from "@/components/education/education-card";

export const metadata: Metadata = {
  title: pagesConfig.education.metadata.title,
  description: pagesConfig.education.metadata.description,
};

export default function ContributonsPage() {
  return (
    <PageContainer
      title={pagesConfig.education.title}
      description={pagesConfig.education.description}
    >
      <EducationCard
        educations={educationUnsorted}
      />
    </PageContainer>
  );
}
