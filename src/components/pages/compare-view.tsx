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
import {
  API_COMPARE,
  COMPARE_HUB,
  SHOPIFY_COMPARE,
  type CompareItem,
  UI,
} from "@/lib/data";
import { localePath, rewriteContentHtml, t, type Locale } from "@/lib/i18n";
import { FadeIn } from "@/components/motion/fade-in";

function CompareTable({
  rows,
  competitor,
  locale,
}: {
  rows: CompareItem["rows"];
  competitor: string;
  locale: Locale;
}) {
  const u = UI[locale];
  return (
    <FadeIn delay={0.1}>
      <div className="overflow-x-auto rounded-xl border border-white/10 mb-8">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="border-b border-white/10 text-left bg-white/5">
              <th className="p-3 font-semibold">{locale === "fr" ? "Fonctionnalité" : "Feature"}</th>
              <th className="p-3 font-semibold">Stylab</th>
              <th className="p-3 font-semibold">{competitor}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-3 text-zinc-300">{t(row.feature, locale)}</td>
                <td className="p-3 text-white">{t(row.stylab, locale)}</td>
                <td className="p-3 text-zinc-400">{t(row.other, locale)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-zinc-500 p-3 border-t border-white/5">{u.compareScrollHint}</p>
      </div>
    </FadeIn>
  );
}

export function ComparePageView({
  locale,
  data,
  related,
}: {
  locale: Locale;
  data: CompareItem;
  related: { href: string; title: string; desc: string }[];
}) {
  const u = UI[locale];
  const comp = data.competitor;
  const compareRoot = localePath(locale, "/compare");

  return (
    <MarketingShell locale={locale}>
      <PageHero
        locale={locale}
        eyebrow={u.comparison}
        title={`Stylab vs ${comp}`}
        lead={t(data.summary, locale)}
        breadcrumb={[
          { href: compareRoot, label: u.compare },
          { href: "#", label: `Stylab vs ${comp}` },
        ]}
        showActions
      />

      {data.overview && (
        <SectionBlock>
          <ProseSection html={rewriteContentHtml(t(data.overview, locale), locale)} locale={locale} />
        </SectionBlock>
      )}

      <SectionBlock eyebrow={u.sideBySide} title={u.featureComparison} desc={t(data.competitorDesc, locale)}>
        <CompareTable rows={data.rows} competitor={comp} locale={locale} />
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <FadeIn delay={0.15}>
            <div className="glass-card gradient-border hover-lift p-5 h-full">
              <h3 className="font-semibold mb-2">{u.whenStylab}</h3>
              <p className="text-sm text-zinc-400">{t(data.chooseStylab, locale)}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="glass-card gradient-border hover-lift p-5 h-full">
              <h3 className="font-semibold mb-2">{u.whenOther.replace("{name}", comp)}</h3>
              <p className="text-sm text-zinc-400">{t(data.chooseOther, locale)}</p>
            </div>
          </FadeIn>
        </div>
        <p className="text-xs text-zinc-500">{u.disclaimer}</p>
      </SectionBlock>

      {data.evaluation && (
        <SectionBlock
          eyebrow={locale === "fr" ? "Guide pratique" : "Practical guide"}
          title={locale === "fr" ? "Comment évaluer les deux options" : "How to evaluate both options"}
        >
          <ProseSection html={rewriteContentHtml(t(data.evaluation, locale), locale)} locale={locale} />
        </SectionBlock>
      )}

      {data.pitfalls && (
        <SectionBlock
          eyebrow={locale === "fr" ? "Erreurs fréquentes" : "Common mistakes"}
          title={locale === "fr" ? "À éviter lors de la comparaison" : "Avoid when comparing"}
        >
          <ProseSection html={rewriteContentHtml(t(data.pitfalls, locale), locale)} locale={locale} />
        </SectionBlock>
      )}

      {related.length > 0 && (
        <SectionBlock
          eyebrow={locale === "fr" ? "Voir aussi" : "Related"}
          title={locale === "fr" ? "Autres comparaisons" : "More comparisons"}
        >
          <HubGrid items={related} />
          <p className="text-center mt-6">
            <Link href={compareRoot} className="text-purple-400 hover:underline">
              {locale === "fr" ? "Toutes les comparaisons →" : "All comparisons →"}
            </Link>
          </p>
        </SectionBlock>
      )}

      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}

export function CompareHubView({ locale }: { locale: Locale }) {
  const u = UI[locale];

  const shopifyLinks = SHOPIFY_COMPARE.map((c) => ({
    href: localePath(locale, `/compare/${c.slug}`),
    title: `Stylab vs ${c.competitor}`,
    desc: `${t(c.summary, locale).slice(0, 130)}…`,
    cta: u.readComparison,
  }));

  const apiLinks = API_COMPARE.map((c) => ({
    href: localePath(locale, `/compare/api/${c.slug}`),
    title: `Stylab vs ${c.competitor}`,
    desc: `${t(c.summary, locale).slice(0, 130)}…`,
    cta: u.readComparison,
  }));

  return (
    <MarketingShell locale={locale}>
      <PageHero
        locale={locale}
        eyebrow={u.compare}
        title={locale === "fr" ? "Comment Stylab se compare" : "How Stylab compares"}
        lead={
          locale === "fr"
            ? "Guides factuels pour shortlister, piloter et mesurer — pas du SEO générique."
            : "Factual guides to shortlist, pilot, and measure — not generic SEO filler."
        }
      />
      <SectionBlock>
        <ProseSection html={rewriteContentHtml(t(COMPARE_HUB.intro, locale), locale)} locale={locale} />
      </SectionBlock>
      <SectionBlock
        eyebrow="Shopify"
        title={u.footerShopifyAlt}
        desc={locale === "fr" ? "Apps App Store pour pages produit standard." : "App Store apps for standard product pages."}
      >
        <HubGrid items={shopifyLinks} />
      </SectionBlock>
      <SectionBlock
        eyebrow="API"
        title={u.footerApiAlt}
        desc={locale === "fr" ? "Routes build-your-own si vous avez une équipe technique." : "Build-your-own routes if you have an engineering team."}
      >
        <HubGrid items={apiLinks} />
      </SectionBlock>
      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}
