import {
  Users,
  Network,
  GitMerge,
  Globe2,
  UserPlus,
  Compass,
  Wrench,
  Activity,
  Repeat,
  Sprout,
  TrendingUp,
  LineChart,
  ArrowUpRight,
  Check,
  X,
  Target,
  PenTool,
  Layers,
  Gauge,
  ListChecks,
  Workflow,
  ClipboardList,
  UserSearch,
  Handshake,
  Lightbulb,
  MessageSquare,
  Rocket,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

const serviceIconMap = {
  "od-and-implementation": Users,
  coe: Network,
  "ma-and-pmi": GitMerge,
  "gcc-and-shared-services": Globe2,
  "recruitment-as-a-service": UserPlus,
  "executive-coaching": Compass,
} as const;

export function ServiceIcon({
  slug,
  size = 22,
  strokeWidth = 1.8,
}: {
  slug: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Icon = serviceIconMap[slug as keyof typeof serviceIconMap] ?? Users;
  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}

type LucideIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }>;
type BotPhase = "build" | "operate" | "transfer";

// Generic fallback — also used for GCC's BOT pathway, which the brief explicitly
// asked us to leave alone.
const defaultBotIcons: Record<BotPhase, LucideIcon> = {
  build: Wrench,
  operate: Activity,
  transfer: Repeat,
};

// Per-service step icons keyed by service slug. Chosen to match each service's
// step heading + body copy (see app/_data/services.ts → bot.names + bot.{build,operate,transfer}).
const botIconByService: Partial<Record<string, Record<BotPhase, LucideIcon>>> = {
  // Assess & Align / Design & Execute / Embed & Sustain
  "od-and-implementation": {
    build: Compass,
    operate: PenTool,
    transfer: Sprout,
  },
  // Assess & Define / Design & Establish / Operate & Optimize
  coe: {
    build: Target,
    operate: Layers,
    transfer: Gauge,
  },
  // Assess & Prioritize / Integrate & Align / Realize & Optimize
  "ma-and-pmi": {
    build: ListChecks,
    operate: Workflow,
    transfer: TrendingUp,
  },
  // Understand & Plan / Source & Select / Hire & Integrate
  "recruitment-as-a-service": {
    build: ClipboardList,
    operate: UserSearch,
    transfer: Handshake,
  },
  // Assess & Understand / Advise & Develop / Enable & Accelerate
  "executive-coaching": {
    build: Lightbulb,
    operate: MessageSquare,
    transfer: Rocket,
  },
  // gcc-and-shared-services intentionally omitted — falls through to defaultBotIcons.
};

export function BotIcon({
  phase,
  slug,
  size = 18,
  strokeWidth = 1.8,
}: {
  phase: BotPhase;
  slug?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const map = (slug && botIconByService[slug]) || defaultBotIcons;
  const Icon = map[phase];
  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}

const stageIconMap = {
  setup: Sprout,
  develop: TrendingUp,
  scaleup: LineChart,
} as const;

export function StageIcon({
  id,
  size = 20,
  strokeWidth = 1.8,
}: {
  id: "setup" | "develop" | "scaleup";
  size?: number;
  strokeWidth?: number;
}) {
  const Icon = stageIconMap[id];
  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}

export function ArrowIcon({ size = 16, strokeWidth = 1.8 }: { size?: number; strokeWidth?: number }) {
  return <ArrowUpRight size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}

export function CheckIcon({ size = 14, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
  return <Check size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}

export function XIcon({ size = 12, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
  return <X size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}
