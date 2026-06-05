import { DiffCards, MarketingCta, PageHero, SectionBlock } from "@/components/pages/marketing-blocks";
import { RoiCalculator } from "@/components/pages/roi-calculator";
import { MarketingShell } from "@/components/layout/marketing-shell";
import type { Locale } from "@/lib/i18n";

export function FreeToolsView({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  return (
    <MarketingShell locale={locale}>
      <PageHero
        locale={locale}
        title={fr ? "Outils gratuits" : "Free Tools"}
        lead={fr ? "Planifiez votre déploiement essayage." : "Plan your try-on rollout."}
      />
      <SectionBlock>
        <DiffCards
          locale={locale}
          items={[
            {
              title: fr ? "Checklist readiness" : "Readiness checklist",
              body: fr ? "Photos claires, SKU phares, PDP mobile." : "Clear photos, hero SKUs, mobile PDPs.",
            },
            {
              title: fr ? "Guide plans" : "Plan picker",
              body: "Free 10 · Starter 300 · Growth 1,000 · Scale 4,000",
            },
            { title: "A/B planner", body: "50/50 · 30 days · 2–5 products" },
          ]}
        />
      </SectionBlock>
      <SectionBlock
        eyebrow={fr ? "Simulateur" : "Calculator"}
        title={fr ? "Estimateur d'usage et de revenus" : "Try-on usage & revenue estimator"}
        desc={
          fr
            ? "Estimez vos essayages mensuels, le plan Stylab adapté et un revenu incrémental prudent."
            : "Estimate monthly try-ons, recommended Stylab plan, and conservative incremental revenue."
        }
      >
        <RoiCalculator locale={locale} />
      </SectionBlock>
      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}
