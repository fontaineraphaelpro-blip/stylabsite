import { MarketingAmbient } from "@/components/layout/marketing-ambient";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyCtaBar } from "@/components/conversion/sticky-cta-bar";
import { HeroSection } from "@/components/landing/hero-section";
import { TrustStrip } from "@/components/landing/demo-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { ProofSection } from "@/components/landing/proof-section";
import { DemoSection, CtaSection } from "@/components/landing/demo-section";
import { HowItWorksSection } from "@/components/landing/how-it-works";
import { InstallPushSection } from "@/components/landing/install-push-section";
import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { FaqSection } from "@/components/landing/faq-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MarketingAmbient />
      <Navbar locale="en" variant="home" />
      <main className="pt-16 pb-24 md:pb-0">
        <HeroSection locale="en" />
        <TrustStrip locale="en" />
        <FeaturesSection locale="en" />
        <ProofSection locale="en" />
        <DemoSection locale="en" />
        <HowItWorksSection locale="en" />
        <InstallPushSection locale="en" />
        <CapabilitiesSection locale="en" />
        <FaqSection locale="en" />
        <CtaSection locale="en" />
      </main>
      <Footer locale="en" />
      <StickyCtaBar locale="en" />
    </div>
  );
}
