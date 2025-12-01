import { ValidSkills } from "./constants";

export interface educationInterface {
  institution: string;
  degree: string;
  startDate: Date;
  endDate: Date | "Present";
  skills: ValidSkills[];
  link: string;
  logo?: string;
}

export const educationUnsorted: educationInterface[] = [
  {
    institution: "Federal University of Rio Grande do Sul (UFRGS)",
    degree: "Master's degree, Design",
    startDate: new Date("2025-03-01"),
    endDate: "Present",
    skills: ["UX", "Research", "Design Thinking", "Figma", "Bootstrap", "Scrum", "Usability Testing", "User Research", "Information Architecture", "Prototyping", "Wireframing", "User Flows", "Miro"],
    link: "https://www.ufrgs.br/pgdesign",
    logo: "/education/ufrgs-logo.jpeg",
  },
  {
    institution: "Federal University of Rio Grande do Sul (UFRGS)",
    degree: "Postgraduate degree, User Experience Design",
    startDate: new Date("2022-05-01"),
    endDate: new Date("2024-03-01"),
    skills: ["UX", "Research", "Design Thinking", "Figma", "Bootstrap", "Scrum", "Usability Testing", "User Research", "Information Architecture", "Interaction Design", "Prototyping", "Wireframing", "User Flows", "Miro"],
    link: "https://www.ufrgs.br",
    logo: "/education/ufrgs-logo.jpeg",
  },
  {
    institution: "Uniritter",
    degree: "Bachelor of technology degree, Big Data and Analytical Inteligence",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2023-01-01"),
    skills: ["Big Data", "Research", "SQL", "Scrum", "Python", "NoSQL", "A/B Testing"],
    link: "https://www.uniritter.edu.br/",
    logo: "/education/uniritter-logo.jpeg",
  },
  {
    institution: "Laureate Education",
    degree: "Master of Business Administration, Governance for IT and Innovation",
    startDate: new Date("2017-01-01"),
    endDate: new Date("2019-01-01"),
    skills: ["Management", "Research", "Governance", "ITIL", ],
    link: "https://www.laureate.net/",
    logo: "/education/laureate-logo.jpeg",
  },
  {
    institution: "Uniritter",
    degree: "Bachelor degree, Graphic Design",
    startDate: new Date("2008-01-01"),
    endDate: new Date("2013-01-01"),
    skills: ["Design Thinking", "UX", "UI", "Accessibility", "Adobe XD", "Sketch", "InVision", "Miro", "Usability Testing", "Prototyping", "Wireframing"],
    link: "https://www.uniritter.edu.br/",
    logo: "/education/uniritter-logo.jpeg",
  },
  {
    institution: "Federal University of Rio Grande do Sul (UFRGS)",
    degree: "Technical degree, Information Systems",
    startDate: new Date("2007-01-01"),
    endDate: new Date("2010-01-01"),
    skills: ["PHP", "MySQL", "Git", "Drupal", "Wordpress", "C++", "HTML 5", "CSS 3", "Javascript"],
    link: "https://www.ufrgs.br",
    logo: "/education/ufrgs-logo.jpeg",
  },
];

export const featuredEducation: educationInterface[] = educationUnsorted.slice(
  0,
  3
);
