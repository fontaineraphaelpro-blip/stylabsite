"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import type { Locale } from "@/lib/i18n";

const DURATION = 14;

export function HeroPhoneDemo({ locale }: { locale: Locale }) {
  const fr = locale === "fr";

  return (
    <div
      className="hero-phone"
      style={{ "--hero-phone-duration": `${DURATION}s` } as CSSProperties}
      aria-hidden="true"
    >
      <div className="hero-phone__glow" />
      <div className="hero-phone__device">
        <div className="hero-phone__island" />
        <div className="hero-phone__screen">
          {/* ── Scene 1: Product page ── */}
          <div className="hero-phone__scene hero-phone__scene--pdp">
            <div className="hero-phone__status">
              <span>9:41</span>
              <span className="hero-phone__status-icons">
                <i />
                <i />
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
            </div>
            <div className="hero-phone__pdp-body">
              <p className="hero-phone__pdp-brand">REMADE ICONS</p>
              <p className="hero-phone__pdp-title">
                {fr ? "Maillot col montant" : "Collared Soccer Jersey"}
              </p>
              <p className="hero-phone__pdp-price">$18.12</p>
              <div className="hero-phone__pdp-swatches">
                <span className="is-active" />
                <span />
                <span />
              </div>
              <button type="button" className="hero-phone__btn hero-phone__btn--try">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 2a4 4 0 014 4v1h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2V6a4 4 0 014-4z" />
                </svg>
                {fr ? "Essayer" : "Try it on"}
              </button>
              <button type="button" className="hero-phone__btn hero-phone__btn--cart">
                {fr ? "Ajouter au panier" : "Add to cart"}
              </button>
            </div>
          </div>

          {/* ── Scene 2: AI loading ── */}
          <div className="hero-phone__scene hero-phone__scene--loading">
            <div className="hero-phone__loading-card">
              <div className="hero-phone__loading-bar">
                <span className="is-done" />
                <span className="is-active" />
                <span />
              </div>
              <p className="hero-phone__loading-title">
                {fr ? "Génération IA…" : "AI generating…"}
              </p>
              <div className="hero-phone__loading-preview">
                <Image
                  src="/assets/demo-jersey-main.png"
                  alt=""
                  width={200}
                  height={200}
                  className="hero-phone__loading-img"
                />
                <div className="hero-phone__scan-line" />
                <div className="hero-phone__scan-grid" />
              </div>
              <div className="hero-phone__loading-dots">
                <span />
                <span />
                <span />
              </div>
              <p className="hero-phone__loading-sub">
                {fr ? "~30 secondes" : "~30 seconds"}
              </p>
            </div>
          </div>

          {/* ── Scene 3: Result (full widget UI) ── */}
          <div className="hero-phone__scene hero-phone__scene--result">
            <Image
              src="/assets/screenshots/result-modal.png"
              alt=""
              width={300}
              height={640}
              className="hero-phone__result-full"
            />
          </div>

          {/* ── Scene 4: Cart success + revenue ── */}
          <div className="hero-phone__scene hero-phone__scene--success">
            <div className="hero-phone__success-card">
              <div className="hero-phone__success-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="hero-phone__success-title">
                {fr ? "Ajouté au panier !" : "Added to cart!"}
              </p>
              <p className="hero-phone__success-sub">
                {fr ? "Conversion boostée par l'essayage" : "Try-on boosted conversion"}
              </p>
            </div>
          </div>

          <div className="hero-phone__revenue">
            <span className="hero-phone__revenue-icon">↑</span>
            <span className="hero-phone__revenue-amount">+$15</span>
            <span className="hero-phone__revenue-label">
              {fr ? "revenu moyen" : "avg. revenue"}
            </span>
          </div>

          <div className="hero-phone__cursor" />
          <div className="hero-phone__cursor-ring" />
        </div>
      </div>
    </div>
  );
}
