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
  Maximize,
  ArrowUpRight,
  Check,
  X,
} from "lucide-react";

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

const botIconMap = {
  build: Wrench,
  operate: Activity,
  transfer: Repeat,
} as const;

export function BotIcon({
  phase,
  size = 18,
  strokeWidth = 1.8,
}: {
  phase: "build" | "operate" | "transfer";
  size?: number;
  strokeWidth?: number;
}) {
  const Icon = botIconMap[phase];
  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}

const domainIconMap = {
  setup: Sprout,
  develop: TrendingUp,
  scaleup: Maximize,
} as const;

export function DomainIcon({
  id,
  size = 20,
  strokeWidth = 1.8,
}: {
  id: "setup" | "develop" | "scaleup";
  size?: number;
  strokeWidth?: number;
}) {
  const Icon = domainIconMap[id];
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
