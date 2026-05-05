import React from 'react';
import { globalOffices } from '../_data/connect-content';

export default function GlobalOffices() {
  return (
    <section className="global-offices-section section reveal" style={{ marginTop: '6rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our global offices</h2>
      <p style={{ color: '#4b5563', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        Strategic Growth Partners maintains a presence in the world's leading financial centers, positioned to serve clients across all major markets and time zones.
      </p>

      <p className="eyebrow" style={{ marginBottom: '2rem' }}>Locations</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
        {globalOffices.map((office) => (
          <div key={office.id} className="office-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', height: '250px', backgroundColor: '#e5e7eb', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#9ca3af' }}>[ {office.city} Image ]</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{office.city}</h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{office.country}</p>
            <a href={office.directionsUrl} style={{ color: '#000', textDecoration: 'none', fontWeight: '500' }}>Get directions →</a>
          </div>
        ))}
      </div>
    </section>
  );
}