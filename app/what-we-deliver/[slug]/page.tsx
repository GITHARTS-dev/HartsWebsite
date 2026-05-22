import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageShell } from "../../_shared/layout/page-shell";
import { ServiceDetail } from "../_components/service-detail";
import { services, getService } from "../../_data/services";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  return {
    title: service ? `${service.title} | HARTS` : "Service | HARTS",
    description: service?.line,
  };
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <PageShell>
      <ServiceDetail service={service} />
    </PageShell>
  );
}
