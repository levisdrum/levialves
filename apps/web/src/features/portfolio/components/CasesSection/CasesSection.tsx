import { ArrowUpRight, FolderKanban } from "lucide-react";
import { Button } from "@levi/ui";
import { caseStudies, casesSectionCopy } from "./CasesSection.content";
import type { CasesSectionProps } from "./CasesSection.types";
import { withBasePath } from "../../asset-path";
import "./CasesSection.css";

export function CasesSection({ locale, style }: CasesSectionProps) {
  const copy = casesSectionCopy[locale];

  return (
    <section id="cases" className="DSLEVIS-section DSLEVIS-section--cases DSLEVIS-reveal" style={style}>
      <p className="DSLEVIS-section__kicker">
        <FolderKanban aria-hidden="true" size={15} />
        <span>{copy.navLabel}</span>
      </p>
      <h3 className="DSLEVIS-section__title">{copy.casesTitle}</h3>
      <p className="DSLEVIS-section__lead">{copy.casesText}</p>

      <div className="DSLEVIS-cases__list">
        {caseStudies.map((item) => (
          <article className="DSLEVIS-cases__item" key={item.title}>
            <div className="DSLEVIS-cases__media">
              <img src={withBasePath(item.cover)} alt={item.title} loading="lazy" />
            </div>

            <div className="DSLEVIS-cases__content">
              <div className="DSLEVIS-cases__header">
                <p className="DSLEVIS-cases__company">{item.company}</p>
                <h4>{item.title}</h4>
                <p className="DSLEVIS-cases__context">{item.context[locale]}</p>
              </div>

              <ul className="DSLEVIS-cases__highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="DSLEVIS-cases__columns">
                <div>
                  <h5>{copy.labels.decisions}</h5>
                  <ul>
                    {item.decisions.map((decision) => (
                      <li key={decision[locale]}>{decision[locale]}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>{copy.labels.impact}</h5>
                  <ul>
                    {item.impact.map((impact) => (
                      <li key={impact[locale]}>{impact[locale]}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="DSLEVIS-cases__actions">
                <Button asChild size="sm" variant="secondary">
                  <a className="DSLEVIS-cases__button" href={item.link} target="_blank" rel="noreferrer">
                    <span>{copy.ctas.openReference}</span>
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
