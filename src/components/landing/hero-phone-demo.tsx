"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import type { CSSProperties } from "react";
import type { Locale } from "@/lib/i18n";

const DURATION = 10;

export function HeroPhoneDemo({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, amount: 0.05, margin: "80px 0px 80px 0px" });

  return (
    <div
      ref={rootRef}
      key={isInView ? "playing" : "idle"}
      className={`hero-phone${isInView ? " hero-phone--playing" : " hero-phone--idle"}`}
      style={{ "--hero-phone-duration": `${DURATION}s` } as CSSProperties}
      aria-hidden="true"
    >
      <div className="hero-phone__ambient" />
      <div className="hero-phone__ring" />
      <div className="hero-phone__float hero-phone__float--live">● LIVE</div>
      <div className="hero-phone__float hero-phone__float--ai">✦ AI</div>

      <div className="hero-phone__device">
        <div className="hero-phone__island" />
        <div className="hero-phone__screen">
          {/* ── 1 · Product page ── */}
          <div className="hero-phone__scene hero-phone__scene--pdp">
            <div className="hero-phone__store-bar">
              <span>←</span>
              <em>remadeicons.shop</em>
              <span>♡</span>
            </div>
            <div className="hero-phone__status">
              <span>9:41</span>
              <span className="hero-phone__status-icons">
                <i /><i />
              </span>
            </div>
            <div className="hero-phone__pdp-image">
              <Image
                src="/assets/demo-jersey-main.png"
                alt=""
                width={280}
                height={280}
                className="hero-phone__pdp-img"
                priority
              />
              <span className="hero-phone__pdp-badge">{fr ? "Nouveau" : "New"}</span>
            </div>
            <div className="hero-phone__pdp-body">
              <p className="hero-phone__pdp-brand">REMADE ICONS</p>
              <p className="hero-phone__pdp-title">
                {fr ? "Maillot col montant" : "Collared Soccer Jersey"}
              </p>
              <div className="hero-phone__pdp-rating" aria-hidden="true">
                {"★★★★★"} <span>4.9</span>
              </div>
              <p className="hero-phone__pdp-price">$18.12</p>
              <div className="hero-phone__pdp-sizes">
                <span>S</span>
                <span className="is-active">M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className="hero-phone__try-wrap">
                <span className="hero-phone__try-beacon" />
                <button type="button" className="hero-phone__btn hero-phone__btn--try">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 2a4 4 0 014 4v1h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2V6a4 4 0 014-4z" />
                  </svg>
                  {fr ? "Essayer" : "Try it on"}
                </button>
              </div>
              <button type="button" className="hero-phone__btn hero-phone__btn--cart">
                {fr ? "Ajouter au panier" : "Add to cart"}
              </button>
            </div>
          </div>

          {/* ── 2 · Upload photo ── */}
          <div className="hero-phone__scene hero-phone__scene--upload">
            <div className="hero-phone__upload-dim" />
            <div className="hero-phone__upload-sheet">
              <div className="hero-phone__upload-handle" />
              <p className="hero-phone__upload-title">
                {fr ? "Votre photo" : "Your photo"}
              </p>
              <p className="hero-phone__upload-sub">
                {fr ? "Une selfie suffit — jamais stockée" : "One selfie — never stored"}
              </p>
              <div className="hero-phone__upload-zone">
                <div className="hero-phone__upload-icon" aria-hidden="true">📷</div>
                <div className="hero-phone__upload-thumb" />
                <div className="hero-phone__upload-scan" />
              </div>
              <button type="button" className="hero-phone__btn hero-phone__btn--upload">
                {fr ? "Continuer" : "Continue"}
              </button>
            </div>
          </div>

          {/* ── 3 · AI processing ── */}
          <div className="hero-phone__scene hero-phone__scene--loading">
            <div className="hero-phone__loading-card">
              <div className="hero-phone__ai-chip">
                <span className="hero-phone__ai-chip-dot" />
                {fr ? "Stylab IA" : "Stylab AI"}
              </div>
              <div className="hero-phone__loading-bar">
                <span className="is-done" />
                <span className="is-active" />
                <span />
              </div>
              <p className="hero-phone__loading-title">
                {fr ? "Génération en cours…" : "Generating preview…"}
              </p>
              <div className="hero-phone__loading-preview">
                <Image
                  src="/assets/demo-jersey-main.png"
                  alt=""
                  width={200}
                  height={200}
                  className="hero-phone__loading-img"
                />
                <div className="hero-phone__scan-grid" />
                <div className="hero-phone__scan-line" />
                <div className="hero-phone__scan-line hero-phone__scan-line--rev" />
                <div className="hero-phone__loading-particles">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i} style={{ "--i": i } as CSSProperties} />
                  ))}
                </div>
              </div>
              <div className="hero-phone__progress-track">
                <div className="hero-phone__progress-fill" />
              </div>
              <p className="hero-phone__progress-label">
                <span className="hero-phone__progress-pct">0</span>%
              </p>
              <div className="hero-phone__loading-steps">
                <span>{fr ? "Analyse" : "Analyze"}</span>
                <span>{fr ? "Mapping" : "Mapping"}</span>
                <span>{fr ? "Rendu" : "Render"}</span>
              </div>
            </div>
          </div>

          {/* ── 4 · Result ── */}
          <div className="hero-phone__scene hero-phone__scene--result">
            <div className="hero-phone__result-shimmer" />
            <Image
              src="/assets/screenshots/result-modal.png"
              alt=""
              width={300}
              height={640}
              className="hero-phone__result-full"
            />
            <div className="hero-phone__cart-toast">
              <span>✓</span>
              {fr ? "Ajouté au panier" : "Added to cart"}
            </div>
          </div>

          {/* ── 5 · Success ── */}
          <div className="hero-phone__scene hero-phone__scene--success">
            <div className="hero-phone__success-card">
              <div className="hero-phone__success-burst" />
              <div className="hero-phone__success-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="hero-phone__success-title">
                {fr ? "Commande sécurisée !" : "Purchase unlocked!"}
              </p>
              <p className="hero-phone__success-sub">
                {fr ? "L'essayage a converti ce client" : "Try-on converted this shopper"}
              </p>
              <div className="hero-phone__success-mini">
                <span>{fr ? "Panier" : "Cart"}</span>
                <strong>$18.12</strong>
              </div>
            </div>
          </div>

          {/* Overlays */}
          <div className="hero-phone__flash" />
          <div className="hero-phone__confetti">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} style={{ "--i": i } as CSSProperties} />
            ))}
          </div>
          <div className="hero-phone__revenue">
            <span className="hero-phone__revenue-burst" />
            <span className="hero-phone__revenue-icon">↑</span>
            <span className="hero-phone__revenue-amount">+$15</span>
            <span className="hero-phone__revenue-label">
              {fr ? "revenu moyen" : "avg. revenue"}
            </span>
          </div>
          <div className="hero-phone__finger" />
          <div className="hero-phone__finger-ring" />
        </div>
      </div>
    </div>
  );
}
