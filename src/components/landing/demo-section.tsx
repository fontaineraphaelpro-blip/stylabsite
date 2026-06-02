"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { ClientErrorBoundary } from "@/components/client-error-boundary";
import { VtonDemo } from "@/components/landing/vton-demo";
import { APP_URL, type Locale, UI, liveDemoHref, localePath } from "@/lib/content";

const DEMO_STEPS = {
  en: [
    { n: "01", title: "Upload", desc: "One photo from your phone" },
    { n: "02", title: "AI preview", desc: "Garment mapped to your photo" },
    { n: "03", title: "Add to cart", desc: "Same PDP flow as shoppers" },
  ],
  fr: [
    { n: "01", title: "Uploadez", desc: "Une photo depuis votre téléphone" },
    { n: "02", title: "Aperçu IA", desc: "Le vêtement sur votre photo" },
    { n: "03", title: "Ajoutez", desc: "Même parcours que vos clients" },
  ],
} as const;

export function DemoSection({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  const steps = DEMO_STEPS[locale];

  return (
    <section
      ref={ref}
      id="journey"
      className="demo-showcase py-16 md:py-32 relative overflow-hidden"
      aria-labelledby="demo-title"
    >
      <motion.div className="demo-showcase__bg" style={{ y: bgY }} aria-hidden="true">
        <div className="demo-showcase__grid" />
        <div className="demo-showcase__orb demo-showcase__orb--1" />
        <div className="demo-showcase__orb demo-showcase__orb--2" />
      </motion.div>

      <div className="container relative z-10 min-w-0">
        <div className="grid lg:grid-cols-[minmax(0,22rem)_1fr] xl:grid-cols-[minmax(0,26rem)_1fr] gap-8 lg:gap-12 xl:gap-16 items-start">
          <FadeIn className="lg:sticky lg:top-28 space-y-5 order-2 lg:order-1 min-w-0">
            <div className="demo-live-badge">
              <span className="demo-live-badge__dot" aria-hidden="true" />
              {t.demoEyebrow}
            </div>

            <div>
              <h2 id="demo-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] mb-3">
                {t.demoTitle}{" "}
                <span className="gradient-text">{t.demoTitleAccent}</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {locale === "fr" ? (
                  <>
                    Uploadez votre photo — cliquez sur <strong className="text-white">Essayer</strong> dans le widget.
                  </>
                ) : (
                  <>
                    Upload your photo — click <strong className="text-white">Try it on</strong> in the widget.
                  </>
                )}
              </p>
            </div>

            <ol className="demo-steps hidden lg:flex">
              {steps.map((step) => (
                <li key={step.n} className="demo-steps__item">
                  <span className="demo-steps__num">{step.n}</span>
                  <div>
                    <strong className="block text-sm font-semibold">{step.title}</strong>
                    <span className="text-xs text-zinc-500">{step.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn delay={0.1} y={24} className="order-1 lg:order-2 min-w-0 w-full">
            <ClientErrorBoundary
              label="vton-demo"
              fallback={
                <div className="demo-frame__card p-8 text-center text-sm text-zinc-400">
                  {locale === "fr"
                    ? "La démo live est temporairement indisponible. "
                    : "Live demo temporarily unavailable. "}
                  <a
                    href="https://remadeicons.shop/products/shadow-stripe-collared-soccer-jersey-4"
                    target="_blank"
                    rel="noopener"
                    className="text-purple-400 hover:underline"
                  >
                    {locale === "fr" ? "Boutique démo →" : "Demo store →"}
                  </a>
                </div>
              }
            >
              <VtonDemo locale={locale} />
            </ClientErrorBoundary>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function CtaSection({ locale }: { locale: Locale }) {
  const t = UI[locale];

  return (
    <section className="py-20" aria-labelledby="cta-title">
      <div className="container container--wide">
        <FadeIn>
          <div className="glass-card gradient-border hover-lift text-center p-10 sm:p-14">
            <h2 id="cta-title" className="text-3xl sm:text-4xl font-bold mb-3">
              {t.ctaTitle} <span className="gradient-text">{t.ctaTitleAccent}</span>?
            </h2>
            <p className="text-zinc-400 mb-8">{t.ctaDesc}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={liveDemoHref(locale)} className="btn btn--primary btn--lg">
                {t.ctaDemo}
              </Link>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              {locale === "fr" ? "Prêt à installer ? " : "Ready to install? "}
              <a href={APP_URL} className="text-purple-400 hover:underline" target="_blank" rel="noopener">
                {locale === "fr" ? "App Store Shopify →" : "Shopify App Store →"}
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function TrustStrip({ locale }: { locale: Locale }) {
  const t = UI[locale];
  return (
    <FadeIn className="container py-4">
      <p className="flex items-center justify-center gap-2 text-sm text-zinc-500">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-purple-400">
          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
        </svg>
        {t.trustStrip}
      </p>
    </FadeIn>
  );
}
