import { MarketingAmbient } from "@/components/layout/marketing-ambient";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyCtaBar } from "@/components/conversion/sticky-cta-bar";
import type { Locale } from "@/lib/i18n";

export function MarketingShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MarketingAmbient />
      <Navbar locale={locale} variant="marketing" />
      <main className="pt-24 pb-24 md:pb-16">{children}</main>
      <Footer locale={locale} />
      <StickyCtaBar locale={locale} />
    </div>
  );
}
