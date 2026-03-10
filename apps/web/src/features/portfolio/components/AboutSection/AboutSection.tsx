import { UserRound } from "lucide-react";
import {
  aboutSectionCopy,
  focusPillars,
  galleryItems,
  glossary,
  thinkingCards,
} from "./AboutSection.content";
import type { AboutSectionProps } from "./AboutSection.types";
import "./AboutSection.css";

export function AboutSection({ locale, style }: AboutSectionProps) {
  const copy = aboutSectionCopy[locale];

  return (
    <section
      id="about"
      className="DSLEVIS-section DSLEVIS-section--about DSLEVIS-reveal"
      style={style}
    >
      <p className="DSLEVIS-section__kicker">
        <UserRound aria-hidden="true" size={15} />
        <span>{copy.navLabel}</span>
      </p>
      <h3 className="DSLEVIS-section__title">{copy.aboutTitle}</h3>
      <p className="DSLEVIS-section__lead">{copy.aboutText}</p>

      <article className="DSLEVIS-about__bio">
        <ul className="DSLEVIS-about__list">
          {copy.profileFacts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h4 className="DSLEVIS-about__heading">{copy.personalityTitle}</h4>
        <ul className="DSLEVIS-about__list">
          {copy.personality.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="DSLEVIS-about__ds">
        <h4 className="DSLEVIS-about__heading">{copy.focusTitle}</h4>
        <p>{copy.focusText}</p>

        <div className="DSLEVIS-about__micro-grid">
          {focusPillars.map((item) => (
            <article key={item.title.en} className="DSLEVIS-about__micro-card">
              <h5>{item.title[locale]}</h5>
              <p>{item.description[locale]}</p>
            </article>
          ))}
        </div>

        <h4 className="DSLEVIS-about__heading">{copy.thinkingTitle}</h4>
        <p>{copy.thinkingText}</p>
        <ul className="DSLEVIS-about__list DSLEVIS-about__list--thinking">
          {thinkingCards.map((item) => (
            <li key={item.title.en}>
              <strong>{item.title[locale]}:</strong> {item.description[locale]}
            </li>
          ))}
        </ul>

        <h4 className="DSLEVIS-about__heading">{copy.glossaryTitle}</h4>
        <p>{copy.glossaryText}</p>
        <dl className="DSLEVIS-about__glossary">
          {glossary.map((item) => (
            <div key={item.term}>
              <dt>{item.term}</dt>
              <dd>{item.description[locale]}</dd>
            </div>
          ))}
        </dl>
      </article>

      <div className="DSLEVIS-about__life">
        <h4 className="DSLEVIS-about__heading">{copy.galleryTitle}</h4>
        <p>{copy.galleryText}</p>

        <div
          className="DSLEVIS-about__mosaic"
          role="list"
          aria-label={copy.galleryTitle}
        >
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className="DSLEVIS-about__mosaic-item"
              role="listitem"
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>
                <strong>{item.title[locale]}</strong>
                <span>{item.caption[locale]}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
