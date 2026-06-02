import type { Metadata } from "next";
import Link from "next/link";
import { MarketingCta, PageHero, ProseSection, SectionBlock } from "@/components/pages/marketing-blocks";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { APP_URL } from "@/lib/data";
import { localePath, type Locale } from "@/lib/i18n";

function LegalPage({
  locale,
  title,
  html,
}: {
  locale: Locale;
  title: string;
  html: string;
}) {
  return (
    <MarketingShell locale={locale}>
      <PageHero locale={locale} title={title} />
      <SectionBlock>
        <ProseSection html={html} locale={locale} />
      </SectionBlock>
      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}

export function SupportPage({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  return (
    <MarketingShell locale={locale}>
      <PageHero
        locale={locale}
        title="Support"
        lead={fr ? "Aide installation, widget, facturation." : "Help with install, widget, billing, and troubleshooting."}
      />
      <SectionBlock>
        <div className="glass-card gradient-border p-6 space-y-4 max-w-xl">
          <p className="text-zinc-400">
            {fr
              ? "Consultez la documentation ou installez depuis l'App Store Shopify."
              : "Check documentation or install from the Shopify App Store."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={localePath(locale, "/resources/documentation")} className="btn btn--ghost">
              {fr ? "Documentation" : "Documentation"}
            </Link>
            <a href={APP_URL} className="btn btn--primary" target="_blank" rel="noopener">
              {fr ? "App Store" : "App Store"}
            </a>
            <Link href={localePath(locale, "/contact")} className="btn btn--ghost">
              Contact
            </Link>
          </div>
        </div>
      </SectionBlock>
      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}

export { LegalPage };
