"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showHint, setShowHint] = useState(true);
  const fr = locale === "fr";

  useEffect(() => {
    initVtonDemo();
  }, []);

  useEffect(() => {
    const mount = document.getElementById("vton-mount");
    if (!mount) return;

    const dismiss = () => setShowHint(false);
    mount.addEventListener("click", dismiss, { once: true, capture: true });

    return () => mount.removeEventListener("click", dismiss, { capture: true });
  }, []);

  return (
    <div className="demo-frame w-full min-w-0 max-w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="demo-frame__card"
        id="trialBox"
      >
        <div className="demo-browser min-w-0">
          <div className="demo-browser__bar">
            <span className="demo-browser__dot demo-browser__dot--red hidden sm:block" />
            <span className="demo-browser__dot demo-browser__dot--yellow hidden sm:block" />
            <span className="demo-browser__dot demo-browser__dot--green hidden sm:block" />
            <span className="demo-browser__url">remadeicons.shop</span>
          </div>

          <div className="demo-browser__body">
            <div
              className="grid md:grid-cols-2 gap-4 sm:gap-6 trial-layout product product__info-wrapper min-w-0"
              data-product-id={PRODUCT_GID}
              data-product-handle="shadow-stripe-collared-soccer-jersey-4"
            >
              <div className="trial-gallery product__media min-w-0 order-2 md:order-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  id="mainImage"
                  className="product-featured-image rounded-xl w-full max-w-full h-auto bg-white/5"
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
                      className={`rounded-lg overflow-hidden border-2 transition-colors shrink-0 ${activeThumb === i ? "border-purple-500" : "border-transparent"}`}
                      onClick={() => {
                        setMainSrc(t.src);
                        setActiveThumb(i);
                      }}
                    >
                      <Image src={t.src} alt="" width={56} height={56} className="w-12 h-12 sm:w-14 sm:h-14 object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="trial-product product__info flex flex-col min-w-0 order-1 md:order-2">
                <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">REMADE ICONS</p>
                <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">
                  Shadow Stripe Collared Soccer Jersey
                </h3>
                <p className="text-xl sm:text-2xl font-bold mb-3">18.12 €</p>

                <form action="#" className="product-form mt-auto min-w-0" onSubmit={(e) => e.preventDefault()}>
                  <div className="trial-buy space-y-3 min-w-0">
                    <button
                      type="button"
                      className="btn btn--dark w-full hidden sm:inline-flex"
                      aria-label="Add to cart (demo)"
                    >
                      <Image src="/assets/shopify-icon-logo.svg" alt="" width={18} height={18} />
                      {fr ? "Ajouter au panier" : "Add to cart"}
                    </button>

                    <AnimatePresence>
                      {showHint && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="demo-tryon-callout"
                          role="note"
                        >
                          <span className="demo-tryon-callout__arrow" aria-hidden="true">
                            ↓
                          </span>
                          <span>
                            {fr ? (
                              <>
                                Cliquez sur <strong>Essayer</strong> ci-dessous
                              </>
                            ) : (
                              <>
                                Click <strong>Try it on</strong> below
                              </>
                            )}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="demo-tryon-zone demo-tryon-zone--spotlight min-w-0">
                      <span className="demo-tryon-zone__pulse" aria-hidden="true" />
                      <span className="demo-tryon-zone__finger" aria-hidden="true">
                        👆
                      </span>
                      <div id="vton-mount-placeholder" className="vton-placeholder">
                        <button type="button" className="vton-placeholder-btn" aria-label="Loading try-on">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                          </svg>
                          <span>{fr ? "Chargement…" : "Loading…"}</span>
                        </button>
                        <small>
                          {fr ? "Problème ? " : "Issue? "}
                          <a
                            href="https://remadeicons.shop/products/shadow-stripe-collared-soccer-jersey-4"
                            target="_blank"
                            rel="noopener"
                          >
                            {fr ? "Boutique démo →" : "Demo store →"}
                          </a>
                        </small>
                      </div>
                      <div id="vton-mount" data-vton-mount className="min-w-0 max-w-full" />
                    </div>
                  </div>
                </form>

                <div className="flex flex-col gap-2 mt-3 sm:mt-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 shrink-0">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    {fr ? "Photo non stockée" : "Photo not stored"}
                  </span>
                  <a href={APP_URL} target="_blank" rel="noopener" className="hover:text-white transition-colors truncate">
                    {fr ? "Installer sur ma boutique →" : "Install on my store →"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

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
  );
}
