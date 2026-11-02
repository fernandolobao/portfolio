import type { Dictionary } from "@/lib/i18n/types";

export const mainNavRoutes: { key: keyof Dictionary["nav"]; path: string }[] = [
  { key: "skills", path: "/skills" },
  { key: "projects", path: "/projects" },
  { key: "experience", path: "/experience" },
  { key: "education", path: "/education" },
  { key: "contact", path: "/contact" },
];
