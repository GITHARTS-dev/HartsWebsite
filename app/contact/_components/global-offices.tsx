import { globalOffices } from '../../_data/connect-content';

export default function GlobalOffices() {
  return (
    <section className="section offices-section reveal">
      <div className="section-heading">
        <p className="eyebrow">Global Offices</p>
        <h2>Where you can find us</h2>
        <p>
          HARTS maintains a presence in key markets, positioned to serve clients
          across all major regions and time zones.
        </p>
      </div>

      <div className="offices-grid">
        {globalOffices.map((office, index) => (
          <article
            key={office.id}
            className="office-card reveal"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="office-image" aria-label={`${office.city} office`} />
            <h3>{office.city}</h3>
            <p>{office.country}</p>
            <a href={office.directionsUrl} className="office-directions">
              Get directions &rarr;
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
