import type { CSSProperties } from "react";
import type { Localized, Locale } from "../../types";

export type CaseStudy = {
  title: string;
  company: string;
  cover: string;
  link: string;
  highlights: string[];
  context: Localized;
  decisions: Localized[];
  impact: Localized[];
};

export type CasesSectionCopy = {
  navLabel: string;
  casesTitle: string;
  casesText: string;
  labels: {
    decisions: string;
    impact: string;
  };
  ctas: {
    openReference: string;
  };
};

export type CasesSectionProps = {
  locale: Locale;
  style: CSSProperties;
};
