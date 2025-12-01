import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Fernando Camilotti's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Fernando Camilotti's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Fernando Camilotti's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Fernando Camilotti.",
    },
  },
  education: {
    title: "Education",
    description: "Education timeline and Academic achievements.",
    metadata: {
      title: "Education",
      description:
        "Fernando Camilotti's education timeline and academic achievements.",
    },
  },
  resume: {
    title: "Resume",
    description: "Fernando Camilotti's resume.",
    metadata: {
      title: "Resume",
      description: "Fernando Camilotti's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Fernando Camilotti's professional journey and experience timeline.",
    },
  },
};
