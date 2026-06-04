export type StageId = "setup" | "develop" | "scaleup";
export type StageColor = "green" | "blue" | "orange";

export type Stage = {
  id: StageId;
  slug: string;
  label: string;
  color: StageColor;
  sub: string;
  body: string;
  triggers: string[];
  services: string[]; // service slugs that apply
};

export const stages: Stage[] = [
  {
    id: "setup",
    slug: "setup",
    label: "Setup",
    color: "green",
    sub: "Building operational capability from the ground up.",
    body: "You are starting something new and need it to run from day one.",
    triggers: [
      "Launching a new capability or business function",
      "Integrating an acquired team or operation",
      "Need governance and structure from the start",
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
    sub: "Strengthening operational maturity.",
    body: "Something works but is held back by discipline, alignment, or capability.",
    triggers: [
      "Performance lacks consistency or visibility",
      "Governance exists but execution discipline is weak",
      "Leadership or capability is limiting growth",
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
    sub: "Replicating proven operations with control.",
    body: "Growth has outpaced the systems that got you here.",
    triggers: [
      "Expanding across regions, functions, or business units",
      "Existing systems struggling to support growth",
      "Governance needs to scale with the organisation",
    ],
    services: [
      "ma-and-pmi",
      "od-and-implementation",
      "coe",
      "executive-coaching",
    ],
  },
];

export function getStage(id: StageId): Stage | undefined {
  return stages.find((s) => s.id === id);
}
