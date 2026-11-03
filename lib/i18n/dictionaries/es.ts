import type { Dictionary } from "../types";

export const es: Dictionary = {
  meta: {
    siteName: "Fernando Camilotti",
    title: "Fernando Camilotti — Ingeniero de Software y Diseñador",
    description:
      "Ingeniero de software y diseñador en Porto Alegre, Brasil. Más de 10 años creando productos web y design systems rápidos, accesibles y consistentes, entre ingeniería y UX.",
    jobTitle: "Ingeniero de Software y Diseñador UX",
  },
  nav: {
    work: "Trabajos",
    about: "Sobre mí",
    skills: "Habilidades",
    experience: "Experiencia",
    education: "Formación",
    contact: "Contacto",
  },
  ui: {
    skipToContent: "Saltar al contenido",
    menu: "Menú",
    language: "Idioma",
    toggleTheme: "Cambiar entre tema claro y oscuro",
    present: "Actual",
    sectionLabel: "Sección",
  },
  hero: {
    location: "Porto Alegre, Brasil",
    title: "Ingeniero de software y diseñador.",
    subtitle:
      "Más de 10 años creando productos web y design systems. Combino ingeniería y UX para entregar interfaces rápidas, accesibles y consistentes.",
    current: "Hoy: Full Stack Engineer en Solvd · Head de UX/UI en Aidron",
    ctaWork: "Ver trabajos",
    ctaContact: "Ponerse en contacto",
  },
  metrics: [
    { value: "10+", label: "años en desarrollo web y UX" },
    { value: "30+", label: "componentes reutilizables en un design system" },
    { value: "300+", label: "usuarios diarios de un sistema integrado de datos" },
    { value: "2", label: "design systems creados desde cero" },
  ],
  work: {
    title: "Trabajos seleccionados",
    intro:
      "Cuatro proyectos donde se encuentran el diseño y la ingeniería: dos design systems, una plataforma de decisión basada en datos y un sitio institucional.",
    resultsLabel: "Resultados",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Soy ingeniero de software sénior y especialista en UX, con más de 10 años de experiencia en desarrollo web y diseño de experiencia de usuario. Mi formación incluye Diseño Gráfico, un MBA en Gobernanza de TI, una tecnicatura en Big Data e Inteligencia Analítica y una especialización en UX Design.",
      "Trabajo en la intersección entre código y diseño: he liderado un design system, organizado procesos de DesignOps y servido de puente entre diseñadores y desarrolladores en equipos multidisciplinarios. Disfruto colaborar con desarrolladores, diseñadores y stakeholders para entregar soluciones de calidad que respondan a las necesidades de quienes las usan.",
      "Hoy soy Full Stack Engineer en Solvd y Head de UX/UI en Aidron. También curso una maestría en Diseño en la UFRGS (2025–2027).",
    ],
    photoAlt: "Retrato de Fernando Camilotti, con gafas y barba, frente a una estantería de libros",
    languagesTitle: "Idiomas",
    languages: [
      { name: "Portugués", level: "nativo" },
      { name: "Inglés", level: "avanzado" },
      { name: "Español", level: "limitado" },
      { name: "Italiano", level: "buena lectura" },
    ],
  },
  skills: {
    title: "Habilidades",
    intro: "Desde un componente en Storybook hasta el pipeline de despliegue, pasando por la investigación con usuarios.",
    groups: {
      frontend: "Frontend",
      backend: "Backend y datos",
      infra: "Infraestructura y calidad",
      design: "Diseño y UX",
      process: "Proceso y más",
    },
  },
  experience: {
    title: "Experiencia",
    intro: "Más de 10 años entre ingeniería de software, diseño de interfaces y liderazgo de UX/UI.",
    earlierTitle: "Antes",
    items: {
      solvd: { position: "Full Stack Engineer" },
      aidron: {
        position: "Head de UX/UI",
        location: "Porto Alegre, Brasil",
        summary: "Responsable del design system, del sitio institucional y de los procesos de DesignOps.",
        bullets: [
          "Creó el design system de la empresa, que pasó a ser un diferencial para conquistar clientes.",
          "Estableció pipelines de despliegue y un proceso de releases para mantener el design system al día.",
        ],
      },
      fsl: {
        position: "Senior Software Engineer",
        location: "Remoto",
        summary: "Integrado en equipos de clientes, construyendo aplicaciones web con tecnologías modernas.",
        bullets: [
          "Aplicaciones usadas por enfermeros en puntos de vacunación y testeo durante la pandemia de Covid-19.",
          "Co-creación de un hub con arquitectura de microfrontends para centralizar herramientas internas.",
          "Herramienta de formularios con campos condicionales para checklists e informes en obras de construcción.",
          "Herramienta de geolocalización (Mapbox y Google Maps) para que una empresa de seguridad privada siga incendios forestales y fije precios por zona de riesgo.",
          "Integración con Stripe para pagos en varias aplicaciones.",
        ],
      },
      "renner-ds": {
        position: "Design System Lead",
        location: "Porto Alegre, Brasil",
        summary: "Design system para aplicaciones basadas en datos, usado por varios equipos.",
        bullets: [
          "Design system creado desde cero con Storybook y React, adoptado por 2+ equipos (Ragnarök).",
          "Responsable de DesignOps y DevOps en el traspaso entre diseñadores y desarrolladores.",
          "Métricas de uso con Hotjar y Google Analytics.",
        ],
      },
      "renner-se": {
        position: "Ingeniero de Software",
        location: "Porto Alegre, Brasil",
        summary: "Liderazgo técnico de aplicaciones web con React y Node.js.",
        bullets: [
          "Integración de varios sistemas internos en una aplicación basada en datos, usada por 300+ colaboradores cada día.",
          "Previsión de ventas con una red neuronal (Flask y Python) a partir de datos históricos.",
          "Pipeline completo de desarrollo y despliegue en Azure, con pruebas unitarias y e2e (Cypress).",
        ],
      },
      cwi: {
        position: "Analista de Sistemas",
        oneLiner: "Portal de noticias con Drupal y frontend en React; herramientas internas para acelerar entregas.",
      },
      dbc: {
        position: "Senior Frontend Developer",
        oneLiner: "Herramientas internas con stack MERN y un entorno de desarrollo completo en Azure.",
      },
      hogarth: {
        position: "Digital Developer",
        oneLiner: "Sitios con Drupal para marcas globales como Dyson, HSBC y Nestlé. Premio “Hogarthiano del mes”.",
      },
      "fight-analytics": {
        position: "Chief of Design Office",
        oneLiner: "Startup de analítica de peleas de MMA: marca, layouts y frontend de la herramienta de visualización de datos.",
      },
      zerohora: {
        position: "Web Developer",
        oneLiner: "Infografías interactivas, viñetas en video y patrones gráficos para un portal de noticias.",
      },
    },
  },
  education: {
    title: "Formación y publicaciones",
    items: {
      "ufrgs-master": { degree: "Maestría en Diseño" },
      "ufrgs-ux": {
        degree: "Especialización en UX Design",
        detail: "Trabajo final: Principios de Design System Aplicados a Ambientes de Enseñanza (en portugués). Orientador: Sandro Fetter.",
      },
      "uniritter-bigdata": { degree: "Tecnicatura en Big Data e Inteligencia Analítica" },
      "laureate-mba": { degree: "MBA en Gobernanza de TI e Innovación" },
      "uniritter-design": {
        degree: "Licenciatura en Diseño Gráfico",
        detail:
          "Trabajo final: proyecto gráfico editorial para la colección Enciclopedia Galáctica, con libros de Isaac Asimov de la serie Fundación. Orientador: Norberto José Pinheiro Bozzetti.",
      },
      "ufrgs-technical": { degree: "Curso técnico en Sistemas de Información" },
      "senac-webdesign": {
        degree: "Perfeccionamiento en Web Design (Macromedia), 360 h",
        detail: "Proyecto: Web Site.",
      },
    },
    publicationsTitle: "Publicaciones y producción",
    kinds: {
      chapter: "Capítulo de libro",
      event: "Congreso",
      website: "Sitio web",
    },
    notes: {
      protheses: "Participación en el congreso.",
      moshpit: "Reseñas de álbumes musicales.",
    },
    certificationsTitle: "Certificaciones",
    certifications: [
      "Planning a Career in User Experience",
      "Claude Code 101",
      "Claude Code in Action",
      "Scrum Fundamentals Certified",
      "VI Congreso Brasileño Interdisciplinario de Ciencia y Tecnología (participación)",
    ],
    awardsTitle: "Premios",
    awards: ["Hogarthiano del mes, Hogarth Worldwide"],
  },
  projects: {
    ragnarok: {
      name: "Ragnarök",
      role: "Design System Lead · Lojas Renner",
      summary:
        "Design system creado para los sistemas de apoyo a la decisión de Renner y para su uso en microfrontends, con documentación viva en Storybook.",
      results: [
        { value: "30+", label: "componentes reutilizables, más grid system y design tokens" },
        { value: "2+", label: "equipos adoptaron el sistema" },
      ],
      highlights: [
        "Trabajo conjunto con diseño y UX para cumplir estándares de usabilidad y accesibilidad.",
        "Hub central de guías de diseño, documentación de componentes y buenas prácticas.",
        "Construido con React, TypeScript y Storybook.",
      ],
    },
    datalab: {
      name: "Datalab",
      role: "Ingeniero de Software · Lojas Renner",
      summary:
        "Sistema de apoyo a la decisión que ayuda a los equipos de negocio a decidir con datos, construido sobre el design system Ragnarök.",
      results: [],
      highlights: [
        "Frontend en React con TypeScript y backend en Node.js con GraphQL, MongoDB y capa de caché en Redis.",
        "CI/CD en pipelines de Azure, con Docker y Kubernetes.",
        "Consultas al data lake de la empresa para análisis y visualizaciones.",
      ],
    },
    "aidron-ds": {
      name: "Aidron Design System",
      role: "Head de UX/UI · Aidron",
      summary:
        "Design system para los productos web actuales y futuros de una startup de datos en crecimiento, con procesos de DesignOps para mantenerlo vivo.",
      results: [],
      highlights: [
        "Algunos componentes nacieron de necesidades específicas de clientes, manteniendo el sistema flexible.",
        "Documentación generada automáticamente con Storybook.",
        "Pipelines de despliegue y proceso de releases con control de versiones.",
      ],
    },
    "aidron-spa": {
      name: "Sitio de Aidron",
      role: "Frontend · Aidron",
      summary:
        "Sitio institucional en Next.js que presenta los productos y servicios de Aidron, integrado con el design system de la empresa.",
      results: [],
      highlights: [
        "Infografías y animaciones simples, sin sobrecargar el contenido.",
        "Diseño responsivo para distintos dispositivos y pantallas.",
        "Coherencia visual con el design system de la marca.",
      ],
    },
  },
  contact: {
    title: "Hablemos",
    text: "Ingeniería de software, design systems, UX o investigación en diseño: el correo es la vía más rápida.",
    emailCta: "Enviar un correo",
    links: { linkedin: "LinkedIn", github: "GitHub", lattes: "Currículo Lattes" },
  },
  footer: {
    rights: "Todos los derechos reservados.",
    location: "Porto Alegre, RS, Brasil",
  },
};
