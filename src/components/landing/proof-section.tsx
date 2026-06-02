"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { APP_URL, type Locale, UI } from "@/lib/content";

export function ProofSection({ locale }: { locale: Locale }) {
  const t = UI[locale];

  return (
    <section className="proof-showcase py-24 md:py-32 relative overflow-hidden" aria-labelledby="proof-title">
      <div className="proof-showcase__bg" aria-hidden="true">
        <div className="proof-showcase__grid" />
      </div>

      <div className="container relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <p className="section-eyebrow">{t.proofEyebrow}</p>
          <h2 id="proof-title" className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] mb-4">
            {t.proofTitle}
            <br />
            <span className="gradient-text">{t.proofTitleMuted}</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed">{t.proofDesc}</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
          <FadeIn delay={0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="proof-card proof-card--loss h-full"
            >
              <div className="proof-card__label proof-card__label--loss">
                <span aria-hidden="true">✕</span>
                {t.proofWithoutTitle}
              </div>
              <ul className="proof-card__list">
                {t.proofWithoutItems.map((item) => (
                  <li key={item}>
                    <span className="proof-card__icon proof-card__icon--loss" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="proof-card proof-card--win h-full"
            >
              <div className="proof-card__label proof-card__label--win">
                <span aria-hidden="true">✓</span>
                {t.proofWithTitle}
              </div>
              <ul className="proof-card__list">
                {t.proofWithItems.map((item) => (
                  <li key={item}>
                    <span className="proof-card__icon proof-card__icon--win" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="proof-card__stat" aria-hidden="true">
                <strong>77.8%</strong>
                <span>{locale === "fr" ? "essayage → panier" : "try-on → cart"}</span>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        <FadeIn delay={0.24} className="text-center mt-10">
          <a href={APP_URL} className="btn btn--primary btn--lg" target="_blank" rel="noopener">
            <Image src="/assets/shopify-icon-logo.svg" alt="" width={18} height={18} />
            {t.proofCta}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
