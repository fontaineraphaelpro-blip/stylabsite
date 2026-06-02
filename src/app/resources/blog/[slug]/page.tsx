import type { Metadata } from "next";
import { BlogPostPage, blogMetadata, blogStaticParams } from "@/lib/routes/blog";

export function generateStaticParams() {
  return blogStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return blogMetadata("en", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostPage locale="en" slug={slug} />;
}
