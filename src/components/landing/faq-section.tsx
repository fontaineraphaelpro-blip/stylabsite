"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { EASE_PREMIUM, type Locale, UI } from "@/lib/content";

export function FaqSection({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20" aria-labelledby="faq-title">
      <div className="container max-w-2xl">
        <FadeIn className="text-center mb-10">
          <p className="section-eyebrow">{t.faqEyebrow}</p>
          <h2 id="faq-title" className="text-3xl sm:text-4xl font-bold">
            {t.faqTitle}
          </h2>
        </FadeIn>

        <dl className="space-y-3">
          {t.faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={item.q} delay={i * 0.08}>
                <div className="glass-card gradient-border overflow-hidden">
                  <dt>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-4 p-4 text-left font-medium"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      {item.q}
                      <span
                        className="text-xl text-zinc-500 transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                  </dt>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">{item.a}</div>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
