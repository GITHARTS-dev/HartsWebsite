export type DomainId = "setup" | "develop" | "scaleup";
export type DomainColor = "green" | "blue" | "orange";

export type Domain = {
  id: DomainId;
  slug: string;
  label: string;
  color: DomainColor;
  sub: string;
  body: string;
  triggers: string[];
  services: string[]; // service slugs that apply
};

export const domains: Domain[] = [
  {
    id: "setup",
    slug: "setup",
    label: "Setup",
    color: "green",
    sub: "Building something new",
    body: "New entity, first 100 days post-deal, greenfield capability. Everything starts from zero — and the bar is whether it runs cleanly the day we leave.",
    triggers: [
      "You've signed off on a new GCC or shared service centre.",
      "You've just acquired an entity and Day 1 is on the calendar.",
      "You're standing up a new function or operating capability from scratch.",
    ],
    services: [
      "gcc-and-shared-services",
      "ma-and-pmi",
      "od-and-implementation",
      "coe",
      "recruitment-as-a-service",
    ],
  },
  {
    id: "develop",
    slug: "develop",
    label: "Develop",
    color: "blue",
    sub: "Strengthening what exists",
    body: "Operating model in place. Needs governance maturity, performance rigour, and the culture depth that converts a working function into a competitive one.",
    triggers: [
      "Your CoE exists but the operating cadence is inconsistent.",
      "Performance metrics are reported but not acted on.",
      "The leadership bench is thinner than the strategy needs.",
    ],
    services: [
      "coe",
      "od-and-implementation",
      "executive-coaching",
      "recruitment-as-a-service",
    ],
  },
  {
    id: "scaleup",
    slug: "scale-up",
    label: "Scale Up",
    color: "orange",
    sub: "Expanding what works",
    body: "Proven operations ready to replicate across geographies, functions, or acquired entities. The risk isn't whether you'll grow — it's whether the people, process, and performance machinery survives the growth.",
    triggers: [
      "A working model needs to be cloned into a new market or business unit.",
      "An acquisition is being folded in without disrupting the parent operation.",
      "Headcount is doubling and the operating model needs to bend, not break.",
    ],
    services: [
      "ma-and-pmi",
      "od-and-implementation",
      "coe",
      "executive-coaching",
    ],
  },
];

export function getDomain(id: DomainId): Domain | undefined {
  return domains.find((d) => d.id === id);
}
