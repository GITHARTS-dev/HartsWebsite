type IndustryContent = {
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  paragraphs: [string, string];
};

const industryContent = {
  financialServices: {
    title: "Financial services",
    lead:
      "We help financial leaders sharpen growth choices, modernize operating models, and make complex market signals easier to act on.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Financial planning documents and charts on a desk",
    paragraphs: [
      "Across banking, insurance, payments, wealth, and capital markets, leadership teams are being asked to move faster while staying disciplined about risk, trust, and regulatory change. HARTS supports teams as they translate ambition into clearer portfolio priorities, customer propositions, and execution rhythms.",
      "Our work often sits at the point where strategy, governance, technology, and frontline adoption meet. We bring structure to uncertain decisions so financial services organizations can align stakeholders, sequence investments, and measure progress with confidence.",
    ],
  },
  healthcare: {
    title: "Healthcare",
    lead:
      "We work with healthcare organizations to clarify priorities, improve delivery models, and build momentum around patient-centered transformation.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Healthcare team reviewing digital patient information",
    paragraphs: [
      "Healthcare leaders are balancing access, affordability, workforce pressure, digital enablement, and rising expectations from patients and partners. HARTS helps turn that complexity into decisions that can be understood, owned, and executed across the organization.",
      "We support operating model redesign, service-line growth, partnership strategy, and transformation planning. The focus is practical: establish the right choices, connect them to measurable outcomes, and help teams move without losing sight of care quality.",
    ],
  },
  technology: {
    title: "Technology",
    lead:
      "We help technology companies focus their markets, product bets, and operating systems as they scale through change.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Technology team collaborating around laptops",
    paragraphs: [
      "Technology organizations often face pressure to expand quickly while protecting product clarity, customer trust, and delivery speed. HARTS works with founders, operators, and leadership teams to define where to compete, how to scale, and what must change internally.",
      "From go-to-market refinement to transformation roadmaps, we make strategic choices tangible. The result is a clearer link between market opportunity, product direction, operating capacity, and the leadership routines needed to sustain growth.",
    ],
  },
  consumerMarkets: {
    title: "Consumer markets",
    lead:
      "We help consumer businesses understand shifting demand, sharpen brand and channel choices, and build practical growth plans.",
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Retail team reviewing customer and sales activity",
    paragraphs: [
      "Consumer expectations keep moving across price, experience, availability, sustainability, and digital convenience. HARTS helps leadership teams interpret those signals and focus on the segments, channels, and propositions that matter most.",
      "Our role is to connect customer insight with operating reality. We support market assessment, portfolio prioritization, channel strategy, and transformation planning so teams can move with a stronger view of value, cost, and execution risk.",
    ],
  },
  energyInfrastructure: {
    title: "Energy and infrastructure",
    lead:
      "We support energy and infrastructure leaders as they navigate capital choices, transition pressures, and long-horizon delivery plans.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Solar panels under a clear sky",
    paragraphs: [
      "Energy and infrastructure organizations operate in environments shaped by regulation, technology, financing, public expectations, and physical delivery constraints. HARTS helps teams create clarity around where to invest, how to partner, and how to manage complex programs.",
      "We bring strategy closer to execution by defining practical roadmaps, governance structures, and decision points. That helps leadership teams align long-term ambition with near-term action across assets, markets, and stakeholders.",
    ],
  },
  privateEquity: {
    title: "Private equity",
    lead:
      "We work with investors and portfolio leaders to sharpen theses, accelerate value creation, and support decisive execution.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Investment team discussing portfolio performance",
    paragraphs: [
      "Private equity teams need quick clarity without losing depth. HARTS supports commercial diligence, market scans, value creation planning, and operating model work that helps investors and management teams align around the most important levers.",
      "Our approach combines structured analysis with practical mobilization. We help identify where value can be created, what must happen first, and how leadership can track progress through the investment cycle.",
    ],
  },
} satisfies Record<string, IndustryContent>;

function IndustryPageTemplate({ content }: { content: IndustryContent }) {
  return (
    <main className="industry-page">
      <section className="industry-hero">
        <div className="industry-hero-copy reveal">
          <p className="eyebrow">Where We Engage</p>
          <h1>{content.title}</h1>
          <p>{content.lead}</p>
        </div>
        <div className="industry-hero-media reveal delay-one">
          <img src={content.image} alt={content.imageAlt} />
        </div>
      </section>
      <section className="industry-body" aria-label={`${content.title} overview`}>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  );
}

export function FinancialServicesIndustry() {
  return <IndustryPageTemplate content={industryContent.financialServices} />;
}

export function HealthcareIndustry() {
  return <IndustryPageTemplate content={industryContent.healthcare} />;
}

export function TechnologyIndustry() {
  return <IndustryPageTemplate content={industryContent.technology} />;
}

export function ConsumerMarketsIndustry() {
  return <IndustryPageTemplate content={industryContent.consumerMarkets} />;
}

export function EnergyInfrastructureIndustry() {
  return <IndustryPageTemplate content={industryContent.energyInfrastructure} />;
}

export function PrivateEquityIndustry() {
  return <IndustryPageTemplate content={industryContent.privateEquity} />;
}
