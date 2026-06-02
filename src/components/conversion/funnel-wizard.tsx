"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

type Step = { title: string; body: string };

export function FunnelWizard({ steps }: { steps: Step[] }) {
  const [step, setStep] = useState(0);
  const current = steps[step];

  if (!steps.length || !current) return null;

  return (
    <div className="glass-card gradient-border p-6 max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35, ease: EASE_PREMIUM }}
        >
          <p className="text-xs text-zinc-500 mb-2">
            Step {step + 1} / {steps.length}
          </p>
          <h3 className="text-xl font-semibold mb-2">{current.title}</h3>
          <p className="text-sm text-zinc-400 mb-6">{current.body}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3">
        {step > 0 && (
          <button type="button" className="btn btn--ghost" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}
        {step < steps.length - 1 ? (
          <button type="button" className="btn btn--primary ml-auto" onClick={() => setStep(step + 1)}>
            Continue
          </button>
        ) : (
          <a href="https://apps.shopify.com/try-on-stylelab" className="btn btn--primary ml-auto" target="_blank" rel="noopener">
            Install free
          </a>
        )}
      </div>
    </div>
  );
}
