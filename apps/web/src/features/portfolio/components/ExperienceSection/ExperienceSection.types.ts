import type { CSSProperties } from "react";
import type { Localized, Locale } from "../../types";

export type CareerEntry = {
  company: string;
  period: Localized;
  role: Localized;
  projects: string[];
  technologies: string[];
};

export type ExperienceSectionCopy = {
  navLabel: string;
  careerTitle: string;
  careerText: string;
  projectsLabel: string;
  technologiesLabel: string;
};

export type ExperienceSectionProps = {
  locale: Locale;
  style: CSSProperties;
};
