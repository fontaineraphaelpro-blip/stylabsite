import { MarketingAmbient } from "@/components/layout/marketing-ambient";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyCtaBar } from "@/components/conversion/sticky-cta-bar";
import { HeroSection } from "@/components/landing/hero-section";
import { TrustStrip } from "@/components/landing/demo-section";
import { AiMarquee } from "@/components/landing/ai-marquee";
import { FeaturesSection } from "@/components/landing/features-section";
import { DemoSection, CtaSection } from "@/components/landing/demo-section";
import { HowItWorksSection } from "@/components/landing/how-it-works";
import { FaqSection } from "@/components/landing/faq-section";

export default function FrHomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MarketingAmbient />
      <Navbar locale="fr" variant="home" />
      <main className="pt-16 pb-24 md:pb-0">
        <HeroSection locale="fr" />
        <TrustStrip locale="fr" />
        <AiMarquee locale="fr" />
        <FeaturesSection locale="fr" />
        <DemoSection locale="fr" />
        <HowItWorksSection locale="fr" />
        <FaqSection locale="fr" />
        <CtaSection locale="fr" />
      </main>
      <Footer locale="fr" />
      <StickyCtaBar locale="fr" />
    </div>
  );
}
