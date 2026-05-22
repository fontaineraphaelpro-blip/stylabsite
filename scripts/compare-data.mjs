/** Comparison page data — EN strings; FR uses same table with French UI chrome */
export const SHOPIFY_COMPARE = [
  {
    slug: 'vs-genlook',
    competitor: 'Genlook',
    competitorDesc: 'Genlook is a Shopify virtual try-on app with widget, analytics, email lead capture (Klaviyo), Genlook Studio, and a revenue simulator.',
    summary: 'Both are Shopify virtual try-on apps. Stylab emphasizes built-in A/B testing, pay-only-on-success billing, and per-product flat-lay controls. Genlook adds lead capture, Studio content tools, and a revenue simulator.',
    rows: [
      { feature: 'Shopify App Store install', stylab: 'Yes — no-code', other: 'Yes' },
      { feature: 'Built-in A/B testing (try-on vs control)', stylab: 'Included on all plans', other: 'Not highlighted' },
      { feature: 'Pay only for successful try-ons', stylab: 'Yes', other: 'Usage-based plans' },
      { feature: 'Per-product flat-lay upload', stylab: 'Yes', other: 'Product image picker' },
      { feature: 'Free plan (monthly try-ons)', stylab: '50 successful try-ons', other: '10 try-ons (listed pricing)' },
      { feature: 'Growth plan price / quota', stylab: '$49 / 1,000 try-ons', other: '$29 / 250 try-ons' },
      { feature: 'Email lead capture + Klaviyo', stylab: 'Not core focus', other: 'Yes (paid plans)' },
      { feature: 'AI Studio for product content', stylab: 'No', other: 'Genlook Studio' },
      { feature: 'Revenue / usage simulator', stylab: 'Free tools calculator', other: 'Built-in simulator' },
      { feature: 'Interactive demo on vendor site', stylab: 'Yes — same widget', other: 'Yes — demo store' },
    ],
    chooseStylab: 'Choose Stylab if you want native A/B testing, pay only for successful generations, and per-product flat-lay control — especially for streetwear and jerseys — without promising guaranteed conversion lifts.',
    chooseOther: 'Choose Genlook if email capture during try-on, Klaviyo sync, Genlook Studio, or their revenue simulator are higher priorities. Test both on the same product photos.',
  },
  {
    slug: 'vs-antla',
    competitor: 'Antla',
    competitorDesc: 'Antla is a Shopify virtual try-on app focused on AI garment visualization.',
    summary: 'Both apps add virtual try-on to Shopify. Stylab emphasizes built-in A/B testing, pay-only-on-success billing, and per-product flat-lay controls.',
    rows: [
      { feature: 'Shopify App Store install', stylab: 'Yes — no-code', other: 'Yes' },
      { feature: 'Built-in A/B testing', stylab: 'Included on all plans', other: 'Varies' },
      { feature: 'Pay only for successful try-ons', stylab: 'Yes', other: 'Check plan terms' },
      { feature: 'Per-product flat-lay upload', stylab: 'Yes', other: 'Varies' },
      { feature: 'Free plan', stylab: '50 successful try-ons/mo', other: 'Check current offer' },
    ],
    chooseStylab: 'Choose Stylab for native A/B testing, pay-per-success billing, and flat-lay uploads — especially for hoodies and streetwear.',
    chooseOther: 'Evaluate Antla if their pricing or garment categories fit better. Test both on your product photos.',
  },
  {
    slug: 'vs-banuba',
    competitor: 'Banuba',
    competitorDesc: 'Banuba offers AR and AI try-on, often for SDK or enterprise deployments.',
    summary: 'Banuba suits custom AR/SDK projects. Stylab is a managed Shopify app — faster to launch with merchant analytics.',
    rows: [
      { feature: 'Shopify merchant app (no-code)', stylab: 'Purpose-built', other: 'SDK / enterprise focus' },
      { feature: 'Built-in A/B testing', stylab: 'Yes', other: 'Not typical' },
      { feature: 'Time to launch on PDP', stylab: 'Minutes', other: 'Custom integration' },
    ],
    chooseStylab: 'Choose Stylab for a ready-to-install Shopify widget without SDK development.',
    chooseOther: 'Banuba may fit custom mobile apps or in-store AR with engineering resources.',
  },
  {
    slug: 'vs-mirrar',
    competitor: 'MirrAR',
    competitorDesc: 'MirrAR provides virtual try-on for fashion and jewelry across web and retail.',
    summary: 'MirrAR targets broad fashion retail. Stylab focuses on Shopify apparel with a measurable product-page widget.',
    rows: [
      { feature: 'Native Shopify workflow', stylab: 'Yes', other: 'Platform-dependent' },
      { feature: 'A/B test try-on vs control', stylab: 'Built-in', other: 'Not standard' },
      { feature: 'Free entry plan', stylab: '50 try-ons/mo', other: 'Contact sales' },
    ],
    chooseStylab: 'Choose Stylab for Shopify-native install, per-product toggles, and cart analytics.',
    chooseOther: 'MirrAR may suit omnichannel or jewelry use cases beyond standard Shopify PDPs.',
  },
  {
    slug: 'vs-camweara',
    competitor: 'Camweara',
    competitorDesc: 'Camweara offers virtual try-on for fashion e-commerce.',
    summary: 'Both help shoppers visualize garments. Stylab adds built-in A/B testing and pay-only-on-success pricing.',
    rows: [
      { feature: 'Built-in A/B testing', stylab: 'Yes', other: 'Unlikely' },
      { feature: 'Successful-only billing', stylab: 'Yes', other: 'Check terms' },
      { feature: 'Free plan', stylab: '50/mo', other: 'Varies' },
    ],
    chooseStylab: 'Choose Stylab to measure cart impact with A/B buckets, not just launch a widget.',
    chooseOther: 'Consider Camweara if pricing or categories align better on your catalog.',
  },
  {
    slug: 'vs-looksy',
    competitor: 'Looksy',
    competitorDesc: 'Looksy is a virtual try-on option for online fashion stores.',
    summary: 'Stylab is built for Shopify merchants who need analytics, A/B testing, and per-product controls.',
    rows: [
      { feature: 'A/B test included', stylab: 'All plans', other: 'Unlikely' },
      { feature: 'Custom flat-lay for AI', stylab: 'Yes', other: 'Unknown' },
      { feature: 'Add-to-cart tracking', stylab: 'Yes', other: 'Varies' },
    ],
    chooseStylab: 'Choose Stylab for a measurable rollout: start free, A/B test hero SKUs.',
    chooseOther: 'Looksy may fit if try-on quality on your images is stronger — validate on mobile.',
  },
  {
    slug: 'vs-trypoint',
    competitor: 'TryPoint',
    competitorDesc: 'TryPoint provides virtual try-on for fashion retailers.',
    summary: 'Stylab packages try-on as a Shopify app with analytics, A/B testing, and pay-per-success credits.',
    rows: [
      { feature: 'Built-in A/B testing', stylab: 'Yes', other: 'Rare' },
      { feature: 'Pay only on success', stylab: 'Yes', other: 'Check billing' },
      { feature: 'Scale plan', stylab: '4,000 try-ons/mo', other: 'Contact vendor' },
    ],
    chooseStylab: 'Choose Stylab for a complete merchant workflow: toggles, limits, and cart analytics.',
    chooseOther: 'TryPoint may fit specific enterprise workflows — pilot on your catalog first.',
  },
];

