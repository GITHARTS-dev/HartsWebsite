"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Binary,
  Blocks,
  BrainCircuit,
  Building2,
  Car,
  ClipboardCheck,
  Cog,
  Combine,
  Factory,
  Eye,
  FileCheck2,
  Gauge,
  GitMerge,
  Globe2,
  Landmark,
  Layers3,
  LineChart,
  Network,
  Plane,
  Radar,
  RefreshCw,
  Route,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

type CardItem = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

type CapabilityItem = {
  title: string;
  text: string;
};

type OutcomeItem = {
  metric: string;
  label: string;
  text: string;
};

type JourneyItem = {
  phase: string;
  title: string;
  text: string;
};

type IndustryContent = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroSignal: string;
  visualTitle: string;
  visualNodes: string[];
  stats: OutcomeItem[];
  overview: {
    title: string;
    paragraphs: string[];
    forces: string[];
  };
  challenges: CardItem[];
  capabilities: CapabilityItem[];
  needs: CardItem[];
  help: CardItem[];
  transformation: JourneyItem[];
  maturity: {
    title: string;
    text: string;
    dimensions: string[];
  };
  gcc: {
    title: string;
    text: string;
    pillars: CardItem[];
  };
  pmi: {
    title: string;
    text: string;
    plays: string[];
  };
  outcomes: OutcomeItem[];
  partnerReasons: CardItem[];
  cta: {
    title: string;
    text: string;
  };
};

const sectionNav = [
  { href: "#overview", label: "Overview" },
  { href: "#challenges", label: "Challenges" },
  { href: "#help", label: "Capabilities" },
];

