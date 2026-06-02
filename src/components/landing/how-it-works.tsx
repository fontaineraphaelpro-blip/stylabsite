"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { EASE_PREMIUM } from "@/lib/motion";
import { type Locale, UI } from "@/lib/content";

const stepIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 17h7" />
      <path d="M17 14v7" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M3 3v18h18" />
      <path d="M7 16l4-4 4 4 5-6" />
    </svg>
  ),
];

export function HowItWorksSection({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const fr = locale === "fr";
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="steps-showcase py-24 md:py-32 relative overflow-hidden" aria-labelledby="steps-title">
      <div className="container relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="section-eyebrow">{t.stepsEyebrow}</p>
          <h2 id="steps-title" className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {t.stepsTitle}
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base">
            {fr
              ? "De l'App Store à la première conversion mesurée — sans développeur."
              : "From App Store to first measured conversion — no developer required."}
          </p>
        </FadeIn>

        <div className="steps-track relative max-w-5xl mx-auto">
          <motion.div
            className="hidden lg:block steps-track__line-wrap"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.3, delay: 0.35, ease: EASE_PREMIUM }}
          >
            <div className="steps-track__line-bg" />
            <motion.div
              className="steps-track__line-fill"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.1, delay: 0.55, ease: EASE_PREMIUM }}
            />
          </motion.div>

          <ol className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {t.steps.map((step, i) => (
              <li key={step.title} className="list-none">
                <FadeIn delay={i * 0.12} className="h-full">
                  <motion.div
                    className="steps-card group h-full"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                  <div className="steps-card__num-wrap">
                    <span className="steps-card__num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="steps-card__icon">{stepIcons[i]}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>

                  {i === 0 && (
                    <div className="steps-card__chip mt-4">
                      <Image src="/assets/shopify-icon-logo.svg" alt="" width={14} height={14} />
                      App Store
                    </div>
                  )}
                  {i === 1 && (
                    <div className="steps-card__chip steps-card__chip--toggle mt-4">
                      <span className="steps-toggle" aria-hidden="true">
                        <span className="steps-toggle__knob" />
                      </span>
                      {fr ? "Par produit" : "Per product"}
                    </div>
                  )}
                  {i === 2 && (
                    <div className="steps-card__metrics mt-4" aria-hidden="true">
                      <span>↑ ATC</span>
                      <span>↓ bounce</span>
                    </div>
                  )}
                  </motion.div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