export const API_COMPARE = [
  {
    slug: 'vs-fashn-ai',
    competitor: 'FASHN AI',
    competitorDesc: 'FASHN AI offers a virtual try-on API for developers.',
    summary: 'FASHN AI is API-first. Stylab is a managed Shopify app with widget, admin, and billing.',
    rows: [
      { feature: 'Ready-made Shopify widget', stylab: 'Yes', other: 'Build yourself' },
      { feature: 'A/B testing', stylab: 'Built-in', other: 'Custom' },
      { feature: 'Time to launch', stylab: 'Minutes', other: 'Weeks+' },
    ],
    chooseStylab: 'Choose Stylab if you are a Shopify merchant, not a dev team.',
    chooseOther: 'Choose FASHN AI for custom apps or non-Shopify stacks.',
  },
  {
    slug: 'vs-aiuta',
    competitor: 'Aiuta',
    competitorDesc: 'Aiuta provides virtual try-on APIs for fashion tech teams.',
    summary: 'Aiuta targets developers. Stylab delivers a complete Shopify product for no-code setup.',
    rows: [
      { feature: 'Shopify PDP widget', stylab: 'Included', other: 'Custom build' },
      { feature: 'Merchant dashboard', stylab: 'Yes', other: 'Custom' },
      { feature: 'Free plan', stylab: '50 try-ons/mo', other: 'API credits vary' },
    ],
    chooseStylab: 'Choose Stylab to go live on Shopify quickly with predictable quotas.',
    chooseOther: 'Choose Aiuta for proprietary apps or kiosks via API.',
  },
  {
    slug: 'vs-pixelcut',
    competitor: 'Pixelcut',
    competitorDesc: 'Pixelcut offers AI photo editing including try-on features.',
    summary: 'Pixelcut is a general AI photo suite. Stylab is specialized for Shopify storefront try-on.',
    rows: [
      { feature: 'Shopify App Store app', stylab: 'Yes', other: 'Not Shopify-native' },
      { feature: 'Live on every PDP', stylab: 'Automatic', other: 'Manual workflow' },
      { feature: 'Add-to-cart measurement', stylab: 'Yes', other: 'No' },
    ],
    chooseStylab: 'Choose Stylab when shoppers need try-on on product pages.',
    chooseOther: 'Pixelcut fits creative teams doing campaign assets.',
  },
  {
    slug: 'vs-replicate',
    competitor: 'Replicate',
    competitorDesc: 'Replicate hosts ML models via API including try-on models.',
    summary: 'Stylab is managed infrastructure. Replicate is DIY for engineering teams.',
    rows: [
      { feature: 'No engineering required', stylab: 'Merchant app', other: 'Dev required' },
      { feature: 'Pay per success clarity', stylab: 'Yes', other: 'Pay per API call' },
      { feature: 'Merchant analytics', stylab: 'Dashboard', other: 'Custom' },
    ],
    chooseStylab: 'Choose Stylab for try-on as a product feature, not a side project.',
    chooseOther: 'Choose Replicate if you have developers building custom pipelines.',
  },
  {
    slug: 'vs-fal-ai',
    competitor: 'Fal AI',
    competitorDesc: 'Fal AI provides inference APIs for generative media.',
    summary: 'Fal AI is for builders. Stylab is the finished Shopify merchant experience.',
    rows: [
      { feature: 'One-click Shopify install', stylab: 'Yes', other: 'Custom integration' },
      { feature: 'A/B test impact', stylab: 'Yes', other: 'Custom' },
      { feature: 'Predictable plans', stylab: 'Yes', other: 'Dev + API costs' },
    ],
    chooseStylab: 'Choose Stylab to go live this week on Shopify.',
    chooseOther: 'Choose Fal AI for multi-product generative API needs with engineers.',
  },
];

