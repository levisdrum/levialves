import type { CSSProperties } from "react";
import type { Locale } from "../../types";

export type ContactFooterCopy = {
  navLabel: string;
  footerTitle: string;
  footerText: string;
  emailLabel: string;
  phoneLabel: string;
};

export type ContactFooterProps = {
  locale: Locale;
  style: CSSProperties;
};
