export type SkillGroupId =
  | "frontend"
  | "native"
  | "backend"
  | "infra"
  | "design"
  | "process";

/** Group labels are translated in the dictionaries; skill names are not. */
export const skillGroups: { id: SkillGroupId; skills: string[] }[] = [
  {
    id: "frontend",
    skills: [
      "React", "Next.js", "TypeScript", "JavaScript", "HTML 5", "CSS 3", "Sass",
      "Tailwind CSS", "styled-components", "Redux", "Material UI", "Ant Design",
      "Bootstrap", "GSAP", "Storybook", "Webpack",
    ],
  },
  {
    id: "native",
    skills: [
      "Swift", "SwiftUI", "Swift Charts", "Swift Package Manager", "MenuBarExtra",
      "Keychain", "launchd",
    ],
  },
  {
    id: "backend",
    skills: [
      "Node.js", "Express.js", "Nest.js", "GraphQL", "MongoDB", "PostgreSQL",
      "MySQL", "Redis", "Prisma", "Python", "Flask", "PHP", "Drupal",
      "WordPress", "Strapi",
    ],
  },
  {
    id: "infra",
    skills: [
      "AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git", "GitHub",
      "Jest", "Cypress", "Testing Library", "SonarQube", "GitHub Actions", "Shell scripting",
    ],
  },
  {
    id: "design",
    skills: [
      "Design Systems", "Design Tokens", "Figma", "UX Research", "Usability Testing",
      "Information Architecture", "Interaction Design", "Prototyping",
      "Wireframing", "User Flows", "Accessibility", "Miro", "Design Thinking",
    ],
  },
  {
    id: "process",
    skills: [
      "DesignOps", "Scrum", "Technical Documentation", "Code Review", "Mentoring",
      "Multidisciplinary Teams", "Internationalization (i18n)", "Security audits", "Arduino",
    ],
  },
];
