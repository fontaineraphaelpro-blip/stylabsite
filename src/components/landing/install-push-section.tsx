"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { APP_URL, type Locale, UI, localePath } from "@/lib/content";

export function InstallPushSection({ locale }: { locale: Locale }) {
  const t = UI[locale];

  return (
    <section className="install-push py-24 md:py-32 relative overflow-hidden" aria-labelledby="install-title">
      <div className="install-push__glow" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn className="space-y-6">
            <p className="section-eyebrow">{t.installEyebrow}</p>
            <h2 id="install-title" className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              {t.installTitle}
              <br />
              <span className="gradient-text">{t.installTitleMuted}</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-md">{t.installDesc}</p>

            <ul className="install-checks">
              {t.installChecks.map((check) => (
                <li key={check}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {check}
                </li>
              ))}
            </ul>

            <p className="text-sm text-zinc-500">{t.installNote}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={APP_URL} className="btn btn--primary btn--lg" target="_blank" rel="noopener">
                <Image src="/assets/shopify-icon-logo.svg" alt="" width={18} height={18} />
                {t.installLong}
              </a>
              <Link href={`${localePath(locale)}#journey`} className="btn btn--ghost btn--lg">
                {t.liveDemo}
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="install-timeline">
              {t.installTimeline.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.12, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="install-timeline__step"
                >
                  <div className="install-timeline__time">{step.time}</div>
                  <div className="install-timeline__body">
                    <strong>{step.title}</strong>
                    <span>{step.desc}</span>
                  </div>
                  {i < t.installTimeline.length - 1 && (
                    <div className="install-timeline__connector" aria-hidden="true" />
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="install-timeline__badge"
              >
                <span className="install-timeline__badge-num">50</span>
                <span className="install-timeline__badge-label">
                  {locale === "fr" ? "essayages gratuits / mois" : "free try-ons / month"}
                </span>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
