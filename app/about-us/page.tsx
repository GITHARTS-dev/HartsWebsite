import type { Metadata } from "next";
import { PageShell } from "../_shared/layout/page-shell";
import { AboutPage } from "./_components/about-page";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "HARTS is a senior team of strategists, operators, and technologists who close the distance between strategic intent and operational reality.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About HARTS",
    description:
      "Meet the team behind HARTS Consulting and our mission to deliver transformation that actually lands.",
    url: "/about-us",
    type: "website",
  },
};

export default function AboutRoute() {
  return (
    <PageShell>
      <AboutPage />
    </PageShell>
  );
}
