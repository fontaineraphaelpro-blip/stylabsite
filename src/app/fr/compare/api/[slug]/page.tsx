import type { Metadata } from "next";
import { CompareApiPage, compareApiMetadata, compareApiStaticParams } from "@/lib/routes/compare-api";

export function generateStaticParams() {
  return compareApiStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return compareApiMetadata("fr", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CompareApiPage locale="fr" slug={slug} />;
}
