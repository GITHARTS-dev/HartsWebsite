import React from 'react';
import { hqInfo } from '../_data/connect-content';

export default function HeadquartersInfo() {
  return (
    <div className="hq-info-container reveal delay-one" style={{ marginTop: '4rem' }}>
      <p className="eyebrow" style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: '#6b7280' }}>Connect</p>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>HARTS global headquarters</h2>
      <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>{hqInfo.address}</p>
      
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
        <li>🔗 {hqInfo.linkedin}</li>
        <li>🏢 {hqInfo.careers}</li>
        <li>🌍 {hqInfo.offices}</li>
      </ul>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="outline-button">Directions</button>
        <button className="outline-button" style={{ border: 'none', textDecoration: 'underline' }}>Explore →</button>
      </div>
    </div>
  );
}