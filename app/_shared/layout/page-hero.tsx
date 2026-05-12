import type { ReactNode } from "react";
import Link from "next/link";

export type Crumb = { label: string; href?: string };

export type PageHeroProps = {
  eyebrow: string;
  titleSoft?: string;
  titleStrong: string;
  subtitle?: ReactNode;
  watermark?: string;
  crumbs?: Crumb[];
  scene?:
    | "default"
    | "about"
    | "industries"
    | "industry-aerospace"
    | "industry-automotive"
    | "industry-oil-gas"
    | "industry-healthcare"
    | "industry-chemicals"
    | "industry-life-sciences"
    | "industry-energy"
    | "industry-technology"
    | "industry-telecom"
    | "industry-transportation"
    | "how-we-help"
    | "how-we-work"
    | "careers"
    | "contact";
  actions?: ReactNode;
};

export function PageHero({
  eyebrow,
  titleSoft,
  titleStrong,
  subtitle,
  watermark = "CACHE",
  crumbs,
  scene = "default",
  actions,
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${scene}`} aria-labelledby="page-hero-title">
      <div className="page-hero-scene" aria-hidden="true">
        <div className="page-hero-scene-layer page-hero-scene-image" />
        <div className="page-hero-scene-layer page-hero-scene-grid" />
        <div className="page-hero-scene-layer page-hero-scene-veil" />
      </div>

      <span className="page-hero-watermark" aria-hidden="true">
        {watermark}
      </span>

      <div className="page-hero-shell">
        {crumbs && crumbs.length > 0 ? (
          <nav className="page-hero-breadcrumbs" aria-label="Breadcrumb">
            {crumbs.map((crumb, i) => (
              <span key={`${crumb.label}-${i}`} className="page-hero-crumb">
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
                {i < crumbs.length - 1 ? (
                  <span className="page-hero-crumb-sep" aria-hidden="true">
                    /
                  </span>
                ) : null}
              </span>
            ))}
          </nav>
        ) : null}

        <div className="page-hero-content">
          <p className="welcome-kicker page-hero-kicker">{eyebrow}</p>
          <h1 id="page-hero-title" className="page-hero-title">
            {titleSoft ? (
              <span className="welcome-title-soft page-hero-title-soft">{titleSoft}</span>
            ) : null}
            <span className="welcome-title-strong page-hero-title-strong">{titleStrong}</span>
          </h1>
          {subtitle ? <p className="page-hero-subtitle">{subtitle}</p> : null}
          {actions ? <div className="page-hero-actions">{actions}</div> : null}
        </div>

        <div className="page-hero-scroll-cue" aria-hidden="true">
          <span className="page-hero-scroll-line">
            <span />
          </span>
        </div>
      </div>
    </section>
  );
}
