"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Binary,
  Blocks,
  Car,
  Cog,
  Cpu,
  Dna,
  Droplets,
  Eye,
  Factory,
  FileCheck2,
  FlaskConical,
  Flame,
  Gauge,
  Globe2,
  HeartPulse,
  LifeBuoy,
  LineChart,
  Microscope,
  Network,
  Plane,
  Plug,
  Radio,
  RefreshCw,
  ShieldCheck,
  Signal,
  Sparkles,
  Stethoscope,
  Target,
  TramFront,
  TrendingUp,
  Truck,
  Zap,
} from "lucide-react";

import { PageHero } from "../../../_shared/layout/page-hero";

type ChallengeItem = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

type HeroScene =
  | "industry-aerospace"
  | "industry-automotive"
  | "industry-oil-gas"
  | "industry-healthcare"
  | "industry-chemicals"
  | "industry-life-sciences"
  | "industry-energy"
  | "industry-technology"
  | "industry-telecom"
  | "industry-transportation";

type IndustryContent = {
  slug: string;
  scene: HeroScene;
  label: string;
  eyebrow: string;
  titleSoft: string;
  titleStrong: string;
  subtitle: string;
  overview: {
    paragraphs: string[];
    forces: string[];
  };
  challenges: ChallengeItem[];
  helpStatement: string;
  HelpHeroIcon: LucideIcon;
  cta: {
    title: string;
    text: string;
  };
};

