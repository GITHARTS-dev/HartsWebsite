import Link from "next/link";

import type { ServiceOffering } from "../../_data/services-content";

export function ServiceOfferingDetail({
  service,
}: {
  service: ServiceOffering;
}) {
  return (
    <main className="service-offering-detail enhanced">
      <div className="liquid-bg small" aria-hidden>
        <svg className="blob blob-2" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <path fill="#E7473C" fillOpacity="0.08" d="M470 300c0 94-76 170-170 170S130 394 130 300 206 130 300 130s170 76 170 170z" />
        </svg>
      </div>

      <section className="service-detail-hero refined">
        <div className="service-detail-copy reveal">
          <p className="eyebrow">How We Help</p>
          <h1>{service.title}</h1>
          <p className="muted lead">{service.lead}</p>
          <div className="hero-actions">
            <Link className="outline-button" href="/how-we-help">Back to services</Link>
            <Link className="solid-button large" href="/contact">Connect With Us</Link>
          </div>
        </div>

        <div className="service-detail-media reveal delay-one">
          <div className="media-wrap">
            <img src={service.image} alt={service.imageAlt} />
            <div className="media-overlay" aria-hidden />
          </div>
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
              className="workflow-step reveal"
              key={step}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
