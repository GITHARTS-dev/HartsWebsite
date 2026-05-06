import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageShell } from "../../_components/layout/page-shell";
import { ServiceOfferingDetail } from "../../_components/pages/service-offering-detail";
import { serviceOfferings } from "../../_data/services-content";

type ServiceRouteProps = {
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
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceOfferings.find((item) => item.slug === slug);

  return {
    title: service ? `${service.title} | HARTS` : "Service | HARTS",
    description: service?.summary,
  };
}

export default async function ServiceOfferingRoute({
  params,
}: ServiceRouteProps) {
  const { slug } = await params;
  const service = serviceOfferings.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <PageShell>
      <ServiceOfferingDetail service={service} />
    </PageShell>
  );
}
