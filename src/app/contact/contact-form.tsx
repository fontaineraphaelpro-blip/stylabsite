"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { MarketingCta, PageHero } from "@/components/pages/marketing-blocks";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { APP_URL } from "@/lib/data";
import { localePath, type Locale } from "@/lib/i18n";

export function ContactContent({ locale }: { locale: Locale }) {
  const fr = locale === "fr";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(fd.get("subject") || "Stylab contact"));
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\n\nMessage:\n${fd.get("message")}`
    );
    window.location.href = `mailto:contact@stylelab.com?subject=${subject}&body=${body}`;
  }

  return (
    <MarketingShell locale={locale}>
      <div className="container max-w-xl">
        <PageHero
          locale={locale}
          eyebrow="Contact"
          title={fr ? "Nous contacter" : "Get in touch"}
          lead={
            fr
              ? "Support, partenariats ou enterprise — réponse sous 1–2 jours ouvrés."
              : "Support, partnerships, or enterprise — we reply within 1–2 business days."
          }
        />
        <FadeIn delay={0.1}>
          <form className="glass-card gradient-border p-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm space-y-1">
              {fr ? "Nom" : "Name"}
              <input name="name" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2" />
            </label>
            <label className="block text-sm space-y-1">
              Email
              <input name="email" type="email" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2" />
            </label>
            <label className="block text-sm space-y-1">
              {fr ? "Sujet" : "Subject"}
              <input name="subject" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2" />
            </label>
            <label className="block text-sm space-y-1">
              Message
              <textarea name="message" rows={5} required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2" />
            </label>
            <button type="submit" className="btn btn--primary">
              {fr ? "Envoyer par email" : "Send via email"}
            </button>
          </form>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-6 text-sm text-zinc-400 space-y-2">
          <p>
            <Link href={localePath(locale, "/support")} className="text-purple-400 hover:underline">
              {fr ? "Page support →" : "Support page →"}
            </Link>
          </p>
          <p>
            <a href={APP_URL} target="_blank" rel="noopener" className="text-purple-400 hover:underline">
              {fr ? "Installer depuis l'App Store →" : "Install from App Store →"}
            </a>
          </p>
        </FadeIn>
      </div>
      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}
