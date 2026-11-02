import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="w-md max-w-xl mx-auto gap-8">
        <div className="flex-1 flex justify-center">
          <ContactForm />
        </div>
        {/* <div className="flex-1 flex justify-center ">
          <GithubRedirectCard />
        </div> */}
      </div>
    </PageContainer>
  );
}
