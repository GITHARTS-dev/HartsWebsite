import type { Metadata } from "next";

import { HowWeHelpPage } from "../_components/how-we-help-page";
import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "How We Help | HARTS",
  description:
    "Explore HARTS services for market clarity, transformation design, and executive alignment.",
};

export default function HowWeHelpRoute() {
  return (
    <>
      <SiteHeader />
      <HowWeHelpPage />
      <SiteFooter />
    </>
  );
}
