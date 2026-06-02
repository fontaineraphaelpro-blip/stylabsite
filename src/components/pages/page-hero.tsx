"use client";

import { FadeInHero } from "@/components/motion/fade-in";
import Link from "next/link";
import Image from "next/image";
import { APP_URL, UI } from "@/lib/data";
import { type Locale, liveDemoHref, localePath } from "@/lib/i18n";

export function PageHero({
  locale,
  eyebrow,
  title,
  lead,
  breadcrumb,
  showActions = false,
}: {
  locale: Locale;
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumb?: { href: string; label: string }[];
  showActions?: boolean;
}) {
  const u = UI[locale];
  return (
    <section className="pb-12 pt-4">
      <div className="container max-w-3xl">
        <FadeInHero delay={0}>
          {breadcrumb && breadcrumb.length > 0 && (
            <nav className="text-sm text-zinc-500 mb-4 flex flex-wrap gap-1">
              {breadcrumb.map((cr, i) => (
                <span key={`${cr.href}-${i}`} className="flex items-center gap-1">
                  {i > 0 && <span>/</span>}
                  {cr.href === "#" ? (
                    <span>{cr.label}</span>
                  ) : (
                    <Link href={cr.href} className="hover:text-white transition-colors">
                      {cr.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{title}</h1>
          {lead && <p className="text-lg text-zinc-400 leading-relaxed">{lead}</p>}
          {showActions && (
            <div className="flex flex-wrap gap-3 mt-6">
              <a href={APP_URL} className="btn btn--primary" target="_blank" rel="noopener">
                <Image src="/assets/shopify-icon-logo.svg" alt="" width={18} height={18} />
                {u.installStylab}
              </a>
              <Link href={liveDemoHref(locale)} className="btn btn--ghost">
                {u.viewDemo}
              </Link>
            </div>
          )}
        </FadeInHero>
      </div>
    </section>
  );
}
