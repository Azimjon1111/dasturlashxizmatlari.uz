import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { SERVICES } from "@/content/services";
import { BLOG_POSTS } from "@/content/blog";

// Kontent oxirgi marta jiddiy yangilangan sana — har deploy'da emas,
// haqiqiy yangilanishda qo'lda ko'tariladi
const CONTENT_UPDATED = new Date("2026-09-08");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/aloqa`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Money pages — eng yuqori tijorat qiymatiga ega sahifalar
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/${s.slug}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...BLOG_POSTS.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
