import type { Dictionary } from "../types";

export const ptBR: Dictionary = {
  meta: {
    siteName: "Fernando Camilotti",
    title: "Fernando Camilotti — Engenheiro de Software e Designer",
    description:
      "Engenheiro de software e designer em Porto Alegre, RS. Mais de 10 anos construindo produtos web e design systems rápidos, acessíveis e consistentes, entre engenharia e UX.",
    jobTitle: "Engenheiro de Software e Designer de UX",
  },
  nav: {
    work: "Trabalhos",
    about: "Sobre",
    skills: "Habilidades",
    experience: "Experiência",
    education: "Formação",
    contact: "Contato",
  },
  ui: {
    skipToContent: "Ir para o conteúdo",
    menu: "Menu",
    language: "Idioma",
    toggleTheme: "Alternar tema claro e escuro",
    present: "Atual",
    sectionLabel: "Seção",
  },
  hero: {
    location: "Porto Alegre, Brasil",
    title: "Engenheiro de software e designer.",
    subtitle:
      "Mais de 10 anos construindo produtos web e design systems. Uno engenharia e UX para entregar interfaces rápidas, acessíveis e consistentes.",
    current: "Hoje: Full Stack Engineer na Solvd · Chefe de UX/UI na Aidron",
    ctaWork: "Ver trabalhos",
    ctaContact: "Entrar em contato",
  },
  metrics: [
    { value: "10+", label: "anos em desenvolvimento web e UX" },
    { value: "30+", label: "componentes reutilizáveis em um design system" },
    { value: "300+", label: "usuários diários em um sistema integrado de dados" },
    { value: "2", label: "design systems criados do zero" },
  ],
  work: {
    title: "Trabalhos selecionados",
    intro:
      "Quatro projetos em que design e engenharia se encontram: dois design systems, uma plataforma de decisão orientada a dados e um site institucional.",
    resultsLabel: "Resultados",
  },
  about: {
    title: "Sobre",
    paragraphs: [
      "Sou engenheiro de software sênior e especialista em UX, com mais de 10 anos de experiência em desenvolvimento web e design de experiência do usuário. Minha formação passa por Design Gráfico, MBA em Governança em TI, tecnólogo em Big Data e Inteligência Analítica e especialização em UX Design.",
      "Atuo na interseção entre código e design: já liderei um design system, estruturei processos de DesignOps e fiz a ponte entre designers e desenvolvedores em equipes multidisciplinares. Gosto de colaborar com desenvolvedores, designers e stakeholders para entregar soluções de qualidade, que atendam às necessidades de quem as usa.",
      "Hoje sou Full Stack Engineer na Solvd e Chefe de UX/UI na Aidron. Também estou cursando o mestrado em Design na UFRGS (2025–2027).",
    ],
    photoAlt: "Retrato de Fernando Camilotti, de óculos e barba, diante de uma estante de livros",
    languagesTitle: "Idiomas",
    languages: [
      { name: "Português", level: "nativo" },
      { name: "Inglês", level: "avançado" },
      { name: "Espanhol", level: "limitado" },
      { name: "Italiano", level: "boa leitura" },
    ],
  },
  skills: {
    title: "Habilidades",
    intro: "Do componente no Storybook ao pipeline de deploy, passando pela pesquisa com usuários.",
    groups: {
      frontend: "Frontend",
      backend: "Backend e dados",
      infra: "Infraestrutura e qualidade",
      design: "Design e UX",
      process: "Processo e mais",
    },
  },
  experience: {
    title: "Experiência",
    intro: "Mais de 10 anos entre engenharia de software, design de interfaces e liderança de UX/UI.",
    earlierTitle: "Antes",
    items: {
      solvd: { position: "Full Stack Engineer" },
      aidron: {
        position: "Chefe de UX/UI",
        location: "Porto Alegre, RS",
        summary: "Responsável pelo design system, pelo site institucional e pelos processos de DesignOps.",
        bullets: [
          "Criou o design system da empresa, que passou a ser um diferencial na conquista de clientes.",
          "Estabeleceu pipelines de deploy e um processo de releases para manter o design system sempre atualizado.",
        ],
      },
      fsl: {
        position: "Senior Software Engineer",
        location: "Remoto",
        summary: "Atuação em times de clientes, construindo aplicações web com tecnologias modernas.",
        bullets: [
          "Aplicações usadas por enfermeiros em locais de vacinação e testagem durante a pandemia de Covid-19.",
          "Co-criação de um hub com arquitetura de microfrontends para centralizar ferramentas internas.",
          "Ferramenta de formulários com campos condicionais para checklists e relatórios em canteiros de obras.",
          "Ferramenta de geolocalização (Mapbox e Google Maps) para uma empresa de segurança privada acompanhar incêndios florestais e precificar planos por zona de risco.",
          "Integração com Stripe para pagamentos em várias aplicações.",
        ],
      },
      "renner-ds": {
        position: "Design System Lead",
        location: "Porto Alegre, RS",
        summary: "Design system para aplicações orientadas a dados, usado por vários times.",
        bullets: [
          "Design system construído do zero com Storybook e React, adotado por 2+ times (Ragnarök).",
          "Responsável por DesignOps e DevOps no handoff entre designers e desenvolvedores.",
          "Métricas de uso com Hotjar e Google Analytics.",
        ],
      },
      "renner-se": {
        position: "Engenheiro de Software",
        location: "Porto Alegre, RS",
        summary: "Liderança técnica de aplicações web com React e Node.js.",
        bullets: [
          "Integração de vários sistemas internos em uma aplicação orientada a dados, usada por 300+ colaboradores por dia.",
          "Previsão de vendas com rede neural (Flask e Python) a partir de dados históricos.",
          "Pipeline completo de desenvolvimento e deploy no Azure, com testes unitários e e2e (Cypress).",
        ],
      },
      cwi: {
        position: "Analista de Sistemas",
        oneLiner: "Portal de notícias com Drupal e frontend em React; ferramentas internas para acelerar entregas.",
      },
      dbc: {
        position: "Senior Frontend Developer",
        oneLiner: "Ferramentas internas com stack MERN e um ambiente de desenvolvimento completo no Azure.",
      },
      hogarth: {
        position: "Digital Developer",
        oneLiner: "Sites com Drupal para marcas globais como Dyson, HSBC e Nestlé. Prêmio “Hogarthiano do mês”.",
      },
      "fight-analytics": {
        position: "Chief of Design Office",
        oneLiner: "Startup de analytics de lutas de MMA: marca, layouts e frontend da ferramenta de visualização de dados.",
      },
      zerohora: {
        position: "Web Developer",
        oneLiner: "Infográficos interativos, vinhetas e padrões gráficos para o portal de notícias.",
      },
    },
  },
  education: {
    title: "Formação e publicações",
    items: {
      "ufrgs-master": { degree: "Mestrado em Design" },
      "ufrgs-ux": {
        degree: "Especialização em UX Design",
        detail: "TCC: Princípios de Design System Aplicados a Ambientes de Ensino. Orientador: Sandro Fetter.",
      },
      "uniritter-bigdata": { degree: "Tecnólogo em Big Data e Inteligência Analítica" },
      "laureate-mba": { degree: "MBA em Governança em TI e Inovação" },
      "uniritter-design": {
        degree: "Bacharelado em Design Gráfico",
        detail:
          "TCC: projeto gráfico editorial para a coleção Enciclopédia Galáctica, com livros de Isaac Asimov, da série Fundação. Orientador: Norberto José Pinheiro Bozzetti.",
      },
      "ufrgs-technical": { degree: "Curso técnico em Sistemas de Informação" },
      "senac-webdesign": {
        degree: "Aperfeiçoamento em Web Design (Macromedia), 360 h",
        detail: "Projeto: Web Site.",
      },
    },
    publicationsTitle: "Publicações e produção",
    kinds: {
      chapter: "Capítulo de livro",
      event: "Congresso",
      website: "Site",
    },
    notes: {
      protheses: "Participação no congresso.",
      moshpit: "Resenhas de álbuns musicais.",
    },
    certificationsTitle: "Certificações",
    certifications: [
      "Planning a Career in User Experience",
      "Claude Code 101",
      "Claude Code in Action",
      "Scrum Fundamentals Certified",
      "VI Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia (participação)",
    ],
    awardsTitle: "Prêmios",
    awards: ["Hogarthiano do mês, Hogarth Worldwide"],
  },
  projects: {
    ragnarok: {
      name: "Ragnarök",
      role: "Design System Lead · Lojas Renner",
      summary:
        "Design system criado para os sistemas de apoio à decisão da Renner e para o uso em microfrontends, com documentação viva no Storybook.",
      results: [
        { value: "30+", label: "componentes reutilizáveis, mais grid e design tokens" },
        { value: "2+", label: "times adotaram o sistema" },
      ],
      highlights: [
        "Trabalho conjunto com design e UX para cumprir padrões de usabilidade e acessibilidade.",
        "Hub central de diretrizes, documentação de componentes e boas práticas.",
        "Construído com React, TypeScript e Storybook.",
      ],
    },
    datalab: {
      name: "Datalab",
      role: "Engenheiro de Software · Lojas Renner",
      summary:
        "Sistema de apoio à decisão que ajuda times de negócio a decidir com dados, consumindo o design system Ragnarök.",
      results: [],
      highlights: [
        "Frontend em React com TypeScript e backend em Node.js com GraphQL, MongoDB e cache em Redis.",
        "CI/CD em pipelines do Azure, com Docker e Kubernetes.",
        "Consultas ao data lake da empresa para análises e visualizações.",
      ],
    },
    "aidron-ds": {
      name: "Aidron Design System",
      role: "Chefe de UX/UI · Aidron",
      summary:
        "Design system para os produtos web atuais e futuros de uma startup de dados em crescimento, com processos de DesignOps para mantê-lo vivo.",
      results: [],
      highlights: [
        "Alguns componentes nasceram de necessidades específicas de clientes, mantendo o sistema flexível.",
        "Documentação gerada automaticamente com Storybook.",
        "Pipelines de deploy e processo de releases com controle de versões.",
      ],
    },
    "aidron-spa": {
      name: "Site da Aidron",
      role: "Frontend · Aidron",
      summary:
        "Site institucional em Next.js que apresenta os produtos e serviços da Aidron, integrado ao design system da empresa.",
      results: [],
      highlights: [
        "Infográficos e animações simples, sem sobrecarregar o conteúdo.",
        "Layout responsivo para diferentes dispositivos e telas.",
        "Consistência visual com o design system da marca.",
      ],
    },
  },
  contact: {
    title: "Vamos conversar",
    text: "Engenharia de software, design systems, UX ou pesquisa em design: o e-mail é o caminho mais rápido.",
    emailCta: "Enviar e-mail",
    links: { linkedin: "LinkedIn", github: "GitHub", lattes: "Currículo Lattes" },
  },
  footer: {
    rights: "Todos os direitos reservados.",
    location: "Porto Alegre, RS, Brasil",
  },
};
