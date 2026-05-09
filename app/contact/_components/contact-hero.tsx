export default function ContactHero() {
  return (
    <section className="section contact-hero reveal">
      <div className="contact-hero-content">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s start a conversation.</h1>
        <p>
          Whether you are navigating a major transformation, exploring a growth
          opportunity, or seeking an independent strategic perspective — our
          team is ready to engage.
        </p>
        <div className="contact-hero-cta">
          <a className="solid-button large" href="/contact">Start an Inquiry</a>
          <a className="outline-button large" href="/about-us">About HARTS</a>
        </div>
      </div>
      <div
        className="contact-hero-media"
        aria-label="HARTS consulting team in discussion"
      />
    </section>
  );
}
