import Link from "next/link";
import { PageShell } from "./_shared/layout/page-shell";

export const metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for is no longer part of the HARTS Consulting website.",
  // Keep dead URLs out of the index rather than letting Google hold on to a
  // 404 that still ranks for "harts".
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageShell>
      <main className="legal-page">
        <div className="legal-inner">
          <div className="legal-header">
            <p className="legal-eyebrow">404</p>
            <h1 className="legal-title">This page has moved</h1>
          </div>
          <div className="legal-body">
            <p>
              HARTS has relaunched as a consulting practice, and this address
              was part of the previous website. The page you followed no longer
              exists, but everything it covered now lives under the sections
              below.
            </p>
            <ul>
              <li>
                <Link href="/what-we-deliver">What We Deliver</Link> — our
                consulting services and engagement models
              </li>
              <li>
                <Link href="/where-you-stand">Where You Stand</Link> — the
                stages we work with you through
              </li>
              <li>
                <Link href="/about-us">Who We Are</Link> — the firm and the team
              </li>
              <li>
                <Link href="/careers">Careers</Link> — current openings
              </li>
              <li>
                <Link href="/contact">Contact</Link> — talk to us directly
              </li>
            </ul>
            <p>
              If you reached this page from a search result or a saved link,{" "}
              <Link href="/contact#inquiry">send us a note</Link> and we will
              point you to the right place.
            </p>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
