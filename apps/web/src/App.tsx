import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { AboutSection, CasesSection, ContactFooter, ExperienceSection, Sidebar, TechnologySection } from "./features/portfolio/components";
import type { Locale } from "./features/portfolio/types";
import type { PortfolioSectionId } from "./features/portfolio/components/Sidebar/Sidebar.types";

const revealStyle = (index: number): CSSProperties =>
  ({ ["--DSLEVIS-reveal-delay" as string]: `${index * 60}ms` }) as CSSProperties;

const SECTION_IDS: PortfolioSectionId[] = ["about", "technology", "experience", "cases", "contact"];

export function App() {
  const [activeSection, setActiveSection] = useState<PortfolioSectionId>("about");
  const [locale, setLocale] = useState<Locale>("pt");
  const today = useMemo(() => new Date(), []);

  const formattedDate = useMemo(
    () =>
      new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
      }).format(today),
    [locale, today]
  );

  const isoDate = useMemo(() => today.toISOString().slice(0, 10), [today]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".DSLEVIS-reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -80px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [locale]);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollAnchor = window.scrollY + window.innerHeight * 0.35;
      let currentSection: PortfolioSectionId = SECTION_IDS[0];

      SECTION_IDS.forEach((sectionId) => {
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= scrollAnchor) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="DSLEVIS-app">
      <div className="DSLEVIS-layout">
        <Sidebar
          activeSection={activeSection}
          locale={locale}
          setLocale={setLocale}
          isoDate={isoDate}
          formattedDate={formattedDate}
          style={revealStyle(0)}
        />

        <main className="DSLEVIS-main">
          <AboutSection locale={locale} style={revealStyle(1)} />
          <TechnologySection locale={locale} style={revealStyle(2)} />
          <ExperienceSection locale={locale} style={revealStyle(3)} />
          <CasesSection locale={locale} style={revealStyle(4)} />
          <ContactFooter locale={locale} style={revealStyle(5)} />
        </main>
      </div>
    </div>
  );
}
