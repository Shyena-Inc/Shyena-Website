import type { MetadataRoute } from "next";

import { getJournalPosts } from "@/app/blog/content";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [
    ["/", 1],
    ["/about", 0.7],
    ["/projects", 0.8],
    ["/projects/flagforge", 0.6],
    ["/projects/secyourflow", 0.6],
    ["/projects/safe", 0.6],
    ["/contact", 0.6],
    ["/blog", 0.6],
  ] as const;
  const staticPages: MetadataRoute.Sitemap = pages.map(([path, priority]) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
  const posts = await getJournalPosts();
  return [
    ...staticPages,
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
