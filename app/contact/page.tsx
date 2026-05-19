import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./_components/contact-form";
import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";

export const metadata: Metadata = {
  title: "Contact Us | HARTS",
  description: "Connect with HARTS global headquarters and regional offices.",
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
          titleStrong="conversation."
          subtitle="Whether you are navigating a major transformation, exploring a growth opportunity, or seeking an independent strategic perspective - our team is ready to engage."
          actions={
            <Link className="solid-button large" href="#inquiry">
              Send an inquiry
            </Link>
          }
        />

        <section className="section contact-inquiry-section" id="inquiry">
          <div className="contact-form-block reveal">
            <div className="contact-form-header">
              <h2>Send us your inquiry</h2>
              <p>Share your challenge and a senior consultant will respond within one business day.</p>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="section locations-section">
          <div className="section-heading reveal">
            <h2>Find Us</h2>
          </div>
          <div className="location-map-block reveal">
            <div className="location-map-info">
              <h3>Coimbatore</h3>
              <p>
                7C, Mayflower Signature<br />
                Avinashi Road, Peelamedu<br />
                Coimbatore &ndash; 641004<br />
                Tamil Nadu, India
              </p>
              <p className="contact-info">
                <strong>Email:</strong> hello@globalharts.com
              </p>
              <p className="contact-info">
                <strong>Phone:</strong> +91 422 000 0000
              </p>
            </div>
            <div className="location-map-embed">
              <iframe
                title="HARTS Coimbatore Office"
                src="https://maps.google.com/maps?q=Mayflower+Signature+Avinashi+Road+Peelamedu+Coimbatore+641004&output=embed&z=16"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
