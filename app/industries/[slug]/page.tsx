import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ConsumerMarketsIndustry,
  EnergyInfrastructureIndustry,
  FinancialServicesIndustry,
  HealthcareIndustry,
  PrivateEquityIndustry,
  TechnologyIndustry,
} from "../../_components/industry-pages";
import { SiteFooter } from "../../_components/site-footer";
import { SiteHeader } from "../../_components/site-header";
import { industries } from "../../_data/home-content";

type IndustryPageProps = {
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
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  return {
    title: industry ? `${industry.title} | HARTS` : "Industry | HARTS",
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
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
    <>
      <SiteHeader />
      {industryContent}
      <SiteFooter />
    </>
  );
}
