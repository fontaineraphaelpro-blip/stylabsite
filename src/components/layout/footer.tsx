import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { type Locale, localePath } from "@/lib/i18n";
import { UI } from "@/lib/data";

export function Footer({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const p = (path: string) => localePath(locale, path);

  return (
    <footer className="py-16 mt-8">
      <div className="container container--wide grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <FadeIn className="lg:col-span-1">
          <Link href={localePath(locale)} className="flex items-center gap-2 font-semibold mb-4">
            <Image src="/assets/logo.png" alt="" width={32} height={32} className="rounded-lg" />
            Stylab <span className="text-zinc-400 font-normal">Virtual Try-On</span>
          </Link>
          <p className="text-sm text-zinc-400 leading-relaxed">{t.footerTagline}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h4 className="text-sm font-semibold mb-3">Solutions</h4>
          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link href={p("/solutions/fashion-brands")} className="hover:text-white transition-colors">Fashion Brands</Link>
            <Link href={p("/solutions/streetwear")} className="hover:text-white transition-colors">Streetwear</Link>
            <Link href={p("/solutions/enterprise")} className="hover:text-white transition-colors">Enterprise</Link>
            <Link href={p("/solutions/prestashop")} className="hover:text-white transition-colors">PrestaShop</Link>
            <Link href={p("/solutions/api")} className="hover:text-white transition-colors">API</Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h4 className="text-sm font-semibold mb-3">Shopify alternatives</h4>
          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link href={p("/compare/vs-genlook")} className="hover:text-white transition-colors">vs Genlook</Link>
            <Link href={p("/compare/vs-antla")} className="hover:text-white transition-colors">vs Antla</Link>
            <Link href={p("/compare/vs-banuba")} className="hover:text-white transition-colors">vs Banuba</Link>
            <Link href={p("/compare/vs-mirrar")} className="hover:text-white transition-colors">vs MirrAR</Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h4 className="text-sm font-semibold mb-3">API alternatives</h4>
          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link href={p("/compare/api/vs-fashn-ai")} className="hover:text-white transition-colors">vs FASHN AI</Link>
            <Link href={p("/compare/api/vs-replicate")} className="hover:text-white transition-colors">vs Replicate</Link>
            <Link href={p("/compare/api/vs-fal-ai")} className="hover:text-white transition-colors">vs Fal AI</Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <h4 className="text-sm font-semibold mb-3">Resources</h4>
          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link href={p("/resources/free-tools")} className="hover:text-white transition-colors">Free Tools</Link>
            <Link href={p("/resources/blog")} className="hover:text-white transition-colors">Blog</Link>
            <Link href={p("/resources/documentation")} className="hover:text-white transition-colors">Documentation</Link>
            <Link href={p("/contact")} className="hover:text-white transition-colors">Contact</Link>
            <Link href={p("/confidentialite")} className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </FadeIn>
      </div>
      <div className="container container--wide mt-10 pt-6 border-t border-white/8 text-sm text-zinc-500">
        © 2026 Style Lab · Stylab Virtual Try-On
      </div>
    </footer>
  );
}
