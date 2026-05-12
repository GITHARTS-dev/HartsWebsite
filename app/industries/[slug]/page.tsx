import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  AerospaceIndustry,
  AutomotiveIndustry,
  FinancialServicesIndustry,
  IndustrialManufacturingIndustry,
} from "./_components/industry-detail-views";
import { PageShell } from "../../_shared/layout/page-shell";
import { industries } from "../../_data/home-content";

type IndustryRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: IndustryRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  return {
    title: industry ? `${industry.title} | HARTS` : "Industry | HARTS",
  };
}

export default async function IndustryRoute({ params }: IndustryRouteProps) {
  const { slug } = await params;
  let industryContent;

  switch (slug) {
    case "aerospace":
      industryContent = <AerospaceIndustry />;
      break;
    case "automotive":
      industryContent = <AutomotiveIndustry />;
      break;
    case "financial-services":
      industryContent = <FinancialServicesIndustry />;
      break;
    case "industrial-manufacturing":
      industryContent = <IndustrialManufacturingIndustry />;
      break;
    default:
      notFound();
  }

  return (
    <PageShell>
      {industryContent}
    </PageShell>
  );
}
