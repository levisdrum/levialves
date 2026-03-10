import { Blocks, Code2, MonitorCog, MonitorSmartphone, Workflow, Wrench } from "lucide-react";
import { technologyGroups, technologySectionCopy } from "./TechnologySection.content";
import type { TechnologyGroupId, TechnologySectionProps } from "./TechnologySection.types";
import "./TechnologySection.css";

const groupIcons: Record<TechnologyGroupId, typeof Blocks> = {
  designSystems: Blocks,
  frontend: Code2,
  mobile: MonitorSmartphone,
  tooling: Workflow,
  legacy: Wrench
};

export function TechnologySection({ locale, style }: TechnologySectionProps) {
  const copy = technologySectionCopy[locale];

  return (
    <section id="technology" className="DSLEVIS-section DSLEVIS-reveal" style={style}>
      <p className="DSLEVIS-section__kicker">
        <MonitorCog aria-hidden="true" size={15} />
        <span>{copy.navLabel}</span>
      </p>
      <h3 className="DSLEVIS-section__title">{copy.title}</h3>
      <p className="DSLEVIS-section__lead">{copy.text}</p>

      <div className="DSLEVIS-technology__grid">
        {technologyGroups.map((group) => {
          const Icon = groupIcons[group.id];

          return (
            <article key={group.id} className="DSLEVIS-technology__card">
              <div className="DSLEVIS-technology__header">
                <span className="DSLEVIS-technology__icon" aria-hidden="true">
                  <Icon size={18} />
                </span>

                <div>
                  <h4 className="DSLEVIS-technology__heading">{group.title[locale]}</h4>
                  <p className="DSLEVIS-technology__description">{group.description[locale]}</p>
                </div>
              </div>

              <ul className="DSLEVIS-technology__tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
