import Link from "next/link";
import type { ReactNode } from "react";

export type FinalCTAAction = {
  label: string;
  href: string;
};

export type FinalCTAProps = {
  eyebrow?: string;
  heading: ReactNode;
  body?: ReactNode;
  primary: FinalCTAAction;
  secondary?: FinalCTAAction;
};

/**
 * Final CTA — the unified call-to-action band that sits directly above the
 * site footer on every content page. One component so every page shares the
 * same background, typography, and button layout.
 */
export function FinalCTA({
  eyebrow,
  heading,
  body,
  primary,
  secondary,
}: FinalCTAProps) {
  return (
    <section className="final-cta">
      <div className="final-cta-inner">
        {eyebrow ? <p className="eyebrow final-cta-eyebrow">{eyebrow}</p> : null}
        <h2 className="final-cta-heading">{heading}</h2>
        {body ? <p className="final-cta-body">{body}</p> : null}
        <div className="final-cta-actions">
          <Link className="solid-button large" href={primary.href}>
            {primary.label}
          </Link>
          {secondary ? (
            <Link className="outline-button large" href={secondary.href}>
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
