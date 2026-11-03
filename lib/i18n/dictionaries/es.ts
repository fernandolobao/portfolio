import type { Dictionary } from "../types";

export const es: Dictionary = {
  meta: {
    siteName: "Fernando Camilotti",
    title: "Fernando Camilotti — Ingeniero de Software y Diseñador UX",
    description:
      "Ingeniero de software y diseñador UX en Porto Alegre, Brasil. Más de 15 años creando productos web y design systems rápidos, accesibles y consistentes.",
    jobTitle: "Ingeniero de Software y Diseñador UX",
    ogAlt: "Fernando Camilotti, ingeniero de software y diseñador UX: titular sobre un túnel triangular de luz azul y blanca",
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
      "Más de 15 años creando productos web y design systems. Combino ingeniería y UX para entregar interfaces rápidas, accesibles y consistentes.",
    current: "Hoy: Full Stack Engineer en Solvd · Head de UX/UI en Aidron",
    ctaWork: "Ver trabajos",
    ctaContact: "Ponerse en contacto",
  },
  metrics: [
    { value: "15+", label: "años en desarrollo web y UX" },
    { value: "30+", label: "componentes reutilizables en un design system" },
    { value: "300+", label: "usuarios diarios de un sistema integrado de datos" },
    { value: "2", label: "design systems creados desde cero" },
  ],
  work: {
    title: "Trabajos seleccionados",
    intro:
      "Cinco proyectos donde se encuentran el diseño y la ingeniería: una app nativa para macOS, dos design systems, una plataforma de decisión basada en datos y un sitio institucional.",
    resultsLabel: "Resultados",
    repoLabel: "Ver en GitHub",
    detail: {
      eyebrow: "Caso de estudio",
      back: "Trabajos",
      readCase: "Leer el caso de estudio",
      stackTitle: "Tecnologías",
      linksTitle: "Enlaces",
      repo: "Código en GitHub",
      download: "Descargar la app",
      site: "Conocer ZeroServer",
    },
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Soy ingeniero de software sénior y especialista en UX, con más de 15 años de experiencia en desarrollo web y diseño de experiencia de usuario. Mi formación incluye Diseño Gráfico, un MBA en Gobernanza de TI, una tecnicatura en Big Data e Inteligencia Analítica y una especialización en UX Design.",
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
      native: "Apps nativas (macOS)",
      backend: "Backend y datos",
      infra: "Infraestructura y calidad",
      design: "Diseño y UX",
      process: "Proceso y más",
    },
  },
  experience: {
    title: "Experiencia",
    intro: "Más de 15 años entre ingeniería de software, diseño de interfaces y liderazgo de UX/UI.",
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
    readPublication: "Leer publicación",
    kinds: {
      chapter: "Capítulo de libro",
      event: "Trabajo en congreso",
      website: "Sitio web",
    },
    notes: {
      protheses: "Trabajo completo publicado en las actas.",
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
    "zeroserver-control": {
      name: "ZeroServer Control",
      role: "Creador · ZeroServer Community Cloud",
      summary:
        "App nativa de barra de menús para macOS de ZeroServer, la nube comunitaria brasileña: el agente de tu Mac y todos los nodos de tu cuenta a un clic, sin terminal ni pestaña de dashboard.",
      results: [],
      highlights: [
        "Controla el agente local de este Mac y todos los nodos de la cuenta: estado en vivo, pausar, reanudar y detener, con CPU, RAM y disco de cada nodo.",
        "Dashboard con telemetría de 24 horas en gráficos nativos (Swift Charts) y línea de tiempo de los eventos de cada nodo.",
        "Hecha con los principios de ZeroServer: código abierto (MIT), credenciales solo en el Keychain, auditoría de seguridad con correcciones cubiertas por pruebas e interfaz en portugués e inglés.",
      ],
      detail: {
        metaTitle: "ZeroServer Control: app para macOS",
        metaDescription:
          "Caso de estudio de ZeroServer Control, app nativa en Swift que controla los nodos de ZeroServer Community Cloud: arquitectura, seguridad, pruebas y roadmap.",
        ogAlt:
          "Portada del caso de estudio ZeroServer Control: una malla de nodos, el menú de la barra de menús y un gráfico de telemetría",
        lead: "ZeroServer Control vive en la barra de menús del Mac y pone ZeroServer Community Cloud a un clic: el agente de tu máquina y todos los nodos de tu cuenta, sin abrir una terminal ni una pestaña de dashboard.",
        facts: [
          { label: "Rol", value: "Creador" },
          { label: "Año", value: "2026" },
          { label: "Plataforma", value: "macOS 13+ · Swift y SwiftUI" },
          { label: "Licencia", value: "MIT (código abierto)" },
          { label: "Estado", value: "v0.1.1 publicada en GitHub" },
        ],
        sections: [
          {
            title: "El contexto",
            paragraphs: [
              "ZeroServer es una nube comunitaria brasileña: quien tiene hardware ocioso, como un PC gamer o un servidor casero, se vuelve proveedor de un nodo, y quien desarrolla hace deploy en la malla a un costo justo. Su manifiesto habla de descentralizar el poder, aprovechar lo ocioso y construir confianza con transparencia.",
              "A quien provee le faltaba algo simple: saber, sin esfuerzo, si su nodo y los demás de la cuenta están sanos, ocupados o caídos. Hasta entonces eso significaba mirar una ventana de terminal o mantener abierta una pestaña del panel web.",
              "La app responde a eso con una utilidad ligera, siempre disponible, en el mismo lugar donde mirarías la hora.",
            ],
          },
          {
            title: "Qué hace la app",
            bullets: [
              "Agente de este Mac: iniciar, detener y consultar el estado del LaunchDaemon del nodo proveedor local. La consulta no pide contraseña; iniciar y detener piden la autorización de administrador del propio macOS.",
              "Todos los nodos de la cuenta: estado en vivo (online, inactivo, ocupado, sobrecargado, offline), pausar y reanudar los que están online, forzar la detención de cualquiera y ver CPU, RAM y disco de cada nodo.",
              "Dashboard: telemetría de las últimas 24 horas en gráficos nativos (Swift Charts), un resumen del momento actual y una línea de tiempo de los eventos de estado de cada nodo.",
              "Detalles de utilidad de verdad: abrir al iniciar sesión en el Mac, interfaz en portugués e inglés y inicio de sesión solo cuando hace falta (controlar el agente local no requiere cuenta).",
            ],
          },
          {
            title: "Arquitectura",
            paragraphs: [
              "Es un cliente delgado: no existe un backend propio. La app habla con la misma API GraphQL que usaría un panel web y, en el Mac, con launchd mediante launchctl.",
            ],
            figure: "architecture",
            caption:
              "Los módulos de la app: Account (sesión y clientes de API), Remote (polling y acciones sobre los nodos), Controller (agente local) y la interfaz en SwiftUI.",
          },
          {
            title: "Decisiones de diseño",
            bullets: [
              "Swift Package Manager, sin proyecto de Xcode. Bastan las Command Line Tools, y un script arma el .app con su Info.plist, ícono y firma ad-hoc. Cualquiera compila con swift build.",
              "Polling adaptativo: la lista de nodos se actualiza cada 10 segundos y, si la API falla, retrocede exponencialmente hasta 60 segundos, volviendo al ritmo normal en el primer éxito. La telemetría de 24 horas usa una cadencia más lenta.",
              "Sin carreras entre lectura y acción: la consulta es de solo lectura y no compite con pausar, reanudar o forzar la detención, y la lista tiene un orden estable para que las filas no se reordenen en cada actualización.",
              "El modelo respeta al backend: \"pausado\" no es un estado de conectividad, así que no se modeló como uno.",
            ],
          },
          {
            title: "Seguridad",
            paragraphs: [
              "Antes de crecer, la app pasó por una auditoría completa de seguridad, corrección e interfaz. Todo lo que apareció se corrigió, y cada corrección se volvió una prueba de regresión. Los puntos principales:",
            ],
            bullets: [
              "Inyección de comandos. La etiqueta del daemon podía venir de una variable de entorno y llegar a un shell ejecutado con privilegios de administrador. Un proceso local sin privilegios podía definir esa variable y ejecutar código como root cuando el usuario hacía clic en Iniciar y escribía su contraseña. Ahora solo se aceptan etiquetas con forma de identificador de launchd (letras, dígitos, punto, guion y guion bajo); cualquier otra cosa vuelve a la etiqueta de producción.",
              "Carrera en la renovación de la sesión. El polling y otra acción podían renovar el token a la vez, reenviando el mismo refresh token, lo que tumbaría la sesión si el backend lo rota. Ahora hay una única renovación en vuelo, y un contador de época descarta las renovaciones que terminan después de un cierre de sesión.",
              "Credenciales. Solo se guarda el refresh token, directo en el Keychain, restringido a la app y a este dispositivo. Nada en texto plano y nada en logs.",
              "Telemetría inválida. Un valor no finito (NaN o infinito) tumbaba la app, y ahora se maneja.",
            ],
          },
          {
            title: "Calidad y entrega",
            bullets: [
              "Pruebas sin framework: como las Command Line Tools no traen XCTest, el script de pruebas compila el código de producción (cuentas, nodos y modelos) junto con drivers escritos a mano, solo con swiftc, y falla con un código de salida distinto de cero. Es una barrera real, no una prueba manual.",
              "CI en GitHub Actions (macOS): build, pruebas, verificación contra secretos en el código y comprobación de que las traducciones en inglés y portugués tienen exactamente las mismas claves. Una clave olvidada cae en silencio al texto crudo, y esta comprobación lo detecta antes de publicar.",
              "Un LaunchDaemon descartable para probar el control del agente sin instalar el agente real.",
              "Releases versionadas, con la app empaquetada en .zip.",
            ],
          },
          {
            title: "Límites conocidos",
            bullets: [
              "Firma ad-hoc, sin notarización: en el primer uso hay que hacer clic derecho y elegir Abrir.",
              "El menú de la barra no permanece abierto después de un clic (limitación del estilo de menú de SwiftUI). Una versión en ventana está en el roadmap.",
              "La telemetría llega hasta 24 horas, que es lo que conserva el backend.",
            ],
          },
          {
            title: "Próximos pasos",
            bullets: [
              "Notificaciones de salud de los nodos: comparar cada actualización con la anterior, avisar solo los eventos que el usuario elija y abrir el nodo correcto en el dashboard.",
              "Firma con Developer ID, notarización y actualización automática.",
              "Varias cuentas, además de búsqueda y filtro para cuentas grandes.",
            ],
          },
        ],
      },
    },
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
      detail: {
        metaTitle: "Ragnarök: design system white label",
        metaDescription:
          "Caso de estudio de Ragnarök, design system white label para productos de datos de Renner: de Figma al código, con 53% menos tiempo de desarrollo.",
        ogAlt:
          "Portada del caso de estudio Ragnarök Design System: componentes, tokens y tipografía de un design system",
        lead: "Ragnarök es un design system white label para los productos de datos de Lojas Renner. El concepto nació en el equipo de UX; yo llevé al código todo lo que viene después de Figma: componentes, documentación, empaquetado, publicación, versionado y handoff.",
        facts: [
          { label: "Rol", value: "Design System Lead (de Figma al código)" },
          { label: "Empresa", value: "Lojas Renner · Tribu Datalab" },
          { label: "Año", value: "2021" },
          { label: "Stack", value: "React · TypeScript · Sass · Storybook" },
          { label: "Lanzamiento", value: "18 de mayo" },
        ],
        credit: {
          label: "Concepto documentado por Rodrigo Cibils",
          href: "https://cibils.notion.site/Concep-o-do-Ragnar-k-Design-System-Whitelabel-para-Produtos-de-Dados-fc73a8d94e404f3fb28455eded1a3227",
        },
        sections: [
          {
            title: "El contexto",
            paragraphs: [
              "La tribu Datalab, de Lojas Renner, construye productos de datos para un público interno: personas de Renner, Camicado, Ashua y Youcom que deciden con base en análisis. Esos productos nacían directamente en el código, sin una etapa de prototipado en Figma, sin styleguide y sin design system. El resultado eran pantallas sin consistencia, entregas lentas y poco engagement de quienes los usaban.",
              "Ragnarök fue la respuesta: un design system pensado para varios productos y varias marcas (white label), con la ambición de reducir a la mitad el tiempo de desarrollo de un nuevo producto de datos.",
              "El concepto, la investigación y el diseño son de Rodrigo Cibils, Chapter Lead y DesignOps de la tribu, y están documentados por él. Este caso de estudio cuenta la otra mitad: cómo ese concepto se convirtió en el código que las personas ingenieras usan todos los días.",
            ],
          },
          {
            title: "El concepto, en resumen",
            paragraphs: [
              "Para entender las decisiones del código, conviene resumir lo que vino del diseño:",
            ],
            bullets: [
              "Un sistema, varias marcas. Los tokens varían por unidad de negocio (Renner, Camicado, Ashua y Youcom) y los componentes son compartidos. Eso lo hace white label: el mismo componente viste marcas distintas.",
              "Bibliotecas en tres categorías. Las omnipresentes (componentes básicos y gráficos) sirven a todos; las fragmentadas (tokens e iconografía) pertenecen a cada unidad; las opcionales atienden a un producto específico.",
              "Partir de lo que ya existía. La lista de componentes salió de un inventario de los productos de datos en uso, con referencias de sistemas maduros del mercado. Los gráficos aprovechan una biblioteca de gráficos existente, y los íconos vienen de un conjunto genérico, para ganar tiempo.",
              "Desktop primero. Las personas usan los productos en notebooks y muchas decisiones ocurren en reuniones, así que el sistema no nació mobile first.",
              "Gobernanza compartida. El design system tiene una guardia dividida entre los capítulos de UX e Ingeniería de Software, con roles y procesos para crear, corregir y mejorar componentes.",
              "El nombre. En la mitología nórdica, Ragnarök es la batalla que termina el mundo y abre un nuevo comienzo, la imagen elegida para un nuevo ciclo de productos de datos.",
            ],
          },
          {
            title: "Mi parte: de Figma al código",
            paragraphs: [
              "Con el concepto definido y modelado en Figma, asumí todo lo que viene después:",
            ],
            bullets: [
              "Desarrollo. Los componentes en React y TypeScript, con los design tokens como variables Sass, partiendo de los tipos de token del concepto: canvas y grid, espaciado, elevación, borde, colores de marca, neutros, semánticos y de apoyo, tipografía y movimiento.",
              "Documentación viva. Un hub en Storybook con las guías, la documentación de cada componente y las buenas prácticas, para que el equipo use el sistema sin depender de una conversación.",
              "Empaquetado, publicación y versionado. Empaqueté, publiqué y versioné la biblioteca para que los productos pudieran adoptarla.",
              "Handoff, DesignOps y DevOps. El camino entre Figma y el código, con el proceso para crear nuevos componentes y corregir los existentes.",
              "Métricas de uso. Hotjar y Google Analytics, para entender cómo se usaban el sistema y los productos.",
            ],
            figure: "pipeline",
            caption:
              "El camino de la ingeniería: de Figma (tokens y variantes) al handoff, a los tokens en Sass, a los componentes, a Storybook y al paquete versionado que adoptan los productos de datos.",
          },
          {
            title: "Resultados",
            paragraphs: [
              "La meta hipotética era reducir en 50% el tiempo de desarrollo. En la primera oportunidad de uso, un nuevo producto de datos, Ragnarök se acercó: 53% menos tiempo de desarrollo en comparación con el último producto hecho de forma tradicional, y 33% más de engagement de las personas usuarias. Las mediciones están registradas en la documentación del concepto.",
            ],
            bullets: [
              "Más de 30 componentes reutilizables, además del grid y los tokens, adoptados por más de dos equipos.",
              "Datalab, la plataforma de apoyo a la decisión de Renner, usa el sistema completo.",
              "Una ventaja en la contratación: dos personas de UX entrevistadas por la tribu, que estaban en otros procesos de selección, eligieron el equipo porque ya tenía un design system.",
            ],
          },
          {
            title: "Aprendizajes",
            bullets: [
              "Mostrar valor primero. Entregar el design system antes de procesos más pesados dio un retorno visible rápido y abrió espacio para la cultura de UX.",
              "El compromiso pesa más que el tamaño del equipo. Con el apoyo de las personas involucradas, un design system puede nacer con un equipo pequeño, sin una consultora especializada.",
              "Documentar es parte del producto. Un sistema solo reduce el tiempo de entrega si las personas pueden usarlo por su cuenta.",
            ],
          },
          {
            title: "Límites y próximos pasos",
            bullets: [
              "Los componentes se hicieron con los recursos de Figma de la época, como Auto Layout y variantes, antes de las variables y los componentes interactivos. Migrar a ellos es una evolución natural.",
              "La iconografía usa un conjunto genérico. Cada unidad de negocio podría tener íconos propios.",
              "Los gráficos se apoyan en una biblioteca existente. Dividirlos en microcomponentes daría más libertad a las personas diseñadoras para componer gráficos.",
            ],
          },
          {
            title: "Crédito y fuentes",
            paragraphs: [
              "Concepto, descubrimiento, definición y diseño de Ragnarök: Rodrigo Cibils. La información sobre el contexto, las decisiones de concepto y las mediciones viene de su documentación, reescrita aquí desde el punto de vista de quien llevó el sistema al código. Las pantallas y los materiales del proceso están en la fuente original.",
            ],
          },
        ],
      },
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
