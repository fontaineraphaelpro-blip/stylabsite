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

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MarketingAmbient />
      <Navbar locale="en" variant="home" />
      <main className="pt-16 pb-24 md:pb-0">
        <HeroSection locale="en" />
        <TrustStrip locale="en" />
        <AiMarquee locale="en" />
        <FeaturesSection locale="en" />
        <DemoSection locale="en" />
        <HowItWorksSection locale="en" />
        <FaqSection locale="en" />
        <CtaSection locale="en" />
      </main>
      <Footer locale="en" />
      <StickyCtaBar locale="en" />
    </div>
  );
}
