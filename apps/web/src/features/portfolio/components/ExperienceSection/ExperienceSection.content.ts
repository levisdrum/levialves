import type { Locale } from "../../types";
import type { CareerEntry, ExperienceSectionCopy } from "./ExperienceSection.types";

export const experienceSectionCopy: Record<Locale, ExperienceSectionCopy> = {
  pt: {
    navLabel: "Experiência",
    careerTitle: "Empresas e projetos",
    careerText: "Experiências profissionais, produtos e stacks que marcaram minha atuação em frontend e Design Systems.",
    projectsLabel: "Projetos e contextos",
    technologiesLabel: "Tecnologias e práticas"
  },
  en: {
    navLabel: "Experience",
    careerTitle: "Companies and projects",
    careerText: "Professional experiences, product contexts, and stacks that shaped my work in frontend and Design Systems.",
    projectsLabel: "Projects and contexts",
    technologiesLabel: "Technologies and practices"
  }
};

export const careerJourney: CareerEntry[] = [
  {
    company: "Grupo Boticário",
    period: { pt: "Atual", en: "Current" },
    role: {
      pt: "Senior Frontend Engineer focado na arquitetura, evolução e adoção de Design Systems web e mobile em escala enterprise.",
      en: "Senior Frontend Engineer focused on the architecture, evolution, and adoption of enterprise Design Systems across web and mobile."
    },
    projects: ["Flora Design System", "Flora Tokens", "UX Flora Icons", "Acessibilidade e governança"],
    technologies: ["React", "TypeScript", "Storybook", "Design Tokens", "Figma", "Stitches", "Flutter", "WCAG", "GitHub Actions"]
  },
  {
    company: "Livelo",
    period: { pt: "Projeto", en: "Project" },
    role: {
      pt: "Atuação na criação do Prisma Design System e em jornadas de e-commerce com foco em padronização, governança e consistência de interface.",
      en: "Worked on the Prisma Design System and e-commerce journeys focused on standardization, governance, and interface consistency."
    },
    projects: ["Prisma Design System", "Compre com pontos", "Compre com dinheiro", "Documentação e adoção"],
    technologies: ["React", "Knockout.js", "Sass", "Design Tokens", "Documentation", "Governance", "HTML", "JavaScript"]
  },
  {
    company: "Banco Carrefour",
    period: { pt: "Projeto", en: "Project" },
    role: {
      pt: "Atuação em operação de Design System com foco em documentação viva, acessibilidade, padronização e suporte à evolução do Annecy em diferentes fluxos do banco.",
      en: "Worked on Design System operations focused on living documentation, accessibility, standardization, and Annecy evolution across multiple banking flows."
    },
    projects: ["Annecy Design System", "Guidelines", "Documentação viva", "Integração design-dev"],
    technologies: ["HTML", "Zeroheight", "Lit", "Sass", "Design Tokens", "Accessibility", "Component Library"]
  },
  {
    company: "Kenlo",
    period: { pt: "Projeto", en: "Project" },
    role: {
      pt: "Contribuição na evolução do KDLS com biblioteca de componentes, documentação e base compartilhada para produtos web e mobile do ecossistema imobiliário.",
      en: "Contributed to KDLS evolution with component libraries, documentation, and shared foundations for web and mobile products in the real estate ecosystem."
    },
    projects: ["KDLS Design System", "Biblioteca multicanal", "Guidelines", "Suporte web e Flutter"],
    technologies: ["HTML", "Zeroheight", "Lit", "Sass", "Flutter", "Documentation", "Component Library"]
  },
  {
    company: "Wunderman Brasil",
    period: { pt: "Liderança técnica", en: "Technical leadership" },
    role: {
      pt: "Liderança técnica em plataformas digitais enterprise, conectando arquitetura frontend, performance e colaboração entre times multidisciplinares.",
      en: "Technical leadership for enterprise digital platforms, connecting frontend architecture, performance, and multidisciplinary collaboration."
    },
    projects: ["Arquitetura frontend", "Qualidade e performance", "Times multidisciplinares", "Projetos institucionais e campanhas"],
    technologies: ["React", "Angular", "Node.js", "Webpack", "Sass", "JavaScript", "SEO", "Responsive Design"]
  },
  {
    company: "MJV Technology & Innovation",
    period: { pt: "Consultoria", en: "Consulting" },
    role: {
      pt: "Atuação em produtos digitais, prototipação e experiências de inovação com interface e implementação frontend.",
      en: "Worked on digital products, prototyping, and innovation experiences with interface design and frontend implementation."
    },
    projects: ["Produtos digitais", "Protótipos de alta fidelidade", "Experiências de inovação"],
    technologies: ["HTML", "CSS", "JavaScript", "UX", "UI", "Prototyping"]
  }
];
