"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInHero } from "@/components/motion/fade-in";
import { GridBackground } from "@/components/landing/grid-background";
import { ClientErrorBoundary } from "@/components/client-error-boundary";
import { HeroPhoneDemo } from "@/components/landing/hero-phone-demo";
import { APP_URL, type Locale, UI, liveDemoHref } from "@/lib/content";

export function HeroSection({ locale }: { locale: Locale }) {
  const t = UI[locale];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      <GridBackground />
      <div className="scan-line" aria-hidden="true" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <FadeInHero delay={0}>
            <motion.div
              whileHover={{ scale: 1.02, borderColor: "rgba(141,84,255,0.4)" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border border-white/10 bg-white/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="pulse-dot relative" />
              </span>
              <span>{locale === "fr" ? "Shopify" : "Shopify"}</span>
              <span>·</span>
              <strong>{locale === "fr" ? "essayage virtuel IA" : "AI virtual try-on"}</strong>
            </motion.div>
          </FadeInHero>

          <FadeInHero delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
              {t.heroTitle}{" "}
              <span className="gradient-text">{t.heroTitleAccent}</span>
            </h1>
          </FadeInHero>

          <FadeInHero delay={0.2}>
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">{t.heroLead}</p>
          </FadeInHero>

          <FadeInHero delay={0.35}>
            <div className="flex flex-wrap gap-3">
              <Link href={liveDemoHref(locale)} className="btn btn--primary btn--lg">
                {locale === "fr" ? "Essayer en live" : "Try it live"}
              </Link>
              <a href={APP_URL} className="btn btn--ghost btn--lg" target="_blank" rel="noopener">
                {locale === "fr" ? "Installer gratuit" : "Install free"}
              </a>
            </div>
          </FadeInHero>

          <FadeInHero delay={0.5}>
            <div className="hero-proof">
              <div className="hero-proof__stats">
                {t.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`hero-stat hero-stat--${i === 0 ? "violet" : i === 1 ? "cyan" : "emerald"}`}
                  >
                    <strong className="hero-stat__value">{s.value}</strong>
                    <span className="hero-stat__label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInHero>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full max-w-[340px]"
          >
            <ClientErrorBoundary label="hero-phone">
              <HeroPhoneDemo locale={locale} />
            </ClientErrorBoundary>
            <p className="sr-only">
              {locale === "fr"
                ? "Animation : page produit, modal widget Stylab, essayage IA, ajout au panier, revenus multipliés."
                : "Animation: product page, Stylab widget modal, AI try-on, add to cart, multiplied revenue."}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
