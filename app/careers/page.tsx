import type { Metadata } from "next";

import { PageShell } from "../_shared/layout/page-shell";
import { CareersPage } from "./_components/careers-page";

export const metadata: Metadata = {
  title: "Careers Join HARTS Consulting",
  description:
    "Join HARTS a senior team of strategists, operators, and technologists. Open roles across Strategy & Transformation, GCC & Shared Services, and People & Talent.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at HARTS Consulting",
    description:
      "Open consulting roles at HARTS. Build a career that defines transformation.",
    url: "/careers",
    type: "website",
  },
};

export default function CareersRoute() {
  return (
    <PageShell>
      <CareersPage />
    </PageShell>
  );
}