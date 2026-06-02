"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { APP_URL } from "@/lib/data";
import { type Locale, localePath } from "@/lib/i18n";
import { UI } from "@/lib/data";
import { EASE_PREMIUM } from "@/lib/motion";

export function StickyCtaBar({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  const t = UI[locale];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE_PREMIUM }}
          className="fixed bottom-0 left-0 right-0 z-40 glass-nav border-t border-white/10 p-3 md:hidden"
        >
          <div className="container flex gap-3">
            <Link href={`${localePath(locale)}#journey`} className="btn btn--ghost flex-1 text-sm">
              {t.liveDemo}
            </Link>
            <a href={APP_URL} className="btn btn--primary flex-1 text-sm" target="_blank" rel="noopener">
              <Image src="/assets/shopify-icon-logo.svg" alt="" width={16} height={16} />
              {t.install}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
