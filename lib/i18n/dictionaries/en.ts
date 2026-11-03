import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    siteName: "Fernando Camilotti",
    title: "Fernando Camilotti — Software Engineer & Designer",
    description:
      "Software engineer and designer in Porto Alegre, Brazil. 10+ years building fast, accessible and consistent web products and design systems at the intersection of engineering and UX.",
    jobTitle: "Software Engineer and UX Designer",
  },
  nav: {
    work: "Work",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
  },
  ui: {
    skipToContent: "Skip to content",
    menu: "Menu",
    language: "Language",
    toggleTheme: "Toggle light and dark theme",
    present: "Present",
    sectionLabel: "Section",
  },
  hero: {
    location: "Porto Alegre, Brazil",
    title: "Software engineer and designer.",
    subtitle:
      "10+ years building web products and design systems. I combine engineering and UX to ship fast, accessible and consistent interfaces.",
    current: "Now: Full Stack Engineer at Solvd · Head of UX/UI at Aidron",
    ctaWork: "See my work",
    ctaContact: "Get in touch",
  },
  metrics: [
    { value: "10+", label: "years in web development and UX" },
    { value: "30+", label: "reusable components in a design system" },
    { value: "300+", label: "daily users of an integrated data system" },
    { value: "2", label: "design systems built from scratch" },
  ],
  work: {
    title: "Selected work",
    intro:
      "Four projects where design and engineering meet: two design systems, a data-driven decision platform and a company website.",
    resultsLabel: "Results",
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm a senior software engineer and UX specialist with over 10 years of experience in web development and user experience design. My background spans Graphic Design, an MBA in IT Governance, a technologist degree in Big Data and Analytical Intelligence, and a postgraduate degree in UX Design.",
      "I work where code meets design: I've led a design system, set up DesignOps processes and bridged designers and developers in multidisciplinary teams. I enjoy collaborating with developers, designers and stakeholders to deliver high-quality solutions that meet the needs of the people who use them.",
      "Today I'm a Full Stack Engineer at Solvd and Head of UX/UI at Aidron. I'm also pursuing a master's degree in Design at UFRGS (2025–2027).",
    ],
    photoAlt: "Portrait of Fernando Camilotti, with glasses and a beard, in front of a bookshelf",
    languagesTitle: "Languages",
    languages: [
      { name: "Portuguese", level: "native" },
      { name: "English", level: "advanced" },
      { name: "Spanish", level: "limited working" },
      { name: "Italian", level: "good reading" },
    ],
  },
  skills: {
    title: "Skills",
    intro: "From a component in Storybook to the deployment pipeline, including user research.",
    groups: {
      frontend: "Frontend",
      backend: "Backend & data",
      infra: "Infrastructure & quality",
      design: "Design & UX",
      process: "Process & more",
    },
  },
  experience: {
    title: "Experience",
    intro: "10+ years across software engineering, interface design and UX/UI leadership.",
    earlierTitle: "Earlier",
    items: {
      solvd: { position: "Full Stack Engineer" },
      aidron: {
        position: "Head of UX/UI",
        location: "Porto Alegre, Brazil",
        summary: "Responsible for the design system, the company website and DesignOps processes.",
        bullets: [
          "Created the company's design system, which became a selling point in winning clients.",
          "Set up deployment pipelines and a release process to keep the design system up to date.",
        ],
      },
      fsl: {
        position: "Senior Software Engineer",
        location: "Remote",
        summary: "Embedded in client teams, building web applications with modern technologies.",
        bullets: [
          "Applications used by nurses at vaccination and testing sites during the Covid-19 pandemic.",
          "Co-created a hub with a microfrontends architecture to centralize internal tools.",
          "Form tool with conditional fields for checklists and reports at construction sites.",
          "Geolocation tool (Mapbox and Google Maps) for a private security company to track wildfires and price plans by risk zone.",
          "Stripe integration for payments across several applications.",
        ],
      },
      "renner-ds": {
        position: "Design System Lead",
        location: "Porto Alegre, Brazil",
        summary: "Design system for data-driven applications, used across multiple teams.",
        bullets: [
          "Design system built from scratch with Storybook and React, adopted by 2+ teams (Ragnarök).",
          "Owned DesignOps and DevOps for the handoff between designers and developers.",
          "Usage metrics with Hotjar and Google Analytics.",
        ],
      },
      "renner-se": {
        position: "Software Engineer",
        location: "Porto Alegre, Brazil",
        summary: "Tech lead for web applications built with React and Node.js.",
        bullets: [
          "Connected several internal systems into one data-driven application used by 300+ employees daily.",
          "Sales forecasting with a neural network (Flask and Python) based on historical data.",
          "Full development and deployment pipeline on Azure, with unit and e2e tests (Cypress).",
        ],
      },
      cwi: {
        position: "Systems Analyst",
        oneLiner: "News outlet website with Drupal and a React frontend; internal tools to speed up delivery.",
      },
      dbc: {
        position: "Senior Frontend Developer",
        oneLiner: "Internal tools on the MERN stack and a complete development environment on Azure.",
      },
      hogarth: {
        position: "Digital Developer",
        oneLiner: "Drupal websites for global brands such as Dyson, HSBC and Nestlé. “Hogarthian of the month” award.",
      },
      "fight-analytics": {
        position: "Chief of Design Office",
        oneLiner: "MMA fight analytics startup: branding, layouts and frontend of the data visualization tool.",
      },
      zerohora: {
        position: "Web Developer",
        oneLiner: "Interactive infographics, video intros and graphic patterns for a news website.",
      },
    },
  },
  education: {
    title: "Education & publications",
    items: {
      "ufrgs-master": { degree: "Master's degree in Design" },
      "ufrgs-ux": {
        degree: "Postgraduate degree in UX Design",
        detail: "Thesis: Design System Principles Applied to Teaching Environments (in Portuguese). Advisor: Sandro Fetter.",
      },
      "uniritter-bigdata": { degree: "Technologist degree in Big Data and Analytical Intelligence" },
      "laureate-mba": { degree: "MBA in IT Governance and Innovation" },
      "uniritter-design": {
        degree: "Bachelor's degree in Graphic Design",
        detail:
          "Thesis: editorial design for the Galactic Encyclopedia collection, with Isaac Asimov's Foundation series books. Advisor: Norberto José Pinheiro Bozzetti.",
      },
      "ufrgs-technical": { degree: "Technical course in Information Systems" },
      "senac-webdesign": {
        degree: "Web Design improvement course (Macromedia), 360 h",
        detail: "Project: Web Site.",
      },
    },
    publicationsTitle: "Publications & output",
    kinds: {
      chapter: "Book chapter",
      event: "Congress",
      website: "Website",
    },
    notes: {
      protheses: "Congress participation.",
      moshpit: "Music album reviews.",
    },
    certificationsTitle: "Certifications",
    certifications: [
      "Planning a Career in User Experience",
      "Claude Code 101",
      "Claude Code in Action",
      "Scrum Fundamentals Certified",
      "VI Brazilian Interdisciplinary Congress on Science and Technology (participation)",
    ],
    awardsTitle: "Awards",
    awards: ["Hogarthian of the month, Hogarth Worldwide"],
  },
  projects: {
    ragnarok: {
      name: "Ragnarök",
      role: "Design System Lead · Lojas Renner",
      summary:
        "Design system built for Renner's decision-support systems and for use across microfrontends, with living documentation in Storybook.",
      results: [
        { value: "30+", label: "reusable components, plus a grid system and design tokens" },
        { value: "2+", label: "teams adopted the system" },
      ],
      highlights: [
        "Worked closely with design and UX to meet usability and accessibility standards.",
        "A central hub for design guidelines, component documentation and best practices.",
        "Built with React, TypeScript and Storybook.",
      ],
    },
    datalab: {
      name: "Datalab",
      role: "Software Engineer · Lojas Renner",
      summary:
        "Decision-support system that helps business teams make data-driven decisions, built on the Ragnarök design system.",
      results: [],
      highlights: [
        "React and TypeScript frontend; Node.js backend with GraphQL, MongoDB and a Redis caching layer.",
        "CI/CD on Azure pipelines, with Docker and Kubernetes.",
        "Queries the company's data lake for analytics and visualizations.",
      ],
    },
    "aidron-ds": {
      name: "Aidron Design System",
      role: "Head of UX/UI · Aidron",
      summary:
        "Design system for the current and future web products of a fast-growing data startup, with DesignOps processes to keep it alive.",
      results: [],
      highlights: [
        "Some components came from specific client needs, keeping the system flexible.",
        "Documentation generated automatically with Storybook.",
        "Deployment pipelines and a versioned release process.",
      ],
    },
    "aidron-spa": {
      name: "Aidron website",
      role: "Frontend · Aidron",
      summary:
        "Company website in Next.js presenting Aidron's products and services, integrated with the company design system.",
      results: [],
      highlights: [
        "Simple infographics and animations that don't overwhelm the content.",
        "Responsive layout for different devices and screen sizes.",
        "Visual consistency with the brand's design system.",
      ],
    },
  },
  contact: {
    title: "Let's talk",
    text: "Software engineering, design systems, UX or design research: email is the fastest way to reach me.",
    emailCta: "Send an email",
    links: { linkedin: "LinkedIn", github: "GitHub", lattes: "Lattes CV" },
  },
  footer: {
    rights: "All rights reserved.",
    location: "Porto Alegre, RS, Brazil",
  },
};
