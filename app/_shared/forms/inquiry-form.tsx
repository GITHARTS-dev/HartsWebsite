"use client"; // Required for form state and submission
import React, { useState } from 'react';

export default function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
      }
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('idle');
    }
  };

  return (
    <div className="inquiry-form-container reveal">
      <h2>Send us your inquiry</h2>
      <p style={{ marginBottom: '1.5rem', color: '#4b5563' }}>
        Tell us about your needs and we'll connect you with the right team member to discuss your situation.
      </p>

      {status === 'success' ? (
        <div style={{ padding: '1rem', backgroundColor: '#dcfce3', color: '#166534', borderRadius: '4px' }}>
          Thank you! We have received your inquiry and will be in touch shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="email"
              name="email"
              placeholder="name@email.com"
              required
              style={{ flex: 1, padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
            />
            <button type="submit" className="solid-button" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Submit'}
            </button>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>
            By submitting this form, you agree to our terms of use and privacy policy.
          </p>
        </form>
      )}
    </div>
  );
}
