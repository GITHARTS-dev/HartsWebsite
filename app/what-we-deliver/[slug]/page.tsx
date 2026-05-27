import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageShell } from "../../_shared/layout/page-shell";
import { ServiceDetail } from "../_components/service-detail";
import { services, getService } from "../../_data/services";
import { siteName, siteUrl } from "../../_lib/site";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service" };
  }

  const canonical = `/what-we-deliver/${service.slug}`;
  const description = `${service.line} ${siteName} delivers ${service.title} end-to-end through the Build–Operate–Transfer model.`;

  return {
    title: service.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${service.title} | ${siteName}`,
      description,
      url: `${siteUrl}${canonical}`,
      type: "article",
    },
    twitter: {
      title: `${service.title} | ${siteName}`,
      description,
    },
  };
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const canonical = `${siteUrl}/what-we-deliver/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.line,
    provider: { "@id": `${siteUrl}/#organization` },
    url: canonical,
    areaServed: ["IN", "AE", "GB", "US"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} sub-capabilities`,
      itemListElement: service.subs.map((sub, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: {
          "@type": "Service",
          name: sub.label,
          description: sub.desc,
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "What We Deliver",
        item: `${siteUrl}/what-we-deliver`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonical,
      },
    ],
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiceDetail service={service} />
    </PageShell>
  );
}
