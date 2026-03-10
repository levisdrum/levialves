import type { CSSProperties } from "react";
import type { Locale } from "../../types";

export type PortfolioSectionId = "about" | "technology" | "experience" | "cases" | "contact";

export type SidebarCopy = {
  role: string;
  heroDateLabel: string;
  heroTitle: string;
  heroLead: string;
  nav: {
    about: string;
    technology: string;
    experience: string;
    cases: string;
    contact: string;
  };
  ctas: {
    cv: string;
  };
};

export type SidebarSocialLink = {
  key: "LinkedIn" | "GitHub" | "Instagram";
  href: string;
};

export type SidebarProps = {
  activeSection: PortfolioSectionId;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isoDate: string;
  formattedDate: string;
  style: CSSProperties;
};
