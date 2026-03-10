import { Github, Instagram, Linkedin, MonitorCog, UserRound, BriefcaseBusiness, FolderKanban, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@levi/ui";
import { sidebarCopy, socialLinks } from "./Sidebar.content";
import type { PortfolioSectionId, SidebarProps } from "./Sidebar.types";
import { withBasePath } from "../../asset-path";
import "./Sidebar.css";

const navIcons: Record<PortfolioSectionId, typeof UserRound> = {
  about: UserRound,
  technology: MonitorCog,
  experience: BriefcaseBusiness,
  cases: FolderKanban,
  contact: Mail
};

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram: Instagram
} as const;

export function Sidebar({ activeSection, locale, setLocale, isoDate, formattedDate, style }: SidebarProps) {
  const copy = sidebarCopy[locale];
  const navItems: Array<{ id: PortfolioSectionId; label: string }> = [
    { id: "about", label: copy.nav.about },
    { id: "technology", label: copy.nav.technology },
    { id: "experience", label: copy.nav.experience },
    { id: "cases", label: copy.nav.cases },
    { id: "contact", label: copy.nav.contact }
  ];

  return (
    <aside className="DSLEVIS-sidebar DSLEVIS-reveal" style={style}>
      <Avatar className="DSLEVIS-sidebar__avatar">
        <AvatarImage src={withBasePath("/img/profile-linkedin.jpg")} alt="Levi Alves" loading="eager" />
        <AvatarFallback>LA</AvatarFallback>
      </Avatar>

      <p className="DSLEVIS-sidebar__date">
        <span>{copy.heroDateLabel}</span>
        <time dateTime={isoDate}>{formattedDate}</time>
      </p>

      <h1 className="DSLEVIS-sidebar__name">Levi Alves</h1>
      <h2 className="DSLEVIS-sidebar__role">{copy.role}</h2>
      <p className="DSLEVIS-sidebar__title">{copy.heroTitle}</p>
      <p className="DSLEVIS-sidebar__lead">{copy.heroLead}</p>

      <nav className="DSLEVIS-sidebar__nav" aria-label="Sections">
        {navItems.map((item) => {
          const Icon = navIcons[item.id];

          return (
            <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? "page" : undefined}>
              <Icon aria-hidden="true" size={14} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="DSLEVIS-sidebar__actions">
        <div className="DSLEVIS-lang-toggle" role="group" aria-label="Language">
          <button type="button" onClick={() => setLocale("pt")} aria-pressed={locale === "pt"}>
            PT-BR
          </button>
          <button type="button" onClick={() => setLocale("en")} aria-pressed={locale === "en"}>
            EN
          </button>
        </div>

        <Button asChild size="sm" variant="subtle">
          <a href={withBasePath("/pdf/levialves.pdf")} target="_blank" rel="noreferrer">
            {copy.ctas.cv}
          </a>
        </Button>
      </div>

      <div className="DSLEVIS-sidebar__social">
        {socialLinks.map((item) => {
          const Icon = socialIcons[item.key];

          return (
            <a key={item.key} href={item.href} target="_blank" rel="noreferrer" aria-label={item.key}>
              <Icon aria-hidden="true" size={15} />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
