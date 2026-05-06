import type { Metadata } from "next";

import { PageShell } from "../_components/layout/page-shell";
import { ServicesOverview } from "../_components/pages/services-overview";

export const metadata: Metadata = {
  title: "How We Help | HARTS",
  description:
    "Explore HARTS services for market clarity, transformation design, and executive alignment.",
};

export default function HowWeHelpRoute() {
  return (
    <PageShell>
      <ServicesOverview />
    </PageShell>
  );
}
