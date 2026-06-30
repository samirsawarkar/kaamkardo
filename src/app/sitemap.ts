import type { MetadataRoute } from "next";
import { blogPosts, getBlogPostUrl } from "@/lib/blog";
import { siteConfig } from "@/lib/ecosystem";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/editorial-policy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: getBlogPostUrl(post.slug),
      lastModified: post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
