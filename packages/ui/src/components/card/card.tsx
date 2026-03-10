import { useId } from "react";
import type { CardProps } from "./card.types";
import "./card.css";

export function Card({ title, description, eyebrow, action }: CardProps) {
  const titleId = useId();
  const descriptionId = useId();

  return (
    <article className="DSLEVIS-ui-card" aria-labelledby={titleId} aria-describedby={descriptionId}>
      {eyebrow ? <p className="DSLEVIS-ui-card__eyebrow">{eyebrow}</p> : null}
      <h3 id={titleId} className="DSLEVIS-ui-card__title">
        {title}
      </h3>
      <p id={descriptionId} className="DSLEVIS-ui-card__description">
        {description}
      </p>
      {action ? <div className="DSLEVIS-ui-card__action">{action}</div> : null}
    </article>
  );
}
