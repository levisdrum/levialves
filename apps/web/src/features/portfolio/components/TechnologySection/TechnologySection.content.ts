import type { Locale } from "../../types";
import type { TechnologyGroup, TechnologySectionCopy } from "./TechnologySection.types";

export const technologySectionCopy: Record<Locale, TechnologySectionCopy> = {
  pt: {
    navLabel: "Tecnologias",
    title: "Base técnica e stack que eu uso",
    text:
      "Conjunto de tecnologias e práticas que sustentam minha atuação em arquitetura frontend, Design Systems, documentação e qualidade de engenharia."
  },
  en: {
    navLabel: "Technology",
    title: "Technical foundation and stack I use",
    text:
      "Technologies and practices that support my work across frontend architecture, Design Systems, documentation, and engineering quality."
  }
};

export const technologyGroups: TechnologyGroup[] = [
  {
    id: "designSystems",
    title: { pt: "Design Systems", en: "Design Systems" },
    description: {
      pt: "Arquitetura de tokens, bibliotecas de componentes, documentação viva e governança.",
      en: "Token architecture, component libraries, living documentation, and governance."
    },
    items: ["Design Tokens", "Storybook", "Figma", "Zeroheight", "Accessibility", "WCAG", "Governance", "Documentation"]
  },
  {
    id: "frontend",
    title: { pt: "Frontend web", en: "Web frontend" },
    description: {
      pt: "Stack principal para produto digital, interfaces escaláveis e componentização.",
      en: "Primary stack for digital products, scalable interfaces, and component architecture."
    },
    items: ["HTML5", "CSS", "Sass", "JavaScript", "TypeScript", "React", "Vue", "Lit", "Stencil", "Angular"]
  },
  {
    id: "mobile",
    title: { pt: "Mobile", en: "Mobile" },
    description: {
      pt: "Experiência com bibliotecas e bases compartilhadas para mobile.",
      en: "Experience with shared libraries and foundations for mobile platforms."
    },
    items: ["Flutter", "React Native", "Theming", "Cross-platform foundations"]
  },
  {
    id: "tooling",
    title: { pt: "Tooling e entrega", en: "Tooling and delivery" },
    description: {
      pt: "Ferramentas de build, automação, versionamento e fluxos de entrega contínua.",
      en: "Build, automation, versioning, and continuous delivery tooling."
    },
    items: ["Vite", "Vitest", "Jest Axe", "Webpack", "Gulp", "Node.js", "Git", "GitHub Actions", "JFrog", "NVM", "FVM"]
  },
  {
    id: "legacy",
    title: { pt: "Integração e legado", en: "Legacy and integration" },
    description: {
      pt: "Conhecimento útil para modernização progressiva e convivência com stacks heterogêneas.",
      en: "Useful knowledge for progressive modernization and mixed-stack environments."
    },
    items: ["jQuery", "Knockout.js", "GraphQL", "PHP", "ASP", "Bootstrap", "Material", "BEM", "SEO"]
  }
];
