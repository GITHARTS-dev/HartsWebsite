"use client";
import { useState } from 'react';

export default function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: { preventDefault(): void; currentTarget: HTMLFormElement }) => {
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
      <h2>Submit an inquiry</h2>
      <p className="iq-sub">
        Share your contact email and we will connect you with the right team
        member for your situation.
      </p>

      {status === 'success' ? (
        <div className="iq-success">
          Thank you. We have received your inquiry and will be in touch shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="iq-form">
          <div className="iq-row">
            <input
              type="email"
              name="email"
              placeholder="your@company.com"
              required
            />
            <button type="submit" className="solid-button" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Submit'}
            </button>
          </div>
          <p className="iq-legal">
            By submitting this form, you agree to our privacy policy and terms of use.
          </p>
        </form>
      )}
    </div>
  );
}
