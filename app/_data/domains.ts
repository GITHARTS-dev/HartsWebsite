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
    sub: "Building operational capability from the ground up",
    body: "New business unit, operational launch, post-acquisition integration, or enterprise capability build-out this phase focuses on creating structures, governance, teams, and operating foundations that work from day one.",
    triggers: [
      "You are launching a new operational capability or business function.",
      "You are integrating newly acquired teams or operations.",
      "You need governance, workforce structure, and operational readiness from the start.",
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
    sub: "Strengthening operational maturity",
    body: "Existing operations often require stronger governance, leadership alignment, workforce capability, and execution discipline to move from functional to high-performing.",
    triggers: [
      "Operational performance lacks consistency or visibility.",
      "Governance exists but execution discipline is weak.",
      "Leadership alignment and workforce capability are limiting growth.",
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
    sub: "Expanding proven operations with control",
    body: "Growth introduces operational complexity. This phase focuses on replicating proven operating models, governance systems, leadership capability, and workforce readiness across larger environments.",
    triggers: [
      "Operations are expanding across regions, functions, or business units.",
      "Existing systems are struggling to support growth.",
      "Leadership and governance need to scale alongside the organization.",
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
