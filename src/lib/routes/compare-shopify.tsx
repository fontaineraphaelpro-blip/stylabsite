import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ComparePageView } from "@/components/pages/compare-view";
import { getShopifyCompare, SHOPIFY_COMPARE, allCompareSlugs } from "@/lib/data";
import { localePath, t, type Locale } from "@/lib/i18n";

function buildComparePage(locale: Locale, slug: string) {
  const data = getShopifyCompare(slug);
  if (!data) notFound();

  const related = SHOPIFY_COMPARE.filter((c) => c.slug !== slug)
    .slice(0, 3)
    .map((c) => ({
      href: localePath(locale, `/compare/${c.slug}`),
      title: `Stylab vs ${c.competitor}`,
      desc: `${t(c.summary, locale).slice(0, 100)}…`,
    }));

  return <ComparePageView locale={locale} data={data} related={related} />;
}

export function compareShopifyStaticParams() {
  return allCompareSlugs().shopify.map((slug) => ({ slug }));
}

export function compareShopifyMetadata(locale: Locale, slug: string): Metadata {
  const data = getShopifyCompare(slug);
  if (!data) return {};
  return {
    title: `Stylab vs ${data.competitor}`,
    description: t(data.summary, locale),
  };
}

export function CompareShopifyPage({ locale, slug }: { locale: Locale; slug: string }) {
  return buildComparePage(locale, slug);
}
