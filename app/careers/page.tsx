import type { Metadata } from "next";

import { PageShell } from "../_shared/layout/page-shell";
import { CareersPage } from "./_components/careers-page";

export const metadata: Metadata = {
  title: "Careers | HARTS Consulting",
  description:
    "Explore careers at HARTS Consulting and join a team shaping strategy, transformation, and digital enablement.",
};

export default function CareersRoute() {
  return (
    <PageShell>
      <CareersPage />
    </PageShell>
  );
}