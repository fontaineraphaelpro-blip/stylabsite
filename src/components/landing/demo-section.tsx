"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { APP_URL, type Locale, UI, localePath } from "@/lib/content";
import { VtonDemo } from "@/components/landing/vton-demo";

export function DemoSection({ locale }: { locale: Locale }) {
  const t = UI[locale];

  return (
    <section id="journey" className="py-20" aria-labelledby="demo-title">
      <div className="container">
        <FadeIn className="text-center mb-10">
          <p className="section-eyebrow">{t.demoEyebrow}</p>
          <h2 id="demo-title" className="text-3xl sm:text-4xl font-bold mb-3">
            {t.demoTitle} <span className="gradient-text">{t.demoTitleAccent}</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">{t.demoDesc}</p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <VtonDemo locale={locale} />
        </FadeIn>
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
              <a href={APP_URL} className="btn btn--primary btn--lg" target="_blank" rel="noopener">
                <Image src="/assets/shopify-icon-logo.svg" alt="" width={18} height={18} />
                {locale === "fr" ? "Installer sur Shopify" : "Install on Shopify"}
              </a>
              <Link href={`${localePath(locale)}#journey`} className="btn btn--ghost btn--lg">
                {t.ctaDemo}
              </Link>
            </div>
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
