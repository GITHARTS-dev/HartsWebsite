export type HeroSlide = {
  title: string;
  text: string;
  image: string;
};

export type Service = {
  title: string;
  text: string;
};

export type ProcessStep = {
  title: string;
  detail: string;
};

export type Industry = {
  title: string;
  slug: string;
};

export const heroSlides: HeroSlide[] = [
  {
    title: "Hear what matters",
    text: "We begin by listening to your challenges, leadership context, and goals.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=82",
  },
  {
    title: "Shape the path",
    text: "We turn complex choices into a clear agenda your team can act on.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1500&q=82",
  },
  {
    title: "Move with confidence",
    text: "We help leaders mobilize decisions, governance, and measurable momentum.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=82",
  },
];

export const services: Service[] = [
  {
    title: "Market Clarity",
    text: "Prioritize the bets, segments, and operating choices that unlock the next stage of growth.",
  },
  {
    title: "Transformation Design",
    text: "Turn ambitious strategy into funded roadmaps, governance rhythms, and measurable delivery.",
  },
  {
    title: "Executive Alignment",
    text: "Build shared conviction across leadership teams before critical launches, pivots, or investments.",
  },
];

export const industries: Industry[] = [
  {
    title: "Financial services",
    slug: "financial-services",
  },
  {
    title: "Healthcare",
    slug: "healthcare",
  },
  {
    title: "Technology",
    slug: "technology",
  },
  {
    title: "Consumer markets",
    slug: "consumer-markets",
  },
  {
    title: "Energy and infrastructure",
    slug: "energy-and-infrastructure",
  },
  {
    title: "Private equity",
    slug: "private-equity",
  },
];

export const steps: ProcessStep[] = [
  {
    title: "Hear what matters",
    detail: "Stakeholder interviews, context mapping, and decision framing.",
  },
  {
    title: "Map the opportunity",
    detail: "Market signals, risks, constraints, and value pools made visible.",
  },
  {
    title: "Shape the operating plan",
    detail: "A focused roadmap with owners, milestones, and governance.",
  },
  {
    title: "Mobilize with momentum",
    detail: "Leadership routines that keep strategy connected to execution.",
  },
];
