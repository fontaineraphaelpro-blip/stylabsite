export const EASE_PREMIUM = [0.21, 0.47, 0.32, 0.98] as const;

export const APP_URL = "https://apps.shopify.com/try-on-stylelab";
export const SITE_URL = "https://www.stylabtryon.site";

export type Locale = "en" | "fr";

export const FREE_TRYONS_PER_MONTH = 10;

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
    heroLead: "One photo on your product page. Shoppers see the fit — then add to cart.",
    stats: [
      { value: "77.8%", label: "try-on → cart (pilot)" },
      { value: "~30s", label: "preview on PDP" },
      { value: String(FREE_TRYONS_PER_MONTH), label: "free try-ons / mo" },
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
        desc: "Free plan to start. No credit card. Photos processed for preview only — not stored.",
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
        a: `Yes — ${FREE_TRYONS_PER_MONTH} successful try-ons per month on the free plan. No credit card. Upgrade through Shopify when you need more.`,
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
    ctaDesc: "Free install · live in ~5 min",
    ctaDemo: "Try demo again",
    footerTagline:
      "AI virtual try-on for Shopify apparel brands. Help shoppers visualize your products before they buy.",
    capabilitiesEyebrow: "Built-in tools",
    capabilitiesTitle: "Everything in one app",
    capabilitiesDesc: "Try-on, testing, and analytics — no extra stack.",
    capabilities: [
      { title: "Shopify App Store", desc: "One-click install, native billing" },
      { title: "A/B Testing", desc: "Try-on vs control on your SKUs" },
      { title: "Flat-lay upload", desc: "Better garment reference photos" },
      { title: "Mobile widget", desc: "Optimized for phone shoppers" },
      { title: "Analytics", desc: "Try-on sessions and funnel data" },
      { title: "No theme code", desc: "Works without editing your theme" },
    ],
    proofEyebrow: "The cost of hesitation",
    proofTitle: "Every bounce is",
    proofTitleMuted: "a lost sale",
    proofDesc:
      "Apparel shoppers leave when they can't picture the fit. Stylab fixes that on the product page — before checkout.",
    proofWithoutTitle: "Without try-on",
    proofWithoutItems: [
      "Shoppers bounce to compare elsewhere",
      "Size doubt kills add-to-cart",
      "Returns from wrong expectations",
      "Zero data on PDP drop-off",
    ],
    proofWithTitle: "With Stylab",
    proofWithItems: [
      "Try-on shoppers add to cart with confidence",
      "Preview without leaving your store",
      "Fewer fit surprises at delivery",
      "Analytics on every session",
    ],
    proofCta: "Install free — start on 2 SKUs",
    installEyebrow: "Zero risk to start",
    installTitle: "Go live in",
    installTitleMuted: "~5 minutes",
    installDesc:
      "No developer. No theme edits. Install from the App Store and enable try-on on your bestsellers today.",
    installTimeline: [
      { time: "0 min", title: "Install", desc: "One click from Shopify App Store" },
      { time: "2 min", title: "Enable SKUs", desc: "Toggle try-on on hero products" },
      { time: "5 min", title: "First try-on", desc: "Widget live — shoppers can preview" },
    ],
    installChecks: [
      "Free plan included",
      "No credit card required",
      "Photos not stored",
      "Cancel anytime from Shopify",
    ],
    installNote: "Most merchants start with 2–3 bestsellers and measure try-on → cart before scaling.",
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
    heroLead: "Une photo sur votre fiche produit. Vos clients voient le rendu — puis ajoutent au panier.",
    stats: [
      { value: "77,8 %", label: "essayage → panier (pilote)" },
      { value: "~30 s", label: "aperçu sur PDP" },
      { value: String(FREE_TRYONS_PER_MONTH), label: "essayages gratuits / mois" },
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
        desc: "Plan gratuit pour démarrer. Sans carte. Photos traitées pour l'aperçu uniquement.",
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
        a: `Oui — ${FREE_TRYONS_PER_MONTH} essayages réussis par mois en gratuit. Sans carte. Upgrade via Shopify si besoin.`,
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
    ctaDesc: "Installation gratuite · en ligne en ~5 min",
    ctaDemo: "Revoir la démo",
    footerTagline:
      "Essayage virtuel IA pour marques apparel Shopify. Aidez vos clients à visualiser vos produits avant d'acheter.",
    capabilitiesEyebrow: "Outils intégrés",
    capabilitiesTitle: "Tout dans une seule app",
    capabilitiesDesc: "Essayage, tests et analytics — sans stack supplémentaire.",
    capabilities: [
      { title: "App Store Shopify", desc: "Installation en un clic, facturation native" },
      { title: "A/B Testing", desc: "Essayage vs témoin sur vos SKU" },
      { title: "Flat-lay", desc: "Photos produit de meilleure qualité" },
      { title: "Widget mobile", desc: "Pensé pour les acheteurs sur téléphone" },
      { title: "Analytics", desc: "Sessions essayage et données funnel" },
      { title: "Sans code thème", desc: "Aucune modification de thème requise" },
    ],
    proofEyebrow: "Le coût de l'hésitation",
    proofTitle: "Chaque rebond est",
    proofTitleMuted: "une vente perdue",
    proofDesc:
      "Les acheteurs mode partent quand ils n'arrivent pas à se projeter. Stylab règle ça sur la fiche produit — avant le checkout.",
    proofWithoutTitle: "Sans essayage",
    proofWithoutItems: [
      "Comparaison ailleurs, panier abandonné",
      "Doute taille → pas d'ajout au panier",
      "Retours liés aux mauvaises attentes",
      "Aucune donnée sur les abandons PDP",
    ],
    proofWithTitle: "Avec Stylab",
    proofWithItems: [
      "Les clients qui essaient achètent avec plus de confiance",
      "Aperçu sans quitter votre boutique",
      "Moins de mauvaises surprises à la livraison",
      "Analytics sur chaque session",
    ],
    proofCta: "Installer gratuit — 2 SKU pour commencer",
    installEyebrow: "Zéro risque pour démarrer",
    installTitle: "En ligne en",
    installTitleMuted: "~5 minutes",
    installDesc:
      "Sans développeur. Sans toucher au thème. Installez depuis l'App Store et activez l'essayage sur vos best-sellers.",
    installTimeline: [
      { time: "0 min", title: "Installer", desc: "Un clic depuis l'App Store Shopify" },
      { time: "2 min", title: "Activer SKU", desc: "Toggle essayage sur vos produits phares" },
      { time: "5 min", title: "1er essayage", desc: "Widget live — vos clients preview" },
    ],
    installChecks: [
      "Plan gratuit inclus",
      "Sans carte bancaire",
      "Photos non stockées",
      "Résiliable depuis Shopify",
    ],
    installNote: "La plupart des marchands démarrent sur 2–3 best-sellers et mesurent essayage → panier avant de scaler.",
  },
} as const;

export function localePath(locale: Locale, path = ""): string {
  const base = locale === "fr" ? "/fr" : "";
  if (!path) return base || "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export { liveDemoHref, LIVE_DEMO_ID } from "./i18n";
