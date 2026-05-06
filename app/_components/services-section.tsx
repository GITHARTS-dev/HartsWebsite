import Link from "next/link";

import { serviceOfferings } from "../_data/services-content";

export function ServicesSection() {
  return (
    <section className="section service-section" id="services">
      <div className="section-heading reveal">
        <p className="eyebrow">What We See</p>
        <h2>Practical insight across the full growth agenda.</h2>
      </div>
      <div className="service-grid">
        {serviceOfferings.map((service, index) => (
          <article
            className="service-card reveal"
            style={{ animationDelay: `${index * 120}ms` }}
            key={service.slug}
          >
            <span />
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <Link href={`/how-we-help/${service.slug}`}>Read focus area</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
