import type { IllustrationId, ValidCategory } from "./constants";

/**
 * Language-neutral project data. Translated copy (name, role, summary,
 * highlights, results) lives in `lib/i18n/dictionaries`, keyed by `id`.
 */
export interface ProjectInterface {
  id: string;
  company: string;
  category: ValidCategory[];
  techStack: string[];
  startDate: Date;
  endDate: Date;
  websiteLink?: string;
  illustration: IllustrationId;
}

export const Projects: ProjectInterface[] = [
  {
    id: "ragnarok",
    company: "Lojas Renner",
    category: ["Design System", "UX", "UI", "DesignOps", "Atomic Design"],
    techStack: ["Storybook", "React", "TypeScript", "Node.js", "Sass"],
    startDate: new Date("2021-03-01"),
    endDate: new Date("2021-08-01"),
    illustration: "ragnarok",
  },
  {
    id: "datalab",
    company: "Lojas Renner",
    category: ["Full Stack", "UX", "DevOps"],
    techStack: [
      "React",
      "Node.js",
      "GraphQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "Azure",
    ],
    startDate: new Date("2021-03-01"),
    endDate: new Date("2021-08-01"),
    illustration: "datalab",
  },
  {
    id: "aidron-ds",
    company: "Aidron",
    category: ["Design System", "UX", "UI", "DesignOps", "Atomic Design"],
    techStack: ["Storybook", "React", "TypeScript", "Sass"],
    startDate: new Date("2022-08-01"),
    endDate: new Date("2023-12-01"),
    illustration: "aidron-ds",
  },
  {
    id: "aidron-spa",
    company: "Aidron",
    category: ["Web Dev", "Frontend"],
    techStack: ["Next.js", "React", "Node.js", "CSS 3", "HTML 5"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2023-07-01"),
    websiteLink: "https://aidron.ai",
    illustration: "aidron-spa",
  },
];
