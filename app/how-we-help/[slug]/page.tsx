import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetailPage } from "../../_components/service-detail-page";
import { SiteFooter } from "../../_components/site-footer";
import { SiteHeader } from "../../_components/site-header";
import { serviceOfferings } from "../../_data/services-content";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return serviceOfferings.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceOfferings.find((item) => item.slug === slug);

  return {
    title: service ? `${service.title} | HARTS` : "Service | HARTS",
    description: service?.summary,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceOfferings.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <ServiceDetailPage service={service} />
      <SiteFooter />
    </>
  );
}
