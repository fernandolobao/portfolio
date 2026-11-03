export interface Result {
  value: string;
  label: string;
}

export interface DetailSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  figure?: "architecture";
  caption?: string;
}

export interface ProjectDetail {
  metaTitle: string;
  metaDescription: string;
  ogAlt: string;
  lead: string;
  facts: { label: string; value: string }[];
  sections: DetailSection[];
}

export interface ProjectText {
  name: string;
  role: string;
  summary: string;
  results: Result[];
  highlights: string[];
  /** Present only for projects that have a case-study page. */
  detail?: ProjectDetail;
}

export interface ExperienceText {
  position: string;
  location?: string;
  summary?: string;
  bullets?: string[];
}

export interface EducationText {
  degree: string;
  detail?: string;
}

export interface Dictionary {
  meta: {
    siteName: string;
    title: string;
    description: string;
    jobTitle: string;
    ogAlt: string;
  };
  nav: {
    work: string;
    about: string;
    skills: string;
    experience: string;
    education: string;
    contact: string;
  };
  ui: {
    skipToContent: string;
    menu: string;
    language: string;
    toggleTheme: string;
    present: string;
    sectionLabel: string;
  };
  hero: {
    location: string;
    title: string;
    subtitle: string;
    current: string;
    ctaWork: string;
    ctaContact: string;
  };
  metrics: Result[];
  work: {
    title: string;
    intro: string;
    resultsLabel: string;
    repoLabel: string;
    detail: {
      eyebrow: string;
      back: string;
      readCase: string;
      stackTitle: string;
      linksTitle: string;
      repo: string;
      download: string;
      site: string;
    };
  };
  about: {
    title: string;
    paragraphs: string[];
    photoAlt: string;
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  skills: {
    title: string;
    intro: string;
    groups: Record<"frontend" | "native" | "backend" | "infra" | "design" | "process", string>;
  };
  experience: {
    title: string;
    intro: string;
    earlierTitle: string;
    items: Record<string, ExperienceText & { oneLiner?: string }>;
  };
  education: {
    title: string;
    items: Record<string, EducationText>;
    publicationsTitle: string;
    readPublication: string;
    kinds: { chapter: string; event: string; website: string };
    notes: Record<string, string>;
    certificationsTitle: string;
    certifications: string[];
    awardsTitle: string;
    awards: string[];
  };
  projects: Record<string, ProjectText>;
  contact: {
    title: string;
    text: string;
    emailCta: string;
    links: { linkedin: string; github: string; lattes: string };
  };
  footer: { rights: string; location: string };
}
