import type { Locale } from "../i18n";

import { SHOPIFY_COMPARE, API_COMPARE, COMPARE_HUB, SOLUTIONS, SOLUTIONS_HUB } from "../../../scripts/compare-data.mjs";
import { BLOG_POSTS, UI, APP_URL } from "../../../scripts/page-data.mjs";

export {
  SHOPIFY_COMPARE,
  API_COMPARE,
  COMPARE_HUB,
  SOLUTIONS,
  SOLUTIONS_HUB,
  BLOG_POSTS,
  UI,
  APP_URL,
};

export type CompareItem = (typeof SHOPIFY_COMPARE)[number];
export type SolutionItem = (typeof SOLUTIONS)[number];
export type BlogPost = (typeof BLOG_POSTS)[number];

export function getShopifyCompare(slug: string) {
  return SHOPIFY_COMPARE.find((c: CompareItem) => c.slug === slug);
}

export function getApiCompare(slug: string) {
  return API_COMPARE.find((c: CompareItem) => c.slug === slug);
}

export function getSolution(slug: string) {
  return SOLUTIONS.find((s: SolutionItem) => s.slug === slug);
}

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p: BlogPost) => p.slug === slug);
}

export function allCompareSlugs() {
  return {
    shopify: SHOPIFY_COMPARE.map((c: CompareItem) => c.slug),
    api: API_COMPARE.map((c: CompareItem) => c.slug),
  };
}

export function allSolutionSlugs() {
  return SOLUTIONS.map((s: SolutionItem) => s.slug);
}

export function allBlogSlugs() {
  return BLOG_POSTS.map((p: BlogPost) => p.slug);
}

export const SITE_URL = "https://www.stylabtryon.site";

export function pageUrl(locale: Locale, path: string) {
  const prefix = locale === "fr" ? "/fr" : "";
  return `${SITE_URL}${prefix}${path.startsWith("/") ? path : `/${path}`}`;
}
