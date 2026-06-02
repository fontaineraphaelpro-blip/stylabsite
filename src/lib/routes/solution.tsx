import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SolutionPageView } from "@/components/pages/solution-view";
import { SOLUTIONS, getSolution, allSolutionSlugs } from "@/lib/data";
import { localePath, t, type Locale } from "@/lib/i18n";

export function solutionStaticParams() {
  return allSolutionSlugs().map((slug) => ({ slug }));
}

export function solutionMetadata(locale: Locale, slug: string): Metadata {
  const data = getSolution(slug);
  if (!data) return {};
  return {
    title: t(data.title, locale),
    description: t(data.lead, locale),
  };
}

export function SolutionPage({ locale, slug }: { locale: Locale; slug: string }) {
  const data = getSolution(slug);
  if (!data) notFound();

  const related = SOLUTIONS.filter((s) => s.slug !== slug)
    .slice(0, 3)
    .map((s) => ({
      href: localePath(locale, `/solutions/${s.slug}`),
      title: t(s.title, locale),
      desc: `${t(s.lead, locale).slice(0, 100)}…`,
    }));

  return <SolutionPageView locale={locale} data={data} related={related} />;
}
