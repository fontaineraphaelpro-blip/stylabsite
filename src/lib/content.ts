export const EASE_PREMIUM = [0.21, 0.47, 0.32, 0.98] as const;

export const APP_URL = "https://apps.shopify.com/try-on-stylelab";
export const SITE_URL = "https://www.stylabtryon.site";

export type Locale = "en" | "fr";

export const UI = {
  en: {
    lang: "en" as const,
    liveDemo: "Demo",
    faq: "FAQ",
    compare: "Compare",
    solutions: "Solutions",
    resources: "Resources",
    install: "Install free",
    installLong: "Install on Shopify — free",
    otherLang: "FR",
    trustStrip: "Trusted by apparel brands on Shopify",
    heroBadge: "Shopify · AI virtual try-on",
    heroTitle: "Turn hesitation into",
    heroTitleAccent: "add to cart",
    heroLead: "One photo on your product page. ~30 seconds to see the fit — then add to cart.",
    heroNote: "50 free try-ons/mo · no credit card · live in ~5 min",
    stats: [
      { value: "77.8%", label: "try-on → cart (pilot)" },
      { value: "~30s", label: "preview on PDP" },
      { value: "50", label: "free try-ons / mo" },
    ],
    featuresEyebrow: "Why merchants install",
    featuresTitle: "Built for conversion,",
    featuresTitleMuted: "not demos",
    featuresDesc:
      "One app on your Shopify store. No theme surgery. Measure try-on → cart from day one.",
    features: [
      {
        title: "Higher intent on PDP",
        desc: "Shoppers stop guessing fit. They see the product on themselves before checkout.",
        icon: "chart",
      },
      {
        title: "Live in ~5 minutes",
        desc: "Install from the App Store, toggle try-on on hero SKUs. Widget appears automatically.",
        icon: "bolt",
      },
      {
        title: "Zero risk to start",
        desc: "50 free try-ons per month. No credit card. Photos processed for preview only — not stored.",
        icon: "shield",
      },
    ],
    demoEyebrow: "Live demo",
    demoTitle: "Try it live on a",
    demoTitleAccent: "real product page",
    demoDesc: "Upload your photo below — the exact widget your shoppers get after install.",
    stepsEyebrow: "How it works",
    stepsTitle: "Go live in three steps",
    steps: [
      {
        title: "Install from Shopify",
        desc: "One click from the App Store. Free plan, no card required.",
      },
      {
        title: "Enable hero products",
        desc: "Toggle try-on per SKU in admin — widget shows on those pages.",
      },
      {
        title: "Track try-on → cart",
        desc: "Analytics in Stylab admin. Scale what converts.",
      },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Questions",
    faqs: [
      {
        q: "Is installation free?",
        a: "Yes — 50 successful try-ons per month on the free plan. No credit card. Upgrade through Shopify when you need more.",
      },
      {
        q: "Do I need a developer?",
        a: "No theme edits. Install like any Shopify app and enable products from your admin.",
      },
      {
        q: "Are customer photos stored?",
        a: "No — processed for the preview only. See our privacy policy for details.",
      },
      {
        q: "What results should I expect?",
        a: "Our pilot store sees 77.8% try-on → add-to-cart. Start with 2–3 bestsellers and measure your own data.",
      },
    ],
    ctaTitle: "Ready to sell with",
    ctaTitleAccent: "confidence",
    ctaDesc: "Free install · 50 try-ons/mo · live in ~5 min",
    ctaDemo: "Try demo again",
    footerTagline:
      "AI virtual try-on for Shopify apparel brands. Help shoppers visualize your products before they buy.",
    marqueeItems: ["Shopify App Store", "A/B Testing", "Flat-lay upload", "Mobile widget", "Analytics", "No theme code"],
  },
  fr: {
    lang: "fr" as const,
    liveDemo: "Démo",
    faq: "FAQ",
    compare: "Comparer",
    solutions: "Solutions",
    resources: "Ressources",
    install: "Installer",
    installLong: "Installer sur Shopify — gratuit",
    otherLang: "EN",
    trustStrip: "Utilisé par des marques apparel sur Shopify",
    heroBadge: "Shopify · essayage virtuel IA",
    heroTitle: "Transformez l'hésitation en",
    heroTitleAccent: "ajout au panier",
    heroLead: "Une photo sur votre fiche produit. ~30 secondes pour voir le rendu — puis ajout au panier.",
    heroNote: "50 essayages gratuits/mois · sans carte · en ligne en ~5 min",
    stats: [
      { value: "77,8 %", label: "essayage → panier (pilote)" },
      { value: "~30 s", label: "aperçu sur PDP" },
      { value: "50", label: "essayages gratuits / mois" },
    ],
    featuresEyebrow: "Pourquoi les marchands installent",
    featuresTitle: "Conçu pour convertir,",
    featuresTitleMuted: "pas pour la démo",
    featuresDesc:
      "Une app sur votre Shopify. Pas de chirurgie thème. Mesurez essayage → panier dès le jour 1.",
    features: [
      {
        title: "Plus d'intention sur la PDP",
        desc: "Les clients arrêtent de deviner la coupe. Ils se voient avec le produit avant d'acheter.",
        icon: "chart",
      },
      {
        title: "En ligne en ~5 minutes",
        desc: "Installez depuis l'App Store, activez l'essayage sur vos SKU phares. Widget automatique.",
        icon: "bolt",
      },
      {
        title: "Zéro risque pour démarrer",
        desc: "50 essayages gratuits par mois. Sans carte. Photos traitées pour l'aperçu uniquement.",
        icon: "shield",
      },
    ],
    demoEyebrow: "Démo live",
    demoTitle: "Testez en live sur une",
    demoTitleAccent: "vraie fiche produit",
    demoDesc: "Uploadez votre photo ci-dessous — le même widget que vos clients après installation.",
    stepsEyebrow: "Comment ça marche",
    stepsTitle: "En ligne en trois étapes",
    steps: [
      {
        title: "Installer depuis Shopify",
        desc: "Un clic App Store. Plan gratuit, sans carte.",
      },
      {
        title: "Activer vos produits phares",
        desc: "Toggle par produit dans l'admin — widget sur ces fiches.",
      },
      {
        title: "Suivre essayage → panier",
        desc: "Analytics dans l'admin Stylab. Scalez ce qui convertit.",
      },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Questions",
    faqs: [
      {
        q: "L'installation est-elle gratuite ?",
        a: "Oui — 50 essayages réussis par mois en gratuit. Sans carte. Upgrade via Shopify si besoin.",
      },
      {
        q: "Faut-il un développeur ?",
        a: "Pas de code thème. Comme toute app Shopify, activation depuis l'admin.",
      },
      {
        q: "Les photos clients sont-elles stockées ?",
        a: "Non — traitement pour l'aperçu uniquement. Voir notre politique de confidentialité.",
      },
      {
        q: "Quels résultats attendre ?",
        a: "Notre pilote affiche 77,8 % essayage → panier. Commencez sur 2–3 best-sellers.",
      },
    ],
    ctaTitle: "Prêt à vendre avec",
    ctaTitleAccent: "confiance",
    ctaDesc: "Installation gratuite · 50 essayages/mois · ~5 min",
    ctaDemo: "Revoir la démo",
    footerTagline:
      "Essayage virtuel IA pour marques apparel Shopify. Aidez vos clients à visualiser vos produits avant d'acheter.",
    marqueeItems: ["App Store Shopify", "A/B Testing", "Flat-lay", "Widget mobile", "Analytics", "Sans code thème"],
  },
} as const;

export function localePath(locale: Locale, path = ""): string {
  const base = locale === "fr" ? "/fr" : "";
  return `${base}${path}`;
}
