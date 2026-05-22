/** Shared page content — EN + FR */
export const APP_URL = 'https://apps.shopify.com/try-on-stylelab';

export const UI = {
  en: {
    lang: 'en',
    liveDemo: 'Live demo',
    solutions: 'Solutions',
    compare: 'Compare',
    resources: 'Resources',
    pricing: 'Pricing',
    viewDemo: 'View live demo',
    install: 'Install on Shopify',
    installStylab: 'Install Stylab on Shopify',
    footerTagline: 'AI virtual try-on for Shopify apparel brands. Help shoppers visualize your products before they buy.',
    footerSolutions: 'Solutions',
    footerShopifyAlt: 'Shopify alternatives',
    footerApiAlt: 'API alternatives',
    footerResources: 'Resources',
    fashionBrands: 'Fashion Brands',
    streetwear: 'Streetwear',
    enterprise: 'Enterprise',
    prestashop: 'PrestaShop',
    api: 'API',
    freeTools: 'Free Tools',
    blog: 'Blog',
    documentation: 'Documentation',
    changelog: 'Changelog',
    contact: 'Contact',
    privacy: 'Privacy',
    ctaTitle: 'Add AI try-on to your Shopify product pages',
    ctaBody: 'Start with a few products, measure shopper engagement, and see whether try-on helps customers buy with more confidence.',
    comparison: 'Comparison',
    sideBySide: 'Side by side',
    featureComparison: 'Feature comparison',
    whenStylab: 'When Stylab is a better fit',
    whenOther: 'When {name} may fit',
    disclaimer: 'Comparison based on publicly available product information as of May 2026. Features, pricing, and policies may change. Verify details on each vendor\'s website before making a decision.',
    readComparison: 'Read comparison →',
    learnMore: 'Learn more →',
    otherLang: 'Français',
    otherLangHref: '/fr/',
  },
  fr: {
    lang: 'fr',
    liveDemo: 'Démo live',
    solutions: 'Solutions',
    compare: 'Comparer',
    resources: 'Ressources',
    pricing: 'Tarifs',
    viewDemo: 'Voir la démo',
    install: 'Installer sur Shopify',
    installStylab: 'Installer Stylab sur Shopify',
    footerTagline: 'Essayage virtuel IA pour marques apparel Shopify. Aidez vos clients à visualiser vos produits avant d\'acheter.',
    footerSolutions: 'Solutions',
    footerShopifyAlt: 'Alternatives Shopify',
    footerApiAlt: 'Alternatives API',
    footerResources: 'Ressources',
    fashionBrands: 'Marques mode',
    streetwear: 'Streetwear',
    enterprise: 'Enterprise',
    prestashop: 'PrestaShop',
    api: 'API',
    freeTools: 'Outils gratuits',
    blog: 'Blog',
    documentation: 'Documentation',
    changelog: 'Changelog',
    contact: 'Contact',
    privacy: 'Confidentialité',
    ctaTitle: 'Ajoutez l\'essayage IA à vos pages produit Shopify',
    ctaBody: 'Commencez sur quelques produits, mesurez l\'engagement, et voyez si l\'essayage aide vos clients à acheter avec plus de confiance.',
    comparison: 'Comparaison',
    sideBySide: 'Côte à côte',
    featureComparison: 'Comparaison des fonctionnalités',
    whenStylab: 'Quand choisir Stylab',
    whenOther: 'Quand {name} peut convenir',
    disclaimer: 'Comparaison basée sur les informations publiques disponibles en mai 2026. Fonctionnalités, tarifs et politiques peuvent changer. Vérifiez sur le site de chaque éditeur avant de décider.',
    readComparison: 'Lire la comparaison →',
    learnMore: 'En savoir plus →',
    otherLang: 'English',
    otherLangHref: '/',
  },
};

