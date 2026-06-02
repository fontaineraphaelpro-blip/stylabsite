"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { type Locale, UI } from "@/lib/content";

const icons: Record<string, ReactNode> = {
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M17 7h4v4" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

export function FeaturesSection({ locale }: { locale: Locale }) {
  const t = UI[locale];

  return (
    <section className="py-20" aria-labelledby="features-title">
      <div className="container">
        <FadeIn>
          <p className="section-eyebrow">{t.featuresEyebrow}</p>
          <h2 id="features-title" className="text-3xl sm:text-4xl font-bold mb-3">
            {t.featuresTitle} <span className="muted">{t.featuresTitleMuted}</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mb-12">{t.featuresDesc}</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {t.features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card gradient-border hover-lift p-6 h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-300 mb-4">
                  {icons[f.icon]}
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
