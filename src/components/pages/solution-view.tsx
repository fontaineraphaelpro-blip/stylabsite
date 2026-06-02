import Link from "next/link";
import {
  DiffCards,
  HubGrid,
  MarketingCta,
  PageHero,
  ProseSection,
  SectionBlock,
} from "@/components/pages/marketing-blocks";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { SOLUTIONS, SOLUTIONS_HUB, type SolutionItem, UI } from "@/lib/data";
import { localePath, rewriteContentHtml, t, type Locale } from "@/lib/i18n";

export function SolutionPageView({
  locale,
  data,
  related,
}: {
  locale: Locale;
  data: SolutionItem;
  related: { href: string; title: string; desc: string }[];
}) {
  const u = UI[locale];
  const solutionsRoot = localePath(locale, "/solutions");

  return (
    <MarketingShell locale={locale}>
      <PageHero
        locale={locale}
        title={t(data.title, locale)}
        lead={t(data.lead, locale)}
        breadcrumb={[{ href: solutionsRoot, label: u.solutions }]}
        showActions
      />

      {data.overview && (
        <SectionBlock>
          <ProseSection html={rewriteContentHtml(t(data.overview, locale), locale)} locale={locale} />
        </SectionBlock>
      )}

      {data.features && (
        <SectionBlock
          eyebrow={locale === "fr" ? "Capacités" : "Capabilities"}
          title={t(data.featuresTitle || { en: "What you get with Stylab", fr: "Ce que Stylab apporte" }, locale)}
        >
          <DiffCards items={data.features} locale={locale} />
        </SectionBlock>
      )}

      {data.rollout && (
        <SectionBlock
          eyebrow={locale === "fr" ? "Déploiement" : "Rollout"}
          title={t(data.rolloutTitle || { en: "How to get started", fr: "Comment commencer" }, locale)}
        >
          <ProseSection html={rewriteContentHtml(t(data.rollout, locale), locale)} locale={locale} />
        </SectionBlock>
      )}

      {data.note && (
        <SectionBlock>
          <p className="text-sm text-zinc-500 text-center max-w-2xl mx-auto">{t(data.note, locale)}</p>
        </SectionBlock>
      )}

      {related.length > 0 && (
        <SectionBlock
          eyebrow={locale === "fr" ? "Autres solutions" : "Related solutions"}
          title={locale === "fr" ? "Solutions pour marchands apparel" : "Solutions for apparel merchants"}
        >
          <HubGrid items={related} />
          <p className="text-center mt-6">
            <Link href={solutionsRoot} className="text-purple-400 hover:underline">
              {locale === "fr" ? "Voir toutes les solutions →" : "View all solutions →"}
            </Link>
          </p>
        </SectionBlock>
      )}

      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}

export function SolutionsHubView({ locale }: { locale: Locale }) {
  const u = UI[locale];
  const links = SOLUTIONS.map((s) => ({
    href: localePath(locale, `/solutions/${s.slug}`),
    title: t(s.title, locale),
    desc: `${t(s.lead, locale).slice(0, 120)}…`,
    cta: u.learnMore,
  }));

  return (
    <MarketingShell locale={locale}>
      <PageHero
        locale={locale}
        eyebrow={u.solutions}
        title={locale === "fr" ? "Pour marchands apparel Shopify" : "Built for Shopify apparel merchants"}
        lead={t(SOLUTIONS_HUB.heroLead, locale)}
      />
      <SectionBlock>
        <ProseSection html={rewriteContentHtml(t(SOLUTIONS_HUB.intro, locale), locale)} locale={locale} />
      </SectionBlock>
      <SectionBlock>
        <HubGrid items={links} />
      </SectionBlock>
      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}
