import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { ContactForm } from "./_components/contact-form";
import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";

const offices = [
  {
    region: "Europe",
    city: "Düsseldorf",
    lines: ["Am Wildpark 51", "40629 Düsseldorf", "Germany"],
    directions:
      "https://www.google.com/maps/search/?api=1&query=Am+Wildpark+51+40629+D%C3%BCsseldorf+Germany",
  },
  {
    region: "India",
    city: "Coimbatore",
    lines: ["7C, Mayflower Signature", "Avinashi Road, Peelamedu", "Coimbatore – 641004"],
    directions: "https://maps.app.goo.gl/sQyjGTZzVEdVLYC67",
  },
];

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
          // actions={
          //   <Link className="solid-button large" href="#inquiry">
          //     Send an inquiry
          //   </Link>
          // }
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

        <section className="locations-section">
          <div className="locations-shell">
            <header className="locations-head">
              <p className="locations-eyebrow">Find Us</p>
              <h2 className="locations-heading">
                Where you can <em>reach us.</em>
              </h2>
            </header>

            <div className="locations-grid">
              {offices.map((office) => (
                <article key={office.city} className="location-card">
                  <span className="location-pin" aria-hidden="true">
                    <MapPin size={22} strokeWidth={1.8} />
                  </span>
                  <span className="location-region">{office.region}</span>
                  <h3 className="location-city">{office.city}</h3>
                  <address className="location-address">
                    {office.lines.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < office.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </address>
                  <a
                    className="location-directions"
                    href={office.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get directions <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
