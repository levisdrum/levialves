import { BriefcaseBusiness } from "lucide-react";
import { careerJourney, experienceSectionCopy } from "./ExperienceSection.content";
import type { ExperienceSectionProps } from "./ExperienceSection.types";
import "./ExperienceSection.css";

export function ExperienceSection({ locale, style }: ExperienceSectionProps) {
  const copy = experienceSectionCopy[locale];

  return (
    <section id="experience" className="DSLEVIS-section DSLEVIS-section--experience DSLEVIS-reveal" style={style}>
      <p className="DSLEVIS-section__kicker">
        <BriefcaseBusiness aria-hidden="true" size={15} />
        <span>{copy.navLabel}</span>
      </p>
      <h3 className="DSLEVIS-section__title">{copy.careerTitle}</h3>
      <p className="DSLEVIS-section__lead">{copy.careerText}</p>

      <div className="DSLEVIS-experience__list">
        {careerJourney.map((item) => (
          <article key={item.company} className="DSLEVIS-experience__item">
            <p className="DSLEVIS-experience__period">{item.period[locale]}</p>
            <div className="DSLEVIS-experience__content">
              <h4>{item.company}</h4>
              <p>{item.role[locale]}</p>
              <div className="DSLEVIS-experience__group">
                <span className="DSLEVIS-experience__label">{copy.projectsLabel}</span>
                <ul className="DSLEVIS-experience__tags">
                  {item.projects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>

              <div className="DSLEVIS-experience__group">
                <span className="DSLEVIS-experience__label">{copy.technologiesLabel}</span>
                <ul className="DSLEVIS-experience__tags DSLEVIS-experience__tags--stack">
                  {item.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
