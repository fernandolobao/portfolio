import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    siteName: "Fernando Camilotti",
    title: "Fernando Camilotti — Software Engineer & UX Designer",
    description:
      "Software engineer and UX designer in Porto Alegre, Brazil. 15+ years building fast, accessible and consistent web products and design systems.",
    jobTitle: "Software Engineer and UX Designer",
    ogAlt: "Fernando Camilotti, software engineer and UX designer: headline over a triangular tunnel of blue and white light",
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
      "15+ years building web products and design systems. I combine engineering and UX to ship fast, accessible and consistent interfaces.",
    current: "Now: Full Stack Engineer at Solvd · Head of UX/UI at Aidron",
    ctaWork: "See my work",
    ctaContact: "Get in touch",
  },
  metrics: [
    { value: "15+", label: "years in web development and UX" },
    { value: "30+", label: "reusable components in a design system" },
    { value: "300+", label: "daily users of an integrated data system" },
    { value: "2", label: "design systems built from scratch" },
  ],
  work: {
    title: "Selected work",
    intro:
      "Five projects where design and engineering meet: a native macOS app, two design systems, a data-driven decision platform and a company website.",
    resultsLabel: "Results",
    repoLabel: "View on GitHub",
    detail: {
      eyebrow: "Case study",
      back: "Work",
      readCase: "Read the case study",
      stackTitle: "Stack",
      linksTitle: "Links",
      repo: "Code on GitHub",
      download: "Download the app",
      site: "Meet ZeroServer",
    },
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm a senior software engineer and UX specialist with over 15 years of experience in web development and user experience design. My background spans Graphic Design, an MBA in IT Governance, a technologist degree in Big Data and Analytical Intelligence, and a postgraduate degree in UX Design.",
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
      native: "Native apps (macOS)",
      backend: "Backend & data",
      infra: "Infrastructure & quality",
      design: "Design & UX",
      process: "Process & more",
    },
  },
  experience: {
    title: "Experience",
    intro: "15+ years across software engineering, interface design and UX/UI leadership.",
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
    readPublication: "Read publication",
    kinds: {
      chapter: "Book chapter",
      event: "Conference paper",
      website: "Website",
    },
    notes: {
      protheses: "Full paper published in the proceedings.",
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
    "zeroserver-control": {
      name: "ZeroServer Control",
      role: "Creator · ZeroServer Community Cloud",
      summary:
        "Native macOS menu bar app for ZeroServer, Brazil's community cloud: this Mac's agent and every node on your account one click away, with no terminal or dashboard tab.",
      results: [],
      highlights: [
        "Controls this Mac's local agent and every node on the account: live status, pause, resume and stop, plus CPU, RAM and disk per node.",
        "Dashboard with 24-hour telemetry in native charts (Swift Charts) and a timeline of each node's status events.",
        "Built on ZeroServer's principles: open source (MIT), credentials only in the Keychain, a security audit with fixes covered by regression tests, and an English and Portuguese interface.",
      ],
      detail: {
        metaTitle: "ZeroServer Control: a macOS app",
        metaDescription:
          "Case study of ZeroServer Control, a native Swift app that controls ZeroServer Community Cloud nodes: architecture, security, testing and roadmap.",
        ogAlt:
          "Cover of the ZeroServer Control case study: a mesh of nodes, the menu bar dropdown and a telemetry chart",
        lead: "ZeroServer Control lives in the Mac's menu bar and puts ZeroServer Community Cloud one click away: your machine's agent and every node on your account, with no terminal and no dashboard tab.",
        facts: [
          { label: "Role", value: "Creator" },
          { label: "Year", value: "2026" },
          { label: "Platform", value: "macOS 13+ · Swift and SwiftUI" },
          { label: "License", value: "MIT (open source)" },
          { label: "Status", value: "v0.1.1 released on GitHub" },
        ],
        sections: [
          {
            title: "The context",
            paragraphs: [
              "ZeroServer is a Brazilian community cloud: people with idle hardware, such as a gaming PC or a home server, become node providers, and developers deploy to the mesh at a fair price. Its manifesto talks about decentralizing power, putting idle hardware to work and building trust through transparency.",
              "Providers were missing something simple: knowing, effortlessly, whether their node and the others on the account are healthy, busy or down. Until then that meant watching a terminal window or keeping a web dashboard tab open.",
              "The app answers that with a lightweight, always-available utility, right where you would check the time.",
            ],
          },
          {
            title: "What the app does",
            bullets: [
              "This Mac's agent: start, stop and check the status of the local provider node's LaunchDaemon. Checking the status needs no password; starting and stopping ask for macOS's own administrator authorization.",
              "Every node on the account: live status (online, idle, busy, overloaded, offline), pause and resume the ones that are online, force-stop any of them, and see CPU, RAM and disk per node.",
              "Dashboard: the last 24 hours of telemetry in native charts (Swift Charts), a current snapshot and a timeline of each node's status events.",
              "Real-utility details: open at login, an English and Portuguese interface, and sign-in asked for only when needed (controlling the local agent needs no account).",
            ],
          },
          {
            title: "Architecture",
            paragraphs: [
              "It is a thin client: there is no backend of its own. The app talks to the same GraphQL API a web dashboard would use and, on the Mac, to launchd through launchctl.",
            ],
            figure: "architecture",
            caption:
              "The app's modules: Account (session and API clients), Remote (polling and node actions), Controller (local agent) and the SwiftUI interface.",
          },
          {
            title: "Design decisions",
            bullets: [
              "Swift Package Manager, no Xcode project. The Command Line Tools are enough, and a script assembles the .app with its Info.plist, icon and ad-hoc signature. Anyone can build it with swift build.",
              "Adaptive polling: the node list refreshes every 10 seconds and, if the API fails, backs off exponentially up to 60 seconds, returning to the normal pace on the first success. The 24-hour telemetry uses a slower cadence.",
              "No races between reads and actions: the status poll is read-only and does not compete with pause, resume or force stop, and the list has a stable order so rows do not reshuffle on every refresh.",
              "The model respects the backend: \"paused\" is not a connectivity status, so it was not modeled as one.",
            ],
          },
          {
            title: "Security",
            paragraphs: [
              "Before growing, the app went through a full security, correctness and interface audit. Everything it found was fixed, and every fix became a regression test. The main points:",
            ],
            bullets: [
              "Command injection. The daemon label could come from an environment variable and reach a shell run with administrator privileges. An unprivileged local process could set that variable and run code as root when the user clicked Start and typed their password. Now only labels shaped like a launchd identifier (letters, digits, dot, hyphen and underscore) are accepted; anything else falls back to the production label.",
              "Session refresh race. Polling and another action could refresh the token at the same time, resending the same refresh token, which would drop the session if the backend rotates it. Now there is a single in-flight refresh, and an epoch counter discards refreshes that finish after a sign-out.",
              "Credentials. Only the refresh token is stored, straight into the Keychain, restricted to the app and to this device. Nothing in plaintext and nothing in logs.",
              "Invalid telemetry. A non-finite value (NaN or infinity) used to crash the app and is now handled.",
            ],
          },
          {
            title: "Quality and delivery",
            bullets: [
              "Framework-free tests: since the Command Line Tools do not ship XCTest, the test script compiles the production code (accounts, nodes and models) together with hand-written drivers using only swiftc, and fails with a non-zero exit code. It is a real gate, not a manual check.",
              "CI on GitHub Actions (macOS): build, tests, a check against secrets in the code and a check that the English and Portuguese translations have exactly the same keys. A forgotten key silently falls back to raw text, and this check catches it before shipping.",
              "A throwaway LaunchDaemon to test the agent controls without installing the real agent.",
              "Versioned releases, with the app packaged as a .zip.",
            ],
          },
          {
            title: "Known limits",
            bullets: [
              "Ad-hoc signature, not notarized: on first use you need to right-click and choose Open.",
              "The menu bar dropdown does not stay open after a click (a limitation of SwiftUI's menu style). A window version is on the roadmap.",
              "Telemetry goes up to 24 hours, which is what the backend keeps.",
            ],
          },
          {
            title: "Next steps",
            bullets: [
              "Node health notifications: compare each refresh with the previous one, alert only on the events the user picks and open the right node in the dashboard.",
              "Developer ID signing, notarization and automatic updates.",
              "Multiple accounts, plus search and filter for large accounts.",
            ],
          },
        ],
      },
    },
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
