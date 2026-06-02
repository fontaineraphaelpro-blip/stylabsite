import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogPostView } from "@/components/pages/blog-view";
import { getBlogPost, allBlogSlugs } from "@/lib/data";
import { t, type Locale } from "@/lib/i18n";

export function blogStaticParams() {
  return allBlogSlugs().map((slug) => ({ slug }));
}

export function blogMetadata(locale: Locale, slug: string): Metadata {
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: t(post.title, locale),
    description: t(post.excerpt, locale),
  };
}

export function BlogPostPage({ locale, slug }: { locale: Locale; slug: string }) {
  const post = getBlogPost(slug);
  if (!post) notFound();
  return <BlogPostView locale={locale} post={post} />;
}
