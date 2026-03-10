import type { CSSProperties } from "react";
import type { Localized, Locale } from "../../types";

export type FocusPillar = {
  title: Localized;
  description: Localized;
};

export type ThinkingCard = {
  title: Localized;
  description: Localized;
};

export type GlossaryItem = {
  term: string;
  description: Localized;
};

export type GalleryItem = {
  src: string;
  alt: string;
  title: Localized;
  caption: Localized;
};

export type AboutSectionCopy = {
  navLabel: string;
  aboutTitle: string;
  aboutText: string;
  personalityTitle: string;
  galleryTitle: string;
  galleryText: string;
  focusTitle: string;
  focusText: string;
  thinkingTitle: string;
  thinkingText: string;
  glossaryTitle: string;
  glossaryText: string;
  profileFacts: string[];
  personality: string[];
};

export type AboutSectionProps = {
  locale: Locale;
  style: CSSProperties;
};
