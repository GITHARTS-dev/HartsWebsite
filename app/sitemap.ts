import type { MetadataRoute } from "next";
import { siteUrl } from "./_lib/site";
import { services } from "./_data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${siteUrl}/what-we-deliver`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/how-we-deliver`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/where-you-stand`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteUrl}/what-we-deliver/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
