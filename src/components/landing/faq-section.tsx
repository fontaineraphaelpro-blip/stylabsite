"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { EASE_PREMIUM, type Locale, UI } from "@/lib/content";

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_PREMIUM },
  },
};

export function FaqSection({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20" aria-labelledby="faq-title">
      <div className="container max-w-2xl">
        <FadeIn className="text-center mb-10">
          <p className="section-eyebrow">{t.faqEyebrow}</p>
          <h2 id="faq-title" className="text-3xl sm:text-4xl font-bold">
            {t.faqTitle}
          </h2>
        </FadeIn>

        <motion.div
          className="space-y-3"
          role="list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={listVariants}
        >
          {t.faqs.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const triggerId = `faq-trigger-${i}`;

            return (
              <motion.div
                key={item.q}
                role="listitem"
                variants={itemVariants}
                className="glass-card gradient-border overflow-hidden"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={triggerId}
                    className="w-full flex items-center justify-between gap-4 p-4 text-left font-medium"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {item.q}
                    <span
                      className={`text-xl text-zinc-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                  className="faq-panel grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transitionTimingFunction: "cubic-bezier(0.21, 0.47, 0.32, 0.98)",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed m-0">{item.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
