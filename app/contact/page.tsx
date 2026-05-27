import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./_components/contact-form";
import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";

export const metadata: Metadata = {
  title: "Contact HARTS — Start a Conversation",
  description:
    "Connect with HARTS Consulting in Coimbatore, India. Email hello@globalharts.com or send a project inquiry to start a senior-led conversation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact HARTS",
    description:
      "Start a conversation with HARTS Consulting. Senior-led, focused responses within one business day.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactRoute() {
  return (
    <PageShell>
      <main className="contact-page">
        <PageHero
          scene="contact"
          layout="split"
          eyebrow="Connect"
          titleSoft="Let’s start a"
          titleStrong="Conversation."
          subtitle="Whether you are navigating a major transformation, exploring a growth opportunity, or seeking an independent strategic perspective, our team is ready to engage."
          actions={
            <Link className="solid-button large" href="#inquiry">
              Send an inquiry
            </Link>
          }
        />

        <section className="section contact-inquiry-section" id="inquiry">
          <div className="contact-form-block reveal">
            <div className="contact-form-header">
              <h2>Send Us Your Inquiry</h2>
              <p>Share your challenge and a senior consultant will respond within one business day.</p>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="contact-offices-section">
          <div className="contact-offices-shell">

            <header className="contact-offices-head">
              <p className="contact-offices-eyebrow">Find Us</p>
              <h2 className="contact-offices-heading">Our global offices</h2>
            </header>

            <div className="contact-offices-grid">

              {/* Germany — Headquarters */}
              <div className="contact-office-card">
                <span className="contact-office-tag">Europe</span>
                <h3 className="contact-office-city">Düsseldorf</h3>
                <address className="contact-office-address">
                  350 ABC Street<br />
                  Boston, XYZ 02116<br />
                  Germany
                </address>
                {/* <span className="contact-office-country">Germany</span> */}
              </div>

              {/* India */}
              <div className="contact-office-card">
                <span className="contact-office-tag">India</span>
                <h3 className="contact-office-city">Coimbatore</h3>
                <address className="contact-office-address">
                  7C, Mayflower Signature<br />
                  Avinashi Road, Peelamedu<br />
                  Coimbatore &ndash; 641004
                </address>
                {/* <span className="contact-office-country">India</span> */}
              </div>

            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
