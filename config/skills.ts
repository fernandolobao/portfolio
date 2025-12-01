import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "GraphQL",
    description:
      "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "Nest.js",
    description:
      "Create scalable and modular applications with a progressive Node.js framework.",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "styled-components",
    description:
      "A React tool for writing dynamic, scoped CSS directly in JavaScript, enabling component-based styling and flexible theming.",
    rating: 4,
    icon: Icons.styledcomponents,
  },
  {
    name: "Material UI",
    description:
      "Create stunning and responsive UIs with a popular React UI framework.",
    rating: 3,
    icon: Icons.mui,
  },

  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 3,
    icon: Icons.tailwindcss,
  },
  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 4,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Docker",
    description:
      "Enables packaging applications and their dependencies into lightweight containers, ensuring consistent execution across different environments.",
    rating: 4,
    icon: Icons.docker,
  },
  {
    name: "Jest",
    description:
      "Writes and runs fast, reliable JavaScript unit tests with built-in mocking and clear, easy-to-maintain assertions.",
    rating: 4,
    icon: Icons.jest,
  },
  {
    name: "Jenkins",
    description:
      "Automates building, testing, and deploying code through customizable pipelines, improving CI/CD speed, reliability, and team workflow.",
    rating: 4,
    icon: Icons.jenkins,
  },
  {
    name: "Kubernetes",
    description:
      "Orchestrates containerized applications by managing deployment, scaling, and reliability across distributed environments.",
    rating: 3,
    icon: Icons.kubernetes,
  },
  {
    name: "Azure",
    description:
      "Provides cloud services for deploying, scaling, and managing applications, infrastructure, and data across global distributed environments.",
    rating: 3,
    icon: Icons.azure,
  },
  {
    name: "GitHub",
    description:
      "Tracks and manages code changes through distributed version control, enabling collaboration, branching, and reliable project history.",
    rating: 5,
    icon: Icons.gitHub,
  },
  {
    name: "Storybook",
    description:
      "Builds and documents UI components in isolation, improving development workflow, visual testing, and design system consistency.",
    rating: 5,
    icon: Icons.storybook,
  },
  {
    name: "Arduino",
    description:
      "Controls hardware through simple, programmable microcontrollers, enabling rapid prototyping of interactive electronics and embedded systems.",
    rating: 4,
    icon: Icons.arduino,
  },
  {
    name: "Webpack",
    description:
      "Bundles and optimizes JavaScript, styles, and assets into efficient builds, streamlining development and improving application performance.",
    rating: 4,
    icon: Icons.webpack,
  },
  {
    name: "Ant Design",
    description:
      "Delivers a comprehensive set of polished, ready-to-use UI components that speed up front-end development and ensure consistent design.",
    rating: 4,
    icon: Icons.antd,
  },
  {
    name: "PostgreSQL",
    description:
      "Stores and manages structured data reliably with strong SQL features, extensibility, and robust performance for complex applications.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "Redis",
    description:
      "Caches and retrieves data at high speed using an in-memory storage system, improving application performance and reducing database load.",
    rating: 4,
    icon: Icons.redis,
  },
  {
    name: "Figma",
    description:
      "Designs and prototypes user interfaces collaboratively, enabling real-time editing, component systems, and efficient handoff to development.",
    rating: 4,
    icon: Icons.figma,
  },
  {
    name: "PHP",
    description:
      "Builds dynamic server-side applications using a simple, widely supported scripting language optimized for web development and rapid deployment.",
    rating: 4,
    icon: Icons.php,
  },
  {
    name: "Drupal",
    description:
      "Creates and manages dynamic websites using a flexible, modular CMS framework that supports custom content, themes, and scalable functionality.",
    rating: 4,
    icon: Icons.drupal,
  },
  {
    name: "Wordpress",
    description:
      "Builds and manages websites using a flexible, extensible CMS that supports themes, plugins, and intuitive content publishing.",
    rating: 4,
    icon: Icons.wordpress,
  },
  {
    name: "Strapi",
    description:
      "Creates and manages content APIs through a customizable headless CMS, enabling fast backend setup and smooth integration with front-end applications.",
    rating: 4,
    icon: Icons.strapi,
  },
  {
    name: "Sonarqube",
    description:
      "Analyzes code quality and security by scanning projects for bugs, vulnerabilities, and maintainability issues, improving overall development standards.",
    rating: 3,
    icon: Icons.sonarqube,
  },
  {
    name: "Cypress",
    description:
      "Runs end-to-end tests directly in the browser, verifying user flows, interactions, and application behavior with fast, reliable automation.",
    rating: 5,
    icon: Icons.cypress,
  },
  {
    name: "Testing Library",
    description:
      "Tests UI components by simulating real user interactions, ensuring behavior-focused validation and more resilient, maintainable front-end code.",
    rating: 5,
    icon: Icons.testingLibrary,
  },
  {
    name: "Scrum",
    description:
      "Tests UI components by simulating real user interactions, ensuring behavior-focused validation and more resilient, maintainable front-end code.",
    rating: 5,
    icon: Icons.scrum,
  },
  {
    name: "GSAP",
    description:
      "Animates UI elements with smooth, high-performance motion, enabling complex timelines and interactive effects with precise control.",
    rating: 4,
    icon: Icons.gsap,
  },
  {
    name: "SASS",
    description:
      "Extends CSS with variables, nesting, and reusable logic, making stylesheets more organized, scalable, and efficient to maintain.",
    rating: 4,
    icon: Icons.sass,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
