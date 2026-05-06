import type { Metadata } from "next";
import { ContactForm } from "../_components/forms/contact-form";
import { PageShell } from "../_components/layout/page-shell";

export const metadata: Metadata = {
  title: "Contact Us | HARTS",
  description: "Connect with HARTS global headquarters and regional offices.",
};

export default function ContactRoute() {
  return (
    <PageShell>
      <main>
        <section className="section contact-hero reveal">
          <div className="contact-hero-content">
            <p className="eyebrow">Contact</p>
            <h1>Connect with HARTS</h1>
            <p>
              Reach out to our team to discuss your strategic challenges and
              how we can help drive clarity and action.
            </p>
          </div>
          <div
            className="contact-hero-media"
            aria-label="Team discussing a consulting engagement"
          />
        </section>

        <section className="section contact-grid">
          <div className="contact-form-block reveal">
            <h2>Send us your inquiry</h2>
            <ContactForm />
            <div
              className="form-image"
              aria-label="Client inquiry planning session"
            />
          </div>

          <div className="hq-block reveal delay-one">
            <div className="hq-image" aria-label="HARTS office building" />
            <h2>HARTS global headquarters</h2>
            <p>
              7C, Mayflower Signature, Avinashi Road <br />
              Peelamedu<br />
              Coimbatore - 641004
            </p>
            <p className="contact-info">
              <strong>Email:</strong> hello@hartsconsulting.example
            </p>
            <p className="contact-info">
              <strong>Phone:</strong> +1 (212) 555-0147
            </p>
          </div>
        </section>

        <section className="section offices-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Our Global Offices</p>
            <h2>Where you can find us</h2>
          </div>
          <div className="offices-grid">
            <article
              className="office-card reveal"
              style={{ animationDelay: "0ms" }}
            >
              <div className="office-image" aria-label="Dusseldorf office" />
              <h3>Düsseldorf</h3>
              <p>Königsallee 60<br />Düsseldorf 40212<br />Germany</p>
            </article>
            <article
              className="office-card reveal"
              style={{ animationDelay: "120ms" }}
            >
              <div className="office-image" aria-label="Copenhagen office" />
              <h3>Coimbatore</h3>
              <p>7C, Mayflower Signature<br />Avinashi road, Peelamedu<br />India</p>
            </article>
            <article
              className="office-card reveal"
              style={{ animationDelay: "240ms" }}
            >
              <div className="office-image" aria-label="London office" />
              <h3>Pune</h3>
              <p>xxxxxxxxxxxx<br />xxxxxxxx<br />India</p>
            </article>
            <article
              className="office-card reveal"
              style={{ animationDelay: "360ms" }}
            >
              <div className="office-image" aria-label="Singapore office" />
              <h3>Bangalore</h3>
              <p>xxxxx<br />xxxxxxxxxxxxxx<br />India</p>
            </article>
          </div>
        </section>

        <section className="section locations-section">
          <div className="section-heading reveal">
            <h2>Locations</h2>
          </div>
          <div className="locations-grid">
            <div
              className="location-card reveal"
              style={{ animationDelay: "0ms" }}
            >
              <div className="location-image" aria-label="Americas map" />
              <h3>Coimbatore</h3>
            </div>
            <div
              className="location-card reveal"
              style={{ animationDelay: "120ms" }}
            >
              <div className="location-image" aria-label="EMEA map" />
              <h3>Düsseldorf</h3>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
