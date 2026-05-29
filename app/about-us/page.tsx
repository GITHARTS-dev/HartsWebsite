import type { Metadata } from "next";
import { PageShell } from "../_shared/layout/page-shell";
import { AboutPage } from "./_components/about-page";
import { siteUrl } from "../_lib/site";

export const metadata: Metadata = {
  title: "About HARTS Consulting | Leadership & Founding Story",
  description:
    "HARTS is a senior team of strategists, operators, and technologists who close the distance between strategic intent and operational reality. Meet our leadership.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About HARTS Consulting",
    description:
      "Meet the leadership behind HARTS Consulting. Sreema Nallasivam, Cristian Margaretic, Savio James Abraham, and Flavio Gall.",
    url: "/about-us",
    type: "website",
  },
};

const leadership = [
  {
    name: "Sreema Nallasivam",
    role: "CEO & Co-Founder",
    bio: "Two decades guiding enterprise transformation across regulated, multi-market organisations.",
    image: "/team/sreema.png",
    linkedin: "https://www.linkedin.com/in/sreema-nallasivam-6a74498/",
  },
  {
    name: "Cristian Margaretic",
    role: "CEO & Co-Founder",
    bio: "Operator-turned-advisor focused on strategy, operating models, and durable execution.",
    image: "/team/cristian.png",
    linkedin: "https://www.linkedin.com/in/cmargaretic/",
  },
  {
    name: "Savio James Abraham",
    role: "Chief Operating Officer",
    bio: "Builds the operational discipline that converts strategic intent into measurable progress.",
    image: "/team/savio-abraham.png",
    linkedin: "https://www.linkedin.com/in/savio-james-abraham/",
  },
  {
    name: "Flavio Gall",
    role: "Director, Business Development",
    bio: "Partners with leadership teams on growth, market clarity, and long-horizon strategy.",
    image: "/team/flavio.png",
    linkedin: "https://www.linkedin.com/in/flavio-gall/",
  },
];

const personJsonLd = leadership.map((person) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/about-us#${person.name.toLowerCase().replace(/[^a-z]+/g, "-")}`,
  name: person.name,
  jobTitle: person.role,
  description: person.bio,
  image: `${siteUrl}${person.image}`,
  url: person.linkedin,
  sameAs: [person.linkedin],
  worksFor: { "@id": `${siteUrl}/#organization` },
}));

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: `${siteUrl}/about-us`,
    },
  ],
};

export default function AboutRoute() {
  return (
    <PageShell>
      {personJsonLd.map((person) => (
        <script
          key={person["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutPage />
    </PageShell>
  );
}
