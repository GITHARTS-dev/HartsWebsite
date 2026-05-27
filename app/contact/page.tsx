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
          subtitle="Whether you are navigating a major transformation, exploring a growth opportunity, or seeking an independent strategic perspective, our team is ready to engage."
          // actions={
          //   <Link className="solid-button large" href="#inquiry">
          //     Send an inquiry
          //   </Link>
          // }
        />

        <section className="section contact-inquiry-section" id="inquiry">
          <div className="contact-apply-wrap reveal">
            <div className="apply-form-card">
              <header className="apply-form-head">
                <h2>Send us your inquiry</h2>
                <p>Share your challenge and a senior consultant will respond within one business day.</p>
              </header>
              <ContactForm />
            </div>
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
                  Am Wildpark 51<br />
                  40629 Düsseldorf<br />
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
