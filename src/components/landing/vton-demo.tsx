"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import { APP_URL, type Locale } from "@/lib/content";

const THUMBS = [
  { src: "/assets/demo-jersey-main.png", label: "View 1" },
  { src: "/assets/demo-jersey-alt.png", label: "View 2" },
];

export function VtonDemo({ locale }: { locale: Locale }) {
  const [mainSrc, setMainSrc] = useState(THUMBS[0].src);
  const [activeThumb, setActiveThumb] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || (window as Window & { VTON_LIQUID?: boolean }).VTON_LIQUID) return;

    const slot = document.getElementById("vton-embed-slot");
    if (!slot) return;

    const APP = (slot.getAttribute("data-vton-app-url") || "https://vton-production-890a.up.railway.app").replace(/\/$/, "");
    const DEMO_SHOP = "s1qf3z-70.myshopify.com";
    const PRODUCT_ID = slot.getAttribute("data-vton-product-id");

    (window as Window & { VTON_LIQUID?: object }).VTON_LIQUID = {
      shop: DEMO_SHOP,
      appUrl: APP,
      productId: PRODUCT_ID,
      pageType: "product",
      template: "product",
      customAnchor: "#vton-mount",
    };
  }, []);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.005 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="glass-card gradient-border hover-lift p-4 sm:p-6"
      >
        <div className="inline-flex items-center gap-2 text-xs text-zinc-400 mb-4 px-2 py-1 rounded-md bg-white/5">
          <Image src="/assets/shopify-icon-logo.svg" alt="" width={16} height={16} />
          {locale === "fr" ? "Démo live" : "Live demo"}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Image
              id="mainImage"
              src={mainSrc}
              alt="Shadow Stripe Collared Soccer Jersey"
              width={480}
              height={480}
              className="rounded-xl w-full h-auto bg-white/5"
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

          <div className="flex flex-col">
            <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">REMADE ICONS</p>
            <h3 className="text-xl font-semibold mb-2">Shadow Stripe Collared Soccer Jersey</h3>
            <p className="text-2xl font-bold mb-3">18.12 €</p>
            <p className="text-sm text-zinc-400 mb-4">
              {locale === "fr" ? (
                <>Tapez <strong>Essayer</strong>, uploadez une photo, aperçu en ~30 s.</>
              ) : (
                <>Tap <strong>Try it on</strong>, upload a photo, preview in ~30s.</>
              )}
            </p>

            <div className="space-y-3 mt-auto">
              <button type="button" className="btn btn--dark w-full" aria-label="Add to cart (demo)">
                <Image src="/assets/shopify-icon-logo.svg" alt="" width={18} height={18} />
                {locale === "fr" ? "Ajouter au panier" : "Add to cart"}
              </button>
              <div id="vton-mount" data-vton-mount className="min-h-[48px]" />
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
            </div>

            <div className="flex items-center justify-between mt-4 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                {locale === "fr" ? "Photo non stockée" : "Photo not stored"}
              </span>
              <a href={APP_URL} target="_blank" rel="noopener" className="hover:text-white transition-colors">
                {locale === "fr" ? "Installer sur ma boutique →" : "Install on my store →"}
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <Script src="/vton-widget.js" strategy="afterInteractive" />
    </>
  );
}