const content: Record<string, IndustryContent> = {
  automotive: {
    slug: "automotive",
    scene: "industry-automotive",
    label: "Automotive",
    eyebrow: "Automotive consulting",
    titleSoft: "Accelerating",
    titleStrong: "Automotive transformation.",
    subtitle:
      "We support automotive enterprises in modernising operations, improving manufacturing scalability, driving mobility innovation, and enabling enterprise-wide transformation.",
    overview: {
      paragraphs: [
        "The automotive industry is rapidly evolving through electrification, connected mobility ecosystems, digital manufacturing, and changing customer expectations. Organisations must adapt operating models without sacrificing production efficiency, innovation speed, or supply-chain resilience.",
        "Modern automotive enterprises require agile transformation frameworks capable of supporting smart manufacturing, operational scalability, and data-driven decision-making across global networks.",
      ],
      forces: ["Electrification", "Connected mobility", "Smart manufacturing", "Supply volatility"],
    },
    challenges: [
      { title: "Supply-chain volatility", text: "Material constraints, supplier risk, and logistics disruption pressure production plans and margin discipline.", Icon: RefreshCw },
      { title: "Manufacturing inefficiencies", text: "Uneven throughput, rework, downtime, and inconsistent process adherence limit performance gains.", Icon: Factory },
      { title: "Production scalability", text: "New platforms and regional demand shifts require operating models that scale without disrupting quality.", Icon: Gauge },
      { title: "Technology-integration complexity", text: "Digital factory, vehicle software, ERP, MES, and analytics programs often advance at different speeds.", Icon: Binary },
      { title: "Compressed innovation cycles", text: "EV, software-defined vehicle, and connected-services programmes squeeze planning and execution windows.", Icon: Sparkles },
      { title: "Data fragmentation", text: "Operational data is available but not trusted, connected, or translated into action.", Icon: BarChart3 },
    ],
    helpStatement:
      "HARTS partners with automotive leaders to convert market pressure into operating advantage — sharpening manufacturing maturity, scaling global capability models, and installing the governance that disciplined transformation requires.",
    HelpHeroIcon: Car,
    cta: {
      title: "Move automotive transformation from initiative to operating advantage.",
      text: "Work with HARTS to strengthen manufacturing maturity, scale global capabilities, and build the governance needed for modern mobility.",
    },
  },
  aerospace: {
    slug: "aerospace",
    scene: "industry-aerospace",
    label: "Aerospace",
    eyebrow: "Aerospace consulting",
    titleSoft: "Precision-driven",
    titleStrong: "Aerospace operations.",
    subtitle:
      "We help aerospace organisations modernise operational ecosystems, improve engineering collaboration, strengthen supply-chain visibility, and accelerate enterprise transformation initiatives.",
    overview: {
      paragraphs: [
        "Aerospace operates within one of the world’s most complex, regulated environments. Organisations must balance innovation, operational efficiency, engineering precision, regulatory compliance, and supply-chain resilience while responding to evolving global demand.",
        "Modern aerospace enterprises require scalable operating models, digitally connected ecosystems, and transformation frameworks that improve agility without compromising reliability or compliance.",
      ],
      forces: ["Certification rigour", "Program complexity", "Supplier resilience", "Engineering precision"],
    },
    challenges: [
      { title: "Engineering collaboration", text: "Distributed engineering teams need decision clarity, configuration discipline, and stronger coordination from concept through certification.", Icon: Network },
      { title: "Global supply-chain risk", text: "Multi-tier supplier exposure makes continuity, quality, and schedule assurance hard to govern in real time.", Icon: Globe2 },
      { title: "Compliance pressure", text: "Regulatory obligations demand traceable processes, auditable evidence, and operating routines that withstand scrutiny.", Icon: FileCheck2 },
      { title: "Legacy systems", text: "Fragmented platforms slow visibility across program management, engineering change, and quality.", Icon: Binary },
      { title: "Production scalability", text: "Scaling output requires synchronised planning, standardised work, and operational controls that preserve precision.", Icon: Gauge },
      { title: "Data silos", text: "Critical signals stay trapped across PLM, ERP, MES, and program-reporting layers.", Icon: Blocks },
    ],
    helpStatement:
      "HARTS helps aerospace leadership teams modernise critical workflows, embed transformation governance, and scale operating models with the precision regulated enterprises require.",
    HelpHeroIcon: Plane,
    cta: {
      title: "Build the next aerospace operating advantage.",
      text: "Partner with HARTS to assess maturity, modernise critical workflows, and scale transformation with the precision your enterprise requires.",
    },
  },
  "oil-gas": {
    slug: "oil-gas",
    scene: "industry-oil-gas",
    label: "Oil & Gas",
    eyebrow: "Oil & Gas consulting",
    titleSoft: "Disciplined operations.",
    titleStrong: "Capital-grade execution.",
    subtitle:
      "We support oil & gas enterprises with operating-model design, asset-performance discipline, and transformation governance across upstream, midstream, and downstream operations.",
    overview: {
      paragraphs: [
        "Oil & gas operators are managing volatile markets, decarbonisation pressure, and the need to extract more value from existing assets while preparing for an evolving energy mix.",
        "Sustained performance depends on operating discipline, capital governance, digitally enabled asset intelligence, and integrated decision-making across exploration, production, processing, and commercial functions.",
      ],
      forces: ["Capital discipline", "Asset reliability", "Decarbonisation pressure", "Commodity volatility"],
    },
    challenges: [
      { title: "Asset reliability", text: "Unplanned downtime and reactive maintenance erode production, margin, and safety performance.", Icon: Gauge },
      { title: "Capital programme delivery", text: "Major capital projects face schedule, cost, and integration risk without disciplined governance.", Icon: ShieldCheck },
      { title: "Decarbonisation expectations", text: "Stakeholders demand measurable progress while assets must remain commercially performant.", Icon: Droplets },
      { title: "Fragmented operations data", text: "SCADA, ERP, planning, and reliability systems rarely converge into one operating picture.", Icon: BarChart3 },
      { title: "Workforce and HSE pressure", text: "Talent transition and safety performance require modernised processes and routines.", Icon: LifeBuoy },
      { title: "Commercial volatility", text: "Trading, hedging, and portfolio decisions require sharper scenario intelligence.", Icon: TrendingUp },
    ],
    helpStatement:
      "HARTS helps oil & gas leadership teams modernise asset operating models, strengthen capital governance, and translate decarbonisation ambition into operating discipline.",
    HelpHeroIcon: Flame,
    cta: {
      title: "Run a more disciplined oil & gas operating model.",
      text: "Partner with HARTS to lift asset reliability, sharpen capital governance, and convert decarbonisation ambition into measurable execution.",
    },
  },
  healthcare: {
    slug: "healthcare",
    scene: "industry-healthcare",
    label: "Healthcare",
    eyebrow: "Healthcare consulting",
    titleSoft: "Clearer care.",
    titleStrong: "Stronger operations.",
    subtitle:
      "We partner with hospital systems, payers, and provider networks to improve care-delivery design, operating discipline, and digital enablement.",
    overview: {
      paragraphs: [
        "Healthcare organisations face mounting demand, workforce constraints, regulatory complexity, and persistent pressure on cost and quality. Sustainable performance requires aligned operating models across clinical, operational, and digital functions.",
        "Leadership teams need clarity on portfolio priorities, capacity, throughput, patient experience, and the digital enablement that supports staff rather than burdening them.",
      ],
      forces: ["Capacity & throughput", "Workforce sustainability", "Care-experience expectations", "Digital enablement"],
    },
    challenges: [
      { title: "Capacity & throughput", text: "Demand outpaces available beds, theatres, and clinics without disciplined flow management.", Icon: Stethoscope },
      { title: "Workforce sustainability", text: "Recruitment, retention, and clinical workload pressure require operating-model redesign.", Icon: HeartPulse },
      { title: "Care-experience expectations", text: "Patients and families expect digital convenience and coordinated communication across journeys.", Icon: Sparkles },
      { title: "Regulatory & quality demands", text: "Reporting, accreditation, and safety obligations require disciplined data and routine.", Icon: FileCheck2 },
      { title: "Fragmented technology", text: "Clinical, operational, and administrative systems rarely converge into a usable operating view.", Icon: Binary },
      { title: "Cost-to-serve pressure", text: "Margin compression requires operational simplification and disciplined resource use.", Icon: LineChart },
    ],
    helpStatement:
      "HARTS helps healthcare leaders redesign operating models, improve care-delivery flow, and embed the digital enablement clinical and operational teams genuinely need.",
    HelpHeroIcon: HeartPulse,
    cta: {
      title: "Design a healthcare operating model worthy of the work.",
      text: "Connect with HARTS to align clinical, operational, and digital priorities behind better outcomes and disciplined execution.",
    },
  },
  chemicals: {
    slug: "chemicals",
    scene: "industry-chemicals",
    label: "Chemicals",
    eyebrow: "Chemicals consulting",
    titleSoft: "Process-driven.",
    titleStrong: "Performance-disciplined.",
    subtitle:
      "We help chemical manufacturers optimise process performance, strengthen safety governance, and scale transformation across complex production networks.",
    overview: {
      paragraphs: [
        "Chemical enterprises face cyclical demand, sustainability obligations, asset-reliability pressure, and the need to modernise plant operations while protecting safety and quality.",
        "Disciplined transformation requires connected process, asset, and supply-chain visibility — anchored in clear operating routines and capital governance.",
      ],
      forces: ["Process reliability", "Safety & sustainability", "Cyclical demand", "Asset modernisation"],
    },
    challenges: [
      { title: "Process variability", text: "Yield, energy, and quality variation undermine margin in commodity and specialty operations alike.", Icon: FlaskConical },
      { title: "Asset reliability", text: "Aging assets and reactive maintenance constrain capacity and elevate operational risk.", Icon: Gauge },
      { title: "Sustainability obligations", text: "Decarbonisation and circularity require credible operating-model change, not just reporting.", Icon: Droplets },
      { title: "Safety governance", text: "Process safety and HSE performance demand disciplined routines and traceable evidence.", Icon: ShieldCheck },
      { title: "Supply-chain complexity", text: "Feedstock volatility and logistics constraints require sharper planning intelligence.", Icon: Globe2 },
      { title: "Fragmented data", text: "Process, lab, and ERP signals rarely come together for executive-grade decisions.", Icon: BarChart3 },
    ],
    helpStatement:
      "HARTS helps chemical-manufacturing leaders convert process and asset complexity into disciplined operating performance — across plants, regions, and modernisation portfolios.",
    HelpHeroIcon: FlaskConical,
    cta: {
      title: "Run process-driven chemical operations with confidence.",
      text: "Partner with HARTS to lift process performance, strengthen safety governance, and modernise operations across the network.",
    },
  },
  "life-sciences": {
    slug: "life-sciences",
    scene: "industry-life-sciences",
    label: "Life Sciences",
    eyebrow: "Life Sciences consulting",
    titleSoft: "Pipeline-ready.",
    titleStrong: "Regulator-grade.",
    subtitle:
      "We partner with pharma, biotech, and medical-device leaders to accelerate pipelines, modernise operating models, and embed disciplined transformation across regulated environments.",
    overview: {
      paragraphs: [
        "Life-sciences enterprises operate under tightening regulation, accelerating innovation cycles, and intensifying commercial pressure. Sustained performance requires aligned operating models across R&D, supply, quality, and commercial.",
        "Disciplined transformation depends on clear portfolio choices, robust quality systems, and digital enablement that supports — rather than complicates — regulated workflows.",
      ],
      forces: ["Regulatory rigour", "Pipeline velocity", "Commercial pressure", "Quality discipline"],
    },
    challenges: [
      { title: "Regulatory complexity", text: "Evolving global obligations demand traceable processes and durable governance.", Icon: FileCheck2 },
      { title: "Pipeline velocity", text: "Programme decisions, resourcing, and trial execution require sharper portfolio discipline.", Icon: Microscope },
      { title: "Quality systems", text: "Quality and compliance routines must scale without slowing innovation or commercial cadence.", Icon: ShieldCheck },
      { title: "Supply continuity", text: "Manufacturing networks face capacity, single-source, and serialisation pressure.", Icon: Network },
      { title: "Commercial transformation", text: "Field models, access pathways, and digital engagement require modernised operating routines.", Icon: TrendingUp },
      { title: "Data and digital", text: "Clinical, regulatory, commercial, and operational data rarely connect into trusted decision support.", Icon: BarChart3 },
    ],
    helpStatement:
      "HARTS helps life-sciences leadership teams modernise operating models across R&D, supply, quality, and commercial — installing the discipline regulated growth requires.",
    HelpHeroIcon: Dna,
    cta: {
      title: "Modernise with the discipline regulated growth demands.",
      text: "Partner with HARTS to align pipeline velocity, operating discipline, and commercial transformation behind sustained outcomes.",
    },
  },
  energy: {
    slug: "energy",
    scene: "industry-energy",
    label: "Energy",
    eyebrow: "Energy consulting",
    titleSoft: "Transition-ready.",
    titleStrong: "Operationally resilient.",
    subtitle:
      "We help integrated energy companies, utilities, and renewables operators navigate transition strategy, grid modernisation, and enterprise transformation.",
    overview: {
      paragraphs: [
        "Energy enterprises must balance reliability, affordability, decarbonisation, and customer expectations while modernising assets, operating models, and digital infrastructure.",
        "Sustained performance requires clarity on portfolio direction, capital discipline, and the operating routines that translate transition ambition into measurable execution.",
      ],
      forces: ["Transition strategy", "Grid modernisation", "Capital discipline", "Customer expectation"],
    },
    challenges: [
      { title: "Transition strategy", text: "Portfolio shifts require structured choices on capital, capability, and operating model.", Icon: Zap },
      { title: "Grid modernisation", text: "Network reliability, distributed generation, and customer signals require integrated decision-making.", Icon: Plug },
      { title: "Capital programme delivery", text: "Major projects face schedule, cost, and stakeholder risk without disciplined governance.", Icon: ShieldCheck },
      { title: "Operational reliability", text: "Asset performance, outage management, and safety routines remain core to enterprise trust.", Icon: Gauge },
      { title: "Workforce transition", text: "Skill mix, contractor networks, and digital fluency require deliberate operating-model design.", Icon: HeartPulse },
      { title: "Customer expectation", text: "Reliability, pricing, and digital engagement now define competitive positioning.", Icon: Eye },
    ],
    helpStatement:
      "HARTS helps energy leadership teams turn transition strategy into operating reality — across asset performance, capital governance, and customer-facing modernisation.",
    HelpHeroIcon: Zap,
    cta: {
      title: "Make the energy transition operationally credible.",
      text: "Work with HARTS to align portfolio direction, capital discipline, and operating routine behind a credible transition.",
    },
  },
  technology: {
    slug: "technology",
    scene: "industry-technology",
    label: "Technology",
    eyebrow: "Technology consulting",
    titleSoft: "Built to scale.",
    titleStrong: "Disciplined to last.",
    subtitle:
      "We partner with high-velocity technology enterprises on operating-model design, growth scaling, platform transformation, and organisational maturity.",
    overview: {
      paragraphs: [
        "Technology companies face the dual challenge of sustaining growth and installing the operating discipline mature enterprises require — across product, go-to-market, engineering, and corporate functions.",
        "Sustained outperformance depends on clearer operating choices, sharper portfolio governance, and the ability to scale capability without compounding complexity.",
      ],
      forces: ["Scaling discipline", "Platform velocity", "Talent leverage", "Capital efficiency"],
    },
    challenges: [
      { title: "Operating-model maturity", text: "Growth-era models often outlive their usefulness as enterprises scale globally.", Icon: Cog },
      { title: "Portfolio discipline", text: "Product, market, and platform investments require sharper prioritisation and value tracking.", Icon: Target },
      { title: "Platform velocity", text: "Engineering, data, and infrastructure platforms must support speed without accumulating risk.", Icon: Cpu },
      { title: "Go-to-market alignment", text: "Sales, marketing, and customer-success operating models often drift apart at scale.", Icon: TrendingUp },
      { title: "Talent leverage", text: "Talent operating models must adapt to hybrid work, capability scarcity, and AI-enabled productivity.", Icon: HeartPulse },
      { title: "Capital efficiency", text: "Investors expect disciplined growth, not just absolute growth — operating routines must reflect this.", Icon: LineChart },
    ],
    helpStatement:
      "HARTS helps technology leadership teams install enterprise-grade operating discipline without sacrificing the velocity that defines competitive advantage.",
    HelpHeroIcon: Cpu,
    cta: {
      title: "Scale technology operations with discipline.",
      text: "Partner with HARTS to align operating model, portfolio governance, and platform velocity behind durable growth.",
    },
  },
  telecom: {
    slug: "telecom",
    scene: "industry-telecom",
    label: "Telecommunications",
    eyebrow: "Telecom consulting",
    titleSoft: "Network-grade.",
    titleStrong: "Customer-grade.",
    subtitle:
      "We partner with communications operators on network modernisation, customer-experience transformation, and operating discipline across complex enterprises.",
    overview: {
      paragraphs: [
        "Telecom operators are modernising networks, evolving customer experience, and reshaping operating models under sustained margin pressure and accelerating technology change.",
        "Sustainable performance requires connected operating routines across network, IT, customer, and corporate functions — anchored in disciplined transformation governance.",
      ],
      forces: ["Network modernisation", "Customer experience", "Margin discipline", "Operating clarity"],
    },
    challenges: [
      { title: "Network modernisation", text: "Multi-generation network transitions require integrated planning, capital, and operational governance.", Icon: Radio },
      { title: "Customer experience", text: "Service expectations evolve faster than legacy operating models can support.", Icon: Eye },
      { title: "Operating complexity", text: "Long-standing process and system layers complicate everyday decision-making.", Icon: Blocks },
      { title: "Margin pressure", text: "Cost-to-serve and capital intensity require disciplined operational simplification.", Icon: LineChart },
      { title: "Workforce evolution", text: "Skill mix, partner networks, and AI-enabled productivity require deliberate operating-model design.", Icon: HeartPulse },
      { title: "Data and digital", text: "Network, customer, and corporate data rarely converge into trusted operating intelligence.", Icon: Signal },
    ],
    helpStatement:
      "HARTS helps telecom leadership teams modernise operating models across network, customer, and corporate functions — installing the discipline modern networks require.",
    HelpHeroIcon: Radio,
    cta: {
      title: "Run a more disciplined telecom operating model.",
      text: "Partner with HARTS to align network modernisation, customer experience, and operating discipline behind sustained performance.",
    },
  },
  transportation: {
    slug: "transportation",
    scene: "industry-transportation",
    label: "Transportation",
    eyebrow: "Transportation consulting",
    titleSoft: "Move with",
    titleStrong: "Operating clarity.",
    subtitle:
      "We partner with rail, road, port, and multi-modal operators on operational scalability, logistics modernisation, and digital enablement.",
    overview: {
      paragraphs: [
        "Transportation enterprises operate under demand volatility, capital intensity, regulatory pressure, and rising customer expectations. Performance depends on connected operating models across network, asset, and customer-facing functions.",
        "Sustained outperformance requires clearer operating routines, disciplined capital governance, and digital enablement that supports — rather than burdens — front-line teams.",
      ],
      forces: ["Network reliability", "Capital discipline", "Customer expectation", "Workforce evolution"],
    },
    challenges: [
      { title: "Network reliability", text: "Schedule discipline, asset uptime, and service consistency define enterprise trust.", Icon: TramFront },
      { title: "Capital governance", text: "Major capital programmes face schedule, cost, and stakeholder risk without disciplined routines.", Icon: ShieldCheck },
      { title: "Logistics complexity", text: "Multi-modal, cross-border, and last-mile flows require integrated planning intelligence.", Icon: Truck },
      { title: "Workforce evolution", text: "Skill mix, contractor networks, and digital fluency require operating-model attention.", Icon: HeartPulse },
      { title: "Customer expectation", text: "Reliability, communication, and digital convenience now define competitive positioning.", Icon: Eye },
      { title: "Data and digital", text: "Network, asset, and customer data rarely converge into trusted operating intelligence.", Icon: BarChart3 },
    ],
    helpStatement:
      "HARTS helps transportation leadership teams modernise operating routines, sharpen capital governance, and lift digital enablement across complex multi-modal networks.",
    HelpHeroIcon: TramFront,
    cta: {
      title: "Run transportation operations with disciplined clarity.",
      text: "Partner with HARTS to align network reliability, capital governance, and digital enablement behind durable outperformance.",
    },
  },
};

