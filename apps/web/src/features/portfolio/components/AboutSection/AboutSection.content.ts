import type { Locale } from "../../types";
import type {
  AboutSectionCopy,
  FocusPillar,
  GalleryItem,
  GlossaryItem,
  ThinkingCard
} from "./AboutSection.types";

export const aboutSectionCopy: Record<Locale, AboutSectionCopy> = {
  pt: {
    navLabel: "Sobre",
    aboutTitle: "Sobre mim",
    aboutText:
      "Atuo na interseção entre design e engenharia para transformar fundamentos visuais em plataformas de UI reutilizáveis, acessíveis e escaláveis.",
    personalityTitle: "Personalidade e forma de trabalhar",
    galleryTitle: "Vida além do código",
    galleryText:
      "Música, família, amigos e bastidores fazem parte da minha forma de construir colaboração e consistência no trabalho.",
    focusTitle: "Sistemas de Design: foco atual",
    focusText:
      "Minha atuação prioriza arquitetura de tokens, bibliotecas de componentes, integração com design e adoção transversal por múltiplos produtos.",
    thinkingTitle: "Design System thinking",
    thinkingText: "Princípios para manter consistência, autonomia dos times e evolução contínua do sistema.",
    glossaryTitle: "Glossário rápido de Design System",
    glossaryText:
      "Vocabulário consistente para alinhar design, engenharia e produto com menos ruído e mais velocidade.",
    profileFacts: [
      "15+ anos em frontend, arquitetura de UI e produtos digitais.",
      "Foco atual em Design System web e mobile com visão de plataforma.",
      "Experiência em produtos multi-marca, governança e evolução de componentes.",
      "Atuação próxima de design, engenharia e produto para acelerar entrega com qualidade."
    ],
    personality: [
      "Baterista desde os 13 anos e formado em percussão pelo Instituto Tom Jobim (ULM).",
      "Projetos musicais com John Wayne, Savant Inc, Erik Moraes e Broad and Sharp.",
      "A música fortalece disciplina, ritmo, escuta ativa e colaboração no dia a dia técnico.",
      "Liderança mão na massa com foco em acessibilidade, qualidade e impacto real no produto."
    ]
  },
  en: {
    navLabel: "About",
    aboutTitle: "About me",
    aboutText:
      "I work at the intersection of design and engineering to turn visual foundations into reusable, accessible, and scalable UI platforms.",
    personalityTitle: "Personality and working style",
    galleryTitle: "Life beyond code",
    galleryText:
      "Music, family, friends, and backstage moments shape how I build collaboration and consistency at work.",
    focusTitle: "Design Systems: current focus",
    focusText:
      "My work prioritizes token architecture, component libraries, design integration, and cross-product adoption.",
    thinkingTitle: "Design System thinking",
    thinkingText: "Principles to keep consistency, team autonomy, and continuous system evolution.",
    glossaryTitle: "Quick Design System glossary",
    glossaryText:
      "Shared vocabulary to align design, engineering, and product with less friction and faster delivery.",
    profileFacts: [
      "15+ years in frontend, UI architecture, and digital products.",
      "Current focus on web and mobile Design Systems with platform thinking.",
      "Experience in multi-brand products, governance, and component evolution.",
      "Close collaboration across design, engineering, and product to improve delivery quality."
    ],
    personality: [
      "Drummer since age 13 and formally trained in percussion at Tom Jobim Institute (ULM).",
      "Music projects with John Wayne, Savant Inc, Erik Moraes, and Broad and Sharp.",
      "Music practice reinforces discipline, rhythm, active listening, and collaboration in engineering.",
      "Hands-on technical leadership focused on accessibility, quality, and real product impact."
    ]
  }
};

export const focusPillars: FocusPillar[] = [
  {
    title: { pt: "Arquitetura de Tokens", en: "Token Architecture" },
    description: {
      pt: "Tokens como contrato entre design e código para múltiplos produtos e marcas.",
      en: "Tokens as a contract between design and code across products and brands."
    }
  },
  {
    title: { pt: "Governança de Componentes", en: "Component Governance" },
    description: {
      pt: "Padrões, ownership e versionamento para reduzir divergência visual.",
      en: "Standards, ownership, and versioning to reduce visual drift."
    }
  },
  {
    title: { pt: "Design-to-Code", en: "Design-to-Code" },
    description: {
      pt: "Integração entre Figma, documentação e implementação com foco em adoção.",
      en: "Integration between Figma, documentation, and implementation with adoption focus."
    }
  }
];

