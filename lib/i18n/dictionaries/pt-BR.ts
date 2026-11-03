import type { Dictionary } from "../types";

export const ptBR: Dictionary = {
  meta: {
    siteName: "Fernando Camilotti",
    title: "Fernando Camilotti — Engenheiro de Software e Designer UX",
    description:
      "Engenheiro de software e designer de UX em Porto Alegre. Mais de 15 anos criando produtos web e design systems rápidos, acessíveis e consistentes.",
    jobTitle: "Engenheiro de Software e Designer de UX",
    ogAlt: "Fernando Camilotti, engenheiro de software e designer de UX: título sobre um túnel triangular de luz azul e branca",
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
      "Mais de 15 anos construindo produtos web e design systems. Uno engenharia e UX para entregar interfaces rápidas, acessíveis e consistentes.",
    current: "Hoje: Full Stack Engineer na Solvd · Chefe de UX/UI na Aidron",
    ctaWork: "Ver trabalhos",
    ctaContact: "Entrar em contato",
  },
  metrics: [
    { value: "15+", label: "anos em desenvolvimento web e UX" },
    { value: "30+", label: "componentes reutilizáveis em um design system" },
    { value: "300+", label: "usuários diários em um sistema integrado de dados" },
    { value: "2", label: "design systems criados do zero" },
  ],
  work: {
    title: "Trabalhos selecionados",
    intro:
      "Cinco projetos em que design e engenharia se encontram: um app nativo para macOS, dois design systems, uma plataforma de decisão orientada a dados e um site institucional.",
    resultsLabel: "Resultados",
    repoLabel: "Ver no GitHub",
    detail: {
      eyebrow: "Estudo de caso",
      back: "Trabalhos",
      readCase: "Ler estudo de caso",
      stackTitle: "Tecnologias",
      linksTitle: "Links",
      repo: "Código no GitHub",
      download: "Baixar o app",
      site: "Conhecer a ZeroServer",
    },
  },
  about: {
    title: "Sobre",
    paragraphs: [
      "Sou engenheiro de software sênior e especialista em UX, com mais de 15 anos de experiência em desenvolvimento web e design de experiência do usuário. Minha formação passa por Design Gráfico, MBA em Governança em TI, tecnólogo em Big Data e Inteligência Analítica e especialização em UX Design.",
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
      native: "Apps nativos (macOS)",
      backend: "Backend e dados",
      infra: "Infraestrutura e qualidade",
      design: "Design e UX",
      process: "Processo e mais",
    },
  },
  experience: {
    title: "Experiência",
    intro: "Mais de 15 anos entre engenharia de software, design de interfaces e liderança de UX/UI.",
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
    readPublication: "Ler publicação",
    kinds: {
      chapter: "Capítulo de livro",
      event: "Trabalho em congresso",
      website: "Site",
    },
    notes: {
      protheses: "Trabalho completo publicado nos anais.",
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
    "zeroserver-control": {
      name: "ZeroServer Control",
      role: "Criador · ZeroServer Community Cloud",
      summary:
        "App nativo de barra de menus para macOS da ZeroServer, a nuvem comunitária brasileira: o agente do seu Mac e todos os nós da sua conta a um clique, sem terminal nem aba de dashboard.",
      results: [],
      highlights: [
        "Controla o agente local deste Mac e todos os nós da conta: status ao vivo, pausar, retomar e parar, com CPU, RAM e disco de cada nó.",
        "Dashboard com telemetria de 24 horas em gráficos nativos (Swift Charts) e linha do tempo dos eventos de cada nó.",
        "Feito com os princípios da ZeroServer: código aberto (MIT), credenciais só no Keychain, auditoria de segurança com correções cobertas por testes e interface em português e inglês.",
      ],
      detail: {
        metaTitle: "ZeroServer Control: app para macOS",
        metaDescription:
          "Estudo de caso do ZeroServer Control, app nativo em Swift que controla os nós da ZeroServer Community Cloud: arquitetura, segurança, testes e roadmap.",
        ogAlt:
          "Capa do estudo de caso ZeroServer Control: malha de nós, menu da barra de menus e gráfico de telemetria",
        lead: "O ZeroServer Control vive na barra de menus do Mac e coloca a ZeroServer Community Cloud a um clique: o agente da sua máquina e todos os nós da sua conta, sem abrir terminal nem uma aba de dashboard.",
        facts: [
          { label: "Papel", value: "Criador" },
          { label: "Ano", value: "2026" },
          { label: "Plataforma", value: "macOS 13+ · Swift e SwiftUI" },
          { label: "Licença", value: "MIT (código aberto)" },
          { label: "Status", value: "v0.1.1 publicada no GitHub" },
        ],
        sections: [
          {
            title: "O contexto",
            paragraphs: [
              "A ZeroServer é uma nuvem comunitária brasileira: quem tem hardware ocioso, como um PC gamer ou um servidor caseiro, vira provedor de um nó, e quem desenvolve faz deploy na malha a custo justo. O manifesto fala em descentralizar o poder, aproveitar o ocioso e construir confiança pela transparência.",
              "Faltava algo simples para quem provê: saber, sem esforço, se o seu nó e os outros da conta estão saudáveis, ocupados ou fora do ar. Até então isso significava olhar uma janela de terminal ou manter aberta uma aba do painel web.",
              "O app responde a isso com um utilitário leve, sempre disponível, no mesmo lugar onde você olharia a hora.",
            ],
          },
          {
            title: "O que o app faz",
            bullets: [
              "Agente deste Mac: iniciar, parar e consultar o status do LaunchDaemon do nó provedor local. A consulta roda sem senha; iniciar e parar pedem a autorização de administrador do próprio macOS.",
              "Todos os nós da conta: status ao vivo (online, ocioso, ocupado, sobrecarregado, offline), pausar e retomar os que estão online, forçar a parada de qualquer um e ver CPU, RAM e disco de cada nó.",
              "Dashboard: telemetria das últimas 24 horas em gráficos nativos (Swift Charts), um resumo do momento atual e uma linha do tempo dos eventos de status de cada nó.",
              "Detalhes de utilitário de verdade: abrir no login do Mac, interface em português e inglês e login pedido só quando necessário (o controle do agente local não exige conta).",
            ],
          },
          {
            title: "Arquitetura",
            paragraphs: [
              "É um cliente fino: não existe backend próprio. O app fala com a mesma API GraphQL que um painel web usaria e, no Mac, com o launchd por meio do launchctl.",
            ],
            figure: "architecture",
            caption:
              "Os módulos do app: Account (sessão e clientes de API), Remote (polling e ações nos nós), Controller (agente local) e a interface em SwiftUI.",
          },
          {
            title: "Decisões de projeto",
            bullets: [
              "Swift Package Manager, sem projeto do Xcode. Só as Command Line Tools bastam, e um script monta o .app com Info.plist, ícone e assinatura ad-hoc. Qualquer pessoa compila com swift build.",
              "Polling adaptativo: a lista de nós atualiza a cada 10 segundos e, se a API falha, recua exponencialmente até 60 segundos, voltando ao ritmo normal no primeiro sucesso. A telemetria de 24 horas usa uma cadência mais lenta.",
              "Sem corridas entre leitura e ação: a consulta é somente leitura e não disputa com pausar, retomar ou forçar a parada, e a lista tem ordenação estável para as linhas não se reembaralharem a cada atualização.",
              "O modelo respeita o backend: \"pausado\" não é um status de conectividade, então não foi modelado como um.",
            ],
          },
          {
            title: "Segurança",
            paragraphs: [
              "Antes de crescer, o app passou por uma auditoria completa de segurança, corretude e interface. Tudo o que apareceu foi corrigido, e cada correção virou um teste de regressão. Os principais pontos:",
            ],
            bullets: [
              "Injeção de comando. O rótulo do daemon podia vir de uma variável de ambiente e chegava a um shell executado com privilégios de administrador. Um processo local sem privilégios poderia definir essa variável e rodar código como root quando o usuário clicasse em Iniciar e digitasse a senha. Agora só entram rótulos no formato de um identificador do launchd (letras, dígitos, ponto, hífen e sublinhado); qualquer outra coisa volta ao rótulo de produção.",
              "Corrida na renovação da sessão. O polling e outra ação podiam renovar o token ao mesmo tempo, reenviando o mesmo refresh token, o que derrubaria a sessão se o backend o rotaciona. Agora existe uma única renovação em voo, e um contador de época descarta renovações que terminam depois de um logout.",
              "Credenciais. Só o refresh token é gravado, direto no Keychain, restrito ao app e a este dispositivo. Nada em texto puro e nada em log.",
              "Telemetria inválida. Um valor não finito (NaN ou infinito) derrubava o app, e agora é tratado.",
            ],
          },
          {
            title: "Qualidade e entrega",
            bullets: [
              "Testes sem framework: como as Command Line Tools não trazem o XCTest, o script de testes compila o código de produção (contas, nós e modelos) junto com drivers escritos à mão, só com swiftc, e falha com código de saída diferente de zero. É uma barreira de verdade, não um teste manual.",
              "CI no GitHub Actions (macOS): build, testes, verificação contra segredos no código e checagem de que as traduções em inglês e português têm exatamente as mesmas chaves. Uma chave esquecida cai em silêncio no texto cru, e essa checagem pega isso antes de publicar.",
              "Um LaunchDaemon descartável para testar o controle do agente sem instalar o agente real.",
              "Releases versionadas, com o app empacotado em .zip.",
            ],
          },
          {
            title: "Limites conhecidos",
            bullets: [
              "Assinatura ad-hoc, sem notarização: no primeiro uso é preciso clicar com o botão direito e escolher Abrir.",
              "O menu da barra não permanece aberto depois de um clique (limitação do estilo de menu do SwiftUI). Uma versão em janela está no roadmap.",
              "A telemetria vai até 24 horas, que é o que o backend mantém.",
            ],
          },
          {
            title: "Próximos passos",
            bullets: [
              "Notificações de saúde dos nós: comparar cada atualização com a anterior, avisar só os eventos que o usuário escolher e abrir o nó certo no dashboard.",
              "Assinatura com Developer ID, notarização e atualização automática.",
              "Várias contas e busca e filtro para contas grandes.",
            ],
          },
        ],
      },
    },
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
