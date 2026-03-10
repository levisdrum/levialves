import type { Locale } from "../../types";
import type { CasesSectionCopy, CaseStudy } from "./CasesSection.types";

export const casesSectionCopy: Record<Locale, CasesSectionCopy> = {
  pt: {
    navLabel: "Casos",
    casesTitle: "Casos de uso de Design Systems",
    casesText:
      "Casos organizados em contexto, decisões técnicas e impacto. Estrutura orientada a arquitetura, sem exposição de código proprietário.",
    labels: {
      decisions: "Decisões",
      impact: "Impacto"
    },
    ctas: {
      openReference: "Abrir referência"
    }
  },
  en: {
    navLabel: "Use cases",
    casesTitle: "Design System use cases",
    casesText:
      "Cases structured by context, technical decisions, and impact. Architecture-first narrative without exposing private code.",
    labels: {
      decisions: "Decisions",
      impact: "Impact"
    },
    ctas: {
      openReference: "Open reference"
    }
  }
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Flora Design System",
    company: "Grupo Boticário",
    cover: "/img/projects/flora.png",
    link: "https://medium.com/gbtech/cultivando-design-systems-no-grupo-botic%C3%A1rio-6a6c57dfe137",
    highlights: ["Tokens", "Governança", "Acessibilidade", "Web + mobile"],
    context: {
      pt: "Ambiente multi-produto com necessidade alta de consistência visual, acessibilidade e velocidade de entrega.",
      en: "Multi-product environment with strong demand for visual consistency, accessibility, and delivery speed."
    },
    decisions: [
      {
        pt: "Evolução de fundamentos e tokens para suportar cenário multi-marca.",
        en: "Evolution of foundations and tokens to support a multi-brand setup."
      },
      {
        pt: "Componentização orientada por acessibilidade e escala de adoção.",
        en: "Component architecture guided by accessibility and adoption scale."
      }
    ],
    impact: [
      {
        pt: "Maior previsibilidade visual entre produtos e jornadas.",
        en: "Higher visual predictability across products and journeys."
      },
      {
        pt: "Melhor alinhamento entre design, engenharia e produto.",
        en: "Better alignment between design, engineering, and product."
      }
    ]
  },
  {
    title: "Prisma Design System",
    company: "Livelo",
    cover: "/img/projects/prisma.png",
    link: "https://designsystem.livelo.com.br/",
    highlights: ["Governança", "Documentação", "E-commerce", "Adoção"],
    context: {
      pt: "Construção de base única para reduzir redundância de UI em ecossistema de produto complexo.",
      en: "Creation of a shared foundation to reduce UI redundancy in a complex product ecosystem."
    },
    decisions: [
      {
        pt: "Estruturação de pilares técnicos e práticas de governança desde o início.",
        en: "Technical pillars and governance practices structured from day one."
      },
      {
        pt: "Documentação orientada à adoção e onboarding rápido.",
        en: "Documentation designed for adoption and faster onboarding."
      }
    ],
    impact: [
      {
        pt: "Aumento de reuso e redução de retrabalho de interface.",
        en: "Higher reuse and reduced interface rework."
      },
      {
        pt: "Entrega mais consistente entre squads e canais.",
        en: "More consistent delivery across squads and channels."
      }
    ]
  },
  {
    title: "Annecy Design System",
    company: "Banco Carrefour",
    cover: "/img/projects/annecy.png",
    link: "https://www.awards.zeroheight.com/voting/a11y-bc",
    highlights: ["Zeroheight", "Lit", "Sass", "Acessibilidade"],
    context: {
      pt: "Operação de Design System voltada a documentação viva, consistência visual e qualidade contínua em fluxos financeiros e de atendimento.",
      en: "Design System operations focused on living documentation, visual consistency, and continuous quality across financial and support flows."
    },
    decisions: [
      {
        pt: "Estruturação de documentação navegável para aproximar guidelines e implementação.",
        en: "Structured navigable documentation to bring guidelines and implementation closer."
      },
      {
        pt: "Base de componentes e práticas com foco em acessibilidade e manutenção.",
        en: "Component foundations and practices focused on accessibility and maintainability."
      }
    ],
    impact: [
      {
        pt: "Redução de divergência visual entre jornadas do banco.",
        en: "Reduced visual divergence across bank journeys."
      },
      {
        pt: "Alinhamento mais claro entre design, conteúdo e engenharia.",
        en: "Clearer alignment between design, content, and engineering."
      }
    ]
  },
  {
    title: "KDLS Design System",
    company: "Kenlo",
    cover: "/img/projects/kenlo.png",
    link: "https://www.behance.net/gallery/173815939/Kenlo-Design-System",
    highlights: ["Zeroheight", "Lit", "Sass", "Flutter"],
    context: {
      pt: "Sistema orientado a padronização de produtos web e mobile, com biblioteca compartilhada e documentação para apoiar múltiplas frentes do negócio.",
      en: "System focused on standardizing web and mobile products with a shared library and documentation supporting multiple business streams."
    },
    decisions: [
      {
        pt: "Organização de componentes e guidelines para uso consistente entre times.",
        en: "Organized components and guidelines for consistent usage across teams."
      },
      {
        pt: "Extensão da base para cenários web e Flutter sem perder coerência visual.",
        en: "Extended the foundation to web and Flutter scenarios without losing visual coherence."
      }
    ],
    impact: [
      {
        pt: "Maior reuso de interface em produtos distintos do ecossistema Kenlo.",
        en: "Higher interface reuse across distinct products in the Kenlo ecosystem."
      },
      {
        pt: "Documentação mais acionável para design e desenvolvimento.",
        en: "More actionable documentation for design and engineering."
      }
    ]
  }
];
