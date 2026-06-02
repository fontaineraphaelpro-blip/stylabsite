import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ComparePageView } from "@/components/pages/compare-view";
import { API_COMPARE, getApiCompare, allCompareSlugs } from "@/lib/data";
import { localePath, t, type Locale } from "@/lib/i18n";

export function compareApiStaticParams() {
  return allCompareSlugs().api.map((slug) => ({ slug }));
}

export function compareApiMetadata(locale: Locale, slug: string): Metadata {
  const data = getApiCompare(slug);
  if (!data) return {};
  return {
    title: `Stylab vs ${data.competitor} | API`,
    description: t(data.summary, locale),
  };
}

export function CompareApiPage({ locale, slug }: { locale: Locale; slug: string }) {
  const data = getApiCompare(slug);
  if (!data) notFound();

  const related = API_COMPARE.filter((c) => c.slug !== slug)
    .slice(0, 3)
    .map((c) => ({
      href: localePath(locale, `/compare/api/${c.slug}`),
      title: `Stylab vs ${c.competitor}`,
      desc: `${t(c.summary, locale).slice(0, 100)}…`,
    }));

  return <ComparePageView locale={locale} data={data} related={related} />;
}
