import type { CSSProperties } from "react";
import type { Localized, Locale } from "../../types";

export type TechnologyGroupId = "designSystems" | "frontend" | "mobile" | "tooling" | "legacy";

export type TechnologyGroup = {
  id: TechnologyGroupId;
  title: Localized;
  description: Localized;
  items: string[];
};

export type TechnologySectionCopy = {
  navLabel: string;
  title: string;
  text: string;
};

export type TechnologySectionProps = {
  locale: Locale;
  style: CSSProperties;
};
