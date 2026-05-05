import { services } from "../_data/home-content";

export function ServicesSection() {
  return (
    <section className="section service-section" id="services">
      <div className="section-heading reveal">
        <p className="eyebrow">What We See</p>
        <h2>Practical insight across the full growth agenda.</h2>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article
            className="service-card reveal"
            style={{ animationDelay: `${index * 120}ms` }}
            key={service.title}
          >
            <span />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <button type="button">Read focus area</button>
          </article>
        ))}
      </div>
    </section>
  );
}
