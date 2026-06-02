import { MarketingCta, PageHero, ProseSection, SectionBlock } from "@/components/pages/marketing-blocks";
import { MarketingShell } from "@/components/layout/marketing-shell";
import type { Locale } from "@/lib/i18n";

export function DocumentationView({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const html = fr
    ? `<h2>1. Installer depuis Shopify</h2><p>Installez depuis l'App Store. Aucune modification de thème requise.</p>
       <h2>2. Activer par produit</h2><p>Ouvrez Products dans l'admin Stylab. Toggle par produit + flat-lay optionnel.</p>
       <h2>3. Personnaliser le widget</h2><p>Page Widget : texte, couleurs, A/B test 10–90%.</p>
       <h2>4. Mesurer</h2><p>Dashboard : sessions, ajouts panier, crédits restants.</p>`
    : `<h2>1. Install from Shopify</h2><p>Install from the App Store. No theme edits required.</p>
       <h2>2. Enable by product</h2><p>Open Products in Stylab admin. Toggle per product + optional flat-lay.</p>
       <h2>3. Customize widget</h2><p>Widget page: text, colors, A/B test 10–90%.</p>
       <h2>4. Measure</h2><p>Dashboard: sessions, add-to-cart, remaining credits.</p>`;

  return (
    <MarketingShell locale={locale}>
      <PageHero
        locale={locale}
        title="Documentation"
        lead={fr ? "Installez Stylab en quelques minutes." : "Get Stylab running in minutes."}
      />
      <SectionBlock>
        <ProseSection html={html} locale={locale} />
      </SectionBlock>
      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}
