import type { Locale } from "../../types";
import type { SidebarCopy, SidebarSocialLink } from "./Sidebar.types";

export const sidebarCopy: Record<Locale, SidebarCopy> = {
  pt: {
    role: "Design System Architect",
    heroDateLabel: "Atualizado em",
    heroTitle: "Arquitetura de Design System para escalar produto, time e qualidade.",
    heroLead:
      "Mais de 15 anos em frontend, com foco atual em Design System enterprise: tokens, componentes, documentação, adoção e governança em escala.",
    nav: {
      about: "Sobre",
      technology: "Tecnologias",
      experience: "Experiência",
      cases: "Casos",
      contact: "Contato"
    },
    ctas: {
      cv: "CV (PDF)"
    }
  },
  en: {
    role: "Design System Architect",
    heroDateLabel: "Updated on",
    heroTitle: "Design System architecture to scale product, teams, and quality.",
    heroLead:
      "15+ years in frontend engineering, now focused on enterprise Design Systems: tokens, components, documentation, adoption, and governance at scale.",
    nav: {
      about: "About",
      technology: "Technology",
      experience: "Experience",
      cases: "Use cases",
      contact: "Contact"
    },
    ctas: {
      cv: "CV (PDF)"
    }
  }
};

export const socialLinks: SidebarSocialLink[] = [
  { key: "LinkedIn", href: "https://www.linkedin.com/in/levioliveira/" },
  { key: "GitHub", href: "https://github.com/levisdrum" },
  { key: "Instagram", href: "https://www.instagram.com/levisdrum/" }
];
