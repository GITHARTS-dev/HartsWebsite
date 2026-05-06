import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ConsumerMarketsIndustry,
  EnergyInfrastructureIndustry,
  FinancialServicesIndustry,
  HealthcareIndustry,
  PrivateEquityIndustry,
  TechnologyIndustry,
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
    case "financial-services":
      industryContent = <FinancialServicesIndustry />;
      break;
    case "healthcare":
      industryContent = <HealthcareIndustry />;
      break;
    case "technology":
      industryContent = <TechnologyIndustry />;
      break;
    case "consumer-markets":
      industryContent = <ConsumerMarketsIndustry />;
      break;
    case "energy-and-infrastructure":
      industryContent = <EnergyInfrastructureIndustry />;
      break;
    case "private-equity":
      industryContent = <PrivateEquityIndustry />;
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
