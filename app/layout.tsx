import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./styles/about.css";
import {
  ogImagePath,
  organization,
  siteDescription,
  siteName,
  siteTagline,
  siteUrl,
} from "./_lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ${siteTagline}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    "consulting",
    "strategy consulting",
    "transformation",
    "build operate transfer",
    "BOT methodology",
    "post merger integration",
    "global capability center",
    "GCC setup",
    "operating model",
    "OD and implementation",
    "centre of excellence",
    "executive coaching",
    "HARTS Consulting",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} | ${siteTagline}`,
    description: siteDescription,
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | ${siteTagline}`,
    description: siteDescription,
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo (1).png",
    shortcut: "/logo (1).png",
    apple: "/logo (1).png",
  },
  category: "business",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: organization.legalName,
  alternateName: siteName,
  url: siteUrl,
  logo: `${siteUrl}${ogImagePath}`,
  image: `${siteUrl}${ogImagePath}`,
  description: siteDescription,
  email: organization.email,
  telephone: organization.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: organization.address.streetAddress,
    addressLocality: organization.address.addressLocality,
    addressRegion: organization.address.addressRegion,
    postalCode: organization.address.postalCode,
    addressCountry: organization.address.addressCountry,
  },
  sameAs: organization.sameAs,
  areaServed: ["IN", "AE", "GB", "US"],
  knowsAbout: [
    "Strategy Consulting",
    "Operating Model Design",
    "Build Operate Transfer",
    "Post-Merger Integration",
    "Global Capability Centres",
    "Centre of Excellence",
    "Executive Coaching",
    "Talent Acquisition",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  description: siteDescription,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
