import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "ragnarok",
    companyName: "Ragnarök: Design System",
    type: "Professional",
    category: [
      "Design System",
      "UX",
      "UI",
      "DesignOps",
      "Atomic Design",
      "Frontend",
    ],
    shortDescription:
      "Design System created for internal usage in Lojas Renner for decision making systems and microfrontend usage.",
    techStack: [
      "Storybook",
      "React",
      "Node.js",
      "Typescript",
      "HTML 5",
      "CSS 3",
      "Sass",
    ],
    startDate: new Date("2021-03-01"),
    endDate: new Date("2021-08-01"),
    companyLogoImg: "/projects/ragnarok/ragnarok.png",
    pagesInfoArr: [
      {
        title: "Storybook Documentation",
        description:
          "Storybook setup for documenting and showcasing design system components and design tokens.",
        imgArr: [
          "/projects/ragnarok/1.png",
          "/projects/ragnarok/2.png",
          "/projects/ragnarok/3.png",
        ],
      },
      {
        title: "Components implemented in another project: Datalab",
        description:
          "Specialized Decision Support System made to help business teams to make better and data driven decisions.",
        imgArr: ["/projects/ragnarok/4.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During my time in Lojas Renner, I had the opportunity to work on the development of 'Ragnarök,' a comprehensive design system tailored for internal use within the company's decision-making systems. This project was particularly exciting as it involved creating a design system that could be seamlessly integrated into various microfrontend applications, enhancing consistency and efficiency across the board.",
        "I collaborated closely with the design and ux teams to ensure that the design system not only met aesthetic standards but also adhered to usability and accessibility guidelines. The system was built using React and TypeScript, with Storybook serving as the documentation and showcase platform for the components and design tokens.",
        "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product that significantly improved the development workflow within Lojas Renner. Not only for developers but also for designers and product managers who could now rely on a unified design language for their projects.",
      ],
      bullets: [
        "Developed and optimized a high-performing design system with over 30 reusable components along with a Grid System and Design Tokens.",
        "Collaborated closely with design and UX teams to ensure usability and accessibility standards were met.",
        "A central hub for accessing design guidelines, component documentation, and best practices.",
        "Leveraged Storybook, React with TypeScript for captivating front-end experiences.",
      ],
    },
  },
  {
    id: "datalab",
    companyName: "Datalab",
    type: "Professional",
    category: ["Design System", "Full Stack", "UX", "DesignOps", "DevOps"],
    shortDescription:
      "Specialized Decision Support System made to help business teams to make better and data driven decisions.",
    techStack: [
      "Node.js",
      "MongoDB",
      "Javascript",
      "Typescript",
      "GraphQL",
      "Azure",
      "Docker",
      "Kubernetes",
      "Redis",
      "express.js",
      "Prisma",
    ],
    startDate: new Date("2021-03-01"),
    endDate: new Date("2021-08-01"),
    companyLogoImg: "/projects/datalab/renner.webp",
    pagesInfoArr: [
      {
        title: "Components from Ragnarök Design System",
        description:
          "Implementation of the whole Ragnarök Design System in the Datalab project, along with Grid System and Design Tokens.",
        imgArr: ["/projects/ragnarok/4.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `Frontend system was built using React with Typescript, ensuring a robust and type-safe development process. The backend was powered by Node.js with Express.js, providing a scalable and efficient server-side solution. MongoDB served as the database, offering flexibility in handling diverse data types and structures.`,
        `The backend was built to use GraphQL APIs, enabling efficient data retrieval and manipulation. Prisma was utilized as the ORM, streamlining database interactions and enhancing developer productivity.`,
        `There was also a Redis Layer for caching frequently accessed data, significantly improving response times and overall system performance.`,
        `Application used Azure pipelines for CI/CD, automating the build, test, and deployment processes. Docker containers were employed to ensure consistency across different environments, while Kubernetes orchestrated container deployment, scaling, and management.`,
      ],
      bullets: [
        "Data was being queried in company's Datalake to provide insightful analytics and visualizations for business decision-making.",
        "Styled-component was used for proper styling and theming across the application, ensuring a consistent and visually appealing user experience.",
        "Some tools used Flaks APIs for data processing and analysis, integrating seamlessly with the Node.js backend.",
      ],
    },
  },
  {
    id: "aidron-ds",
    companyName: "Aidron: Design System",
    type: "Professional",
    category: [
      "Design System",
      "UX",
      "UI",
      "DesignOps",
      "Atomic Design",
      "Frontend",
    ],
    shortDescription:
      "A Design System created to use on Aidron's web applications and future products.",
    techStack: [
      "Storybook",
      "React",
      "Node.js",
      "Typescript",
      "HTML 5",
      "CSS 3",
      "Sass",
    ],
    startDate: new Date("2022-08-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/projects/aidron/aidron_login.gif",
    pagesInfoArr: [
      {
        title: "Storybook Documentation",
        description:
          "Storybook setup for documenting and showcasing design system components and design tokens.",
        imgArr: ["/projects/aidron/storybook.png"],
      },
      {
        title: "Login/Signup Authentication",
        description: "Secure user authentication system using its design system's components.",
        imgArr: ["/projects/aidron/login.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Aidron is a data driven startup that is growing fast and needed a design system to keep their products consistent and scalable. I was responsible for creating a comprehensive design system that would serve as the foundation for all of Aidron's web applications and future products.",
        "Some processes had to be created to handle DesignOps, ensuring that the design system was always up-to-date and aligned with the latest user and developer necessities.",
        "The use of a Design System was so appealing that they actually got some clients because of it, showing how important a good design system is for a company's image and product quality.",
      ],
      bullets: [
        "Some components were designed based on some specific client needs, making the design system flexible and adaptable.",
        "Automatically generated documentation using Storybook for easy access to design guidelines and component usage.",
        "Deployment pipelines and a release process were established to ensure smooth updates and version control.",
        "A central hub for accessing design guidelines, component documentation, improving not only developer delivery time but also designers delivery value.",
      ],
    },
  },
  {
    id: "aidron-spa",
    companyName: "Aidron",
    type: "Professional",
    category: ["Web Dev", "Frontend", "Mobile Dev"],
    shortDescription:
      "Aidron's main website and single page application to showcase their products and services.",
    websiteLink: "https://aidron.ai",
    techStack: ["Next.js", "React", "Node.js", "CSS 3", "HTML 5"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2023-07-01"),
    companyLogoImg: "/projects/aidron/aidron.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing Aidron's products and services.",
        imgArr: ["/projects/aidron/spa.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Single Page Application (SPA) developed for Aidron, a data-driven startup. The website was built using Next.js and React, ensuring a fast and responsive user experience.",
        "Since it is a static website, the main focus was on delivering information about Aidron's products and services in a clear and engaging manner. The design prioritized user experience, with intuitive navigation and visually appealing layouts.",
      ],
      bullets: [
        "Static page generated from Next.js templates for fast loading times and optimal performance",
        "Simple infographics and animations to enhance user engagement without overwhelming the content",
        "Responsive design to ensure accessibility across various devices and screen sizes",
        "Integration with Aidron's design system to maintain brand consistency and visual appeal",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
