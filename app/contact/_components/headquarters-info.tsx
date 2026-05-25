import { hqInfo } from '../../_data/connect-content';

export default function HeadquartersInfo() {
  return (
    <div className="hq-block reveal delay-one">
      <div className="hq-image" aria-label="HARTS global headquarters" />
      <p className="eyebrow">Connect</p>
      <h2>HARTS global headquarters</h2>
      <p>{hqInfo.address}</p>
      <ul className="hq-links">
        <li>
          <a
            href="https://www.linkedin.com/company/harts-consulting/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {hqInfo.linkedin}
          </a>
        </li>
        <li><a href="/careers">{hqInfo.careers}</a></li>
        <li><span>{hqInfo.offices}</span></li>
      </ul>
      <div className="hq-actions">
        <a className="outline-button" href="https://maps.app.goo.gl/sQyjGTZzVEdVLYC67" target="_blank" rel="noopener noreferrer">Directions</a>
        <a className="outline-button" href="/contact">Explore</a>
      </div>
    </div>
  );
}
