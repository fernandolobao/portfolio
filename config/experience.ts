/**
 * Language-neutral experience data. Translated copy (position, location,
 * summary, bullets) lives in `lib/i18n/dictionaries`, keyed by `id`.
 * `featured` roles get a full entry; the others are listed compactly.
 */
export interface ExperienceInterface {
  id: string;
  company: string;
  companyUrl?: string;
  startDate: Date;
  endDate: Date | "Present";
  featured: boolean;
  skills: string[];
}

export const experiences: ExperienceInterface[] = [
  {
    id: "solvd",
    company: "Solvd",
    startDate: new Date("2026-04-01"),
    endDate: "Present",
    featured: true,
    skills: ["TypeScript", "React", "Next.js", "Node.js", "GraphQL", "GrowthBook", "Playwright", "Cypress"],
  },
  {
    id: "aidron",
    company: "Aidron",
    companyUrl: "https://aidron.ai",
    startDate: new Date("2022-08-01"),
    endDate: "Present",
    featured: true,
    skills: ["Storybook", "React", "TypeScript", "Next.js", "Figma"],
  },
  {
    id: "fsl",
    company: "FullStack Labs",
    companyUrl: "https://www.fullstack.com",
    startDate: new Date("2021-08-01"),
    endDate: new Date("2026-04-01"),
    featured: true,
    skills: ["TypeScript", "React", "Nest.js", "MongoDB", "AWS", "Docker", "Kubernetes"],
  },
  {
    id: "renner-ds",
    company: "Lojas Renner",
    companyUrl: "https://www.lojasrenner.com.br/",
    startDate: new Date("2021-03-01"),
    endDate: new Date("2021-08-01"),
    featured: true,
    skills: ["Storybook", "React", "TypeScript", "Azure", "Figma"],
  },
  {
    id: "renner-se",
    company: "Lojas Renner",
    companyUrl: "https://www.lojasrenner.com.br/",
    startDate: new Date("2019-03-01"),
    endDate: new Date("2021-03-01"),
    featured: true,
    skills: ["React", "Node.js", "Python", "Azure", "Cypress"],
  },
  {
    id: "cwi",
    company: "CWI Software",
    companyUrl: "https://cwi.com.br/",
    startDate: new Date("2018-09-01"),
    endDate: new Date("2019-03-01"),
    featured: false,
    skills: [],
  },
  {
    id: "dbc",
    company: "DBC Company",
    companyUrl: "https://www.dbccompany.com.br/",
    startDate: new Date("2018-03-01"),
    endDate: new Date("2018-09-01"),
    featured: false,
    skills: [],
  },
  {
    id: "hogarth",
    company: "Hogarth Worldwide",
    companyUrl: "https://www.hogarthww.com/",
    startDate: new Date("2016-02-01"),
    endDate: new Date("2018-03-01"),
    featured: false,
    skills: [],
  },
  {
    id: "fight-analytics",
    company: "Fight Analytics",
    companyUrl: "https://www.fightanalytics.cc/",
    startDate: new Date("2014-08-01"),
    endDate: new Date("2016-01-01"),
    featured: false,
    skills: [],
  },
  {
    id: "zerohora",
    company: "Zero Hora",
    companyUrl: "https://gauchazh.clicrbs.com.br/",
    startDate: new Date("2010-04-01"),
    endDate: new Date("2015-01-01"),
    featured: false,
    skills: [],
  },
];
