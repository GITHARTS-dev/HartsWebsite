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
import { homepageKeywords } from "./_lib/keywords";

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
  keywords: homepageKeywords,
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
  other: {
    "format-detection": "telephone=no",
  },
};

// LocalBusiness extends ProfessionalService — Google understands the
// hierarchy and merges both into a single entity but uses LocalBusiness
// for Maps + Knowledge Panel features.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
  "@id": `${siteUrl}/#organization`,
  name: organization.legalName,
  alternateName: siteName,
  legalName: organization.legalName,
  url: siteUrl,
  logo: `${siteUrl}${ogImagePath}`,
  image: `${siteUrl}${ogImagePath}`,
  description: siteDescription,
  slogan: "Build. Operate. Transfer.",
  email: organization.email,
  telephone: organization.phone,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: organization.address.streetAddress,
    addressLocality: organization.address.addressLocality,
    addressRegion: organization.address.addressRegion,
    postalCode: organization.address.postalCode,
    addressCountry: organization.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.0291,
    longitude: 77.0252,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: organization.email,
      telephone: organization.phone,
      areaServed: ["IN", "AE", "GB", "US", "DE"],
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: organization.email,
      areaServed: ["IN", "AE", "GB", "US", "DE"],
      availableLanguage: ["English"],
    },
  ],
  sameAs: organization.sameAs,
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
  ],
  knowsAbout: [
    "Strategy Consulting",
    "Operating Model Design",
    "Build Operate Transfer",
    "Post-Merger Integration",
    "Global Capability Centres",
    "Centre of Excellence",
    "Executive Coaching",
    "Board Advisory",
    "Talent Acquisition",
    "Recruitment Process Outsourcing",
    "Organisational Design",
    "Transformation Execution",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "OD & Implementation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Centre of Excellence" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post M&A Integration" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "GCC & Shared Services" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recruitment as a Service" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Coaching & Board Advisory" } },
  ],
  foundingDate: "2020",
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
        {/* Resource hints — speed up first-paint of Google Fonts (used by DM Sans
            via app/globals.css) and the LinkedIn-cookie path that runs on hover
            of the leadership LinkedIn buttons. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://maps.app.goo.gl" />
        <meta name="theme-color" content="#E7473C" />
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
