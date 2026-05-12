import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  AerospaceIndustry,
  AutomotiveIndustry,
  ChemicalsIndustry,
  EnergyIndustry,
  HealthcareIndustry,
  LifeSciencesIndustry,
  OilGasIndustry,
  TechnologyIndustry,
  TelecomIndustry,
  TransportationIndustry,
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
    case "automotive":
      industryContent = <AutomotiveIndustry />;
      break;
    case "aerospace":
      industryContent = <AerospaceIndustry />;
      break;
    case "oil-gas":
      industryContent = <OilGasIndustry />;
      break;
    case "healthcare":
      industryContent = <HealthcareIndustry />;
      break;
    case "chemicals":
      industryContent = <ChemicalsIndustry />;
      break;
    case "life-sciences":
      industryContent = <LifeSciencesIndustry />;
      break;
    case "energy":
      industryContent = <EnergyIndustry />;
      break;
    case "technology":
      industryContent = <TechnologyIndustry />;
      break;
    case "telecom":
      industryContent = <TelecomIndustry />;
      break;
    case "transportation":
      industryContent = <TransportationIndustry />;
      break;
    default:
      notFound();
  }

  return <PageShell>{industryContent}</PageShell>;
}