export const GENLOOK_COMPARE = {
  slug: 'vs-genlook',
  competitor: 'Genlook',
  competitorDesc: {
    en: 'Genlook is a Shopify virtual try-on app with widget, analytics, lead capture (Klaviyo), and a Genlook Studio for AI product content.',
    fr: 'Genlook est une app Shopify d\'essayage virtuel avec widget, analytics, capture d\'emails (Klaviyo) et Genlook Studio pour du contenu produit IA.',
  },
  summary: {
    en: 'Both are Shopify virtual try-on apps. Stylab emphasizes built-in A/B testing, pay-only-on-success billing, and per-product flat-lay controls. Genlook adds lead capture, Studio content tools, and a revenue simulator.',
    fr: 'Les deux sont des apps Shopify d\'essayage virtuel. Stylab met l\'accent sur l\'A/B testing intégré, la facturation au succès et les flat-lays par produit. Genlook ajoute la capture de leads, Genlook Studio et un simulateur de revenus.',
  },
  rows: [
    { feature: { en: 'Shopify App Store install', fr: 'Installation App Store Shopify' }, stylab: { en: 'Yes — no-code', fr: 'Oui — sans code' }, other: { en: 'Yes', fr: 'Oui' } },
    { feature: { en: 'Built-in A/B testing (try-on vs control)', fr: 'A/B testing intégré (essayage vs contrôle)' }, stylab: { en: 'Included on all plans', fr: 'Inclus sur tous les plans' }, other: { en: 'Not highlighted', fr: 'Non mis en avant' } },
    { feature: { en: 'Pay only for successful try-ons', fr: 'Payer uniquement les essayages réussis' }, stylab: { en: 'Yes', fr: 'Oui' }, other: { en: 'Usage-based plans', fr: 'Plans à l\'usage' } },
    { feature: { en: 'Per-product flat-lay upload', fr: 'Upload flat-lay par produit' }, stylab: { en: 'Yes', fr: 'Oui' }, other: { en: 'Product image picker', fr: 'Choix d\'image produit' } },
    { feature: { en: 'Free plan (monthly try-ons)', fr: 'Plan gratuit (essayages/mois)' }, stylab: { en: '50 successful try-ons', fr: '50 essayages réussis' }, other: { en: '10 try-ons (listed pricing)', fr: '10 essayages (tarifs affichés)' } },
    { feature: { en: 'Growth plan price / quota', fr: 'Plan croissance prix / quota' }, stylab: { en: '$49 / 1,000 try-ons', fr: '49 $ / 1 000 essayages' }, other: { en: '$29 / 250 try-ons', fr: '29 $ / 250 essayages' } },
    { feature: { en: 'Email lead capture + Klaviyo', fr: 'Capture email + Klaviyo' }, stylab: { en: 'Not core focus', fr: 'Pas le focus principal' }, other: { en: 'Yes (paid plans)', fr: 'Oui (plans payants)' } },
    { feature: { en: 'AI Studio for product content', fr: 'Studio IA contenu produit' }, stylab: { en: 'No', fr: 'Non' }, other: { en: 'Genlook Studio', fr: 'Genlook Studio' } },
    { feature: { en: 'Revenue / usage simulator', fr: 'Simulateur revenus / usage' }, stylab: { en: 'Free tools calculator', fr: 'Calculateur outils gratuits' }, other: { en: 'Built-in simulator', fr: 'Simulateur intégré' } },
    { feature: { en: 'Interactive demo on vendor site', fr: 'Démo interactive sur le site éditeur' }, stylab: { en: 'Yes — same widget', fr: 'Oui — même widget' }, other: { en: 'Yes — demo store', fr: 'Oui — boutique démo' } },
  ],
  chooseStylab: {
    en: 'Choose Stylab if you want to measure try-on impact with native A/B testing, pay only for successful generations, and control flat-lay quality per SKU — especially for streetwear, jerseys, and hoodies. Stylab avoids promising guaranteed conversion or return reductions.',
    fr: 'Choisissez Stylab si vous voulez mesurer l\'impact avec de l\'A/B testing natif, payer uniquement les générations réussies et contrôler la qualité flat-lay par SKU — surtout pour streetwear, jerseys et hoodies. Stylab évite les promesses de conversion ou retours garantis.',
  },
  chooseOther: {
    en: 'Choose Genlook if email capture during try-on, Klaviyo sync, Genlook Studio content generation, or their revenue simulator are higher priorities than built-in A/B buckets. Test both on the same product photos before deciding.',
    fr: 'Choisissez Genlook si la capture d\'emails pendant l\'essayage, la sync Klaviyo, Genlook Studio ou leur simulateur de revenus sont plus prioritaires que l\'A/B testing intégré. Testez les deux sur les mêmes photos produit avant de décider.',
  },
};