export const thinkingCards: ThinkingCard[] = [
  {
    title: { pt: "Sistema antes da tela", en: "System over screens" },
    description: {
      pt: "Decisões guiadas por consistência sistêmica, não por ajustes isolados em páginas.",
      en: "Decisions guided by system consistency, not isolated page-level fixes."
    }
  },
  {
    title: { pt: "A11y como baseline", en: "A11y as baseline" },
    description: {
      pt: "Acessibilidade entra desde a fundação de componentes e tokens.",
      en: "Accessibility starts at the foundation level of components and tokens."
    }
  },
  {
    title: { pt: "Governança com adoção", en: "Governance with adoption" },
    description: {
      pt: "Governança só funciona quando os times conseguem usar e evoluir o sistema com autonomia.",
      en: "Governance works when teams can adopt and evolve the system autonomously."
    }
  }
];

export const glossary: GlossaryItem[] = [
  {
    term: "Design Tokens",
    description: {
      pt: "Variáveis semânticas (cor, espaço, tipografia) que conectam design e código.",
      en: "Semantic variables (color, spacing, typography) connecting design and code."
    }
  },
  {
    term: "Component Library",
    description: {
      pt: "Conjunto de componentes reutilizáveis com API, acessibilidade e documentação.",
      en: "Reusable component set with API, accessibility, and documentation."
    }
  },
  {
    term: "Governança",
    description: {
      pt: "Modelo de decisão para evolução, depreciação e qualidade do sistema.",
      en: "Decision model for evolution, deprecation, and system quality."
    }
  },
  {
    term: "Adoção",
    description: {
      pt: "Estratégia para facilitar uso real do Design System pelos times de produto.",
      en: "Strategy to drive real Design System usage across product teams."
    }
  },
  {
    term: "Acessibilidade",
    description: {
      pt: "Critérios WCAG como base de qualidade, não como etapa final.",
      en: "WCAG criteria as a quality baseline, not a final checklist."
    }
  },
  {
    term: "DX (Developer Experience)",
    description: {
      pt: "Experiência de desenvolvimento com documentação clara e fluxo previsível.",
      en: "Developer experience with clear docs and predictable workflows."
    }
  }
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/img/instagram/Cx6aNEdu68J.jpg",
    alt: "Levi tocando bateria em apresentação ao vivo",
    title: { pt: "Palco e energia", en: "Stage energy" },
    caption: {
      pt: "Bateria ao vivo e performance com foco em presença e precisão.",
      en: "Live drumming performance focused on presence and precision."
    }
  },
  {
    src: "/img/instagram/DMO2586sSKH.jpg",
    alt: "Levi com amigos em viagem internacional",
    title: { pt: "Conexões e propósito", en: "Connections and purpose" },
    caption: {
      pt: "Momentos com amigos e comunidade em experiências internacionais.",
      en: "Moments with friends and community during international experiences."
    }
  },
  {
    src: "/img/instagram/CwVzEB6uYTw.jpg",
    alt: "Levi com a mãe em momento de lazer",
    title: { pt: "Família", en: "Family" },
    caption: {
      pt: "Registros de férias e tempo de qualidade com a família.",
      en: "Holiday memories and quality time with family."
    }
  },
  {
    src: "/img/instagram/C_IsnOyuJgl.jpg",
    alt: "Levi em celebração com amigos",
    title: { pt: "Amigos", en: "Friends" },
    caption: {
      pt: "Encontros com amigos e celebrações fora do contexto de trabalho.",
      en: "Gatherings with friends and celebrations outside work context."
    }
  },
  {
    src: "/img/instagram/DEA9AZohIFV.jpg",
    alt: "Levi em celebração de Natal",
    title: { pt: "Datas especiais", en: "Special dates" },
    caption: {
      pt: "Momentos pessoais que equilibram rotina técnica e vida.",
      en: "Personal moments that balance technical routine and life."
    }
  },
  {
    src: "/img/instagram/CmkoWhVOdYs.jpg",
    alt: "Levi em celebração de fim de ano",
    title: { pt: "Vida pessoal", en: "Personal life" },
    caption: {
      pt: "Experiências que fortalecem repertório, sensibilidade e colaboração.",
      en: "Experiences that strengthen repertoire, sensitivity, and collaboration."
    }
  },
  {
    src: "/img/gallery/03.jpg",
    alt: "Levi tocando bateria com banda",
    title: { pt: "Bastidores de show", en: "Show backstage" },
    caption: {
      pt: "Acervo histórico de shows e gravações com banda.",
      en: "Historical archive from concerts and recording sessions."
    }
  }
];
