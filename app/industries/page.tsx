import type { Metadata } from "next";

import { PageShell } from "../_shared/layout/page-shell";
import { IndustriesExperience } from "./_components/industries-experience";

export const metadata: Metadata = {
  title: "Industries | HARTS",
  description:
    "HARTS partners with organizations across industries to align strategy, operations, and transformation execution.",
};

export default function IndustriesRoute() {
  return (
    <PageShell>
      <IndustriesExperience />
    </PageShell>
  );
}