export const BLOG_POSTS = [
  {
    slug: 'reduce-purchase-hesitation-shopify',
    tag: { en: 'Growth', fr: 'Croissance' },
    title: {
      en: 'How virtual try-on helps reduce purchase hesitation on Shopify',
      fr: 'Comment l\'essayage virtuel réduit l\'hésitation d\'achat sur Shopify',
    },
    excerpt: {
      en: 'Product photos show the garment — not the shopper. Learn how try-on helps customers feel more confident before add-to-cart.',
      fr: 'Les photos produit montrent le vêtement — pas le client. Découvrez comment l\'essayage aide à acheter avec plus de confiance.',
    },
    date: 'May 15, 2026',
    content: {
      en: `<p>Online apparel shoppers face a simple problem: they can see the product, but they cannot see themselves in it. That gap creates hesitation — especially for streetwear, graphic tees, and statement pieces where style and identity matter as much as size.</p>
<h2>What hesitation looks like on a product page</h2>
<p>Shoppers scroll photos, check the size chart, open reviews, then leave the tab open without adding to cart. They are not always rejecting the product — they often cannot picture how it will look on them.</p>
<p>Virtual try-on does not promise a guaranteed conversion lift. It gives shoppers a clearer mental model: upload a photo, preview the garment on themselves, then decide with more confidence.</p>
<h2>How Stylab fits into the PDP</h2>
<p>Stylab adds a <strong>Try it on</strong> button to your Shopify product pages. Shoppers upload a photo from mobile or desktop, receive an AI preview in about 30 seconds, and can continue to checkout from the same page.</p>
<ul>
<li>Enable try-on only on products where visualization matters (hoodies, jerseys, dresses)</li>
<li>Upload optional flat-lay garment photos for cleaner AI output</li>
<li>Track try-on sessions and add-to-cart actions from your dashboard</li>
</ul>
<h2>Measure impact instead of guessing</h2>
<p>Built-in A/B testing lets you compare product page behavior with and without try-on. Run a 30-day test on a few hero SKUs before rolling out store-wide.</p>
<p><a href="../index.html#try-it">Try the live demo →</a></p>`,
      fr: `<p>Les acheteurs de vêtements en ligne ont un problème simple : ils voient le produit, mais pas sur eux. Cette distance crée de l'hésitation — surtout en streetwear, tees graphiques et pièces statement où le style compte autant que la taille.</p>
<h2>À quoi ressemble l'hésitation sur une page produit</h2>
<p>Le client scroll les photos, consulte le guide des tailles, lit les avis, puis quitte sans ajouter au panier. Il ne rejette pas toujours le produit — il n'arrive souvent pas à se projeter.</p>
<p>L'essayage virtuel ne promet pas une hausse de conversion garantie. Il offre un modèle mental plus clair : uploader une photo, prévisualiser le vêtement, puis décider avec plus de confiance.</p>
<h2>Comment Stylab s'intègre à la PDP</h2>
<p>Stylab ajoute un bouton <strong>Try it on</strong> sur vos pages produit Shopify. Le client uploade une photo, reçoit un aperçu IA en ~30 secondes, et peut continuer vers le checkout.</p>
<ul>
<li>Activez l'essayage uniquement où la visualisation compte (hoodies, jerseys, robes)</li>
<li>Uploadez des flat-lays optionnels pour un meilleur rendu IA</li>
<li>Suivez sessions d'essayage et ajouts au panier depuis le dashboard</li>
</ul>
<h2>Mesurez l'impact au lieu de deviner</h2>
<p>L'A/B testing intégré compare le comportement avec et sans essayage. Lancez un test de 30 jours sur quelques SKU phares avant un déploiement global.</p>
<p><a href="../../index.html#try-it">Essayer la démo live →</a></p>`,
    },
  },
  {
    slug: 'ab-test-virtual-try-on',
    tag: { en: 'Analytics', fr: 'Analytics' },
    title: {
      en: 'A/B testing virtual try-on on Shopify product pages',
      fr: 'A/B testing de l\'essayage virtuel sur Shopify',
    },
    excerpt: {
      en: 'Compare product page behavior with and without try-on. Why built-in A/B buckets beat guessing conversion impact.',
      fr: 'Comparez le comportement avec et sans essayage. Pourquoi l\'A/B intégré bat les suppositions.',
    },
    date: 'May 10, 2026',
    content: {
      en: `<p>Many merchants launch try-on and ask: did it work? Without a control group, you cannot know whether cart lifts came from try-on or from seasonality, ads, or pricing changes.</p>
<h2>What Stylab A/B testing does</h2>
<p>From the Widget admin page, enable A/B testing and choose what share of visitors see try-on (10% to 90%). Each visitor is bucketed consistently. The control group sees the normal product page; the test group sees the try-on button.</p>
<p>After 30 days, compare for each bucket:</p>
<ul>
<li>Page views</li>
<li>Try-on sessions (test group)</li>
<li>Add-to-cart count and rate</li>
</ul>
<h2>How to run a clean test</h2>
<ol>
<li>Pick 2–5 products with steady traffic (hoodies, jerseys, bestsellers)</li>
<li>Start at 50/50 split for 30 days</li>
<li>Do not change pricing or hero images mid-test</li>
<li>Review results before enabling try-on store-wide</li>
</ol>
<h2>What A/B testing does not promise</h2>
<p>A/B results vary by traffic, product type, photos, and store experience. Stylab helps you measure — it does not guarantee a specific conversion lift.</p>`,
      fr: `<p>Beaucoup de marchands lancent l'essayage et demandent : est-ce que ça marche ? Sans groupe contrôle, impossible de savoir si la hausse panier vient de l'essayage ou de la saisonnalité, des ads ou des prix.</p>
<h2>Ce que fait l'A/B testing Stylab</h2>
<p>Depuis l'admin Widget, activez l'A/B et choisissez la part de visiteurs qui voit l'essayage (10 % à 90 %). Chaque visiteur est bucketé de façon cohérente. Le contrôle voit la page normale ; le test voit le bouton d'essayage.</p>
<p>Après 30 jours, comparez par bucket :</p>
<ul>
<li>Vues page</li>
<li>Sessions d'essayage (groupe test)</li>
<li>Ajouts au panier et taux</li>
</ul>
<h2>Comment mener un test propre</h2>
<ol>
<li>Choisissez 2–5 produits à trafic stable</li>
<li>Commencez en 50/50 pendant 30 jours</li>
<li>Ne changez pas prix ou visuels pendant le test</li>
<li>Analysez avant un déploiement global</li>
</ol>
<h2>Ce que l'A/B ne promet pas</h2>
<p>Les résultats varient selon trafic, type de produit, photos et expérience boutique. Stylab aide à mesurer — sans garantir un lift de conversion précis.</p>`,
    },
  },
  {
    slug: 'flat-lay-photos-better-tryon',
    tag: { en: 'Product', fr: 'Produit' },
    title: {
      en: 'Why flat-lay garment photos improve AI try-on quality',
      fr: 'Pourquoi les photos flat-lay améliorent l\'essayage IA',
    },
    excerpt: {
      en: 'Clean garment uploads help the model preserve color, pattern, and fit. A practical guide for apparel merchants.',
      fr: 'Des uploads propres aident le modèle à préserver couleur, motif et tombé. Guide pratique pour marchands apparel.',
    },
    date: 'May 5, 2026',
    content: {
      en: `<p>AI try-on works best when the model receives a clear reference of the garment. On-model lifestyle shots can work, but flat-lay or ghost mannequin images often produce more consistent color and pattern transfer.</p>
<h2>When to upload a custom flat-lay</h2>
<ul>
<li>Complex prints, stripes, or logos (jerseys, streetwear tees)</li>
<li>Products where the default image includes a model or busy background</li>
<li>Hero SKUs where try-on quality matters most</li>
</ul>
<h2>How to shoot a useful flat-lay</h2>
<ul>
<li>Plain background, even lighting</li>
<li>Garment fully visible, not cropped</li>
<li>Accurate color — avoid heavy filters</li>
<li>Front view for tops; full silhouette for dresses</li>
</ul>
<h2>Where to upload in Stylab</h2>
<p>Open <strong>Products</strong> in your Shopify admin app, select a product, and upload a custom garment photo to Shopify Files. The image is used for AI generation only — it does not replace your storefront gallery.</p>
<p>Start with your top 5 try-on SKUs, compare output quality against default images, then expand.</p>`,
      fr: `<p>L'essayage IA fonctionne mieux quand le modèle reçoit une référence claire du vêtement. Les photos lifestyle peuvent suffire, mais les flat-lays produisent souvent un transfert couleur/motif plus cohérent.</p>
<h2>Quand uploader un flat-lay custom</h2>
<ul>
<li>Prints complexes, rayures ou logos (jerseys, tees streetwear)</li>
<li>Produits dont l'image par défaut inclut un mannequin ou fond chargé</li>
<li>SKU phares où la qualité d'essayage compte le plus</li>
</ul>
<h2>Comment shooter un flat-lay utile</h2>
<ul>
<li>Fond uni, lumière uniforme</li>
<li>Vêtement entièrement visible</li>
<li>Couleur fidèle — évitez les filtres</li>
<li>Vue face pour les hauts ; silhouette complète pour les robes</li>
</ul>
<h2>Où uploader dans Stylab</h2>
<p>Ouvrez <strong>Products</strong> dans l'app admin Shopify, sélectionnez un produit et uploadez une photo garment vers Shopify Files. L'image sert à la génération IA — elle ne remplace pas votre galerie storefront.</p>
<p>Commencez par vos 5 SKU les plus essayés, comparez la qualité, puis élargissez.</p>`,
    },
  },
];
