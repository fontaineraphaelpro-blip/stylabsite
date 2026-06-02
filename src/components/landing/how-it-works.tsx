"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { APP_URL, type Locale, UI } from "@/lib/content";

export function HowItWorksSection({ locale }: { locale: Locale }) {
  const t = UI[locale];

  return (
    <section className="py-20" aria-labelledby="steps-title">
      <div className="container max-w-3xl text-center">
        <FadeIn>
          <p className="section-eyebrow">{t.stepsEyebrow}</p>
          <h2 id="steps-title" className="text-3xl sm:text-4xl font-bold mb-12">
            {t.stepsTitle}
          </h2>
        </FadeIn>

        <ol className="space-y-4 text-left mb-10">
          {t.steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <li className="glass-card hover-lift gradient-border flex gap-4 p-5 items-start">
                <span className="text-xs font-mono text-purple-400 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong className="block font-semibold mb-1">{step.title}</strong>
                  <span className="text-sm text-zinc-400">{step.desc}</span>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>

        <FadeIn delay={0.35}>
          <a href={APP_URL} className="btn btn--dark btn--lg" target="_blank" rel="noopener">
            {locale === "fr" ? "Installer gratuitement sur Shopify" : "Install free on Shopify"}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
