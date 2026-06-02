"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { Locale } from "@/lib/i18n";

const SCENES = ["pdp", "upload", "loading", "result", "multiply"] as const;
type Scene = (typeof SCENES)[number];

const SCENE_MS: Record<Scene, number> = {
  pdp: 2400,
  upload: 2000,
  loading: 2800,
  result: 2600,
  multiply: 3800,
};

const MULTIPLY_AMOUNTS = [15, 45, 120, 360] as const;

function WidgetStepDots({ active }: { active: 1 | 2 | 3 }) {
  return (
    <div className="hero-phone__step-dots" aria-hidden="true">
      {[1, 2, 3].map((step) => (
        <span
          key={step}
          className={`hero-phone__step-dot${step === active ? " is-active" : step < active ? " is-done" : ""}`}
        />
      ))}
    </div>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20v-1a7 7 0 0114 0v1" />
    </svg>
  );
}

export function HeroPhoneDemo({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const [scene, setScene] = useState<Scene>("pdp");
  const [cycle, setCycle] = useState(0);
  const [flash, setFlash] = useState(false);
  const isFirstScene = useRef(true);

  useEffect(() => {
    let idx = 0;
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const schedule = () => {
      if (cancelled) return;
      const current = SCENES[idx];
      setScene(current);
      timer = setTimeout(() => {
        if (cancelled) return;
        idx = (idx + 1) % SCENES.length;
        if (idx === 0) setCycle((c) => c + 1);
        schedule();
      }, SCENE_MS[current]);
    };

    schedule();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isFirstScene.current) {
      isFirstScene.current = false;
      return;
    }
    // Flash only on meaningful step changes — not when looping back to PDP
    if (scene === "pdp") return;
    setFlash(true);
    const timer = setTimeout(() => setFlash(false), 260);
    return () => clearTimeout(timer);
  }, [scene]);

  const modalOpen = scene === "upload" || scene === "loading" || scene === "result";
  const pdpVisible = scene === "pdp" || modalOpen;

  const sceneClass = (name: Scene) => {
    if (name === "pdp") {
      return [
        "hero-phone__scene hero-phone__scene--pdp",
        pdpVisible ? "is-active" : "",
        modalOpen ? "is-under-modal" : "",
      ]
        .filter(Boolean)
        .join(" ");
    }
    return `hero-phone__scene hero-phone__scene--${name}${scene === name ? " is-active" : ""}`;
  };
  const widgetStep: 1 | 2 | 3 =
    scene === "upload" ? 1 : scene === "loading" ? 2 : 3;

  const funnelLabel =
    scene === "upload"
      ? fr
        ? "Ajoutez votre photo"
        : "Upload your photo"
      : scene === "loading"
        ? fr
          ? "Génération en cours…"
          : "Creating your try-on…"
        : fr
          ? "Votre essayage"
          : "Your try-on result";

  return (
    <div
      className="hero-phone hero-phone--playing"
      data-scene={scene}
      style={{ "--hp-scene-ms": `${SCENE_MS[scene]}ms` } as CSSProperties}
      aria-hidden="true"
    >
      <div className="hero-phone__ambient" />
      <div className="hero-phone__ring" />
      <div className="hero-phone__float hero-phone__float--live">● LIVE</div>
      <div className="hero-phone__float hero-phone__float--ai">✦ AI</div>

      <div className="hero-phone__device">
        <div className="hero-phone__island" />
        <div className="hero-phone__screen">
          {/* ── Product page (always underneath) ── */}
          <div className={sceneClass("pdp")}>
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
                <button type="button" className="hero-phone__btn hero-phone__btn--try hero-phone__btn--widget">
                  <span className="hero-phone__btn-icon">
                    <PersonIcon />
                  </span>
                  {fr ? "Essayer" : "Try it on"}
                </button>
              </div>
              <button type="button" className="hero-phone__btn hero-phone__btn--cart">
                {fr ? "Ajouter au panier" : "Add to cart"}
              </button>
            </div>
          </div>

          {/* ── Real widget modal (upload → loading → result) ── */}
          <div className={`hero-phone__widget-overlay${modalOpen ? " is-open" : ""}`}>
            <div className="hero-phone__widget-modal">
              <button type="button" className="hero-phone__widget-close" aria-hidden="true">
                ×
              </button>
              <div className="hero-phone__widget-head">
                <WidgetStepDots active={modalOpen ? widgetStep : 1} />
                <p className="hero-phone__widget-label">{modalOpen ? funnelLabel : ""}</p>
              </div>

              <div className="hero-phone__widget-body">
                <div
                  key={`upload-${cycle}`}
                  className={`hero-phone__widget-panel hero-phone__widget-panel--upload${scene === "upload" ? " is-active" : ""}`}
                >
                  <div className="hero-phone__vton-upload">
                    <div className="hero-phone__vton-upload-visual">
                      <span className="hero-phone__vton-upload-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-2h6l2 2h4a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="13" r="4" />
                        </svg>
                      </span>
                      <p className="hero-phone__vton-upload-title">
                        {fr ? "Ajoutez votre photo" : "Add your photo"}
                      </p>
                      <p className="hero-phone__vton-upload-sub">
                        {fr ? "Caméra ou galerie · bonne lumière" : "Camera or gallery · good lighting"}
                      </p>
                    </div>
                    <div className="hero-phone__vton-upload-btn">
                      <span>{fr ? "Choisir une photo" : "Choose photo"}</span>
                    </div>
                    <div className="hero-phone__vton-upload-thumb" />
                    <div className="hero-phone__vton-upload-scan" />
                  </div>
                  <p className="hero-phone__vton-privacy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    {fr ? "Traitement sécurisé · photo non stockée" : "Secure processing · photo not stored"}
                  </p>
                  <button type="button" className="hero-phone__vton-generate">
                    {fr ? "Essayer" : "Try it on"}
                  </button>
                </div>

                <div
                  key={`loading-${cycle}`}
                  className={`hero-phone__widget-panel hero-phone__widget-panel--loading${scene === "loading" ? " is-active" : ""}`}
                >
                  <div className="hero-phone__vton-loading">
                    <div className="hero-phone__vton-spinner" />
                    <p className="hero-phone__vton-loading-text">
                      {fr ? "Génération de l'essayage" : "Creating your try-on"}
                      <span className="hero-phone__vton-dots">
                        <span /><span /><span />
                      </span>
                    </p>
                    <div className="hero-phone__vton-progress-track">
                      <div className="hero-phone__vton-progress-bar" />
                    </div>
                    <div className="hero-phone__vton-progress-meta">
                      <span className="hero-phone__vton-progress-pct" aria-hidden="true" />
                      <span className="hero-phone__vton-progress-time">~30s</span>
                    </div>
                    <p className="hero-phone__vton-loading-sub">
                      {fr ? "Environ 30 secondes en moyenne" : "This usually takes about 30 seconds"}
                    </p>
                  </div>
                </div>

                <div
                  key={`result-${cycle}`}
                  className={`hero-phone__widget-panel hero-phone__widget-panel--result${scene === "result" ? " is-active" : ""}`}
                >
                  <div className="hero-phone__vton-result">
                    <div className="hero-phone__tryon-frame">
                      <div className="hero-phone__tryon-figure" aria-hidden="true">
                        <div className="hero-phone__tryon-head" />
                        <div className="hero-phone__tryon-neck" />
                        <div className="hero-phone__tryon-jersey">
                          <span className="hero-phone__tryon-jersey-collar" />
                          <span className="hero-phone__tryon-jersey-stripe" />
                          <span className="hero-phone__tryon-jersey-sleeve hero-phone__tryon-jersey-sleeve--left" />
                          <span className="hero-phone__tryon-jersey-sleeve hero-phone__tryon-jersey-sleeve--right" />
                        </div>
                      </div>
                      <div className="hero-phone__tryon-shine" />
                      <div className="hero-phone__tryon-scan" />
                    </div>
                    <p className="hero-phone__vton-result-lead">
                      {fr ? (
                        <>
                          Ajoutez <strong>votre maillot</strong> au panier
                        </>
                      ) : (
                        <>
                          Add <strong>your jersey</strong> to cart
                        </>
                      )}
                    </p>
                    <button type="button" className="hero-phone__vton-atc">
                      {fr ? "Ajouter au panier" : "Add to cart"}
                    </button>
                    <div className="hero-phone__vton-cart-toast">
                      <span>✓</span>
                      {fr ? "Ajouté au panier" : "Added to cart"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Revenue multiplication finale ── */}
          <div className={sceneClass("multiply")}>
            <div className="hero-phone__multiply-bg" />
            <div className="hero-phone__multiply-content">
              <p className="hero-phone__multiply-eyebrow">
                {fr ? "Chaque essayage convertit" : "Every try-on converts"}
              </p>
              <p className="hero-phone__multiply-title">
                {fr ? "Le gain se multiplie" : "Revenue multiplies"}
              </p>
              <div className="hero-phone__multiply-counter" aria-hidden="true">
                <span className="hero-phone__multiply-x">×</span>
                <span className="hero-phone__multiply-num">24</span>
              </div>
              <p className="hero-phone__multiply-sub">
                {fr ? "clients convertis ce mois-ci" : "shoppers converted this month"}
              </p>
              <div className="hero-phone__multiply-stack">
                {MULTIPLY_AMOUNTS.map((amount, i) => (
                  <span
                    key={amount}
                    className="hero-phone__multiply-chip"
                    style={{ "--i": i } as CSSProperties}
                  >
                    +${amount}
                  </span>
                ))}
              </div>
              <div className="hero-phone__multiply-total">
                <span className="hero-phone__multiply-total-label">
                  {fr ? "Revenu additionnel" : "Extra revenue"}
                </span>
                <strong className="hero-phone__multiply-total-value">+$360</strong>
              </div>
              <p className="hero-phone__multiply-tagline">
                {fr
                  ? "Votre boutique vend pendant que vos clients essaient"
                  : "Your store sells while shoppers try on"}
              </p>
            </div>
          </div>

          {/* Overlays */}
          <div className={`hero-phone__flash${flash ? " is-on" : ""}`} />
          <div className="hero-phone__confetti">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} style={{ "--i": i } as CSSProperties} />
            ))}
          </div>
          <div className="hero-phone__revenue">
            <span className="hero-phone__revenue-burst" />
            <span className="hero-phone__revenue-icon">↑</span>
            <span className="hero-phone__revenue-amount">+$15</span>
            <span className="hero-phone__revenue-label">
              {fr ? "par essayage" : "per try-on"}
            </span>
          </div>
          <div className="hero-phone__finger" />
          <div className="hero-phone__finger-ring" />
        </div>
      </div>
    </div>
  );
}
