import type { MetadataRoute } from "next";
import {
  SITE_URL,
  SHOPIFY_COMPARE,
  API_COMPARE,
  SOLUTIONS,
  BLOG_POSTS,
} from "@/lib/data";

type Entry = MetadataRoute.Sitemap[number];

function entry(path: string, opts: Partial<Omit<Entry, "url">> = {}): Entry {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: opts.changeFrequency ?? "monthly",
    priority: opts.priority ?? 0.6,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", { changeFrequency: "weekly", priority: 1 }),
    entry("/fr", { changeFrequency: "weekly", priority: 0.95 }),
    entry("/compare", { priority: 0.85 }),
    ...SHOPIFY_COMPARE.map((c) => entry(`/compare/${c.slug}`, { priority: 0.8 })),
    ...API_COMPARE.map((c) => entry(`/compare/api/${c.slug}`, { priority: 0.7 })),
    entry("/fr/compare", { priority: 0.8 }),
    ...SHOPIFY_COMPARE.map((c) => entry(`/fr/compare/${c.slug}`, { priority: 0.75 })),
    ...API_COMPARE.map((c) => entry(`/fr/compare/api/${c.slug}`, { priority: 0.7 })),
    entry("/solutions", { priority: 0.8 }),
    ...SOLUTIONS.map((s) => entry(`/solutions/${s.slug}`, { priority: 0.7 })),
    entry("/fr/solutions", { priority: 0.75 }),
    ...SOLUTIONS.map((s) => entry(`/fr/solutions/${s.slug}`, { priority: 0.65 })),
    entry("/resources", { changeFrequency: "weekly", priority: 0.8 }),
    entry("/resources/free-tools", { priority: 0.75 }),
    entry("/resources/documentation", { priority: 0.7 }),
    entry("/resources/changelog", { changeFrequency: "weekly", priority: 0.6 }),
    entry("/resources/blog", { changeFrequency: "weekly", priority: 0.7 }),
    ...BLOG_POSTS.map((p) => entry(`/resources/blog/${p.slug}`, { priority: 0.6 })),
    entry("/fr/resources", { changeFrequency: "weekly", priority: 0.75 }),
    entry("/fr/resources/free-tools", { priority: 0.7 }),
    entry("/fr/resources/documentation", { priority: 0.65 }),
    entry("/fr/resources/changelog", { changeFrequency: "weekly", priority: 0.55 }),
    entry("/fr/resources/blog", { changeFrequency: "weekly", priority: 0.65 }),
    ...BLOG_POSTS.map((p) => entry(`/fr/resources/blog/${p.slug}`, { priority: 0.55 })),
    entry("/contact", { priority: 0.6 }),
    entry("/support", { priority: 0.6 }),
    entry("/confidentialite", { changeFrequency: "yearly", priority: 0.4 }),
    entry("/conditions", { changeFrequency: "yearly", priority: 0.4 }),
  ];
}
