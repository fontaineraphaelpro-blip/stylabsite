"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { type Locale, UI } from "@/lib/content";

export function CapabilitiesSection({ locale }: { locale: Locale }) {
  const t = UI[locale];

  return (
    <section className="py-20 md:py-24 border-t border-white/5" aria-labelledby="capabilities-title">
      <div className="container">
        <div className="capabilities-section__inner mx-auto w-full max-w-4xl">
          <FadeIn className="text-center mb-10 md:mb-12">
            <p className="section-eyebrow">{t.capabilitiesEyebrow}</p>
            <h2 id="capabilities-title" className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              {t.capabilitiesTitle}
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base">{t.capabilitiesDesc}</p>
          </FadeIn>

          <ul className="capabilities-grid">
            {t.capabilities.map((item, i) => (
              <li key={item.title} className="capabilities-grid__item">
                <FadeIn delay={i * 0.06} y={16} className="h-full w-full">
                  <div className="capabilities-card">
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
