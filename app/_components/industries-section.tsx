import { industries } from "../_data/home-content";

export function IndustriesSection() {
  return (
    <section className="section industries-section" id="industries">
      <div className="section-heading reveal">
        <p className="eyebrow">Industries</p>
        <h2>Focused advisory across complex sectors.</h2>
      </div>
      <div className="industry-list">
        {industries.map((industry) => (
          <button type="button" key={industry}>
            {industry}
          </button>
        ))}
      </div>
    </section>
  );
}