function revealDelay(index: number): CSSProperties {
  return { "--industry-detail-delay": `${index * 70}ms` } as CSSProperties;
}

function IndustryDetailTemplate({ data }: { data: IndustryContent }) {
  useEffect(() => {
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(".industry-detail-reveal"),
    );

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const HelpHeroIcon = data.HelpHeroIcon;

  return (
    <main className={`industry-premium industry-premium--${data.slug}`}>
      <PageHero
        scene={data.scene}
        eyebrow={data.eyebrow}
        titleSoft={data.titleSoft}
        titleStrong={data.titleStrong}
        subtitle={data.subtitle}
        watermark={data.label.toUpperCase()}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Where We Engage", href: "/industries" },
          { label: data.label },
        ]}
        actions={
          <>
            <Link className="solid-button large" href="/contact">
              Schedule consultation
            </Link>
            <Link className="outline-button large" href="#help">
              How we help
            </Link>
          </>
        }
      />

      <section className="industry-detail-section industry-overview-section" id="overview">
        <div className="industry-detail-shell">
          <div className="industry-detail-heading industry-detail-reveal">
            <p className="eyebrow">Industry Overview</p>
            <h2>Executive context</h2>
          </div>
          <div className="industry-overview-grid">
            <div className="industry-overview-copy industry-detail-reveal">
              {data.overview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div
              className="industry-force-panel industry-detail-reveal"
              style={revealDelay(2)}
            >
              {data.overview.forces.map((force) => (
                <span key={force}>
                  {force}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="industry-detail-section industry-challenges-section" id="challenges">
        <div className="industry-detail-shell">
          <div className="industry-detail-heading industry-detail-reveal">
            <p className="eyebrow">Industry Challenges</p>
            <h2>The operational pressures leaders must solve</h2>
            <p>
              The most urgent constraints rarely sit alone. They span operating
              model, data, governance, systems, talent, and execution capacity.
            </p>
          </div>
          <div className="industry-detail-card-grid industry-detail-card-grid--challenge">
            {data.challenges.map(({ title, text, Icon }, index) => (
              <article
                className="industry-detail-card industry-detail-card--challenge industry-detail-reveal"
                key={title}
                style={revealDelay(index)}
              >
                <span className="industry-card-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-detail-section industry-help-section" id="help">
        <div className="industry-detail-shell">
          <div className="industry-help-card industry-detail-reveal">
            <div className="industry-help-icon" aria-hidden="true">
              <HelpHeroIcon size={32} strokeWidth={1.6} />
            </div>
            <div className="industry-help-copy">
              <p className="eyebrow">How We Help</p>
              <h2>Consulting capability built for this industry.</h2>
              <p>{data.helpStatement}</p>
              <Link className="solid-button large" href="/how-we-help">
                Know more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-detail-cta" aria-labelledby="industry-cta-heading">
        <div className="industry-detail-cta-inner industry-detail-reveal">
          <p className="eyebrow">Work with HARTS</p>
          <h2 id="industry-cta-heading">{data.cta.title}</h2>
          <p>{data.cta.text}</p>
          <div className="industry-detail-actions">
            <Link className="solid-button large" href="/contact">
              Connect with us
            </Link>
            <Link className="outline-button large" href="/industries">
              Explore other industries
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function makeView(slug: string) {
  const data = content[slug];
  if (!data) {
    throw new Error(`Missing industry content for slug: ${slug}`);
  }
  return function IndustryView() {
    return <IndustryDetailTemplate data={data} />;
  };
}

export const AutomotiveIndustry = makeView("automotive");
export const AerospaceIndustry = makeView("aerospace");
export const OilGasIndustry = makeView("oil-gas");
export const HealthcareIndustry = makeView("healthcare");
export const ChemicalsIndustry = makeView("chemicals");
export const LifeSciencesIndustry = makeView("life-sciences");
export const EnergyIndustry = makeView("energy");
export const TechnologyIndustry = makeView("technology");
export const TelecomIndustry = makeView("telecom");
export const TransportationIndustry = makeView("transportation");
