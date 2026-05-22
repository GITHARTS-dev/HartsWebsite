export type BotColor = "green" | "blue" | "orange" | "red";

export type BotItem = { label: string; desc: string };

export type BotStage = {
  key: string;
  label: string;
  color: BotColor;
  items: BotItem[];
};

export type BotPhase = {
  key: "build" | "operate" | "transfer";
  num: string;
  label: string;
  color: BotColor;
  desc: string;
  items?: BotItem[];
  stages?: BotStage[];
};

export const botPhases: BotPhase[] = [
  {
    key: "build",
    num: "01",
    label: "Build",
    color: "green",
    desc: "We design and construct alongside your team - not for you, with you.",
    items: [
      { label: "Scope", desc: "Define boundaries, deliverables, team shape, success criteria." },
      { label: "KT / nurturing / mentoring", desc: "Transfer knowledge and build internal capability from day one." },
      { label: "OKR / performance management", desc: "Establish measurable objectives and the cadence to track them." },
      { label: "SLA build", desc: "Design service levels with clear metrics, owners, and escalation paths." },
    ],
  },
  {
    key: "operate",
    num: "02",
    label: "Operate",
    color: "blue",
    desc: "We carry the weight through transition until it's safe to let go.",
    items: [
      { label: "Stabilise process", desc: "Run the function, remove friction, bring operations to steady state." },
      { label: "Shadowing", desc: "Your team shadows ours - learning by doing, not by reading docs." },
      { label: "SLA execution & strategy", desc: "Prove SLAs work in practice. Adjust where reality meets design." },
    ],
  },
  {
    key: "transfer",
    num: "03",
    label: "Transfer",
    color: "orange",
    desc: "We hand over a functioning capability you own and run without us.",
    stages: [
      {
        key: "transition",
        label: "Transition",
        color: "orange",
        items: [
          { label: "Ownership transfer", desc: "Formal handover of accountability and decision rights." },
          { label: "Handover", desc: "Documented governance, runbooks, institutional knowledge." },
          { label: "Steering committee", desc: "Governance forum established and running independently." },
        ],
      },
      {
        key: "hypercare",
        label: "Hypercare",
        color: "red",
        items: [
          { label: "SLA stabilise", desc: "Monitor and adjust through the first independent period." },
          { label: "Completion of handover", desc: "Every deliverable transferred, every person trained." },
          { label: "CI cadence", desc: "Continuous improvement rhythm embedded in operations." },
        ],
      },
      {
        key: "steady",
        label: "Steady state",
        color: "blue",
        items: [
          { label: "Advisory + CI governance", desc: "Light-touch retainer ensuring governance holds and CI sustains." },
        ],
      },
    ],
  },
];
