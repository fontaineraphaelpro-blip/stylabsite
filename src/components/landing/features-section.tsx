"use client";

import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { EASE_PREMIUM } from "@/lib/motion";
import { type Locale, UI } from "@/lib/content";

const icons: Record<string, ReactNode> = {
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M17 7h4v4" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const accents = [
  { stat: "PDP", labelEn: "widget live", labelFr: "widget actif", glow: "features-glow--violet" },
  { stat: "~5 min", labelEn: "to go live", labelFr: "mise en ligne", glow: "features-glow--cyan" },
  { stat: "Free", labelEn: "plan to start", labelFr: "plan pour démarrer", glow: "features-glow--emerald" },
];

export function FeaturesSection({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const fr = locale === "fr";
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} className="features-showcase py-24 md:py-32 relative overflow-hidden" aria-labelledby="features-title">
      <motion.div className="features-showcase__bg" style={{ y: bgY }} aria-hidden="true">
        <div className="features-showcase__grid" />
        <div className="features-showcase__orb features-showcase__orb--1" />
        <div className="features-showcase__orb features-showcase__orb--2" />
      </motion.div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-14 lg:mb-16 items-end">
          <FadeIn>
            <p className="section-eyebrow">{t.featuresEyebrow}</p>
            <h2 id="features-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              {t.featuresTitle}
              <br />
              <span className="gradient-text">{t.featuresTitleMuted}</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-md lg:ml-auto lg:text-right">
              {t.featuresDesc}
            </p>
            <div className="features-pipeline mt-6 lg:justify-end">
              <span>PDP</span>
              <span className="features-pipeline__arrow" aria-hidden="true" />
              <span>{fr ? "Essayage" : "Try-on"}</span>
              <span className="features-pipeline__arrow" aria-hidden="true" />
              <span>{fr ? "Panier" : "Cart"}</span>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-fr">
          {t.features.map((f, i) => {
            const accent = accents[i];
            const isHero = i === 0;
            return (
              <FadeIn key={f.title} delay={i * 0.1} y={isHero ? 40 : 28}>
                <motion.article
                  whileHover={{ y: -6, scale: isHero ? 1.01 : 1.02 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  className={`features-card ${accent.glow} ${isHero ? "features-card--hero" : ""} group h-full min-h-[200px]`}
                >
                  <div className="features-card__shine" aria-hidden="true" />
                  <div className="features-card__top">
                    <div className="features-card__icon">{icons[f.icon]}</div>
                    <div className="features-card__stat">
                      <strong>{accent.stat}</strong>
                      <span>{fr ? accent.labelFr : accent.labelEn}</span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">{f.desc}</p>
                  {isHero && (
                    <div className="features-card__chart" aria-hidden="true">
                      {[40, 55, 48, 72, 65, 88, 78].map((h, j) => (
                        <motion.span
                          key={j}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + j * 0.06, duration: 0.5, ease: EASE_PREMIUM }}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  )}
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
