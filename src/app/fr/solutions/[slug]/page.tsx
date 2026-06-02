import type { Metadata } from "next";
import { SolutionPage, solutionMetadata, solutionStaticParams } from "@/lib/routes/solution";

export function generateStaticParams() {
  return solutionStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return solutionMetadata("fr", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SolutionPage locale="fr" slug={slug} />;
}
