import type { CardProps } from "./card.types";
import "./card.css";

export function Card({ title, description, eyebrow, action }: CardProps) {
  return (
    <article className="DSLEVIS-ui-card" aria-label={title}>
      {eyebrow ? <p className="DSLEVIS-ui-card__eyebrow">{eyebrow}</p> : null}
      <h3 className="DSLEVIS-ui-card__title">{title}</h3>
      <p className="DSLEVIS-ui-card__description">{description}</p>
      {action ? <div className="DSLEVIS-ui-card__action">{action}</div> : null}
    </article>
  );
}
