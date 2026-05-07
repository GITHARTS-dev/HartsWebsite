import type { Metadata } from "next";
import { PageShell } from "../_shared/layout/page-shell";
import { AboutPage } from "./_components/about-page";

export const metadata: Metadata = {
  title: "About Us | HARTS",
  description: "Learn about HARTS' story, team, and mission.",
};

export default function AboutRoute() {
  return (
    <PageShell>
      <AboutPage />
    </PageShell>
  );
}
