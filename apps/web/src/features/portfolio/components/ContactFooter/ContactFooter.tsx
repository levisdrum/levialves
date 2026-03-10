import { Mail, PhoneCall } from "lucide-react";
import { contactFooterCopy, contactLinks } from "./ContactFooter.content";
import type { ContactFooterProps } from "./ContactFooter.types";
import "./ContactFooter.css";

export function ContactFooter({ locale, style }: ContactFooterProps) {
  const copy = contactFooterCopy[locale];

  return (
    <footer id="contact" className="DSLEVIS-section DSLEVIS-footer DSLEVIS-reveal" style={style}>
      <p className="DSLEVIS-section__kicker">
        <Mail aria-hidden="true" size={15} />
        <span>{copy.navLabel}</span>
      </p>
      <h3 className="DSLEVIS-section__title">{copy.footerTitle}</h3>
      <p className="DSLEVIS-section__lead">{copy.footerText}</p>

      <div className="DSLEVIS-footer__grid">
        <article className="DSLEVIS-footer__card">
          <span className="DSLEVIS-footer__icon" aria-hidden="true">
            <Mail size={16} />
          </span>
          <h4>{copy.emailLabel}</h4>
          <a href={`mailto:${contactLinks.email}`}>{contactLinks.email}</a>
        </article>

        <article className="DSLEVIS-footer__card">
          <span className="DSLEVIS-footer__icon" aria-hidden="true">
            <PhoneCall size={16} />
          </span>
          <h4>{copy.phoneLabel}</h4>
          <a href="tel:+5511933157405">{contactLinks.phone}</a>
        </article>
      </div>
    </footer>
  );
}
