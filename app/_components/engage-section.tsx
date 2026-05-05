export function EngageSection() {
  return (
    <section className="section engage-section" id="engage">
      <div className="engage-copy reveal">
        <p className="eyebrow">Where We Engage</p>
        <h2>Built for moments when leadership needs a sharper view.</h2>
        <p>
          We support board updates, growth sprints, operating model resets,
          diligence support, and enterprise transformation offices.
        </p>
        <a className="solid-button large" href="#contact">
          Start a Conversation
        </a>
      </div>
      <div
        className="metric-grid reveal delay-one"
        aria-label="Company highlights"
      >
        <div>
          <strong>42%</strong>
          <span>average cycle-time reduction in transformation planning</span>
        </div>
        <div>
          <strong>18</strong>
          <span>markets assessed for expansion and portfolio moves</span>
        </div>
        <div>
          <strong>91%</strong>
          <span>client leadership teams reporting stronger alignment</span>
        </div>
      </div>
    </section>
  );
}
