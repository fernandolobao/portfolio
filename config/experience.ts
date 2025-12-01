import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "fsl",
    position: "Senior Software Engineer",
    company: "FullStack Labs",
    location: "Remote",
    startDate: new Date("2021-08-01"),
    endDate: "Present",
    description: [
      "Contributing with client's teams for building web applications using modern technologies.",
      "Created several applications used by nurses in vaccination and testing sites during Covid-19 pandemic.",
      "Co-created hub application using microfrontends architecture to centralize multiple internal tools.",
      "Developed and maintained internal Form tool with conditional fields logic for users checklist and reporting at construction sites."
    ],
    achievements: [
      "Created geolocation tool using Mapbox and Google Maps APIs for private security company to track wildfires and price plans based on risk zones.",
      "Stripe Integration for payment options in multiple applications for one-time payments.",
    ],
    skills: ["Typescript", "React", "MongoDB", "AWS", "CI/CD", "Docker", "Git", "Jest", "Jenkins", "Prisma", "Kubernetes", "Nest.js", "UX"],
    companyUrl: "https://www.fullstack.com",
    logo: "/experience/fullstack-logo.png",
  },
  {
    id: "lojasrenner-2",
    position: "Design System Lead",
    company: "Lojas Renner S.A.",
    location: "Porto Alegre, Brazil",
    startDate: new Date("2021-03-01"),
    endDate: new Date("2021-08-01"),
    description: [
      "Built design system to use across multiple teams in data-driven applications.",
      "Responsible for DesignOps and DevOps to handle work handoffs between designers and developers.",
      "Code Reviews, mentoring, improving team workflows and managing tasks using Agile methodologies.",
    ],
    achievements: [
      "Whole Design System built from scratch using Storybook and React, adopted by 2+ teams.",
      "Developed APIs and integrated Teams and Azure automations.",
      "Census data-minning with python for gelocation-based features.",
      "Key metrics from users with HotJar and Google Analytics.",
    ],
    skills: ["Storybook", "React", "Node.js", "Azure", "MongoDB", "Typescript", "Git", "Jest", "CI/CD", "Python", "UX", "Figma"],
    companyUrl: "https://www.lojasrenner.com.br/",
    logo: "/experience/lojasrenner-logo.png",
  },
  {
    id: "lojasrenner-1",
    position: "Software Engineer",
    company: "Lojas Renner S.A.",
    location: "Porto Alegre, Brazil",
    startDate: new Date("2019-03-01"),
    endDate: new Date("2021-03-01"),
    description: [
      "Team Lead for building web applications using React and Node.js.",
      "Responsible for DevOps and team management while aslo documenting whole development and deploy process across environments.",
      "Code Reviews, mentoring, improving team workflows and managing tasks using Agile methodologies.",
    ],
    achievements: [
      "Connection of multiple internal systems into one data-driven application used by 300+ employees daily.",
      "Made possible to use neural-network for forecasting sales based in historical data with Flask and Python.",
      "Weather data-minning with python for gelocation-based features.",
      "Full development and deployment pipeline built in azure with unit and e2e tests using Cypress.",
    ],
    skills: ["React", "Node.js", "Azure", "MongoDB", "Typescript", "Git", "Jest", "CI/CD", "Python", "UX", "Figma"],
    companyUrl: "https://www.lojasrenner.com.br/",
    logo: "/experience/lojasrenner-logo.png",
  },
  {
    id: "cwi",
    position: "System Analyst",
    company: "CWI Software",
    location: "Porto Alegre, Brazil",
    startDate: new Date("2018-09-01"),
    endDate: new Date("2019-03-01"),
    description: [
      "News outlet website with Drupal CMS and React frontend.",
      "Localized data visualization for users access and key metrics.",
      "Improved internal tools used by development team to speed up delivery process.",
    ],
    achievements: [
      "Drupal migration and integration between modules for easy data exchange between frontend and backend",
    ],
    skills: [
      "React",
      "GraphQL",
      "AWS",
      "HTML 5",
      "CSS 3",
      "Javascript",
      "Drupal"
    ],
    companyUrl: "https://cwi.com.br/",
    logo: "/experience/cwi-logo.jpeg",
  },
  {
    id: "dbc",
    position: "Software Engineer",
    company: "DBC Company",
    location: "Porto Alegre, Brazil",
    startDate: new Date("2018-03-01"),
    endDate: new Date("2018-09-01"),
    description: [
      "Frontend aplication using MERN stack for building internal tools.",
      "Worked along the Data team and the Machine Learning team to deliver data-driven features.",
    ],
    achievements: [
      "Created a development environment from scratch using Azure for building pipelines, automations, task management and code repositories.",
      "Helped migrating from Trello to Azure so the whole team could have a clear image of what was being worked on.",
    ],
    skills: ["React", "Node.js", "Azure", "MongoDB", "Typescript", "Git", "Jest", "CI/CD", "Python", "UX", "Figma"],
    companyUrl: "https://www.dbccompany.com.br/",
    logo: "/experience/dbc-logo.jpeg",
  },
  {
    id: "hogarth",
    position: "Digital Developer",
    company: "Hogarth Worldwide",
    location: "Porto Alegre, Brazil",
    startDate: new Date("2016-02-01"),
    endDate: new Date("2018-03-01"),
    description: [
      "Backend developer based in Drupal for building and maintaining websites for global clients.",
      "Worked on Haggendazs, Dyson, HSBC, Nestlé and other big brands.",
    ],
    achievements: [
      "Employee of the month for delivering high-quality work under tight deadlines.",
      "Helped management by mentoring junior developers and working as Scrum Master in some projects.",
    ],
    skills: ["React", "Node.js", "Drupal", "Jenkins", "PHP", "Git", "CI/CD", "GSAP", "HTML 5", "CSS 3", "Javascript"],
    companyUrl: "https://www.hogarthww.com/",
    logo: "/experience/hogarth-logo.jpeg",
  },
];
