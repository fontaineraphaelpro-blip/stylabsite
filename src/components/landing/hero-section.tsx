"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInHero } from "@/components/motion/fade-in";
import { GridBackground } from "@/components/landing/grid-background";
import { APP_URL, type Locale, UI, localePath } from "@/lib/content";

export function HeroSection({ locale }: { locale: Locale }) {
  const t = UI[locale];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      <GridBackground />
      <div className="scan-line" aria-hidden="true" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
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
              <a href={APP_URL} className="btn btn--primary btn--lg" target="_blank" rel="noopener">
                <Image src="/assets/shopify-icon-logo.svg" alt="" width={18} height={18} />
                {t.installLong}
              </a>
              <Link href={`${localePath(locale)}#journey`} className="btn btn--ghost btn--lg">
                {locale === "fr" ? "Essayer en live" : "Try it live"}
              </Link>
            </div>
          </FadeInHero>

          <FadeInHero delay={0.5}>
            <p className="text-sm text-zinc-500">{t.heroNote}</p>
            <div className="flex flex-wrap gap-6 pt-2">
              {t.stats.map((s) => (
                <div key={s.label}>
                  <strong className="block text-2xl font-bold">{s.value}</strong>
                  <span className="text-xs text-zinc-500">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeInHero>
        </div>

        <FadeInHero delay={0.32} className="relative">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-card gradient-border p-2 hover-lift"
          >
            <Image
              src="/assets/screenshots/result-modal.png"
              alt="AI virtual try-on preview"
              width={560}
              height={620}
              className="rounded-xl w-full h-auto"
              priority
            />
          </motion.div>
        </FadeInHero>
      </div>
    </section>
  );
}
