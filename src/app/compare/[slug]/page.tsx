import type { Metadata } from "next";
import {
  CompareShopifyPage,
  compareShopifyMetadata,
  compareShopifyStaticParams,
} from "@/lib/routes/compare-shopify";

export function generateStaticParams() {
  return compareShopifyStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return compareShopifyMetadata("en", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CompareShopifyPage locale="en" slug={slug} />;
}
