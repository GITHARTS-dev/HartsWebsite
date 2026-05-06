import Link from "next/link";

import { serviceOfferings } from "../../_data/services-content";

export function ServicesOverview() {
  return (
    <main className="help-page">
      <section className="help-hero">
        <div className="help-hero-copy reveal">
          <p className="eyebrow">How We Help</p>
          <h1>Focused support for the moments that shape growth.</h1>
          <p>
            HARTS helps leadership teams clarify choices, design practical
            transformation, and mobilize people around work that matters. Our
            services are built to move from insight to action with discipline
            and momentum.
          </p>
          <Link className="solid-button large" href="/contact">
            Connect With Us
          </Link>
        </div>
        <div
          className="help-hero-media reveal delay-one"
          aria-label="Consulting team reviewing strategic priorities"
        >
          <div>
            <strong>Strategy made usable</strong>
            <span>Clear decisions, practical plans, measurable progress.</span>
          </div>
        </div>
      </section>

      <section className="section help-services-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Services</p>
          <h2>Choose the kind of support your next move needs.</h2>
        </div>
        <div className="help-service-grid">
          {serviceOfferings.map((service, index) => (
            <Link
              className="help-service-card reveal"
              href={`/how-we-help/${service.slug}`}
              key={service.slug}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="help-service-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div
                className="help-service-image"
                style={{ backgroundImage: `url(${service.image})` }}
                aria-hidden="true"
              />
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <strong>Explore service</strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
