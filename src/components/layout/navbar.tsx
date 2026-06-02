"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { APP_URL, UI } from "@/lib/data";
import { type Locale, localePath } from "@/lib/i18n";
import { EASE_PREMIUM } from "@/lib/motion";

type NavbarProps = {
  locale: Locale;
  variant?: "home" | "marketing";
};

export function Navbar({ locale, variant = "marketing" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const t = UI[locale];
  const home = localePath(locale);
  const otherHref = locale === "en" ? "/fr" : "/";

  const links =
    variant === "home"
      ? [
          { href: `${home}#journey`, label: t.liveDemo },
          { href: `${home}#faq`, label: "FAQ" },
        ]
      : [
          { href: `${home}#journey`, label: t.liveDemo },
          { href: localePath(locale, "/compare"), label: t.compare },
          { href: localePath(locale, "/solutions"), label: t.solutions },
          { href: localePath(locale, "/resources"), label: t.resources },
        ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE_PREMIUM }}
        className="glass-nav fixed top-0 left-0 right-0 z-50"
      >
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link href={home} className="flex items-center gap-2 font-semibold text-sm sm:text-base">
            <Image src="/assets/logo.png" alt="" width={32} height={32} className="rounded-lg" />
            <span>
              Stylab <span className="text-zinc-400 font-normal">Virtual Try-On</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-5 text-sm text-zinc-400">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
              <Link href={otherHref} hrefLang={locale === "en" ? "fr" : "en"} className="hover:text-white transition-colors">
                {t.otherLang}
              </Link>
            </nav>
            <a href={APP_URL} className="btn btn--ghost text-sm" target="_blank" rel="noopener">
              {t.install}
            </a>
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label={locale === "fr" ? "Ouvrir le menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-3 h-0.5 bg-white ml-auto" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_PREMIUM }}
            className="glass-nav fixed top-16 left-0 right-0 z-40 overflow-hidden md:hidden border-t border-white/8"
          >
            <div className="container flex flex-col gap-3 py-4">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm py-2" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <Link href={otherHref} className="text-sm py-2" onClick={() => setOpen(false)}>
                {locale === "en" ? "Français" : "English"}
              </Link>
              <a href={APP_URL} className="btn btn--ghost mt-2" target="_blank" rel="noopener">
                {t.install}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