export const SOLUTIONS = [
  {
    slug: 'fashion-brands',
    title: { en: 'Virtual Try-On for Fashion Brands on Shopify', fr: 'Essayage virtuel pour marques mode sur Shopify' },
    lead: {
      en: 'Help shoppers see your collection on themselves before checkout. Stylab adds a virtual fitting room to Shopify product pages.',
      fr: 'Aidez vos clients à se voir dans votre collection avant l\'achat. Stylab ajoute une cabine d\'essayage virtuelle à vos pages produit Shopify.',
    },
    bullets: {
      en: ['Enable try-on on hero SKUs and new drops', 'Upload flat-lay photos for cleaner AI results', 'Measure add-to-cart after try-on', 'A/B test try-on vs control'],
      fr: ['Activez l\'essayage sur vos SKU phares et nouveautés', 'Uploadez des flat-lays pour un meilleur rendu IA', 'Mesurez les ajouts au panier après essayage', 'A/B test essayage vs contrôle'],
    },
  },
  {
    slug: 'streetwear',
    title: { en: 'AI Try-On for Streetwear & Urban Apparel', fr: 'Essayage IA pour streetwear' },
    lead: {
      en: 'Streetwear shoppers buy on vibe. Stylab lets them preview hoodies, jerseys, and tees on themselves.',
      fr: 'Le streetwear se vend sur l\'identité visuelle. Stylab permet de prévisualiser hoodies, jerseys et tees.',
    },
    bullets: {
      en: ['Hoodies, jerseys, graphic tees', 'Mobile-first widget', 'Enable try-on per SKU', 'Free: 50 successful try-ons/mo'],
      fr: ['Hoodies, jerseys, tees graphiques', 'Widget mobile-first', 'Activation par SKU', 'Gratuit : 50 essayages réussis/mo'],
    },
  },
  {
    slug: 'enterprise',
    title: { en: 'Enterprise Virtual Try-On for High-Volume Stores', fr: 'Essayage virtuel enterprise' },
    lead: {
      en: 'Scale try-on with dedicated onboarding, priority processing, and the Scale plan (4,000 try-ons/mo).',
      fr: 'Scalez l\'essayage avec onboarding dédié, traitement prioritaire et le plan Scale (4 000 essayages/mo).',
    },
    bullets: {
      en: ['Scale plan: 4,000 try-ons/mo', 'Dedicated onboarding', 'Per-product controls at catalog scale', 'Store-wide analytics and A/B'],
      fr: ['Plan Scale : 4 000 essayages/mo', 'Onboarding dédié', 'Contrôles par produit à grande échelle', 'Analytics et A/B store-wide'],
    },
  },
  {
    slug: 'prestashop',
    title: { en: 'PrestaShop & Other Platforms', fr: 'PrestaShop et autres plateformes' },
    lead: {
      en: 'Stylab is built for Shopify today. For PrestaShop or other platforms, contact Style Lab.',
      fr: 'Stylab est conçu pour Shopify aujourd\'hui. Pour PrestaShop ou autres plateformes, contactez Style Lab.',
    },
    bullets: {
      en: ['Shopify App Store — live in minutes', 'Full admin inside Shopify', 'Other platforms: contact us'],
      fr: ['App Store Shopify — live en minutes', 'Admin complet dans Shopify', 'Autres plateformes : contactez-nous'],
    },
    note: { en: 'No PrestaShop plugin shipped yet.', fr: 'Pas de plugin PrestaShop disponible pour l\'instant.' },
  },
  {
    slug: 'api',
    title: { en: 'API & Custom Integrations', fr: 'API et intégrations sur mesure' },
    lead: {
      en: 'Stylab is a managed Shopify app. For custom API or headless setups, contact Style Lab.',
      fr: 'Stylab est une app Shopify managée. Pour API custom ou headless, contactez Style Lab.',
    },
    bullets: {
      en: ['Standard: Shopify widget + admin', 'No public self-serve API today', 'Enterprise: contact Style Lab'],
      fr: ['Standard : widget + admin Shopify', 'Pas d\'API self-serve publique', 'Enterprise : contactez Style Lab'],
    },
  },
];
