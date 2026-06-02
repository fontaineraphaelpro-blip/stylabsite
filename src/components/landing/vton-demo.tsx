"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { APP_URL } from "@/lib/data";
import { initVtonDemo } from "@/lib/vton-demo-boot";
import type { Locale } from "@/lib/i18n";

const PRODUCT_GID = "gid://shopify/Product/15436964036948";

const THUMBS = [
  { src: "/assets/demo-jersey-main.png", label: "View 1" },
  { src: "/assets/demo-jersey-alt.png", label: "View 2" },
];

export function VtonDemo({ locale }: { locale: Locale }) {
  const [mainSrc, setMainSrc] = useState(THUMBS[0].src);
  const [activeThumb, setActiveThumb] = useState(0);
  const fr = locale === "fr";

  useEffect(() => {
    initVtonDemo();
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.005 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="glass-card gradient-border hover-lift p-4 sm:p-6"
      id="trialBox"
    >
      <div className="inline-flex items-center gap-2 text-xs text-zinc-400 mb-4 px-2 py-1 rounded-md bg-white/5">
        <Image src="/assets/shopify-icon-logo.svg" alt="" width={16} height={16} />
        {fr ? "Démo live" : "Live demo"}
      </div>

      <div
        className="grid md:grid-cols-2 gap-6 trial-layout product product__info-wrapper"
        data-product-id={PRODUCT_GID}
        data-product-handle="shadow-stripe-collared-soccer-jersey-4"
      >
        <div className="trial-gallery product__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="mainImage"
            className="product-featured-image rounded-xl w-full h-auto bg-white/5"
            src={mainSrc}
            alt="Shadow Stripe Collared Soccer Jersey"
            width={480}
            height={480}
          />
          <div className="flex gap-2 mt-3" role="group" aria-label="Product views">
            {THUMBS.map((t, i) => (
              <button
                key={t.src}
                type="button"
                aria-label={t.label}
                className={`rounded-lg overflow-hidden border-2 transition-colors ${activeThumb === i ? "border-purple-500" : "border-transparent"}`}
                onClick={() => {
                  setMainSrc(t.src);
                  setActiveThumb(i);
                }}
              >
                <Image src={t.src} alt="" width={56} height={56} className="w-14 h-14 object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="trial-product product__info flex flex-col">
          <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">REMADE ICONS</p>
          <h3 className="text-xl font-semibold mb-2">Shadow Stripe Collared Soccer Jersey</h3>
          <p className="text-2xl font-bold mb-3">18.12 €</p>
          <p className="text-sm text-zinc-400 mb-4">
            {fr ? (
              <>Tapez <strong>Essayer</strong>, uploadez une photo, aperçu en ~30 s.</>
            ) : (
              <>Tap <strong>Try it on</strong>, upload a photo, preview in ~30s.</>
            )}
          </p>

          <form action="#" className="product-form mt-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="trial-buy space-y-3">
              <button type="button" className="btn btn--dark w-full" aria-label="Add to cart (demo)">
                <Image src="/assets/shopify-icon-logo.svg" alt="" width={18} height={18} />
                {fr ? "Ajouter au panier" : "Add to cart"}
              </button>

              <div id="vton-mount-placeholder" className="vton-placeholder">
                <button type="button" className="vton-placeholder-btn" aria-label="Loading try-on">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                  </svg>
                  <span>{fr ? "Chargement de l'essayage…" : "Loading try-on…"}</span>
                </button>
                <small>
                  {fr ? "Si rien ne s'affiche en 5 s, " : "If nothing loads in 5s, "}
                  <a
                    href="https://remadeicons.shop/products/shadow-stripe-collared-soccer-jersey-4"
                    target="_blank"
                    rel="noopener"
                  >
                    {fr ? "ouvrir la boutique démo →" : "open demo store →"}
                  </a>
                </small>
              </div>

              <div id="vton-mount" data-vton-mount />
            </div>
          </form>

          <div className="flex items-center justify-between mt-4 text-xs text-zinc-500">
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              {fr ? "Photo non stockée" : "Photo not stored"}
            </span>
            <a href={APP_URL} target="_blank" rel="noopener" className="hover:text-white transition-colors">
              {fr ? "Installer sur ma boutique →" : "Install on my store →"}
            </a>
          </div>
        </div>
      </div>

      <div
        id="vton-embed-slot"
        data-vton-embed-slot
        data-vton-embed-primary="1"
        data-vton-page-type="product"
        data-vton-template="product"
        data-vton-custom-anchor="#vton-mount"
        data-vton-app-url="https://vton-production-890a.up.railway.app"
        data-vton-product-id="gid://shopify/Product/15436964036948"
        data-vton-product-handle="shadow-stripe-collared-soccer-jersey-4"
        hidden
        aria-hidden="true"
      />
    </motion.div>
  );
}
