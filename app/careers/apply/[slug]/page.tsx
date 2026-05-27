import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageShell } from "../../../_shared/layout/page-shell";
import { findOpening, openings } from "../../../_data/openings";
import { ApplicationForm } from "./_components/application-form";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return openings.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata(
  { params }: RouteProps,
): Promise<Metadata> {
  const { slug } = await params;
  const opening = findOpening(slug);
  if (!opening) return { title: "Apply | HARTS Careers" };
  return {
    title: `Apply: ${opening.role} | HARTS Careers`,
    description: opening.description,
  };
}

export default async function ApplyPage({ params }: RouteProps) {
  const { slug } = await params;
  const opening = findOpening(slug);
  if (!opening) notFound();

  return (
    <PageShell>
      <main className="apply-page">
        <header className="apply-hero">
          <div className="apply-hero-inner">
            <Link className="apply-back" href="/careers#openings">
              <span aria-hidden="true">←</span> Back to openings
            </Link>
            <p className="eyebrow">{opening.team}</p>
            <h1>{opening.role}</h1>
            <ul className="apply-meta" aria-label="Role details">
              <li>
                <span className="apply-meta-label">Location</span>
                <span>{opening.location}</span>
              </li>
              <li>
                <span className="apply-meta-label">Employment type</span>
                <span>{opening.employmentType}</span>
              </li>
              <li>
                <span className="apply-meta-label">Practice</span>
                <span>{opening.title}</span>
              </li>
            </ul>
          </div>
        </header>

        <section className="apply-body">
          <div className="apply-body-inner">
            <aside className="apply-summary">
              <section>
                <h2>About the role</h2>
                <p>{opening.description}</p>
              </section>

              <section>
                <h2>What you&apos;ll do</h2>
                <ul>
                  {opening.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>What we&apos;re looking for</h2>
                <ul>
                  {opening.qualifications.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </section>
            </aside>

            <div className="apply-form-wrap">
              <div className="apply-form-card">
                <header className="apply-form-head">
                  <h2>Submit your application</h2>
                  <p>
                    Tell us about you. We respond to every application within
                    five business days.
                  </p>
                </header>
                <ApplicationForm
                  roleSlug={opening.slug}
                  roleTitle={opening.role}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
