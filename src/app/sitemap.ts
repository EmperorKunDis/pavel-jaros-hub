import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const locales = ["cs", "en", "de", "pl", "sk", "ru"];
const baseUrl = "https://pjgroup.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "cs" ? 1 : 0.8,
  }));
}
