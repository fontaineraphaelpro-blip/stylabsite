import { MarketingCta, PageHero, ProseSection, SectionBlock } from "@/components/pages/marketing-blocks";
import { MarketingShell } from "@/components/layout/marketing-shell";
import type { Locale } from "@/lib/i18n";

export function ChangelogView({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  return (
    <MarketingShell locale={locale}>
      <PageHero locale={locale} title={fr ? "Journal des modifications" : "Changelog"} />
      <SectionBlock>
        <ProseSection
          locale={locale}
          html={
            fr
              ? `<h2>Mai 2026</h2><ul>
                  <li>Migration Next.js + animations Framer Motion</li>
                  <li>Site FR + comparaisons + simulateur ROI</li>
                  <li>Page Stylab vs Genlook</li>
                  <li>Articles de blog complets</li>
                </ul>`
              : `<h2>May 2026</h2><ul>
                  <li>Next.js migration + Framer Motion animations</li>
                  <li>FR site + comparisons + ROI simulator</li>
                  <li>Stylab vs Genlook page</li>
                  <li>Full blog articles</li>
                </ul>`
          }
        />
      </SectionBlock>
      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}
