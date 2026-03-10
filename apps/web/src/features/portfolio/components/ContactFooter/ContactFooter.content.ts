import type { Locale } from "../../types";
import type { ContactFooterCopy } from "./ContactFooter.types";

export const contactFooterCopy: Record<Locale, ContactFooterCopy> = {
  pt: {
    navLabel: "Contato",
    footerTitle: "Vamos construir algo sólido em Design Systems",
    footerText:
      "Disponível para conversar sobre arquitetura de Design System, governança, acessibilidade e evolução de bibliotecas de componentes.",
    emailLabel: "E-mail",
    phoneLabel: "Celular"
  },
  en: {
    navLabel: "Contact",
    footerTitle: "Let’s build solid Design Systems",
    footerText:
      "Open to discussions about Design System architecture, governance, accessibility, and component library evolution.",
    emailLabel: "E-mail",
    phoneLabel: "Phone"
  }
};

export const contactLinks = {
  email: "levisfront@gmail.com",
  phone: "+55 11 93315-7405"
};