const industryContent = {
  aerospace: {
    slug: "aerospace",
    eyebrow: "Aerospace consulting",
    title: "Transforming Aerospace Operations for Scalable Innovation",
    subtitle:
      "We help aerospace organizations modernize operational ecosystems, improve engineering collaboration, strengthen supply chain visibility, and accelerate enterprise transformation initiatives.",
    heroSignal: "Precision operating model",
    visualTitle: "Engineering-to-production transformation system",
    visualNodes: ["Design authority", "Supplier control", "Program governance", "Quality assurance"],
    stats: [
      { metric: "01", label: "Program visibility", text: "Integrated views across engineering, production, supply chain, and governance." },
      { metric: "02", label: "Maturity-led roadmap", text: "Prioritized modernization moves based on operational readiness." },
      { metric: "03", label: "Enterprise scale", text: "Models designed for regulated, multi-site, mission-critical operations." },
    ],
    overview: {
      title: "Industry Overview",
      paragraphs: [
        "The aerospace industry operates within one of the world’s most complex and highly regulated environments. Organizations must continuously balance innovation, operational efficiency, engineering precision, regulatory compliance, and supply chain resilience while responding to evolving global demands.",
        "Modern aerospace enterprises increasingly require scalable operating models, digitally connected ecosystems, and transformation frameworks that improve organizational agility without compromising reliability or compliance standards.",
      ],
      forces: ["Certification rigor", "Program complexity", "Supplier resilience", "Engineering precision"],
    },
    challenges: [
      { title: "Complex engineering collaboration", text: "Distributed engineering teams need decision clarity, configuration discipline, and stronger coordination from concept through certification.", Icon: Network },
      { title: "Global supply chain disruptions", text: "Multi-tier supplier exposure makes continuity, quality, and schedule assurance harder to govern in real time.", Icon: Globe2 },
      { title: "Regulatory compliance pressures", text: "Compliance obligations require traceable processes, auditable evidence, and operating routines that withstand scrutiny.", Icon: FileCheck2 },
      { title: "Legacy operational systems", text: "Fragmented platforms slow visibility across program management, manufacturing operations, engineering change, and quality.", Icon: Binary },
      { title: "Production scalability challenges", text: "Scaling output requires synchronized planning, standardized work, and operational controls that preserve precision.", Icon: Gauge },
      { title: "Data silos across systems", text: "Critical signals often remain trapped across PLM, ERP, MES, supplier portals, and program reporting layers.", Icon: Blocks },
      { title: "High operational costs", text: "Rework, late-stage change, supplier variance, and manual coordination create avoidable cost pressure.", Icon: LineChart },
      { title: "Transformation readiness gaps", text: "Modernization efforts stall when governance, maturity, ownership, and adoption plans are not aligned.", Icon: Activity },
    ],
    capabilities: [
      {
        title: "Enterprise Transformation",
        text: "Helping aerospace organizations modernize operational ecosystems, improve agility, and scale enterprise-wide transformation initiatives.",
      },
      {
        title: "Engineering & Operations",
        text: "Improving collaboration across engineering, operations, and production environments to enhance execution efficiency and operational visibility.",
      },
      {
        title: "Digital & Analytics",
        text: "Helping organizations modernize operational intelligence through connected systems, enterprise visibility, and data-driven transformation initiatives.",
      },
      {
        title: "Supply Chain Resilience",
        text: "Strengthening aerospace supply chain ecosystems through operational visibility, coordination improvement, and resilience-focused transformation.",
      },
      {
        title: "Operational Excellence",
        text: "Optimizing operational performance, process maturity, and execution consistency across complex aerospace environments.",
      },
      {
        title: "Organizational Scaling",
        text: "Supporting scalable operating models that enable long-term transformation readiness and enterprise growth.",
      },
      {
        title: "Integration & Transformation",
        text: "Helping organizations align operational structures, enterprise systems, and transformation priorities during large-scale organizational change.",
      },
    ],
    needs: [
      { title: "Real-time operational visibility", text: "Leaders need connected program, production, quality, and supplier intelligence to act before constraints escalate.", Icon: Radar },
      { title: "Engineering collaboration frameworks", text: "Clear forums, decision rights, and workflow standards help technical teams move faster without losing control.", Icon: BrainCircuit },
      { title: "Transformation governance", text: "Portfolio-level governance keeps modernization tied to certification, performance, capital, and enterprise priorities.", Icon: ShieldCheck },
      { title: "Scalable global operations", text: "Aerospace teams need operating models that can expand across sites, suppliers, and capability centers.", Icon: Globe2 },
      { title: "Process modernization", text: "Standardized, digitized workflows reduce friction across engineering change, production readiness, and assurance.", Icon: Workflow },
      { title: "Maturity-driven optimization", text: "OMA creates an objective view of where process, data, governance, and technology maturity must improve.", Icon: BadgeCheck },
      { title: "Intelligent operational insights", text: "Better data architecture turns engineering, quality, and delivery signals into leadership-grade decisions.", Icon: BarChart3 },
    ],
    help: [
      { title: "Operational Maturity Assessment (OMA)", text: "Evaluate enterprise readiness, process maturity, engineering workflows, and operational scalability using structured maturity assessment frameworks.", Icon: ClipboardCheck },
      { title: "Enterprise Transformation Strategy", text: "Design scalable modernization roadmaps that align operational processes, engineering systems, and strategic transformation initiatives.", Icon: Route },
      { title: "GCC Transformation Support", text: "Help aerospace organizations establish scalable global capability models that improve collaboration, operational continuity, and enterprise efficiency.", Icon: Building2 },
      { title: "Post-Merger Operational Integration", text: "Develop structured integration playbooks that align engineering teams, operational systems, governance structures, and transformation priorities.", Icon: GitMerge },
    ],
    transformation: [
      { phase: "Phase 01", title: "Diagnose the operating system", text: "Map engineering, production, quality, supplier, and program governance pain points against maturity benchmarks." },
      { phase: "Phase 02", title: "Design the transformation architecture", text: "Define target operating models, control towers, decision forums, and modernization sequencing." },
      { phase: "Phase 03", title: "Mobilize cross-functional execution", text: "Launch workstreams that connect process owners, technical leaders, digital teams, and site operations." },
      { phase: "Phase 04", title: "Scale with control", text: "Embed dashboards, governance routines, adoption metrics, and continuous improvement mechanisms." },
    ],
    maturity: {
      title: "Operational maturity focus for aerospace leaders",
      text:
        "OMA helps aerospace leadership teams see where operational excellence is constrained by unclear governance, inconsistent workflows, data fragmentation, or capability gaps. The assessment translates complexity into a practical maturity baseline and a sequenced improvement agenda.",
      dimensions: ["Engineering workflow maturity", "Manufacturing readiness", "Supplier governance", "Quality and compliance traceability", "Program control cadence", "Digital operations enablement"],
    },
    gcc: {
      title: "GCC relevance: engineering scale without operational drag",
      text:
        "Global capability centers can become a strategic aerospace advantage when they are designed around disciplined knowledge transfer, role clarity, engineering governance, and measurable service maturity.",
      pillars: [
        { title: "Capability architecture", text: "Define which engineering, analytics, quality, and operations capabilities belong in the GCC model.", Icon: Layers3 },
        { title: "Collaboration continuity", text: "Create operating routines that connect site teams, global specialists, and program leadership.", Icon: Network },
        { title: "Performance governance", text: "Track service quality, cycle time, compliance support, and enterprise value contribution.", Icon: Target },
      ],
    },
    pmi: {
      title: "Post-merger integration for mission-critical programs",
      text:
        "Aerospace transactions often combine engineering cultures, regulated processes, supplier networks, and long-cycle program commitments. HARTS helps leadership teams integrate without creating execution turbulence.",
      plays: ["Engineering team and authority alignment", "Process and systems harmonization", "Supplier and quality governance integration", "Transformation portfolio sequencing"],
    },
    outcomes: [
      { metric: "Visibility", label: "Improved operational visibility", text: "Executives gain clearer line of sight across program health, delivery risk, supplier constraints, and operational maturity." },
      { metric: "Collaboration", label: "Stronger engineering collaboration", text: "Teams work through clearer decision rights, shared workflows, and better cross-functional cadence." },
      { metric: "Standardization", label: "Increased process standardization", text: "Common operating methods reduce variation across sites, functions, and program teams." },
      { metric: "Scale", label: "Enhanced scalability", text: "Operating models support growth while preserving quality, compliance, and delivery discipline." },
      { metric: "Governance", label: "Better transformation governance", text: "Transformation portfolios become easier to prioritize, fund, execute, and measure." },
      { metric: "Speed", label: "Faster operational decision-making", text: "Connected data and governance routines help leaders act before issues become program delays." },
    ],
    partnerReasons: [
      { title: "We understand regulated complexity", text: "Our approach respects compliance, quality, engineering discipline, and long-cycle program realities.", Icon: ShieldCheck },
      { title: "We connect strategy to execution", text: "Roadmaps are built around operating routines, ownership, and measurable progress rather than abstract ambition.", Icon: Combine },
      { title: "We make maturity actionable", text: "OMA findings become practical priorities for leadership, transformation offices, and operational teams.", Icon: TrendingUp },
    ],
    cta: {
      title: "Build the next aerospace operating advantage.",
      text:
        "Partner with HARTS to assess maturity, modernize critical workflows, and scale transformation with the precision your enterprise requires.",
    },
  },
  automotive: {
    slug: "automotive",
    eyebrow: "Automotive consulting",
    title: "Accelerating Transformation Across Modern Automotive Ecosystems",
    subtitle:
      "We support automotive enterprises in modernizing operations, improving manufacturing scalability, driving mobility innovation, and enabling enterprise-wide transformation initiatives.",
    heroSignal: "Mobility operating model",
    visualTitle: "Connected manufacturing and mobility transformation",
    visualNodes: ["Smart factory", "EV programs", "Supplier network", "Customer platforms"],
    stats: [
      { metric: "01", label: "Factory intelligence", text: "Operating signals connected across production, quality, and supply chain." },
      { metric: "02", label: "Innovation velocity", text: "Governance that helps new mobility programs move with discipline." },
      { metric: "03", label: "Enterprise agility", text: "Scalable models for multi-site manufacturing and digital business growth." },
    ],
    overview: {
      title: "Industry Overview",
      paragraphs: [
        "The automotive industry is rapidly evolving through electrification, connected mobility ecosystems, digital manufacturing, and changing customer expectations. Organizations must continuously adapt operational models while maintaining production efficiency, innovation speed, and supply chain resilience.",
        "Modern automotive enterprises require agile transformation frameworks capable of supporting smart manufacturing, operational scalability, and data-driven decision-making.",
      ],
      forces: ["Electrification", "Connected mobility", "Smart manufacturing", "Supply volatility"],
    },
    challenges: [
      { title: "Supply chain volatility", text: "Material constraints, supplier risk, and logistics disruption pressure production plans and margin discipline.", Icon: RefreshCw },
      { title: "Manufacturing inefficiencies", text: "Uneven throughput, rework, downtime, and inconsistent process adherence limit performance gains.", Icon: Factory },
      { title: "Production scalability", text: "New platforms and regional demand shifts require operating models that scale without disrupting quality.", Icon: Gauge },
      { title: "Technology integration complexity", text: "Digital factory, vehicle software, ERP, MES, and analytics programs often advance at different speeds.", Icon: Binary },
      { title: "Rapid innovation cycles", text: "EV, software-defined vehicle, and connected services initiatives compress planning and execution windows.", Icon: Sparkles },
      { title: "Legacy systems", text: "Aging operational platforms make it difficult to create unified manufacturing and enterprise intelligence.", Icon: Blocks },
      { title: "Cross-functional operational gaps", text: "Product, plant, procurement, finance, and technology teams need tighter decision routines.", Icon: Network },
      { title: "Data fragmentation", text: "Operational data is frequently available but not trusted, connected, or translated into action.", Icon: BarChart3 },
    ],
    capabilities: [
      {
        title: "Manufacturing Transformation",
        text: "Modernizing production ecosystems through scalable operational transformation and manufacturing optimization initiatives.",
      },
      {
        title: "Smart Operations",
        text: "Enabling connected operational visibility across manufacturing, logistics, and enterprise workflows.",
      },
      {
        title: "Mobility & Innovation",
        text: "Helping organizations adapt to evolving mobility ecosystems and changing operational demands.",
      },
      {
        title: "Enterprise Agility",
        text: "Improving responsiveness and operational scalability across fast-moving automotive environments.",
      },
      {
        title: "Process Optimization",
        text: "Enhancing manufacturing efficiency through workflow standardization and operational improvement strategies.",
      },
      {
        title: "Digital Manufacturing",
        text: "Supporting transformation initiatives that modernize manufacturing operations and enterprise coordination.",
      },
    ],
    needs: [
      { title: "Smart manufacturing ecosystems", text: "Plants need integrated processes, digital tools, and performance management routines that improve flow.", Icon: Factory },
      { title: "Scalable production operations", text: "Leadership teams need flexible capacity models and standardized operating disciplines across sites.", Icon: Cog },
      { title: "Digital transformation governance", text: "Transformation portfolios need funding logic, ownership, value tracking, and adoption discipline.", Icon: ShieldCheck },
      { title: "Connected operational intelligence", text: "Production, supplier, quality, and customer signals must become timely decisions.", Icon: Radar },
      { title: "Operational agility", text: "Automotive enterprises need faster scenario planning and cross-functional execution during volatility.", Icon: Activity },
      { title: "Innovation acceleration", text: "New mobility programs require stronger linkage between product ambition and operating capacity.", Icon: TrendingUp },
      { title: "Enterprise-wide visibility", text: "Executives need a coherent view of transformation readiness across plants, functions, and regions.", Icon: Eye },
    ],
    help: [
      { title: "Manufacturing transformation strategy", text: "Build modernization roadmaps for smart factory programs, digital operations, production scalability, and performance governance.", Icon: Factory },
      { title: "Operational maturity assessment", text: "Assess process maturity, plant readiness, data discipline, and leadership routines across the automotive operating model.", Icon: ClipboardCheck },
      { title: "GCC operating model transformation", text: "Design global capability models for analytics, engineering support, procurement operations, finance, and digital enablement.", Icon: Building2 },
      { title: "Enterprise process optimization", text: "Standardize cross-functional processes that connect product, plant, supply chain, quality, and finance decision-making.", Icon: Workflow },
      { title: "Post-merger operational alignment", text: "Align manufacturing footprints, platforms, systems, teams, and governance after acquisitions or strategic partnerships.", Icon: GitMerge },
      { title: "Transformation governance frameworks", text: "Create executive cadence, portfolio controls, benefits tracking, and operating rhythms for enterprise-scale change.", Icon: Scale },
    ],
    transformation: [
      { phase: "Stage 01", title: "Surface operational constraints", text: "Identify the production, supply, systems, and governance issues preventing speed and resilience." },
      { phase: "Stage 02", title: "Reframe the mobility roadmap", text: "Connect electrification, software, manufacturing, and customer platform priorities to an executable enterprise agenda." },
      { phase: "Stage 03", title: "Modernize plants and processes", text: "Improve workflows, production intelligence, leadership routines, and adoption mechanisms across the network." },
      { phase: "Stage 04", title: "Scale capabilities globally", text: "Embed GCC roles, transformation controls, playbooks, and performance dashboards across regions." },
    ],
    maturity: {
      title: "Operational maturity focus for automotive transformation",
      text:
        "OMA gives automotive leaders a fact base for where manufacturing, process, data, governance, and technology maturity are enabling or slowing transformation. It helps separate isolated improvement activity from enterprise capability building.",
      dimensions: ["Plant operating maturity", "Production planning discipline", "Digital factory readiness", "Cross-functional governance", "Supplier collaboration", "Innovation portfolio execution"],
    },
    gcc: {
      title: "GCC relevance: global capabilities for a faster mobility enterprise",
      text:
        "Automotive GCCs can help enterprises scale engineering support, analytics, procurement operations, finance, IT, and digital manufacturing capabilities when designed with clear accountability and value measures.",
      pillars: [
        { title: "Global service model", text: "Define capability ownership, service scope, and interaction models across plants and business units.", Icon: Globe2 },
        { title: "Analytics at scale", text: "Create reusable data products for production, quality, supplier performance, and transformation value tracking.", Icon: BarChart3 },
        { title: "Operating cadence", text: "Connect GCC teams to plant and enterprise rhythms so capabilities translate into business outcomes.", Icon: Workflow },
      ],
    },
    pmi: {
      title: "Post-merger integration across automotive platforms",
      text:
        "Automotive integrations often involve complex manufacturing footprints, supplier contracts, brand portfolios, and technology platforms. HARTS helps prioritize what must harmonize quickly and what should remain differentiated.",
      plays: ["Manufacturing footprint alignment", "Platform and systems convergence", "Supplier and procurement integration", "Transformation office mobilization"],
    },
    outcomes: [
      { metric: "Scale", label: "Faster operational scalability", text: "Plants and enterprise functions gain clearer paths to support new platforms and demand shifts." },
      { metric: "Visibility", label: "Improved manufacturing visibility", text: "Leadership receives a stronger view of production performance, constraints, and transformation progress." },
      { metric: "Efficiency", label: "Enhanced production efficiency", text: "Standardized processes and smarter routines reduce waste, rework, and avoidable delay." },
      { metric: "Readiness", label: "Better transformation readiness", text: "Teams understand capability gaps and the sequencing required to modernize at pace." },
      { metric: "Collaboration", label: "Improved enterprise collaboration", text: "Product, operations, supply chain, and digital teams work through clearer shared priorities." },
      { metric: "Innovation", label: "Accelerated innovation enablement", text: "Mobility bets are supported by operating models that can absorb change and scale." },
    ],
    partnerReasons: [
      { title: "We translate disruption into execution", text: "We help automotive leaders convert market pressure into practical operating moves.", Icon: Route },
      { title: "We respect plant realities", text: "Transformation is shaped around production rhythm, quality discipline, and workforce adoption.", Icon: Factory },
      { title: "We build scalable governance", text: "Our playbooks help leadership teams govern innovation, operations, and enterprise change together.", Icon: ShieldCheck },
    ],
    cta: {
      title: "Move automotive transformation from initiative to operating advantage.",
      text:
        "Work with HARTS to strengthen manufacturing maturity, scale global capabilities, and build the governance needed for modern mobility.",
    },
  },
  financialServices: {
    slug: "financial-services",
    eyebrow: "Financial services consulting",
    title: "Modernizing Financial Operations for Resilience and Scalable Growth",
    subtitle:
      "We help financial institutions improve governance, modernize operational frameworks, strengthen enterprise resilience, and accelerate transformation initiatives.",
    heroSignal: "Trust-led operating model",
    visualTitle: "Governance, risk, and operational modernization platform",
    visualNodes: ["Risk controls", "Reporting", "Operating model", "Customer trust"],
    stats: [
      { metric: "01", label: "Governance clarity", text: "Decision structures that withstand regulatory and enterprise scrutiny." },
      { metric: "02", label: "Operational resilience", text: "Processes designed for stability, transparency, and controlled change." },
      { metric: "03", label: "Scalable growth", text: "Operating frameworks that support digital expansion and enterprise performance." },
    ],
    overview: {
      title: "Industry Overview",
      paragraphs: [
        "Financial institutions operate within highly dynamic environments shaped by regulatory complexity, operational risk, evolving customer expectations, and rapid digital transformation.",
        "Organizations require scalable operating frameworks capable of improving governance, operational transparency, enterprise agility, and long-term resilience.",
      ],
      forces: ["Regulatory complexity", "Digital trust", "Risk visibility", "Operating resilience"],
    },
    challenges: [
      { title: "Regulatory complexity", text: "Institutions must interpret evolving obligations while maintaining clear controls and accountable operating routines.", Icon: Scale },
      { title: "Governance inefficiencies", text: "Slow committees, unclear decision rights, and fragmented ownership reduce transformation momentum.", Icon: Landmark },
      { title: "Legacy operational systems", text: "Aging platforms and manual handoffs increase risk, cost, and operational opacity.", Icon: Binary },
      { title: "Data governance gaps", text: "Inconsistent definitions and fragmented lineage weaken reporting confidence and executive decision-making.", Icon: FileCheck2 },
      { title: "Enterprise risk visibility", text: "Leadership needs earlier signals across process, technology, third-party, and compliance risk.", Icon: Radar },
      { title: "Operational silos", text: "Business, risk, compliance, technology, and operations teams often work through disconnected priorities.", Icon: Blocks },
      { title: "Process inefficiencies", text: "Manual controls, duplicated work, and unclear exception handling slow service delivery.", Icon: Workflow },
      { title: "Transformation scalability", text: "Programs struggle when modernization is not connected to governance, value tracking, and adoption.", Icon: TrendingUp },
    ],
    capabilities: [
      {
        title: "Governance Transformation",
        text: "Modernizing governance frameworks to improve operational accountability and enterprise visibility.",
      },
      {
        title: "Enterprise Modernization",
        text: "Helping institutions modernize operational ecosystems and transformation readiness capabilities.",
      },
      {
        title: "Operational Resilience",
        text: "Strengthening enterprise operating models to improve continuity, agility, and organizational stability.",
      },
      {
        title: "Risk & Compliance Alignment",
        text: "Enhancing operational alignment across governance, reporting, and compliance environments.",
      },
      {
        title: "Process Optimization",
        text: "Improving enterprise efficiency through operational streamlining and transformation-led process improvement.",
      },
      {
        title: "Strategic Transformation",
        text: "Supporting enterprise-wide modernization initiatives focused on scalability and operational performance.",
      },
    ],
    needs: [
      { title: "Governance modernization", text: "Financial enterprises need decision models that are faster, clearer, and control-conscious.", Icon: Landmark },
      { title: "Enterprise operational visibility", text: "Executives need trusted insight into performance, risk, exceptions, and transformation status.", Icon: Radar },
      { title: "Process standardization", text: "Critical workflows need consistent ownership, control points, and performance measures.", Icon: Workflow },
      { title: "Risk-aware transformation", text: "Change programs must improve speed without weakening compliance, resilience, or auditability.", Icon: ShieldCheck },
      { title: "Scalable operating models", text: "Institutions need structures that support growth, digital channels, and controlled enterprise complexity.", Icon: Building2 },
      { title: "Intelligent reporting frameworks", text: "Leadership reporting must connect operational, risk, financial, and customer signals.", Icon: BarChart3 },
      { title: "Secure transformation governance", text: "Portfolios require clear controls, traceability, and disciplined value management.", Icon: BadgeCheck },
    ],
    help: [
      { title: "Operational maturity assessment", text: "Assess governance, workflow maturity, data discipline, risk controls, and transformation readiness across enterprise functions.", Icon: ClipboardCheck },
      { title: "Governance transformation frameworks", text: "Redesign decision forums, escalation paths, ownership models, and performance routines for controlled agility.", Icon: Landmark },
      { title: "GCC operational enablement", text: "Structure global capability models for finance operations, analytics, compliance support, technology, and process excellence.", Icon: Building2 },
      { title: "Enterprise modernization strategy", text: "Define practical modernization roadmaps across operations, data, controls, reporting, and digital enablement.", Icon: Route },
      { title: "Process optimization initiatives", text: "Improve workflow consistency, control design, reporting cycles, service quality, and operational productivity.", Icon: Workflow },
      { title: "Post-merger operational harmonization", text: "Align governance, process taxonomies, data standards, risk controls, and operating rhythms after mergers or acquisitions.", Icon: GitMerge },
    ],
    transformation: [
      { phase: "Step 01", title: "Establish the control baseline", text: "Assess governance, risk controls, process maturity, data quality, and transformation readiness." },
      { phase: "Step 02", title: "Shape a resilient operating model", text: "Define how business, risk, technology, operations, and finance teams make decisions and measure progress." },
      { phase: "Step 03", title: "Modernize priority workflows", text: "Target high-value processes where standardization, automation, and reporting can reduce friction." },
      { phase: "Step 04", title: "Embed transparency and cadence", text: "Install governance routines, dashboards, benefits tracking, and adoption mechanisms." },
    ],
    maturity: {
      title: "Operational maturity focus for financial institutions",
      text:
        "OMA gives leadership an objective view of how governance, process discipline, data reliability, control design, and transformation readiness are performing. It helps prioritize modernization while protecting trust and resilience.",
      dimensions: ["Governance maturity", "Control and risk alignment", "Process standardization", "Data and reporting reliability", "Transformation portfolio discipline", "Operating model scalability"],
    },
    gcc: {
      title: "GCC relevance: resilient scale for enterprise functions",
      text:
        "Financial services GCCs can strengthen execution capacity when the model is designed around secure processes, clear controls, service ownership, and measurable business value.",
      pillars: [
        { title: "Control-conscious service design", text: "Define global service scope with risk, compliance, and audit expectations built into the model.", Icon: ShieldCheck },
        { title: "Reporting and analytics hub", text: "Centralize repeatable insight generation while improving data definitions, lineage, and governance.", Icon: BarChart3 },
        { title: "Process excellence engine", text: "Scale standardization and continuous improvement across finance, operations, risk, and technology teams.", Icon: Cog },
      ],
    },
    pmi: {
      title: "Post-merger integration for regulated operating models",
      text:
        "Financial services integrations require careful harmonization of controls, reporting, systems, governance, and customer-impacting operations. HARTS helps leadership teams sequence integration without creating avoidable risk.",
      plays: ["Governance and committee alignment", "Process and control harmonization", "Data and reporting convergence", "Operating model and workforce transition"],
    },
    outcomes: [
      { metric: "Governance", label: "Improved governance visibility", text: "Leadership can see where decisions sit, how risks escalate, and how transformation is progressing." },
      { metric: "Resilience", label: "Enhanced operational resilience", text: "Processes become more stable, traceable, and prepared for disruption or regulatory pressure." },
      { metric: "Reporting", label: "Better enterprise reporting", text: "Teams operate from clearer definitions, stronger dashboards, and more trusted performance views." },
      { metric: "Alignment", label: "Improved transformation alignment", text: "Modernization efforts connect to business priorities, risk appetite, and enterprise capacity." },
      { metric: "Agility", label: "Increased operational agility", text: "Decision cadence improves without losing control, auditability, or accountability." },
      { metric: "Scale", label: "Scalable organizational structures", text: "Institutions gain operating models that can support growth, complexity, and digital expansion." },
    ],
    partnerReasons: [
      { title: "We balance pace with control", text: "Our work helps financial institutions modernize while preserving trust, risk discipline, and governance clarity.", Icon: Scale },
      { title: "We make governance practical", text: "Decision models are designed for real operating cadence, not only policy documentation.", Icon: Landmark },
      { title: "We turn maturity into prioritization", text: "OMA results become clear choices for investment, sequencing, and accountable change.", Icon: Target },
    ],
    cta: {
      title: "Modernize with the confidence a regulated enterprise demands.",
      text:
        "HARTS helps financial institutions strengthen maturity, governance, resilience, and scalable transformation execution.",
    },
  },
  industrialManufacturing: {
    slug: "industrial-manufacturing",
    eyebrow: "Industrial manufacturing consulting",
    title: "Driving Operational Excellence Across Industrial Manufacturing",
    subtitle:
      "We help industrial manufacturers modernize operations, improve production efficiency, strengthen organizational maturity, and accelerate enterprise transformation initiatives.",
    heroSignal: "Operational excellence model",
    visualTitle: "Connected production and enterprise performance system",
    visualNodes: ["Production flow", "Quality", "Supply network", "Workforce coordination"],
    stats: [
      { metric: "01", label: "Production focus", text: "Performance systems connected to plant realities and enterprise goals." },
      { metric: "02", label: "Maturity roadmap", text: "Operational gaps converted into sequenced improvement actions." },
      { metric: "03", label: "Scalable systems", text: "Operating models designed for multi-site consistency and growth." },
    ],
    overview: {
      title: "Industry Overview",
      paragraphs: [
        "Industrial manufacturers face increasing pressure to improve operational efficiency, modernize production ecosystems, optimize supply chains, and scale operations while maintaining quality and reliability.",
        "Modern manufacturing organizations require transformation frameworks capable of connecting operations, improving visibility, and supporting long-term operational scalability.",
      ],
      forces: ["Cost pressure", "Production reliability", "Connected operations", "Workforce coordination"],
    },
    challenges: [
      { title: "Production inefficiencies", text: "Downtime, bottlenecks, rework, and manual coordination reduce throughput and margin resilience.", Icon: Gauge },
      { title: "Operational silos", text: "Plant, maintenance, supply chain, engineering, and finance teams often optimize locally instead of enterprise-wide.", Icon: Blocks },
      { title: "Legacy manufacturing systems", text: "Aging systems limit visibility across production planning, shop-floor execution, quality, and maintenance.", Icon: Binary },
      { title: "Supply chain visibility gaps", text: "Limited insight into supplier performance, inventory constraints, and logistics disrupts production confidence.", Icon: Globe2 },
      { title: "Process inconsistency", text: "Different sites and teams may execute similar workflows in different ways, complicating scale.", Icon: Workflow },
      { title: "Limited operational intelligence", text: "Data exists across machines, systems, and reports but rarely becomes timely management action.", Icon: BarChart3 },
      { title: "Workforce coordination complexity", text: "Skill availability, shift handoffs, safety practices, and change adoption require stronger routines.", Icon: Network },
      { title: "Scalability constraints", text: "Growth stalls when operating models, standards, and governance are not ready for added complexity.", Icon: TrendingUp },
    ],
    capabilities: [
      {
        title: "Manufacturing Operations",
        text: "Improving operational performance through manufacturing modernization and process optimization initiatives.",
      },
      {
        title: "Supply Chain Optimization",
        text: "Strengthening operational ecosystems through improved coordination and enterprise-wide visibility.",
      },
      {
        title: "Operational Excellence",
        text: "Driving continuous operational improvement across manufacturing and production environments.",
      },
      {
        title: "Process Standardization",
        text: "Standardizing enterprise workflows to improve scalability, consistency, and operational efficiency.",
      },
      {
        title: "Enterprise Modernization",
        text: "Modernizing legacy operational ecosystems to support scalable manufacturing transformation.",
      },
      {
        title: "Production Intelligence",
        text: "Improving operational visibility and decision-making across connected manufacturing environments.",
      },
    ],
    needs: [
      { title: "Connected operational ecosystems", text: "Manufacturers need processes, systems, and routines that connect shop floor reality to enterprise decisions.", Icon: Network },
      { title: "Production intelligence", text: "Leaders need timely visibility into throughput, quality, constraints, maintenance, and cost drivers.", Icon: Radar },
      { title: "Process standardization", text: "Common methods across plants reduce variation and make improvement easier to scale.", Icon: ClipboardCheck },
      { title: "Operational maturity frameworks", text: "OMA helps define where capabilities stand and which improvements create the greatest value.", Icon: BadgeCheck },
      { title: "Scalable transformation models", text: "Transformation must support multi-site rollout, adoption, benefits tracking, and continuous improvement.", Icon: Layers3 },
      { title: "Enterprise-wide visibility", text: "Executives need a single view of plant performance, risk, and modernization readiness.", Icon: BarChart3 },
      { title: "Modernized workflows", text: "Digital and process redesign should simplify planning, execution, maintenance, and quality management.", Icon: Workflow },
    ],
    help: [
      { title: "Operational maturity assessment", text: "Assess production workflows, process maturity, management systems, data readiness, and operational scalability.", Icon: ClipboardCheck },
      { title: "Manufacturing transformation consulting", text: "Design improvement roadmaps for production efficiency, connected operations, digital enablement, and enterprise performance.", Icon: Factory },
      { title: "GCC operational scaling", text: "Build global capability models for analytics, planning support, procurement operations, finance, and process excellence.", Icon: Building2 },
      { title: "Enterprise modernization strategy", text: "Align systems, workflows, governance, and operating model changes into a practical modernization agenda.", Icon: Route },
      { title: "Process optimization", text: "Improve high-friction workflows across planning, production, maintenance, quality, supply chain, and reporting.", Icon: Cog },
      { title: "Post-merger operational integration", text: "Integrate plants, teams, systems, standards, and governance after acquisitions or consolidation events.", Icon: GitMerge },
    ],
    transformation: [
      { phase: "Move 01", title: "Create the plant-to-enterprise fact base", text: "Assess maturity, process performance, systems, workforce routines, and transformation constraints." },
      { phase: "Move 02", title: "Define the target operating standard", text: "Build common methods for production management, governance, performance reporting, and continuous improvement." },
      { phase: "Move 03", title: "Modernize priority value streams", text: "Improve workflows where production efficiency, quality, and decision speed can move materially." },
      { phase: "Move 04", title: "Replicate across the network", text: "Scale playbooks, dashboards, leadership cadence, and capability models across plants and functions." },
    ],
    maturity: {
      title: "Operational maturity focus for manufacturers",
      text:
        "OMA helps manufacturing leaders understand whether performance issues are rooted in process discipline, system constraints, data quality, governance, workforce routines, or scalability gaps. It creates a practical bridge between operational excellence and enterprise transformation.",
      dimensions: ["Production management maturity", "Maintenance and quality workflows", "Planning and supply coordination", "Data and reporting readiness", "Leadership operating cadence", "Multi-site scalability"],
    },
    gcc: {
      title: "GCC relevance: scalable support for industrial operations",
      text:
        "Manufacturing GCCs can provide powerful leverage when they support analytics, planning, procurement, finance, engineering services, and operational excellence through well-governed service models.",
      pillars: [
        { title: "Network support model", text: "Define how global teams support plants, regions, and enterprise functions without adding coordination drag.", Icon: Globe2 },
        { title: "Performance intelligence", text: "Build repeatable insight products for production, supply, maintenance, quality, and cost performance.", Icon: BarChart3 },
        { title: "Continuous improvement engine", text: "Standardize methods, playbooks, and capability building across the manufacturing network.", Icon: RefreshCw },
      ],
    },
    pmi: {
      title: "Post-merger integration for manufacturing networks",
      text:
        "Industrial manufacturing integrations require careful alignment of plants, product lines, suppliers, systems, workforce practices, and performance governance. HARTS helps leadership protect continuity while capturing operational value.",
      plays: ["Plant network and footprint alignment", "Operational standards harmonization", "Systems and reporting integration", "Synergy roadmap and governance"],
    },
    outcomes: [
      { metric: "Efficiency", label: "Improved production efficiency", text: "Teams reduce friction across planning, production, maintenance, quality, and performance management." },
      { metric: "Visibility", label: "Better operational visibility", text: "Executives and plant leaders gain clearer insight into constraints, performance, and risk." },
      { metric: "Standards", label: "Stronger process standardization", text: "Common ways of working make improvements repeatable across plants and functions." },
      { metric: "Scale", label: "Increased scalability", text: "Operating models and capability systems support growth without excess complexity." },
      { metric: "Execution", label: "Faster transformation execution", text: "Prioritized roadmaps and governance routines improve momentum and accountability." },
      { metric: "Coordination", label: "Improved enterprise coordination", text: "Plant, supply chain, engineering, finance, and leadership teams move from shared facts." },
    ],
    partnerReasons: [
      { title: "We start with operational reality", text: "Our work reflects plant constraints, workforce routines, quality expectations, and production cadence.", Icon: Factory },
      { title: "We connect excellence and transformation", text: "Continuous improvement, digital modernization, and operating model design are treated as one agenda.", Icon: Combine },
      { title: "We help scale what works", text: "Playbooks, governance, and maturity models make improvement repeatable across the enterprise.", Icon: Layers3 },
    ],
    cta: {
      title: "Turn manufacturing complexity into scalable operational advantage.",
      text:
        "HARTS helps industrial manufacturers assess maturity, modernize workflows, and execute transformation across plants, functions, and global capability models.",
    },
  },
} satisfies Record<string, IndustryContent>;

