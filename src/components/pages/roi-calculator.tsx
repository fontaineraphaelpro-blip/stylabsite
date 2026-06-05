"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { EASE_PREMIUM } from "@/lib/motion";
import { FREE_TRYONS_PER_MONTH } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const PLANS = [
  { name: "Free", limit: FREE_TRYONS_PER_MONTH, price: 0 },
  { name: "Starter", limit: 300, price: 19 },
  { name: "Growth", limit: 1000, price: 49 },
  { name: "Scale", limit: 4000, price: 149 },
];

function pickPlan(tryons: number) {
  for (const plan of PLANS) {
    if (tryons <= plan.limit) return plan;
  }
  return PLANS[PLANS.length - 1];
}

function parseNumber(value: string, fallback: number) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

export function RoiCalculator({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const [views, setViews] = useState(50000);
  const [adoption, setAdoption] = useState(5);
  const [conv, setConv] = useState(2.5);
  const [lift, setLift] = useState(10);
  const [aov, setAov] = useState(65);

  const results = useMemo(() => {
    const adoptionRate = adoption / 100;
    const convRate = conv / 100;
    const liftRate = lift / 100;
    const tryons = Math.round(views * adoptionRate);
    const plan = pickPlan(tryons);
    const incrementalOrders = tryons * convRate * liftRate;
    const extraRevenue = incrementalOrders * aov;
    return { tryons, plan, extraRevenue };
  }, [views, adoption, conv, lift, aov]);

  return (
    <FadeIn>
      <motion.form
        className="glass-card gradient-border p-6 sm:p-8 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="text-sm space-y-2">
            {fr ? "Vues page produit / mois" : "Product page views / month"}
            <input
              type="number"
              value={views}
              min={0}
              onChange={(e) => setViews(parseNumber(e.target.value, 0))}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2"
            />
          </label>
          <label className="text-sm space-y-2">
            {fr ? "Taux d'adoption essayage" : "Try-on adoption rate"} ({adoption}%)
            <input
              type="range"
              min={1}
              max={30}
              value={adoption}
              onChange={(e) => setAdoption(parseNumber(e.target.value, 1))}
              className="w-full"
            />
          </label>
          <label className="text-sm space-y-2">
            {fr ? "Taux conversion de base (%)" : "Baseline conversion (%)"}
            <input
              type="number"
              value={conv}
              min={0}
              step={0.1}
              onChange={(e) => setConv(parseNumber(e.target.value, 0))}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2"
            />
          </label>
          <label className="text-sm space-y-2">
            {fr ? "Lift relatif sur sessions essayage" : "Relative lift on try-on sessions"} ({lift}%)
            <input
              type="range"
              min={0}
              max={50}
              value={lift}
              onChange={(e) => setLift(parseNumber(e.target.value, 0))}
              className="w-full"
            />
          </label>
          <label className="text-sm space-y-2 sm:col-span-2">
            {fr ? "Panier moyen ($)" : "Average order value ($)"}
            <input
              type="number"
              value={aov}
              min={0}
              onChange={(e) => setAov(parseNumber(e.target.value, 0))}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2"
            />
          </label>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: fr ? "Essayages / mois" : "Try-ons / month", value: results.tryons.toLocaleString() },
            {
              label: fr ? "Plan recommandé" : "Recommended plan",
              value: `${results.plan.name} (${results.plan.limit.toLocaleString()}/mo)`,
            },
            {
              label: fr ? "Coût Stylab" : "Stylab cost",
              value: `$${results.plan.price}/mo`,
            },
            {
              label: fr ? "Revenu incrémental est." : "Est. incremental revenue",
              value: `$${Math.round(results.extraRevenue).toLocaleString()}/mo`,
            },
          ].map((r) => (
            <div key={r.label} className="rounded-lg bg-white/5 border border-white/8 p-4">
              <span className="text-xs text-zinc-500 block mb-1">{r.label}</span>
              <strong className="text-lg">{r.value}</strong>
            </div>
          ))}
        </div>
        <p className="text-xs text-zinc-500">
          {fr
            ? "Estimation indicative — résultats réels variables."
            : "Indicative estimate — actual results vary."}
        </p>
      </motion.form>
    </FadeIn>
  );
}
