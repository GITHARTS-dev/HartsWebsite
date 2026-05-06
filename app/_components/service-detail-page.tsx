import Link from "next/link";

import type { ServiceOffering } from "../_data/services-content";

export function ServiceDetailPage({
  service,
}: {
  service: ServiceOffering;
}) {
  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-copy reveal">
          <p className="eyebrow">How We Help</p>
          <h1>{service.title}</h1>
          <p>{service.lead}</p>
          <Link className="solid-button large" href="/contact">
            Connect With Us
          </Link>
        </div>
        <div className="service-detail-media reveal delay-one">
          <img src={service.image} alt={service.imageAlt} />
        </div>
      </section>

      <section className="service-detail-body">
        <div className="service-detail-panel reveal">
          <p className="eyebrow">Capabilities</p>
          <h2>What we bring into focus.</h2>
          <ul className="service-feature-list">
            {service.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>

        <div className="service-detail-panel reveal delay-one">
          <p className="eyebrow">Value</p>
          <h2>What changes for your team.</h2>
          <ul className="service-feature-list">
            {service.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-workflow">
        <div className="section-heading reveal">
          <p className="eyebrow">Workflow</p>
          <h2>A practical path from question to action.</h2>
        </div>
        <div className="service-workflow-grid">
          {service.workflow.map((step, index) => (
            <article
              className="reveal"
              key={step}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
