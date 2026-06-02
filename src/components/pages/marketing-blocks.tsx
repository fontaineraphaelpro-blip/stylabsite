"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { APP_URL, UI } from "@/lib/data";
import { type Locale, liveDemoHref, localePath, t } from "@/lib/i18n";

export function MarketingCta({ locale }: { locale: Locale }) {
  const u = UI[locale];
  return (
    <section className="py-16">
      <div className="container">
        <FadeIn>
          <div className="glass-card gradient-border hover-lift text-center p-10 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">{u.ctaTitle}</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">{u.ctaBody}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={APP_URL} className="btn btn--primary btn--lg" target="_blank" rel="noopener">
                <Image src="/assets/shopify-icon-logo.svg" alt="" width={18} height={18} />
                {u.install}
              </a>
              <Link href={liveDemoHref(locale)} className="btn btn--ghost btn--lg">
                {u.viewDemo}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export { PageHero } from "@/components/pages/page-hero";

export function ProseSection({
  html,
  locale,
  className = "",
  delay = 0,
}: {
  html: string;
  locale: Locale;
  className?: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div
        className={`prose prose-invert prose-zinc max-w-none ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </FadeIn>
  );
}

export function HubGrid({
  items,
  delayStart = 0,
}: {
  items: { href: string; title: string; desc: string; cta?: string }[];
  delayStart?: number;
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <FadeIn key={item.href} delay={delayStart + i * 0.08}>
          <Link href={item.href} className="glass-card gradient-border hover-lift block p-5 h-full group">
            <h2 className="font-semibold text-lg mb-2 group-hover:text-purple-300 transition-colors">
              {item.title}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            <span className="inline-block mt-4 text-sm text-purple-400 group-hover:translate-x-1 transition-transform">
              {item.cta ?? "→"}
            </span>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}

export function SectionBlock({
  eyebrow,
  title,
  desc,
  children,
  delay = 0,
}: {
  eyebrow?: string;
  title?: string;
  desc?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <section className="py-12">
      <div className="container">
        {(eyebrow || title) && (
          <FadeIn delay={delay} className="mb-8 max-w-2xl">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            {title && <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>}
            {desc && <p className="text-zinc-400">{desc}</p>}
          </FadeIn>
        )}
        {children}
      </div>
    </section>
  );
}

export function DiffCards({
  items,
  locale,
}: {
  items: { title: string | { en: string; fr: string }; body: string | { en: string; fr: string } }[];
  locale: Locale;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <FadeIn key={i} delay={i * 0.08}>
          <div className="glass-card gradient-border hover-lift p-5 h-full">
            <h3 className="font-semibold mb-2">{t(item.title, locale)}</h3>
            <p className="text-sm text-zinc-400">{t(item.body, locale)}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
