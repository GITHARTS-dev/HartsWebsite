import React from 'react';

export default function ContactHero() {
  return (
    <section className="contact-hero section reveal">
      <div className="contact-hero-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Connect with HARTS</h1>
        <div style={{ maxWidth: '400px' }}>
          <p>Whether you are looking to transform your business, require expert representation, or submit a media inquiry, our global team is ready to assist.</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <button className="solid-button">Inquire</button>
            <button className="outline-button">Careers</button>
          </div>
        </div>
      </div>
      <div className="hero-image-placeholder" style={{ width: '100%', height: '400px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#9ca3af' }}>[ Hero Image Placeholder ]</span>
      </div>
    </section>
  );
}
