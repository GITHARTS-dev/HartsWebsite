"use client";

import type { CSSProperties } from "react";
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
  overviewEyebrow?: string;
  overviewTitle?: string;
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
    eyebrow: "Automotive Consulting",
    titleSoft: "Don't manage the shift.",
    titleStrong: "Lead it.",
    subtitle:
      "The automotive industry is undergoing its most consequential restructuring in over a century. OEMs and suppliers that win the next decade will not be those that survive the transition, they will be those who deliberately designed for it. We help you get there faster.",
    overviewEyebrow: "Market Reality",
    overviewTitle: "The $3 Trillion Restructuring.",
    overview: {
      paragraphs: [
        "The automotive industry is at a genuine inflection point. Electrification, software-defined vehicle architectures, direct-to-consumer models, and aggressive new entrants from China and Silicon Valley are simultaneously compressing margins, disrupting legacy supply chains, and redefining what it means to build and sell a vehicle. Traditional competitive advantages, scale, brand, dealer networks, ICE engineering depth, are no longer reliable moats.",
        "OEMs and Tier 1 suppliers that outperform over the next decade will do so not by reacting to these forces, but by building fundamentally different operating models around them. That requires clarity on where to compete, the organisational discipline to restructure what no longer fits, and the execution capability to move with the speed that new entrants already operate at.",
      ],
      forces: ["EV platform profitability", "Software-defined vehicles", "Supply chain de-risking", "Direct-to-consumer shift"],
    },
    challenges: [
      {
        title: "EV transition profitability",
        text: "Scaling BEV platforms while managing ICE revenue decline, stranded asset risk, and battery cost curves demands a financial and operational strategy most incumbents have not yet built.",
        Icon: Zap,
      },
      {
        title: "Software-defined vehicle readiness",
        text: "Hardware-centric R&D, fragmented supplier relationships, and waterfall development cycles are structurally incompatible with software-first product architectures. The gap is widening.",
        Icon: Binary,
      },
      {
        title: "Supply chain concentration risk",
        text: "Semiconductor dependencies, battery material geopolitics, and single-source Tier 2 exposure have turned supply chain design into a board-level strategic risk, not a procurement issue.",
        Icon: Globe2,
      },
      {
        title: "Manufacturing cost restructuring",
        text: "BEV platforms require 30–40% fewer components. The manufacturing footprint, workforce model, and supplier base built for ICE production cannot carry the next architecture.",
        Icon: Factory,
      },
      {
        title: "New-entrant competitive pressure",
        text: "Tesla, BYD, and technology-native OEMs compete on software velocity, cost structure, and customer experience, not legacy brand equity or dealer volume. The benchmarks have moved.",
        Icon: TrendingUp,
      },
      {
        title: "Commercial model disruption",
        text: "Agency sales, digital retail, over-the-air revenue, and subscription mobility require a complete redesign of the commercial operating model that most incumbents are still deferring.",
        Icon: RefreshCw,
      },
    ],
    helpStatement:
      "HARTS partners with automotive OEMs, Tier 1 suppliers, and mobility platforms to navigate the most consequential restructuring in the industry's history. We bring the strategic clarity and operating discipline to execute EV transitions profitably, build software-ready organisations, redesign supply chains for resilience, and construct cost structures built for the next decade, not the last one. We work at the intersection of strategy and execution, which is where automotive transformations are actually won or lost.",
    HelpHeroIcon: Car,
    cta: {
      title: "The window to define your position in the next automotive era is closing.",
      text: "Leaders who act now, on EV profitability, software capability, supply chain resilience, and commercial model redesign, will compound advantage over competitors still deliberating. Work with HARTS to move from ambition to operating reality.",
    },
  },
  aerospace: {
    slug: "aerospace",
    scene: "industry-aerospace",
    label: "Aerospace",
    eyebrow: "Aerospace Consulting",
    titleSoft: "Built for complexity.",
    titleStrong: "Engineered to outperform.",
    subtitle:
      "Aerospace organisations face the most demanding operating environment on earth, where regulatory failure, supply chain fractures, and program overruns carry consequences that no other industry tolerates. We help you build the operational rigour, supply chain resilience, and transformation discipline to compete at the highest level.",
    overviewEyebrow: "Industry Reality",
    overviewTitle: "Record demand. Fractured supply. No margin for error.",
    overview: {
      paragraphs: [
        "Commercial aviation is carrying the largest order backlog in history, over 14,000 aircraft across Airbus and Boeing, yet the industry cannot deliver fast enough. The bottleneck is not demand. It is a supply chain that was hollowed out during COVID, a Tier 2 and Tier 3 supplier base under severe financial stress, engine shortages, and a workforce pipeline that has not recovered. The gap between what airlines ordered and what OEMs can certify and deliver is measured in years, not quarters.",
        "At the same time, defence programmes face budget scrutiny, schedule pressure, and the challenge of integrating next-generation capabilities, autonomous systems, directed energy, advanced propulsion, into acquisition frameworks built for a slower era. Across both sectors, the operating model challenge is the same: how do you scale output, maintain certification integrity, and transform digitally without introducing the kind of systemic risk that grounds fleets and triggers regulatory intervention?",
      ],
      forces: ["Supply chain reconstruction", "Certification integrity", "Program cost discipline", "Workforce recovery"],
    },
    challenges: [
      {
        title: "Supply chain fragility",
        text: "Tier 2 and Tier 3 supplier financial distress, single-source dependencies, and raw material constraints are the primary brake on production rate recovery, and most OEMs do not have full visibility below Tier 1.",
        Icon: Globe2,
      },
      {
        title: "Program execution discipline",
        text: "Cost overruns, schedule slippage, and scope creep remain endemic across both commercial and defence programs. The root cause is rarely technical, it is governance, decision rights, and change-control discipline.",
        Icon: ShieldCheck,
      },
      {
        title: "Certification and regulatory scrutiny",
        text: "Post-737 MAX, FAA and EASA oversight has fundamentally intensified. Organisations without traceable, auditable quality systems face programme holds, delivery delays, and reputational consequences that compound across programmes.",
        Icon: FileCheck2,
      },
      {
        title: "MRO capacity constraints",
        text: "Ageing fleets, parts shortages, and shop visit backlogs are pushing MRO capacity to its limits, creating commercial pressure on airlines and revenue opportunity for operators who can scale maintenance throughput reliably.",
        Icon: Gauge,
      },
      {
        title: "Sustainability and next-gen propulsion",
        text: "SAF mandates, carbon-reduction commitments, and the race to certify hybrid-electric and hydrogen propulsion are forcing R&D prioritisation decisions that will define competitive positioning for the next 30 years.",
        Icon: Sparkles,
      },
      {
        title: "Engineering talent crisis",
        text: "A generation of experienced aerospace engineers is retiring. The skills to replace them, digital engineering, model-based systems engineering, software integration, are scarce and intensely competed for across sectors.",
        Icon: Network,
      },
    ],
    helpStatement:
      "HARTS partners with aerospace OEMs, Tier 1 suppliers, MRO operators, and defence primes to solve the operating challenges that determine whether programmes deliver and enterprises grow. We bring the programme governance discipline, supply chain intelligence, and organisational design capability that aerospace demands, applied by consultants who understand that in this industry, operational failure is not an option.",
    HelpHeroIcon: Plane,
    cta: {
      title: "The order books are full. The question is whether you can deliver.",
      text: "Every month of production delay, every regulatory hold, and every supply chain fracture compounds into lost revenue and eroded customer confidence. Work with HARTS to build the operating discipline, supply chain resilience, and programme governance that turns backlog into delivered aircraft, and ambitious programmes into certified ones.",
    },
  },
  "oil-gas": {
    slug: "oil-gas",
    scene: "industry-oil-gas",
    label: "Oil & Gas",
    eyebrow: "Oil & Gas Consulting",
    titleSoft: "Perform today.",
    titleStrong: "Transition on your terms.",
    subtitle:
      "The oil & gas industry is navigating its most complex strategic moment in decades, delivering shareholder returns under commodity volatility while simultaneously managing decarbonisation obligations, asset reliability, and the long-term question of where hydrocarbons fit in an evolving energy system. We help you hold both imperatives without sacrificing either.",
    overviewEyebrow: "Sector Reality",
    overviewTitle: "Caught between two eras, and answerable to both.",
    overview: {
      paragraphs: [
        "Institutional investors are demanding credible energy-transition roadmaps. Governments are imposing methane reduction targets, carbon-pricing mechanisms, and scope emissions disclosure. And yet global oil demand remains above 100 million barrels per day, gas is indispensable to energy security across Europe and Asia, and the capital required to maintain production, let alone fund transition, demands that hydrocarbon assets stay commercially disciplined for the foreseeable future. The pressure is not to choose between performance and transition. It is to do both, with the same organisation, at the same time.",
        "That dual mandate exposes every weakness in an operating model: capital allocation frameworks built for a single-horizon world, asset-reliability programmes that are reactive rather than predictive, workforce models that are losing experienced operators to retirement and skilled engineers to the energy transition sector, and digital programmes that have promised operational intelligence for a decade but rarely delivered it at scale. The organisations that outperform will be those that treat both imperatives, profitability and transition, as operating disciplines, not competing priorities.",
      ],
      forces: ["Dual-mandate capital discipline", "Asset reliability at scale", "Decarbonisation credibility", "Geopolitical supply risk"],
    },
    challenges: [
      {
        title: "Stranded asset and portfolio risk",
        text: "Long-cycle capital commitments made in a high-demand world now carry transition risk. Knowing which assets to develop, optimise, or divest, and when, is the most consequential strategic decision in O&G today.",
        Icon: TrendingUp,
      },
      {
        title: "Asset reliability and production loss",
        text: "Unplanned downtime, reactive maintenance cultures, and ageing infrastructure cost the industry billions annually in deferred production. Predictive reliability is not a technology problem, it is an operating-model problem.",
        Icon: Gauge,
      },
      {
        title: "Capital programme discipline",
        text: "Major upstream developments and midstream infrastructure projects chronically overrun on cost and schedule. The root cause is almost always governance, not engineering, and it is fixable.",
        Icon: ShieldCheck,
      },
      {
        title: "Decarbonisation under commercial pressure",
        text: "Methane abatement, flaring reduction, carbon capture, and scope emissions reporting require genuine operational change. Programmes that live in the sustainability function rather than the operating model will not deliver credible results.",
        Icon: Droplets,
      },
      {
        title: "Workforce and knowledge transfer",
        text: "A generation of experienced operators and reservoir engineers is retiring. The knowledge required to safely and efficiently run complex assets is walking out the door faster than it is being replaced or codified.",
        Icon: LifeBuoy,
      },
      {
        title: "Fragmented operational data",
        text: "SCADA, historian, ERP, planning, and reliability systems generate data in silos that rarely converge into a single operating picture. The digital oilfield has been promised for twenty years, most organisations are still waiting for it.",
        Icon: BarChart3,
      },
    ],
    helpStatement:
      "HARTS partners with upstream operators, midstream infrastructure owners, and integrated majors to solve the operating challenges that determine production performance, capital returns, and transition credibility. We bring the asset-management discipline, capital-governance rigour, and organisational design capability to help oil & gas enterprises run their current assets harder, while building the operating model that a lower-carbon future actually requires.",
    HelpHeroIcon: Flame,
    cta: {
      title: "The transition is real. So is the obligation to perform right now.",
      text: "The organisations that will define the next era of energy are not choosing between profitability and decarbonisation, they are building the operating discipline to deliver both. Work with HARTS to sharpen asset performance, strengthen capital governance, and make your transition strategy operationally credible.",
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
    eyebrow: "Chemicals Consulting",
    titleSoft: "Margin under pressure.",
    titleStrong: "Discipline is the differentiator.",
    subtitle:
      "The chemical industry is being compressed from every direction, feedstock volatility, energy cost spikes, sustainability mandates, and specialty competitors eroding commodity margins. The organisations that outperform do not have better chemistry. They have better operating discipline. We help you build it.",
    overviewEyebrow: "Industry Reality",
    overviewTitle: "Squeezed on every side. The middle is disappearing.",
    overview: {
      paragraphs: [
        "The chemical industry's structural economics are under sustained attack. Commodity producers face margin compression from overcapacity in China, energy cost asymmetry versus Middle Eastern and US competitors, and feedstock volatility that punishes those without supply-chain optionality. Specialty chemical producers, once insulated by formulation complexity and customer lock-in, are watching their premium positions erode as customers intensify price scrutiny and alternative chemistries emerge. Across the value chain, the operational buffer that absorbed inefficiency during high-demand cycles is gone.",
        "Simultaneously, the industry faces a sustainability reckoning that is no longer optional. REACH regulations, plastics legislation, carbon border adjustments, and Scope 3 emissions disclosure requirements are reshaping product portfolios, capital allocation, and customer relationships faster than most chemical enterprises have adapted their operating models. Plants designed for a different regulatory and cost environment are now carrying legacy burdens that compound every quarter. The organisations that close the gap between strategic ambition and operating reality will define the next generation of chemical industry leadership.",
      ],
      forces: ["Feedstock & energy volatility", "Sustainability regulation", "Specialty margin erosion", "Plant reliability & yield"],
    },
    challenges: [
      {
        title: "Margin compression and cost position",
        text: "Energy-intensive production facing elevated input costs, Chinese overcapacity, and regional cost asymmetries is structurally exposed. Cost position is now a strategic variable, not an operational one, and it requires deliberate redesign.",
        Icon: LineChart,
      },
      {
        title: "Process yield and variability",
        text: "Every percentage point of yield loss, energy over-consumption, or off-spec production directly destroys margin. In commodity chemicals especially, the difference between a profitable and unprofitable plant is often process discipline, not capacity.",
        Icon: FlaskConical,
      },
      {
        title: "Asset reliability and maintenance strategy",
        text: "Unplanned shutdowns in continuous-process environments cascade into production losses, quality failures, and customer penalties that take quarters to recover from. Most chemical plants are still running reactive maintenance cultures against assets that cannot afford them.",
        Icon: Gauge,
      },
      {
        title: "Sustainability and regulatory compliance",
        text: "REACH, carbon border adjustment mechanisms, single-use plastics legislation, and Scope 3 reporting are not future risks, they are present obligations reshaping which products, processes, and geographies remain commercially viable.",
        Icon: Droplets,
      },
      {
        title: "Process safety and HSE governance",
        text: "Chemical process safety failures carry consequences, human, regulatory, reputational, and financial, that dwarf those in most other industries. Organisations that treat safety as a compliance exercise rather than an operating discipline are one incident away from existential consequences.",
        Icon: ShieldCheck,
      },
      {
        title: "Feedstock and supply chain exposure",
        text: "Single-source feedstock dependency, logistics fragility, and lack of supply-chain scenario intelligence leave chemical producers structurally exposed to disruptions that competitors with better supply architectures absorb without interruption.",
        Icon: Globe2,
      },
    ],
    helpStatement:
      "HARTS partners with commodity chemical producers, specialty manufacturers, and diversified chemical groups to convert operating complexity into competitive advantage. We work at the plant level and the portfolio level, improving process yield and asset reliability where margin is made, and redesigning operating models and capital governance where strategic direction is set. In an industry where the difference between profit and loss is measured in basis points, operating discipline is not a support function. It is the strategy.",
    HelpHeroIcon: FlaskConical,
    cta: {
      title: "In chemicals, operating discipline is not a support function. It is the strategy.",
      text: "Every point of yield loss, every unplanned shutdown, every regulatory penalty, and every feedstock disruption compounds into a cost position your competitors are building away from. Work with HARTS to sharpen process performance, strengthen asset reliability, and build the operating discipline that protects margin when the cycle turns.",
    },
  },
  "life-sciences": {
    slug: "life-sciences",
    scene: "industry-life-sciences",
    label: "Life Sciences",
    eyebrow: "Life Sciences Consulting",
    titleSoft: "Science creates the opportunity.",
    titleStrong: "Operations determines whether it becomes value.",
    subtitle:
      "Drug pricing reform, a $200 billion patent cliff, R&D productivity under scrutiny, and manufacturing complexity that has no peer in any other industry. Life sciences organisations face a commercial and operational reckoning that will separate durable leaders from those who relied too long on pipeline luck and pricing power.",
    overviewEyebrow: "Sector Reality",
    overviewTitle: "The patent cliff is here. The pipeline must deliver.",
    overview: {
      paragraphs: [
        "Over $200 billion in branded drug revenues are set to go off-patent by 2030. The Inflation Reduction Act has handed Medicare the power to negotiate drug prices for the first time, fundamentally altering the commercial calculus for the world's largest and most profitable pharmaceutical market. Meanwhile, the cost of bringing a new molecular entity to market has crossed $2.6 billion, clinical trial failure rates in oncology remain above 90%, and the regulatory bar for cell and gene therapy approval continues to rise. The industry's traditional formula, patent-protected pricing combined with blockbuster pipeline productivity, is under simultaneous, structural assault.",
        "The life sciences organisations that outperform through this cycle will not do so through scientific breakthroughs alone. They will do so by building operating models that move compounds through development faster, manufacture complex biologics and advanced therapies at reliable quality and scale, commercialise in a multi-channel access-constrained environment, and manage supply chains that remain dangerously concentrated in China and India for active pharmaceutical ingredients. Science creates the opportunity. Operations determines whether it becomes commercial value.",
      ],
      forces: ["Patent cliff & pricing reform", "R&D productivity", "Advanced therapy manufacturing", "Supply chain concentration risk"],
    },
    challenges: [
      {
        title: "Patent cliff and revenue erosion",
        text: "With over $200 billion in branded revenues facing genericisation by 2030, the pressure to refill pipelines, through internal R&D, licensing, or M&A, while managing the commercial decline of current assets is the defining strategic challenge of the decade.",
        Icon: TrendingUp,
      },
      {
        title: "R&D productivity and portfolio discipline",
        text: "At $2.6 billion per approved asset, R&D spend allocation, clinical trial design, patient recruitment, and go/no-go decision discipline are not just scientific questions. They are operating-model questions that determine whether organisations can sustain innovation at commercial scale.",
        Icon: Microscope,
      },
      {
        title: "Cell, gene, and biologic manufacturing",
        text: "Advanced therapy manufacturing, autologous cell therapies, gene editing, complex biologics, operates at a quality, scale, and supply-chain complexity that no other manufacturing sector has faced. Getting commercial manufacturing right is as hard as getting regulatory approval.",
        Icon: Dna,
      },
      {
        title: "Regulatory and quality systems at scale",
        text: "FDA, EMA, and PMDA scrutiny is intensifying across drug approval, manufacturing inspection, and post-market surveillance. Quality systems built for a smaller pipeline or simpler portfolio cannot carry the regulatory burden of a modern life sciences enterprise.",
        Icon: FileCheck2,
      },
      {
        title: "Commercial model transformation",
        text: "Payer access complexity, price transparency, value-based contracting, and the shift to digital HCP engagement are making the traditional field-force-led commercial model structurally insufficient. Organisations redesigning commercial operating models now will compound advantage.",
        Icon: LineChart,
      },
      {
        title: "API and supply chain concentration",
        text: "Over 80% of active pharmaceutical ingredients used in Western markets are sourced from China or India. That concentration is a strategic vulnerability, and the industry has been slow to address it since COVID exposed it in 2020.",
        Icon: Globe2,
      },
    ],
    helpStatement:
      "HARTS partners with pharmaceutical, biotech, and medical device organisations to build the operating models, supply chain architectures, and commercial capabilities that translate scientific innovation into durable commercial value. We work across the full development and commercial lifecycle, from R&D operating model design to manufacturing scale-up to market access strategy, because in life sciences, the gap between a promising asset and a commercially successful product is almost always an operating gap.",
    HelpHeroIcon: Dna,
    cta: {
      title: "The best pipeline in the industry means nothing if the operating model cannot deliver it.",
      text: "The organisations that define the next decade of life sciences leadership will develop faster, manufacture reliably, access markets efficiently, and build supply chains that do not fracture under geopolitical stress. Work with HARTS to close the gap between scientific ambition and operating reality.",
    },
  },
  energy: {
    slug: "energy",
    scene: "industry-energy",
    label: "Energy",
    eyebrow: "Energy Consulting",
    titleSoft: "The transition is funded.",
    titleStrong: "Now it has to be executed.",
    subtitle:
      "The Inflation Reduction Act, the European Green Deal, and equivalent policy frameworks globally have unlocked the largest wave of energy investment in history. The constraint is no longer capital or political will. It is execution capacity, grid infrastructure, workforce readiness, and the operating discipline to deliver at speed and scale.",
    overviewEyebrow: "Sector Reality",
    overviewTitle: "Capital is not the constraint. Execution is.",
    overview: {
      paragraphs: [
        "The energy transition has crossed the point of policy-driven ambiguity into capital-committed reality. Over $1.7 trillion was invested globally in clean energy in 2023 alone, exceeding fossil fuel investment for the first time by a meaningful margin. Utility-scale solar and onshore wind are now the cheapest sources of new electricity generation in most markets. Battery storage costs have fallen 90% over a decade. The economics are no longer the argument. The argument is now whether the organisations tasked with delivery, utilities, developers, grid operators, and energy services companies, can execute at the pace the transition requires.",
        "They largely cannot, yet. Grid interconnection queues in the US contain over 2,600 gigawatts of projects waiting for connection, a backlog measured in decades at current processing speeds. Offshore wind projects across Europe and the US are being cancelled or restructured because supply chain inflation, contract structures, and permitting timelines have made original financial models unviable. The hydrogen economy is struggling to cross the cost threshold for commercial self-sufficiency. And across every segment, the workforce required to build and operate the new energy system does not yet exist at sufficient scale. The transition is real. The execution gap is equally real.",
      ],
      forces: ["Grid infrastructure bottleneck", "Large-scale project execution", "Workforce development", "Merchant risk & commercial design"],
    },
    challenges: [
      {
        title: "Grid infrastructure and interconnection",
        text: "Transmission and distribution infrastructure built for centralised dispatchable generation cannot absorb the variability, distributed generation, and bidirectional flows that renewable-heavy grids require. The upgrade cycle is decades behind where it needs to be.",
        Icon: Plug,
      },
      {
        title: "Large-scale project execution",
        text: "Offshore wind, green hydrogen, long-duration storage, and grid modernisation projects are routinely delayed, over-budget, or cancelled. Supply chain inflation, permitting complexity, and contract-risk misallocation are manageable, if the operating governance is right.",
        Icon: ShieldCheck,
      },
      {
        title: "Merchant risk and commercial structuring",
        text: "As subsidy frameworks mature and merchant exposure increases, energy developers and utilities face revenue risk that PPAs, capacity markets, and hedging strategies can only partially manage. Commercial model design is now a source of competitive differentiation.",
        Icon: TrendingUp,
      },
      {
        title: "Asset operations and reliability",
        text: "Renewable assets have different failure modes, O&M cost structures, and performance-monitoring requirements than the thermal assets most utilities built their operational capabilities around. Operating model transformation is lagging asset portfolio transformation.",
        Icon: Gauge,
      },
      {
        title: "Workforce and capability gap",
        text: "The skills required to design, build, and operate the new energy system, offshore installation, power electronics, battery management, digital grid operations, are in acute global shortage. Workforce strategy is now a transition delivery constraint, not an HR question.",
        Icon: HeartPulse,
      },
      {
        title: "Customer and demand-side complexity",
        text: "Electrification of transport, industrial heat, and buildings is creating load growth patterns, demand flexibility opportunities, and customer expectations that most utility operating models were not designed to handle.",
        Icon: Zap,
      },
    ],
    helpStatement:
      "HARTS partners with utilities, renewable developers, grid operators, and energy services companies to build the execution capability the transition demands. We work on the problems that determine whether clean energy projects get built on time and budget, whether grid operating models can manage distributed and variable generation, and whether the commercial frameworks and workforce strategies exist to sustain transition at pace. The transition is happening. The question is whether your organisation is positioned to lead it.",
    HelpHeroIcon: Zap,
    cta: {
      title: "The energy transition will not wait for organisations that are not ready.",
      text: "The window to build execution capability, grid infrastructure, and commercial operating models ahead of the competition is open now, and closing. Work with HARTS to convert transition ambition into delivered projects, operational resilience, and durable competitive position in the new energy system.",
    },
  },
  technology: {
    slug: "technology",
    scene: "industry-technology",
    label: "Technology",
    eyebrow: "Technology Consulting",
    titleSoft: "The growth era is over.",
    titleStrong: "The efficiency era demands a different operating model.",
    subtitle:
      "The 2021 era of growth-at-any-cost, unlimited hiring, and revenue-multiple valuations is gone. Boards and investors now demand growth and operating leverage simultaneously. Most technology companies built their organisations for a world where only one of those two things was required.",
    overviewEyebrow: "Market Reality",
    overviewTitle: "Efficiency is the new growth story.",
    overview: {
      paragraphs: [
        "Between 2022 and 2024, the technology industry shed over 500,000 jobs, major platforms faced significant revenue multiple compression, and enterprise software buyers shifted from rapid adoption to intense scrutiny of renewal economics. The era in which growth metrics alone justified complex, high-cost operating models is over. Investors now demand the combination of growth and operating leverage, and most technology companies built their organisations, processes, and management layers for a world where only one of those two things was required.",
        "Simultaneously, AI is beginning to reshape the economics of software development, customer support, sales engineering, and knowledge work in ways that create both threat and opportunity. SaaS companies face the genuine risk of AI-native competitors offering comparable functionality at structurally lower price points. The technology organisations that move fastest to embed AI into their own operating models, development velocity, GTM efficiency, support automation, will compound advantage over those treating it as a product feature rather than an operating-model transformation. The next five years in technology will be decided by operating discipline, not product innovation alone.",
      ],
      forces: ["Operating leverage & efficiency", "AI-native competition", "Enterprise spend scrutiny", "GTM and portfolio discipline"],
    },
    challenges: [
      {
        title: "Operating model complexity and cost structure",
        text: "Organisations built for growth-at-all-costs carry layers of process complexity, management overhead, and organisational duplication that were invisible when revenue growth could absorb them. Restructuring for operating leverage requires far more than headcount reduction.",
        Icon: Cog,
      },
      {
        title: "AI disruption of core business models",
        text: "AI-native competitors are beginning to offer enterprise software functionality at price points that challenge traditional SaaS economics. Organisations that adapt product, pricing, and GTM models proactively will fare better than those that treat AI as a feature add-on.",
        Icon: Cpu,
      },
      {
        title: "Enterprise customer scrutiny and retention",
        text: "Enterprise buyers are renegotiating contracts, consolidating vendor relationships, and demanding proof of ROI before renewal. Net revenue retention, the defining metric of SaaS health, is under pressure across the market, and the recovery playbook is not obvious.",
        Icon: Target,
      },
      {
        title: "Product portfolio and investment discipline",
        text: "Technology companies that scaled quickly often carry portfolios with unclear strategic rationale, duplicated capability, and underperforming bets absorbing engineering capacity and leadership attention. Portfolio discipline is a competitive capability, not a cost-cutting exercise.",
        Icon: BarChart3,
      },
      {
        title: "Go-to-market alignment and efficiency",
        text: "Sales, marketing, and customer success functions built independently during the growth era often operate without shared data, aligned incentives, or coordinated customer engagement models. GTM efficiency is one of the largest untapped levers in technology operating models.",
        Icon: TrendingUp,
      },
      {
        title: "Engineering velocity and technical debt",
        text: "Rapid growth came at the cost of architectural integrity for most technology organisations. Technical debt, platform fragmentation, and depleted engineering capacity now slow product velocity precisely when competitive pressure demands acceleration.",
        Icon: Binary,
      },
    ],
    helpStatement:
      "HARTS partners with technology companies, from growth-stage SaaS to established enterprise platforms, to build the operating models the efficiency era demands. We work across product portfolio discipline, GTM alignment, organisational design, and AI-enabled operating model transformation. In technology, the next competitive advantage is not always built in the product. Often it is built in the operating model.",
    HelpHeroIcon: Cpu,
    cta: {
      title: "The next competitive advantage in technology is built in the operating model.",
      text: "The organisations that compound advantage in the efficiency era will do so through disciplined product portfolios, AI-enabled operations, and cost structures that scale revenue without scaling headcount. Work with HARTS to build the operating discipline that investors now require and enterprise customers increasingly demand.",
    },
  },
  telecom: {
    slug: "telecom",
    scene: "industry-telecom",
    label: "Telecommunications",
    eyebrow: "Telecom Consulting",
    titleSoft: "The network is built.",
    titleStrong: "Now build the business model around it.",
    subtitle:
      "The global telecom industry has invested hundreds of billions in 5G infrastructure, fibre rollout, and network modernisation. The return on that investment has not materialised at the pace operators anticipated. The network is not the problem. The operating model is.",
    overviewEyebrow: "Sector Reality",
    overviewTitle: "5G is live. The business case is still loading.",
    overview: {
      paragraphs: [
        "Global 5G capital expenditure has exceeded $500 billion since 2019, yet average revenue per user across most developed markets has been flat or declining in real terms. The consumer use cases projected to unlock 5G monetisation, holographic communication, mass AR/VR adoption, seamless edge computing for everyday applications, have not arrived on the timelines operators built their investment cases around. Meanwhile, fixed wireless access is disrupting cable incumbents in meaningful ways, but at price points that cannibalise operator economics. And the hyperscalers, Amazon, Microsoft, Google, are competing directly for enterprise connectivity and private network revenues that operators had identified as their primary 5G monetisation pathway.",
        "The structural challenge is not that 5G lacks value. It is that the telecom industry's operating model, built for voice, SMS, and consumer broadband, has not transformed at the same pace as the network. Legacy BSS/OSS stacks, siloed product organisations, a sales motion built around consumer volumes rather than enterprise solution-selling, and a cost base shaped by decades of infrastructure ownership are not the operating foundations for a software-defined, enterprise-focused, platform-enabled telecom business. The organisations that close that gap will monetise the network they have spent a decade building.",
      ],
      forces: ["5G monetisation gap", "Enterprise B2B pivot", "Legacy cost base reduction", "Hyperscaler competition"],
    },
    challenges: [
      {
        title: "5G monetisation gap",
        text: "Hundreds of billions in 5G capex have not yet translated into proportionate revenue growth. The consumer market lacks the killer use cases; the enterprise market requires a sales and solution architecture capability most operators do not yet possess at scale.",
        Icon: Signal,
      },
      {
        title: "Enterprise and B2B transformation",
        text: "Private networks, network slicing, IoT connectivity, and managed services require a fundamentally different go-to-market capability, consultative selling, solution design, long-cycle relationship management, than the high-volume consumer motion operators have historically built.",
        Icon: Network,
      },
      {
        title: "Legacy infrastructure and cost base",
        text: "Copper decommissioning, legacy network retirement, and the transition from physical to software-defined infrastructure are running behind the pace required to fund 5G returns. Every month of delayed legacy cost removal compounds the investment recovery challenge.",
        Icon: Blocks,
      },
      {
        title: "BSS/OSS modernisation",
        text: "Billing, customer management, order management, and network operations systems built for a previous technology era are creating operational friction, customer experience failures, and an inability to launch new services at the speed the market demands.",
        Icon: Binary,
      },
      {
        title: "Hyperscaler and OTT competition",
        text: "AWS, Microsoft Azure, and Google Cloud are competing directly for enterprise network, edge compute, and private connectivity revenues. OTT players continue to capture communications value, messaging, video, collaboration, without bearing the infrastructure cost that operators carry.",
        Icon: Globe2,
      },
      {
        title: "Customer experience and churn",
        text: "In markets where network quality has largely converged, customer experience, in service delivery, fault resolution, and digital engagement, has become the primary churn driver. Most operators are losing on experience, not on coverage.",
        Icon: Eye,
      },
    ],
    helpStatement:
      "HARTS partners with telecommunications operators, tower companies, and network service providers to close the gap between network investment and commercial return. We work on B2B transformation, operating model redesign, legacy cost reduction, and customer experience improvement, because the operators that recover their 5G investment will be those that transformed their commercial capability and modernised their cost base, not just those that built the fastest network.",
    HelpHeroIcon: Radio,
    cta: {
      title: "You built the network. Now build the operating model that monetises it.",
      text: "The operators that recover their 5G investment and build durable enterprise positions will be those that transformed commercial capability, modernised their cost base, and designed customer experiences that justify the infrastructure they built. Work with HARTS to accelerate that transformation.",
    },
  },
  transportation: {
    slug: "transportation",
    scene: "industry-transportation",
    label: "Transportation",
    eyebrow: "Transportation Consulting",
    titleSoft: "The world moves differently now.",
    titleStrong: "Your operating model must too.",
    subtitle:
      "Nearshoring, e-commerce permanence, fleet electrification, port congestion, driver shortages, and carbon reporting obligations have simultaneously redesigned the economics of moving goods and people. The transportation operating models built for the pre-2020 world are structurally misaligned with the one operators are running in today.",
    overviewEyebrow: "Sector Reality",
    overviewTitle: "Every supply chain just got redesigned. Your network needs to follow.",
    overview: {
      paragraphs: [
        "Three forces are simultaneously reshaping transportation economics in ways that compound rather than cancel each other. Supply chain nearshoring and friend-shoring, accelerated by pandemic disruption, US-China trade tensions, and geopolitical risk aversion, are redirecting freight flows away from the transpacific routes and hub-and-spoke logistics networks that carrier and infrastructure economics were built around. E-commerce permanence has made last-mile delivery both the most expensive and the most competitively differentiated segment of the logistics value chain. And fleet electrification, driven by urban emissions zones, corporate scope 3 commitments, and improving EV total cost of ownership, is forcing fleet operators to rethink depot infrastructure, route planning, and maintenance economics simultaneously.",
        "Overlaying all of this is a structural driver shortage, the US alone faces a projected deficit of 160,000 truck drivers by 2030, and carbon reporting obligations that are making scope 3 freight emissions a procurement and supplier-selection variable for large shippers for the first time. Transportation operators that adapt their network design, fleet strategy, and operating model to these intersecting forces will build durable advantage. Those that optimise incrementally against the old map will find the territory has changed.",
      ],
      forces: ["Network redesign for nearshoring", "Last-mile economics", "Fleet electrification", "Emissions accountability"],
    },
    challenges: [
      {
        title: "Network redesign for shifting freight flows",
        text: "Nearshoring and the reorientation of manufacturing away from Asia are rerouting freight volumes that operators built capacity and pricing models around. Network design is a strategic decision, not a logistics optimisation, and it needs to be made now, not reactively.",
        Icon: Globe2,
      },
      {
        title: "Last-mile economics and profitability",
        text: "Last-mile delivery is structurally loss-making at current density levels for many operators. The answer is not volume, it is route density, automation, consolidation models, and delivery experience design that reduce cost-per-stop while meeting next-day expectations.",
        Icon: Truck,
      },
      {
        title: "Fleet electrification transition",
        text: "Electrifying commercial fleets requires more than buying different vehicles. Depot charging infrastructure, range-constrained route planning, new maintenance capabilities, and utility engagement for power capacity are operating-model changes that must run ahead of the vehicles.",
        Icon: Zap,
      },
      {
        title: "Driver shortage and workforce model",
        text: "The trucking driver shortage is structural, not cyclical. Autonomous freight will partially address it, but not on the timelines that alleviate near-term pressure. Operating models that retain and deploy drivers more effectively are a source of competitive differentiation today.",
        Icon: TramFront,
      },
      {
        title: "Infrastructure capacity and resilience",
        text: "Port congestion, rail network constraints, and highway infrastructure built for previous freight volumes create systemic bottlenecks that individual operators cannot solve, but can navigate better than competitors through smarter network design and modal flexibility.",
        Icon: ShieldCheck,
      },
      {
        title: "Carbon and emissions accountability",
        text: "Scope 3 freight emissions are becoming a shipper procurement variable. Transportation operators that cannot measure, report, and credibly reduce their emissions footprint are becoming disqualified from tenders by large corporate shippers with net-zero supply chain commitments.",
        Icon: BarChart3,
      },
    ],
    helpStatement:
      "HARTS partners with logistics operators, freight carriers, rail networks, port authorities, and multi-modal transport groups to build operating models that match the geography, economics, and regulatory environment of transportation today, not five years ago. We work on network design, fleet strategy, last-mile economics, workforce models, and decarbonisation operating plans. In transportation, operating model relevance is not optional. It is the difference between winning freight and watching it move on a competitor's network.",
    HelpHeroIcon: TramFront,
    cta: {
      title: "The freight is moving. The question is whose network it moves on.",
      text: "The transportation operators that capture the next decade of volume will be those that redesigned their networks for where freight is going, electrified ahead of regulation, solved last-mile economics, and built the sustainability credentials large shippers now require. Work with HARTS to get there first.",
    },
  },
};

function revealDelay(index: number): CSSProperties {
  return { "--industry-detail-delay": `${index * 70}ms` } as CSSProperties;
}

function IndustryDetailTemplate({ data }: { data: IndustryContent }) {
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
            <p className="eyebrow">{data.overviewEyebrow ?? "Industry Overview"}</p>
            <h2>{data.overviewTitle ?? "Executive context"}</h2>
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
              Connect with HARTS
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
