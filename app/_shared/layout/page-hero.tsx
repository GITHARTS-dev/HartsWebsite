import type { ReactNode } from "react";

export type PageHeroProps = {
  eyebrow?: string;
  titleSoft?: string;
  titleStrong: string;
  subtitle?: ReactNode;
  watermark?: string;
  scene?:
    | "default"
    | "home"
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
    | "service-innovation"
    | "service-mergers-acquisitions"
    | "service-operation"
    | "service-strategy"
    | "service-transformation"
    | "service-gcc-setup"
    | "service-sustainability"
    | "service-people-and-organization"
    | "how-we-work"
    | "careers"
    | "contact";
  /** Visual composition. `center` keeps the legacy centered hero, `split` aligns
   *  text to the left over a red-to-transparent gradient layered on the scene image. */
  layout?: "center" | "split";
  actions?: ReactNode;
  /** Optional inline scene art rendered above the static image layer.
   *  Used by the home hero for an animated SVG composition. Decorative. */
  sceneArt?: ReactNode;
};

export function PageHero({
  eyebrow,
  titleSoft,
  titleStrong,
  subtitle,
  watermark = "CACHE",
  scene = "default",
  layout = "center",
  actions,
  sceneArt,
}: PageHeroProps) {
  return (
    <section
      className={`page-hero page-hero--${scene} page-hero--layout-${layout}`}
      aria-labelledby="page-hero-title"
    >
      <div className="page-hero-scene" aria-hidden="true">
        <div className="page-hero-scene-layer page-hero-scene-image" />
        <div className="page-hero-scene-layer page-hero-scene-grid" />
        {sceneArt ? (
          <div className="page-hero-scene-layer page-hero-scene-art">
            {sceneArt}
          </div>
        ) : null}
        <div className="page-hero-scene-layer page-hero-scene-veil" />
      </div>

      <span className="page-hero-watermark" aria-hidden="true">
        {watermark}
      </span>

      <div className="page-hero-shell">
        <div className="page-hero-content">
          {eyebrow ? (
            <p className="welcome-kicker page-hero-kicker">{eyebrow}</p>
          ) : null}
          <h1 id="page-hero-title" className="page-hero-title">
            {titleSoft ? (
              <span className="welcome-title-soft page-hero-title-soft">{titleSoft}</span>
            ) : null}
            <span className="welcome-title-strong page-hero-title-strong">{titleStrong}</span>
          </h1>
          {subtitle ? <p className="page-hero-subtitle">{subtitle}</p> : null}
          {actions ? <div className="page-hero-actions">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