function revealDelay(index: number): CSSProperties {
  return { "--industry-detail-delay": `${index * 80}ms` } as CSSProperties;
}

function IndustrySectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="industry-detail-heading industry-detail-reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function IndustryDivider({ label }: { label: string }) {
  return (
    <div className="industry-visual-divider" aria-hidden="true">
      <span>{label}</span>
      <i />
    </div>
  );
}

function CardGrid({
  items,
  variant,
}: {
  items: CardItem[];
  variant: "challenge" | "need" | "service" | "partner";
}) {
  return (
    <div className={`industry-detail-card-grid industry-detail-card-grid--${variant}`}>
      {items.map(({ title, text, Icon }, index) => (
        <article
          className={`industry-detail-card industry-detail-card--${variant} industry-detail-reveal`}
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
  );
}

const capabilityGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const capabilityCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function IndustryCapabilities({ items }: { items: CapabilityItem[] }) {
  return (
    <motion.div
      className="industry-capability-grid"
      variants={capabilityGridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {items.map((item, index) => (
        <motion.article
          className="industry-capability-card"
          key={item.title}
          variants={capabilityCardVariants}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <span className="industry-capability-index">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
          <span className="industry-capability-arrow" aria-hidden="true">
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </span>
        </motion.article>
      ))}
    </motion.div>
  );
}

function IndustryDetailTemplate({ content }: { content: IndustryContent }) {
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

  return (
    <main className={`industry-premium industry-premium--${content.slug}`}>
      <section className="industry-detail-hero" id="hero" aria-labelledby="industry-hero-heading">
        <div className="industry-detail-hero-grid" aria-hidden="true" />
        <div className="industry-detail-hero-shell">
          <div className="industry-detail-hero-copy industry-detail-reveal">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 id="industry-hero-heading">{content.title}</h1>
            <p>{content.subtitle}</p>
            <div className="industry-detail-actions">
              <Link className="solid-button large" href="/contact">
                Schedule Consultation
              </Link>
              <Link className="outline-button large" href="#help">
                Explore Capabilities
              </Link>
            </div>
          </div>

          <aside
            className="industry-enterprise-visual industry-detail-reveal"
            style={revealDelay(2)}
            aria-label={content.visualTitle}
          >
            <div className="industry-visual-header">
              <span>{content.heroSignal}</span>
              <strong>{content.visualTitle}</strong>
            </div>
            <div className="industry-visual-system" aria-hidden="true">
              <span className="industry-visual-ring industry-visual-ring--outer" />
              <span className="industry-visual-ring industry-visual-ring--middle" />
              <span className="industry-visual-ring industry-visual-ring--inner" />
              <span className="industry-visual-core">
                {content.slug === "aerospace" ? <Plane size={42} /> : null}
                {content.slug === "automotive" ? <Car size={42} /> : null}
                {content.slug === "financial-services" ? <Landmark size={42} /> : null}
                {content.slug === "industrial-manufacturing" ? <Factory size={42} /> : null}
              </span>
            </div>
            <div className="industry-visual-node-grid">
              {content.visualNodes.map((node) => (
                <span key={node}>{node}</span>
              ))}
            </div>
          </aside>
        </div>

        <div className="industry-hero-stat-row">
          {content.stats.map((stat, index) => (
            <article className="industry-hero-stat industry-detail-reveal" key={stat.label} style={revealDelay(index + 3)}>
              <strong>{stat.metric}</strong>
              <span>{stat.label}</span>
              <p>{stat.text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="industry-detail-layout">
        <nav className="industry-side-nav" aria-label="Industry page sections">
          <span>On This Page</span>
          {sectionNav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="industry-detail-content">
          <section className="industry-detail-section industry-overview-section" id="overview">
            <IndustrySectionHeading eyebrow="Industry Overview" title={content.overview.title} />
            <div className="industry-overview-grid">
              <div className="industry-overview-copy industry-detail-reveal">
                {content.overview.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="industry-force-panel industry-detail-reveal" style={revealDelay(2)}>
                {content.overview.forces.map((force, index) => (
                  <span key={force}>
                    <i>{String(index + 1).padStart(2, "0")}</i>
                    {force}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <IndustryDivider label="Market pressure" />

          <section className="industry-detail-section" id="challenges">
            <IndustrySectionHeading
              eyebrow="Industry Challenges"
              title="The operational pressures leaders must solve"
              text="The most urgent constraints are rarely isolated. They sit across operating models, data, governance, systems, talent, and execution capacity."
            />
            <CardGrid items={content.challenges} variant="challenge" />
          </section>

          <IndustryDivider label="Consulting response" />

          <section className="industry-detail-section" id="help">
            <IndustrySectionHeading
              eyebrow="How We Help"
              title="Capabilities & Services"
              text="We help organizations navigate operational complexity, modernize enterprise ecosystems, and accelerate transformation initiatives through industry-focused consulting capabilities."
            />
            <IndustryCapabilities items={content.capabilities} />
          </section>
        </div>
      </div>

      <section className="industry-detail-cta" aria-labelledby="industry-cta-heading">
        <div className="industry-detail-cta-inner industry-detail-reveal">
          <p className="eyebrow">Work with HARTS</p>
          <h2 id="industry-cta-heading">{content.cta.title}</h2>
          <p>{content.cta.text}</p>
          <div className="industry-detail-actions">
            <Link className="solid-button large" href="/contact">
              Connect with us
            </Link>
            <Link className="outline-button large" href="/how-we-help">
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export function AerospaceIndustry() {
  return <IndustryDetailTemplate content={industryContent.aerospace} />;
}

export function AutomotiveIndustry() {
  return <IndustryDetailTemplate content={industryContent.automotive} />;
}

export function FinancialServicesIndustry() {
  return <IndustryDetailTemplate content={industryContent.financialServices} />;
}

export function IndustrialManufacturingIndustry() {
  return <IndustryDetailTemplate content={industryContent.industrialManufacturing} />;
}
