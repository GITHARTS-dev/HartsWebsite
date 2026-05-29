import type { Metadata } from "next";

import { PageShell } from "../_shared/layout/page-shell";
import { CareersPage } from "./_components/careers-page";

export const metadata: Metadata = {
  title: "Careers at HARTS Consulting | Consulting Jobs in India",
  description:
    "Consulting jobs at HARTS. Senior roles for strategists, operators, and technologists in Coimbatore, Bengaluru, Dubai, and Düsseldorf. Open positions across Strategy & Transformation, GCC & Shared Services, and People & Talent.",
  keywords: [
    "consulting jobs India",
    "management consulting careers India",
    "consulting jobs Coimbatore",
    "consulting jobs Bengaluru",
    "GCC consulting jobs",
    "strategy consulting jobs India",
    "HARTS Consulting careers",
    "transformation consulting jobs",
  ],
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at HARTS Consulting",
    description:
      "Open consulting roles at HARTS. Senior positions across Strategy & Transformation, GCC, and People & Talent. Build a career that defines transformation.",
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