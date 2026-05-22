/** Shared page content — EN + FR */
export const APP_URL = 'https://apps.shopify.com/try-on-stylelab';

export const UI = {
  en: {
    lang: 'en',
    liveDemo: 'Live demo',
    features: 'Features',
    explore: 'Explore',
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
    compareScrollHint: 'Swipe horizontally to compare →',
    comparison: 'Comparison',
    sideBySide: 'Side by side',
    featureComparison: 'Feature comparison',
    whenStylab: 'When Stylab is a better fit',
    whenOther: 'When {name} may fit',
    disclaimer: 'Comparison based on publicly available product information as of May 2026. Features, pricing, and policies may change. Verify details on each vendor\'s website before making a decision.',
    readComparison: 'Read comparison →',
    learnMore: 'Learn more →',
    otherLang: 'FR',
    otherLangHref: '/fr/',
  },
  fr: {
    lang: 'fr',
    liveDemo: 'Démo live',
    features: 'Fonctionnalités',
    explore: 'Explorer',
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
    compareScrollHint: 'Glissez horizontalement pour comparer →',
    comparison: 'Comparaison',
    sideBySide: 'Côte à côte',
    featureComparison: 'Comparaison des fonctionnalités',
    whenStylab: 'Quand choisir Stylab',
    whenOther: 'Quand {name} peut convenir',
    disclaimer: 'Comparaison basée sur les informations publiques disponibles en mai 2026. Fonctionnalités, tarifs et politiques peuvent changer. Vérifiez sur le site de chaque éditeur avant de décider.',
    readComparison: 'Lire la comparaison →',
    learnMore: 'En savoir plus →',
    otherLang: 'EN',
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
      en: 'Spot hesitation on your PDP, pick the right SKUs, and launch try-on on five products without overpromising — a practical rollout guide for Shopify apparel merchants.',
      fr: 'Repérez l\'hésitation sur votre PDP, choisissez les bons SKU et lancez l\'essayage sur cinq produits — guide pratique pour marchands apparel Shopify.',
    },
    date: 'May 15, 2026',
    dateISO: '2026-05-15',
    summary: {
      en: 'Start virtual try-on on five high-traffic apparel SKUs, watch dashboard signals for two weeks, then expand or pause based on adoption — not store-wide guesses.',
      fr: 'Commencez l\'essayage sur cinq SKU apparel à trafic élevé, suivez le dashboard deux semaines, puis élargissez ou pausez selon l\'adoption — pas au feeling.',
    },
    content: {
      en: `<p>Online apparel shoppers can see the garment — but not themselves in it. That gap shows up as scroll depth without add-to-cart, size-chart clicks without checkout, and abandoned tabs on hero SKUs. Virtual try-on does not guarantee a conversion lift. It gives shoppers a clearer way to visualize the product before they buy.</p>
<p>This guide is for Shopify merchants who sell visual apparel (streetwear, jerseys, hoodies, dresses) and want a practical way to test try-on without rolling it out store-wide on day one.</p>

<h2>Four signals your PDP has a visualization problem</h2>
<p>Before installing anything, look at how shoppers behave on products with steady traffic:</p>
<ul>
<li><strong>High views, low add-to-cart</strong> — traffic arrives but cart rate stays flat on graphic or statement pieces</li>
<li><strong>Size chart spikes</strong> — shoppers want the product but cannot judge fit or style on themselves</li>
<li><strong>Review photos do the selling</strong> — UGC converts better than your studio shots because shoppers see real bodies</li>
<li><strong>Support asks “how does this look?”</strong> — DMs and emails about styling, not just sizing</li>
</ul>
<p>If these patterns appear on a handful of SKUs — not your whole catalog — try-on is worth testing on those products first.</p>

<h2>Where try-on helps most (and where it does not)</h2>
<h3>Strong candidates</h3>
<ul>
<li>Graphic tees, hoodies, and jerseys where print placement and color matter</li>
<li>Statement outerwear and dresses where silhouette drives the purchase</li>
<li>Capsule drops and new collections with limited social proof</li>
</ul>
<h3>Weaker candidates (skip for now)</h3>
<ul>
<li>Accessories, socks, or basics where visualization adds little</li>
<li>Products with almost no PDP traffic — you will not learn anything useful yet</li>
<li>SKUs with poor reference photos until you fix the garment image (see our <a href="flat-lay-photos-better-tryon.html">flat-lay guide</a>)</li>
</ul>

<h2>A 5-SKU rollout you can run in two weeks</h2>
<p>Start narrow. Measure engagement before you scale.</p>
<ol>
<li><strong>Day 1–2 — Pick five SKUs</strong> with consistent traffic and clear visualization friction. Avoid sale periods if possible.</li>
<li><strong>Day 2–3 — Enable try-on</strong> in Stylab admin on those products only. Upload optional flat-lay photos on your top two performers.</li>
<li><strong>Day 3–7 — Watch sessions</strong> in the dashboard: try-on starts, successful generations, add-to-cart after try-on. No need to change pricing or ads.</li>
<li><strong>Week 2 — Turn on A/B testing</strong> at 50/50 on the same SKUs. See our <a href="ab-test-virtual-try-on.html">A/B testing guide</a> for a clean protocol.</li>
<li><strong>End of week 2 — Decide</strong> expand to 10–20 SKUs, refine photos, or pause on products with zero try-on adoption.</li>
</ol>
<blockquote><strong>Merchant takeaway:</strong> Try-on is a product-page tool, not a store-wide magic switch. Five focused SKUs beat enabling everything at once.</blockquote>

<h2>What shoppers experience on the PDP</h2>
<p>Stylab adds a <strong>Try it on</strong> button to enabled product pages. The shopper uploads a photo, receives a preview in seconds, and stays on the same page to add to cart. Preview time varies by load and product — plan for a short wait, not instant AR mirror.</p>
<p>From your side:</p>
<ul>
<li>Enable try-on per product — not all-or-nothing</li>
<li>Customize button text and colors to match your brand</li>
<li>Track sessions and cart actions in Shopify admin without extra analytics setup</li>
</ul>

<h2>Address privacy before shoppers ask</h2>
<p>Photo upload creates trust questions. Be explicit on the PDP and in your FAQ:</p>
<ul>
<li>Photos are processed to generate the preview</li>
<li>The widget communicates that shopper photos are not stored for marketing</li>
<li>Link to your <a href="../../confidentialite.html">privacy policy</a> from footer or product FAQ</li>
</ul>
<p>Merchants who explain this upfront see fewer support tickets and less cart abandonment at the upload step.</p>

<h2>Mistakes to avoid in the first month</h2>
<ul>
<li><strong>Enabling every product</strong> — dilutes learnings and burns quota on low-traffic SKUs</li>
<li><strong>Changing hero images mid-test</strong> — confuses before/after comparisons</li>
<li><strong>Judging success on day three</strong> — wait for meaningful session volume or run A/B</li>
<li><strong>Ignoring bad reference photos</strong> — fix flat-lays before blaming the widget</li>
<li><strong>Expecting guaranteed ROI</strong> — measure engagement and cart intent; outcomes vary by store</li>
</ul>

<h2>Next steps</h2>
<p>Install on five products, run the two-week playbook above, then measure with built-in A/B testing. Estimate monthly usage with our <a href="../free-tools.html">free ROI calculator</a> before picking a plan.</p>
<p><a href="{{DEMO_LINK}}">Try the live demo on this site →</a></p>`,
      fr: `<p>En ligne, le client voit le vêtement — pas sur lui. Résultat : scroll sans ajout au panier, clics sur le guide des tailles sans checkout, onglets abandonnés sur les SKU phares. L'essayage virtuel ne garantit pas une hausse de conversion. Il offre une façon plus claire de se projeter avant d'acheter.</p>
<p>Ce guide s'adresse aux marchands Shopify apparel (streetwear, jerseys, hoodies, robes) qui veulent tester l'essayage sans déploiement global dès le jour 1.</p>

<h2>Quatre signes d'un problème de visualisation sur la PDP</h2>
<ul>
<li><strong>Vues élevées, faible ajout panier</strong> — trafic présent, conversion faible sur pièces graphiques</li>
<li><strong>Pic de consultations tailles</strong> — le client hésite sur le style ou le tombé, pas seulement la taille</li>
<li><strong>Les avis avec photos convertissent mieux</strong> — l'UGC vend mieux que vos shoots studio</li>
<li><strong>Support : « comment ça rend ? »</strong> — questions de style, pas uniquement de sizing</li>
</ul>

<h2>Où l'essayage aide le plus (et où moins)</h2>
<h3>Bons candidats</h3>
<ul>
<li>Tees graphiques, hoodies, jerseys — placement du print et couleur</li>
<li>Outerwear statement, robes — silhouette décisive</li>
<li>Drops capsule avec peu de preuve sociale</li>
</ul>
<h3>À éviter pour l'instant</h3>
<ul>
<li>Accessoires, basiques où la visualisation apporte peu</li>
<li>Produits sans trafic PDP — pas de signal exploitable</li>
<li>SKU avec photos de référence médiocres — voir notre <a href="flat-lay-photos-better-tryon.html">guide flat-lay</a></li>
</ul>

<h2>Déploiement 5 SKU en deux semaines</h2>
<ol>
<li><strong>J1–2</strong> — Choisissez 5 SKU à trafic stable. Évitez les soldes si possible.</li>
<li><strong>J2–3</strong> — Activez l'essayage dans l'admin Stylab. Flat-lays optionnels sur vos 2 meilleurs SKU.</li>
<li><strong>J3–7</strong> — Suivez sessions, générations réussies, ajouts panier post-essayage.</li>
<li><strong>Semaine 2</strong> — A/B testing 50/50. Voir le <a href="ab-test-virtual-try-on.html">guide A/B</a>.</li>
<li><strong>Fin S2</strong> — Élargir à 10–20 SKU, améliorer les photos, ou pause si adoption nulle.</li>
</ol>
<blockquote><strong>À retenir :</strong> L'essayage est un outil PDP, pas un interrupteur magique boutique entière. Cinq SKU ciblés valent mieux qu'un déploiement global.</blockquote>

<h2>Expérience client sur la PDP</h2>
<p>Bouton <strong>Try it on</strong>, upload photo, aperçu en quelques secondes, ajout panier sur la même page. Le délai varie selon charge et produit.</p>
<ul>
<li>Activation par produit</li>
<li>Personnalisation du widget (texte, couleurs)</li>
<li>Analytics dans l'admin Shopify sans setup GA supplémentaire</li>
</ul>

<h2>Anticiper la question privacy</h2>
<ul>
<li>Photos traitées pour générer l'aperçu</li>
<li>Le widget indique que la photo client n'est pas stockée à des fins marketing</li>
<li>Lien vers votre <a href="../../confidentialite.html">politique de confidentialité</a></li>
</ul>

<h2>Erreurs du premier mois</h2>
<ul>
<li>Activer tous les produits d'un coup</li>
<li>Changer les visuels hero en plein test</li>
<li>Juger le ROI au bout de 3 jours</li>
<li>Ignorer des photos garment médiocres</li>
<li>Attendre un ROI garanti au lieu de mesurer l'engagement</li>
</ul>

<h2>Prochaines étapes</h2>
<p>Installez sur cinq produits, suivez le playbook, mesurez avec l'A/B intégré. Estimez l'usage avec notre <a href="../free-tools.html">calculateur ROI gratuit</a>.</p>
<p><a href="{{DEMO_LINK}}">Essayer la démo live →</a></p>`,
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
      en: 'A step-by-step protocol to compare try-on vs control on Shopify — pre-test checklist, metrics that matter, and how to decide after 30 days.',
      fr: 'Protocole pas à pas pour comparer essayage vs contrôle sur Shopify — checklist, métriques utiles et décision après 30 jours.',
    },
    date: 'May 10, 2026',
    dateISO: '2026-05-10',
    summary: {
      en: 'Run a 30-day A/B test with 50/50 traffic on 2–5 SKUs, track add-to-cart by bucket (not raw try-on volume), and decide expand vs iterate vs pause with a control group.',
      fr: 'Lancez un A/B 30 jours à 50/50 sur 2–5 SKU, suivez l\'ajout panier par bucket (pas le volume brut), puis décidez d\'élargir, itérer ou pause avec un groupe contrôle.',
    },
    content: {
      en: `<p>You installed virtual try-on. Sessions are climbing. But did try-on actually change shopping behavior — or did a sale, an ad campaign, or seasonality move the numbers? Without a control group, you cannot know.</p>
<p>This guide walks through how to run a clean A/B test on Shopify product pages using Stylab's built-in traffic buckets. No external testing tool required.</p>

<h2>Why guessing fails</h2>
<p>Common traps merchants fall into:</p>
<ul>
<li>Comparing this month to last month while running a promo</li>
<li>Enabling try-on store-wide and attributing any cart lift to the widget</li>
<li>Looking only at try-on session count (engagement ≠ purchase intent)</li>
<li>Stopping after a week when traffic is too thin to learn anything</li>
</ul>
<p>A/B testing splits visitors on the <em>same product pages</em> into two groups: one sees try-on, one does not. Same traffic source, same pricing, same photos — only the try-on button differs.</p>

<h2>How Stylab A/B testing works</h2>
<p>From <strong>Widget</strong> in your Shopify admin app:</p>
<ol>
<li>Toggle A/B testing on</li>
<li>Set the traffic slider (10%–90% of visitors see try-on)</li>
<li>Each visitor is assigned to a bucket consistently for the test period</li>
</ol>
<p>The control group sees the normal product page. The test group sees the <strong>Try it on</strong> button. After enough time, compare buckets in your dashboard:</p>
<ul>
<li>Page views per bucket</li>
<li>Try-on sessions (test group only)</li>
<li>Add-to-cart count and rate per bucket</li>
</ul>

<h2>Pre-test checklist (do this before you start)</h2>
<ul>
<li>Pick 2–5 products with <strong>steady weekly traffic</strong> — not new launches with zero history</li>
<li>Confirm garment photos are acceptable (upgrade flat-lays on key SKUs if needed — see <a href="flat-lay-photos-better-tryon.html">flat-lay guide</a>)</li>
<li>Freeze pricing, hero images, and major ad spend changes for 30 days</li>
<li>Note your baseline add-to-cart rate from Shopify analytics for those URLs</li>
<li>Estimate expected try-on volume with our <a href="../free-tools.html">usage calculator</a> so you stay within plan quota</li>
</ul>

<h2>30-day test protocol</h2>
<ol>
<li><strong>Week 0</strong> — Enable try-on on selected SKUs only. Run without A/B for 3–5 days to confirm the widget works and shoppers use it.</li>
<li><strong>Day 1 of test</strong> — Set A/B to 50/50. Do not touch the slider mid-test.</li>
<li><strong>Weeks 1–4</strong> — Monitor weekly: try-on adoption (% of test-group visitors who start try-on), add-to-cart rate per bucket, failed generations.</li>
<li><strong>Day 30</strong> — Review results using the decision framework below.</li>
</ol>
<blockquote><strong>Low traffic?</strong> If a product gets fewer than ~500 PDP views in 30 days, extend the test or combine similar SKUs. Thin data produces noisy conclusions — not wrong answers, just unreliable ones.</blockquote>

<h2>Metrics that matter vs vanity metrics</h2>
<h3>Watch these</h3>
<ul>
<li><strong>Add-to-cart rate</strong> — test bucket vs control bucket on the same products</li>
<li><strong>Try-on adoption</strong> — are shoppers actually clicking? Low adoption may mean button placement, mobile UX, or wrong SKUs</li>
<li><strong>Try-on → cart path</strong> — sessions that led to add-to-cart (available in dashboard)</li>
<li><strong>Failed generation rate</strong> — high failures may indicate photo quality issues, not product-market fit</li>
</ul>
<h3>Do not over-index on these alone</h3>
<ul>
<li>Raw try-on session count without a control comparison</li>
<li>Store-wide revenue during a sale period</li>
<li>Social media mentions or press</li>
</ul>

<h2>How to decide after 30 days</h2>
<p>Use this framework — not gut feeling:</p>
<ul>
<li><strong>Expand</strong> — test bucket shows equal or higher add-to-cart rate <em>and</em> meaningful try-on adoption. Roll out to more SKUs; consider 70/30 or 100% try-on on winners.</li>
<li><strong>Iterate</strong> — try-on adoption is strong but cart rate is flat. Improve flat-lay photos, button copy, or product selection before scaling.</li>
<li><strong>Pause on SKU</strong> — near-zero try-on usage after 30 days. The product may not need visualization, or traffic is too low.</li>
<li><strong>Extend test</strong> — inconclusive with thin traffic. Run 30 more days or add products.</li>
</ul>
<p>Results vary by niche, photography, price point, and shopper demographics. Stylab helps you measure — it does not guarantee a specific lift.</p>

<h2>Related guides</h2>
<ul>
<li><a href="reduce-purchase-hesitation-shopify.html">5-SKU rollout for purchase hesitation</a></li>
<li><a href="flat-lay-photos-better-tryon.html">Improve try-on output with flat-lay photos</a></li>
<li><a href="../free-tools.html">Free usage &amp; revenue estimator</a></li>
</ul>
<p><a href="{{DEMO_LINK}}">Try the live demo →</a></p>`,
      fr: `<p>Vous avez installé l'essayage. Les sessions montent. Mais l'essayage a-t-il changé le comportement — ou une promo, des ads ou la saisonnalité ? Sans groupe contrôle, impossible de le savoir.</p>
<p>Ce guide explique comment mener un A/B test propre sur vos pages produit Shopify avec les buckets de trafic intégrés à Stylab.</p>

<h2>Pourquoi deviner échoue</h2>
<ul>
<li>Comparer ce mois au mois dernier pendant une soldes</li>
<li>Activer l'essayage partout et attribuer tout lift panier au widget</li>
<li>Ne regarder que le volume de sessions d'essayage</li>
<li>Arrêter au bout d'une semaine avec un trafic insuffisant</li>
</ul>
<p>L'A/B test divise les visiteurs sur les <em>mêmes PDP</em> : un groupe voit l'essayage, l'autre non. Même trafic, mêmes prix, mêmes photos.</p>

<h2>Comment fonctionne l'A/B Stylab</h2>
<p>Depuis <strong>Widget</strong> dans l'admin :</p>
<ol>
<li>Activez l'A/B testing</li>
<li>Réglez le slider (10 %–90 % voient l'essayage)</li>
<li>Chaque visiteur reste dans le même bucket</li>
</ol>
<p>Comparez après suffisamment de temps :</p>
<ul>
<li>Vues page par bucket</li>
<li>Sessions d'essayage (groupe test)</li>
<li>Ajouts panier et taux par bucket</li>
</ul>

<h2>Checklist avant le test</h2>
<ul>
<li>2–5 produits à trafic hebdomadaire stable</li>
<li>Photos garment OK — voir <a href="flat-lay-photos-better-tryon.html">guide flat-lay</a></li>
<li>Geler prix, visuels hero et gros changements ads pendant 30 jours</li>
<li>Noter le taux ajout panier baseline dans Shopify analytics</li>
<li>Estimer le volume avec notre <a href="../free-tools.html">calculateur d'usage</a></li>
</ul>

<h2>Protocole 30 jours</h2>
<ol>
<li><strong>Semaine 0</strong> — Essayage activé sans A/B 3–5 jours pour valider le widget</li>
<li><strong>Jour 1</strong> — A/B 50/50, ne pas toucher au slider</li>
<li><strong>Semaines 1–4</strong> — Suivi hebdo : adoption essayage, taux panier par bucket, échecs</li>
<li><strong>Jour 30</strong> — Décision selon le framework ci-dessous</li>
</ol>
<blockquote><strong>Peu de trafic ?</strong> Moins de ~500 vues PDP en 30 jours : prolongez le test ou regroupez des SKU similaires.</blockquote>

<h2>Métriques utiles vs vanity metrics</h2>
<h3>À suivre</h3>
<ul>
<li><strong>Taux ajout panier</strong> — bucket test vs contrôle</li>
<li><strong>Adoption essayage</strong> — les clients cliquent-ils ?</li>
<li><strong>Parcours essayage → panier</strong></li>
<li><strong>Taux d'échec génération</strong> — souvent un problème de photo, pas de fit produit</li>
</ul>
<h3>Ne pas sur-interpréter seuls</h3>
<ul>
<li>Volume brut de sessions sans contrôle</li>
<li>CA boutique global pendant une promo</li>
<li>Couverture presse ou réseaux</li>
</ul>

<h2>Décider après 30 jours</h2>
<ul>
<li><strong>Étendre</strong> — taux panier test ≥ contrôle et adoption significative</li>
<li><strong>Itérer</strong> — forte adoption mais panier plat : photos, copy bouton, sélection SKU</li>
<li><strong>Pause SKU</strong> — usage quasi nul après 30 jours</li>
<li><strong>Prolonger</strong> — données insuffisantes</li>
</ul>
<p>Les résultats varient. Stylab aide à mesurer — sans garantir un lift précis.</p>

<h2>Guides associés</h2>
<ul>
<li><a href="reduce-purchase-hesitation-shopify.html">Déploiement 5 SKU contre l'hésitation</a></li>
<li><a href="flat-lay-photos-better-tryon.html">Améliorer le rendu avec des flat-lays</a></li>
<li><a href="../free-tools.html">Estimateur d'usage gratuit</a></li>
</ul>
<p><a href="{{DEMO_LINK}}">Essayer la démo live →</a></p>`,
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
      en: 'Shoot flat-lay garment photos with a phone, upload them in Stylab, and fix the reference images that cause most bad try-on output.',
      fr: 'Shooting flat-lay au smartphone, upload dans Stylab, et correction des images qui causent la majorité des mauvais rendus essayage.',
    },
    date: 'May 5, 2026',
    dateISO: '2026-05-05',
    summary: {
      en: 'Upload optional flat-lay garment photos in Stylab for hero SKUs — shoot overhead with a phone, fix the reference images that cause most bad try-on output.',
      fr: 'Uploadez des flat-lays optionnels dans Stylab pour vos SKU phares — shooting overhead au smartphone pour corriger les images qui causent la plupart des mauvais rendus.',
    },
    content: {
      en: `<p>AI try-on quality depends heavily on the garment reference image. Your default Shopify product photo might work — but lifestyle shots with models, cropped edges, or busy backgrounds often produce muddy colors, warped logos, or missing details.</p>
<p>A flat-lay (garment laid flat on a neutral surface) gives the model a clean silhouette and accurate print placement. You do not need a studio: a phone, window light, and ten minutes per SKU is enough to start.</p>

<h2>Default product image vs custom flat-lay</h2>
<ul>
<li><strong>Default image works when</strong> — front-facing product on plain background, full garment visible, accurate color, minimal wrinkles</li>
<li><strong>Upload a flat-lay when</strong> — model blocks the print, background is busy, image is cropped, or stripes/logos look wrong in try-on output</li>
<li><strong>Flat-lay is private</strong> — uploaded to Shopify Files via Stylab; it powers AI generation only and does not replace your storefront gallery</li>
</ul>

<h2>Which SKUs to fix first</h2>
<p>Prioritize by impact, not catalog size:</p>
<ol>
<li>Top 5 products by PDP traffic where try-on is enabled</li>
<li>New drops and hero pieces with complex graphics (jerseys, collabs, all-over prints)</li>
<li>SKUs with try-on sessions but shopper complaints or high failure rates in History</li>
<li>Everything else — only after winners are dialed in</li>
</ol>
<p>See our <a href="reduce-purchase-hesitation-shopify.html">5-SKU rollout guide</a> for how to sequence launch and photo work together.</p>

<h2>Shoot a flat-lay with your phone (10-minute setup)</h2>
<h3>What you need</h3>
<ul>
<li>Phone camera (12 MP or higher is fine)</li>
<li>Plain surface — white desk, grey floor tile, or craft paper</li>
<li>Window daylight or two soft light sources (avoid single harsh overhead)</li>
<li>Optional: thin board or clips to flatten sleeves</li>
</ul>
<h3>Step by step</h3>
<ol>
<li>Lay the garment flat, front facing up. Smooth major wrinkles; sleeves and hem fully visible.</li>
<li>Shoot directly overhead — phone parallel to the floor, not at an angle.</li>
<li>Fill the frame with the garment; leave a small margin, do not crop the collar or hem.</li>
<li>Take 3–5 shots; pick the sharpest with truest color.</li>
<li>Export JPG or PNG. Aim for at least 1200 px on the long edge — higher is fine, avoid heavy compression.</li>
</ol>
<blockquote><strong>Pro tip:</strong> For jerseys and tees with large chest prints, make sure the print is fully lit and not shadowed by the collar. Print accuracy is what shoppers judge first.</blockquote>

<h2>Upload in Stylab admin</h2>
<ol>
<li>Open <strong>Products</strong> in the Stylab app inside Shopify admin</li>
<li>Search for your SKU and open the product row</li>
<li>Upload your custom garment photo — it saves to Shopify Files</li>
<li>Run a test try-on yourself on the live PDP before announcing to customers</li>
</ol>
<p>Compare output against the default image side by side. Keep whichever reference produces clearer color, sharper logos, and believable fit.</p>

<h2>Quality checklist before you go live</h2>
<ul>
<li>Garment fully in frame — no cropped sleeves, hem, or collar</li>
<li>Color matches real product under daylight (no orange filter)</li>
<li>Print/logo centered and readable</li>
<li>No hangers, tags, or hands in shot</li>
<li>Background plain — white, grey, or black</li>
<li>File is sharp when zoomed — blur causes AI artifacts</li>
</ul>

<h2>Troubleshooting bad try-on output</h2>
<ul>
<li><strong>Wrong colors</strong> — re-shoot under neutral light; disable warm filters</li>
<li><strong>Logo stretched or missing</strong> — use flat-lay with full front print visible</li>
<li><strong>Garment looks pasted on</strong> — shopper photo may be low light; also check reference crop</li>
<li><strong>Failures in History</strong> — check quota, image size, and retry; failed generations should not count as successful try-ons</li>
</ul>
<p>After fixing photos, run an <a href="ab-test-virtual-try-on.html">A/B test</a> to see if output quality changes move add-to-cart behavior — not just session count.</p>

<h2>Related resources</h2>
<ul>
<li><a href="reduce-purchase-hesitation-shopify.html">Reduce purchase hesitation — 5-SKU rollout</a></li>
<li><a href="ab-test-virtual-try-on.html">A/B testing try-on on Shopify</a></li>
<li><a href="{{DEMO_LINK}}">Try the live demo</a></li>
</ul>`,
      fr: `<p>La qualité de l'essayage IA dépend surtout de l'image de référence du vêtement. La photo produit Shopify par défaut peut suffire — mais les shoots lifestyle, fonds chargés ou crops serrés produisent souvent des couleurs fausses ou des logos déformés.</p>
<p>Un flat-lay (vêtement à plat sur fond neutre) donne une silhouette claire et un placement de print fidèle. Pas besoin de studio : smartphone, lumière fenêtre, dix minutes par SKU.</p>

<h2>Image par défaut vs flat-lay custom</h2>
<ul>
<li><strong>Défaut OK si</strong> — produit face caméra, fond uni, couleur fidèle, vêtement entier visible</li>
<li><strong>Flat-lay si</strong> — mannequin masque le print, fond chargé, crop, rayures/logos incorrects en essayage</li>
<li><strong>Flat-lay privé</strong> — stocké via Shopify Files ; sert à la génération IA, pas à la galerie storefront</li>
</ul>

<h2>Quels SKU traiter en premier</h2>
<ol>
<li>Top 5 PDP par trafic avec essayage activé</li>
<li>Nouveautés et pièces graphiques (jerseys, collabs, all-over)</li>
<li>SKU avec sessions mais échecs ou retours qualité dans History</li>
<li>Reste du catalogue — après les gagnants</li>
</ol>
<p>Voir le <a href="reduce-purchase-hesitation-shopify.html">guide déploiement 5 SKU</a>.</p>

<h2>Flat-lay au smartphone (setup 10 min)</h2>
<h3>Matériel</h3>
<ul>
<li>Smartphone 12 MP+</li>
<li>Surface unie — bureau blanc, carrelage gris, papier craft</li>
<li>Lumière fenêtre ou deux sources douces</li>
</ul>
<h3>Étapes</h3>
<ol>
<li>Vêtement à plat, face visible, manches et ourlet entiers</li>
<li>Photo strictement plongeante — téléphone parallèle au sol</li>
<li>Garment remplit le cadre avec petite marge</li>
<li>3–5 prises, garder la plus nette et colorimétriquement fidèle</li>
<li>Export JPG/PNG, min. 1200 px côté long</li>
</ol>
<blockquote><strong>Astuce :</strong> Sur jerseys et tees à gros print poitrine, éclairer le motif sans ombre du col.</blockquote>

<h2>Upload dans l'admin Stylab</h2>
<ol>
<li>Ouvrir <strong>Products</strong> dans l'app Stylab (admin Shopify)</li>
<li>Rechercher le SKU</li>
<li>Uploader la photo garment → Shopify Files</li>
<li>Tester l'essayage sur la PDP live avant communication client</li>
</ol>

<h2>Checklist qualité</h2>
<ul>
<li>Vêtement entier dans le cadre</li>
<li>Couleur fidèle sans filtre chaud</li>
<li>Print/logo lisible et centré</li>
<li>Pas de cintre, étiquette ou mains</li>
<li>Fond uni</li>
<li>Netteté au zoom</li>
</ul>

<h2>Dépannage rendu médiocre</h2>
<ul>
<li><strong>Couleurs fausses</strong> — re-shoot lumière neutre</li>
<li><strong>Logo déformé</strong> — flat-lay face avec print complet</li>
<li><strong>Effet collé</strong> — photo client sombre ou crop référence incorrect</li>
<li><strong>Échecs History</strong> — quota, taille fichier ; les échecs ne comptent pas comme essayages réussis</li>
</ul>
<p>Après correction photos, lancez un <a href="ab-test-virtual-try-on.html">test A/B</a>.</p>

<h2>Ressources</h2>
<ul>
<li><a href="reduce-purchase-hesitation-shopify.html">Réduire l'hésitation — déploiement 5 SKU</a></li>
<li><a href="ab-test-virtual-try-on.html">A/B testing essayage Shopify</a></li>
<li><a href="{{DEMO_LINK}}">Démo live</a></li>
</ul>`,
    },
  },
  {
    slug: 'mobile-first-virtual-try-on-shopify',
    tag: { en: 'Product', fr: 'Produit' },
    title: {
      en: 'Mobile-first virtual try-on on Shopify product pages',
      fr: 'Essayage virtuel mobile-first sur les fiches produit Shopify',
    },
    excerpt: {
      en: 'Most try-on sessions happen on phones — placement, load time, and photo upload UX matter more than desktop polish. A practical checklist for Shopify apparel merchants.',
      fr: 'La majorité des sessions essayage sont sur mobile — placement, temps de chargement et upload photo comptent plus que le desktop. Checklist pratique pour marchands apparel Shopify.',
    },
    date: 'May 18, 2026',
    dateISO: '2026-05-18',
    summary: {
      en: 'Place the try-on button above the fold on mobile PDPs, test on real devices, and fix slow themes or cramped upload flows before scaling beyond five SKUs.',
      fr: 'Placez le bouton essayage au-dessus de la ligne de flottaison sur mobile, testez sur appareils réels, et corrigez thèmes lents ou upload serré avant d\'élargir au-delà de cinq SKU.',
    },
    content: {
      en: `<p>Shopify traffic is overwhelmingly mobile for most apparel brands. Virtual try-on is a camera-first experience — shoppers upload a photo, wait for generation, then decide. If the widget loads late, sits below three accordions, or the upload step feels broken on iOS Safari, adoption drops before you ever see dashboard signal.</p>
<p>This guide focuses on mobile PDP behavior for Stylab try-on — not generic responsive design theory.</p>

<h2>Why mobile is the real test</h2>
<ul>
<li><strong>Camera access</strong> — desktop try-on often uses file upload; mobile uses the camera roll or live capture</li>
<li><strong>Thumb reach</strong> — add-to-cart and try-on compete for the same screen area</li>
<li><strong>Patience</strong> — mobile shoppers abandon faster when generation takes longer than expected</li>
<li><strong>Theme variance</strong> — sticky ATC bars, image carousels, and app blocks reorder differently on small screens</li>
</ul>

<h2>Pre-launch mobile checklist</h2>
<h3>Placement</h3>
<ul>
<li>Try-on visible without scrolling on a standard iPhone viewport (375×667 or similar)</li>
<li>Button label readable at 16px+ — avoid truncating custom text</li>
<li>Not hidden inside a collapsed tab or “More details” accordion</li>
</ul>
<h3>Performance</h3>
<ul>
<li>Open the PDP on 4G (not just office Wi‑Fi) and tap try-on within 3 seconds of page load</li>
<li>Disable unrelated pop-ups on test SKUs — they block the widget layer</li>
<li>If the theme lazy-loads app blocks, confirm the try-on block is in the first paint region</li>
</ul>
<h3>Upload flow</h3>
<ul>
<li>Test photo pick from gallery and direct camera on iOS Safari and Chrome Android</li>
<li>Confirm the privacy notice is readable without horizontal scroll</li>
<li>After a successful try-on, verify the result image scales to full width on mobile</li>
</ul>

<h2>Common mobile theme conflicts</h2>
<p>These show up repeatedly on Shopify apparel stores:</p>
<ul>
<li><strong>Sticky add-to-cart</strong> — covers the try-on modal close button; adjust z-index in theme or move try-on higher on the page</li>
<li><strong>Full-bleed hero gallery</strong> — pushes app blocks below the fold; consider a dedicated try-on section under the title/price block</li>
<li><strong>Size chart drawer</strong> — opens over the widget; test opening size chart then returning to try-on</li>
<li><strong>Third-party review widgets</strong> — heavy JS can delay app block hydration</li>
</ul>

<h2>What to measure on mobile only</h2>
<p>In Stylab analytics, filter mentally by device if your Shopify reports split mobile/desktop on the same SKU:</p>
<ul>
<li>Try-on starts per mobile PDP session (not raw store sessions)</li>
<li>Completion rate — started vs successful generation</li>
<li>Add-to-cart within the same session after try-on</li>
</ul>
<p>Compare against your <a href="ab-test-virtual-try-on.html">A/B control bucket</a> on the same SKUs — mobile lift may differ from desktop.</p>

<h2>Rollout order</h2>
<ol>
<li>Pick one hero SKU with strong mobile traffic</li>
<li>Fix placement and upload UX until three colleagues complete try-on on their phones without help</li>
<li>Expand to four more SKUs using the <a href="reduce-purchase-hesitation-shopify.html">5-SKU rollout playbook</a></li>
<li>Only then enable additional products or run store-wide promos pointing to try-on</li>
</ol>

<h2>Related resources</h2>
<ul>
<li><a href="flat-lay-photos-better-tryon.html">Flat-lay photos for better try-on quality</a></li>
<li><a href="ab-test-virtual-try-on.html">A/B testing try-on on Shopify</a></li>
<li><a href="{{DEMO_LINK}}">Try the live demo on your phone</a></li>
</ul>`,
      fr: `<p>Le trafic Shopify est majoritairement mobile pour la plupart des marques apparel. L'essayage virtuel est une expérience caméra-first — le client uploade une photo, attend la génération, puis décide. Si le widget charge tard, est sous trois accordéons ou si l'upload semble cassé sur iOS Safari, l'adoption chute avant tout signal dashboard.</p>
<p>Ce guide se concentre sur le comportement mobile des PDP avec Stylab — pas la théorie responsive générique.</p>

<h2>Pourquoi le mobile est le vrai test</h2>
<ul>
<li><strong>Accès caméra</strong> — desktop souvent via fichier ; mobile via galerie ou capture live</li>
<li><strong>Portée du pouce</strong> — ajout panier et essayage se disputent la même zone</li>
<li><strong>Patience</strong> — abandon plus rapide si la génération dépasse l'attente</li>
<li><strong>Variance thème</strong> — barres ATC sticky, carrousels et app blocks se réordonnent sur petit écran</li>
</ul>

<h2>Checklist mobile pré-lancement</h2>
<h3>Placement</h3>
<ul>
<li>Essayage visible sans scroll sur viewport iPhone standard (375×667 ou similaire)</li>
<li>Libellé bouton lisible à 16px+ — éviter la troncature du texte custom</li>
<li>Pas caché dans un onglet replié ou accordéon « Détails »</li>
</ul>
<h3>Performance</h3>
<ul>
<li>Ouvrir la PDP en 4G (pas seulement Wi‑Fi bureau) et tap essayage dans les 3 secondes</li>
<li>Désactiver pop-ups non liés sur les SKU test — ils bloquent la couche widget</li>
<li>Si le thème lazy-load les app blocks, confirmer que l'essayage est dans la première peinture</li>
</ul>
<h3>Flux upload</h3>
<ul>
<li>Tester galerie et caméra directe sur iOS Safari et Chrome Android</li>
<li>Notice confidentialité lisible sans scroll horizontal</li>
<li>Après succès, vérifier que l'image résultat occupe toute la largeur mobile</li>
</ul>

<h2>Conflits thème mobile fréquents</h2>
<ul>
<li><strong>ATC sticky</strong> — couvre la fermeture modal ; ajuster z-index ou remonter l'essayage</li>
<li><strong>Galerie hero pleine largeur</strong> — pousse les app blocks sous la ligne de flottaison</li>
<li><strong>Tiroir guide des tailles</strong> — s'ouvre par-dessus le widget</li>
<li><strong>Widgets avis tiers</strong> — JS lourd retarde l'hydratation des app blocks</li>
</ul>

<h2>Quoi mesurer côté mobile</h2>
<p>Dans les analytics Stylab, croisez avec les rapports Shopify mobile/desktop sur le même SKU :</p>
<ul>
<li>Démarrages essayage par session mobile PDP</li>
<li>Taux de complétion — démarré vs génération réussie</li>
<li>Ajout panier dans la même session après essayage</li>
</ul>
<p>Comparez au bucket contrôle de votre <a href="ab-test-virtual-try-on.html">test A/B</a>.</p>

<h2>Ordre de déploiement</h2>
<ol>
<li>Un SKU phare à fort trafic mobile</li>
<li>Corriger placement et upload jusqu'à ce que trois collègues réussissent sans aide</li>
<li>Élargir à quatre SKU via le <a href="reduce-purchase-hesitation-shopify.html">playbook 5 SKU</a></li>
<li>Ensuite seulement : plus de produits ou promos store-wide</li>
</ol>

<h2>Ressources</h2>
<ul>
<li><a href="flat-lay-photos-better-tryon.html">Photos flat-lay pour meilleure qualité</a></li>
<li><a href="ab-test-virtual-try-on.html">A/B testing essayage Shopify</a></li>
<li><a href="{{DEMO_LINK}}">Démo live sur mobile</a></li>
</ul>`,
    },
  },
  {
    slug: 'choose-virtual-try-on-plan-shopify',
    tag: { en: 'Pricing', fr: 'Tarifs' },
    title: {
      en: 'How to choose a virtual try-on plan for your Shopify store',
      fr: 'Comment choisir un plan d\'essayage virtuel pour votre boutique Shopify',
    },
    excerpt: {
      en: 'Estimate monthly try-on volume from PDP traffic, pick Free vs Starter vs Growth without overspending, and know when to upgrade — using Stylab credits and the free ROI calculator.',
      fr: 'Estimez le volume mensuel depuis le trafic PDP, choisissez Free vs Starter vs Growth sans surpayer, et sachez quand upgrader — crédits Stylab et calculateur ROI gratuit.',
    },
    date: 'May 20, 2026',
    dateISO: '2026-05-20',
    summary: {
      en: 'Estimate successful try-ons as a small fraction of mobile PDP views on enabled SKUs, start on Free or Starter for pilots, and upgrade when you consistently hit 80%+ of monthly quota.',
      fr: 'Estimez les essayages réussis comme une petite fraction des vues PDP mobile sur SKU activés, démarrez Free ou Starter en pilote, upgradez à 80 %+ du quota mensuel.',
    },
    content: {
      en: `<p>Stylab bills through Shopify by successful try-on — not installs, not page views. Picking the wrong plan either wastes budget on unused credits or throttles a widget that was starting to work. This guide helps apparel merchants estimate volume before committing.</p>

<h2>Plans at a glance</h2>
<ul>
<li><strong>Free — $0 / 50 try-ons</strong> — proof of concept on 1–3 SKUs with low traffic</li>
<li><strong>Starter — $19 / 300</strong> — small catalog pilots and seasonal drops</li>
<li><strong>Growth — $49 / 1,000</strong> — multiple hero SKUs with steady mobile traffic</li>
<li><strong>Scale — $149 / 4,000</strong> — broader catalog or paid traffic spikes</li>
</ul>
<p>Only <em>successful</em> generations count. Failed attempts should not consume credits — verify current billing behavior in the app before citing exact numbers in customer comms.</p>

<h2>Estimate volume without guessing</h2>
<h3>Step 1 — Enabled SKUs only</h3>
<p>Do not divide store-wide sessions by ten. Count monthly product page views for SKUs where try-on is actually enabled.</p>
<h3>Step 2 — Try-on rate assumption</h3>
<p>Early pilots often see <strong>2–8%</strong> of PDP viewers start try-on when the button is visible above the fold on mobile. Use 3% for conservative planning, 5% if your audience is young/streetwear-heavy.</p>
<h3>Step 3 — Completion rate</h3>
<p>Not every start finishes — upload friction, privacy hesitation, or slow generation reduce completions. Plan for <strong>60–80%</strong> of starts becoming successful try-ons after you fix mobile UX.</p>
<h3>Example</h3>
<p>5 SKUs × 2,000 mobile PDP views/month each = 10,000 views. At 4% start rate → 400 starts. At 70% completion → ~280 successful try-ons → <strong>Starter</strong> fits with headroom.</p>
<p>Use the <a href="../free-tools.html">free ROI calculator</a> on the resources page to plug in your numbers.</p>

<h2>When to stay on Free</h2>
<ul>
<li>Testing try-on on one jersey or hoodie with under ~1,500 relevant PDP views/month</li>
<li>Running an A/B test where half of traffic never sees the widget</li>
<li>Internal QA before customer-facing launch</li>
</ul>

<h2>When to upgrade</h2>
<ul>
<li><strong>Starter → Growth</strong> — dashboard shows 240+ successful try-ons/month for two consecutive months, or you expand beyond ~8 enabled SKUs</li>
<li><strong>Growth → Scale</strong> — paid campaigns drive predictable spikes, or you enable try-on on 20+ products with consistent adoption</li>
<li><strong>Any plan</strong> — shoppers see “limit reached” or generations queue — upgrade before a product drop, not after</li>
</ul>

<h2>Cost vs return (honest framing)</h2>
<p>Do not promise ROI multiples. Instead, compare plan cost to:</p>
<ul>
<li>Margin on one incremental order from try-on-influenced carts</li>
<li>Cost of a single product photoshoot or UGC campaign</li>
<li>Support tickets about fit uncertainty on the same SKUs</li>
</ul>
<p>Pair spend with an <a href="ab-test-virtual-try-on.html">A/B test</a> so you know whether try-on shifts add-to-cart on enabled products.</p>

<h2>Related resources</h2>
<ul>
<li><a href="reduce-purchase-hesitation-shopify.html">5-SKU rollout guide</a></li>
<li><a href="mobile-first-virtual-try-on-shopify.html">Mobile-first checklist</a></li>
<li><a href="../free-tools.html">Free tools & ROI calculator</a></li>
</ul>`,
      fr: `<p>Stylab facture via Shopify par essayage réussi — pas par install ni par page vue. Le mauvais plan gaspille du budget ou bride un widget qui commençait à performer. Ce guide aide les marchands apparel à estimer le volume avant de s'engager.</p>

<h2>Plans en un coup d'œil</h2>
<ul>
<li><strong>Free — 0 $ / 50 essayages</strong> — preuve de concept sur 1–3 SKU faible trafic</li>
<li><strong>Starter — 19 $ / 300</strong> — pilotes petit catalogue et drops saisonniers</li>
<li><strong>Growth — 49 $ / 1 000</strong> — plusieurs SKU phares trafic mobile régulier</li>
<li><strong>Scale — 149 $ / 4 000</strong> — catalogue élargi ou pics trafic payant</li>
</ul>
<p>Seules les générations <em>réussies</em> comptent. Les échecs ne devraient pas consommer de crédits — vérifiez la facturation actuelle dans l'app.</p>

<h2>Estimer sans deviner</h2>
<h3>Étape 1 — SKU activés uniquement</h3>
<p>Ne divisez pas les sessions store-wide par dix. Comptez les vues PDP mensuelles des SKU où l'essayage est activé.</p>
<h3>Étape 2 — Taux d'essayage</h3>
<p>Les pilotes voient souvent <strong>2–8 %</strong> des visiteurs PDP démarrer l'essayage si le bouton est visible mobile above the fold. Utilisez 3 % en conservateur, 5 % pour audience jeune/streetwear.</p>
<h3>Étape 3 — Taux de complétion</h3>
<p>Tous les démarrages ne finissent pas — friction upload, hésitation privacy, génération lente. Planifiez <strong>60–80 %</strong> de complétion après correction UX mobile.</p>
<h3>Exemple</h3>
<p>5 SKU × 2 000 vues PDP mobile/mois = 10 000 vues. À 4 % démarrage → 400 starts. À 70 % complétion → ~280 essayages réussis → plan <strong>Starter</strong> avec marge.</p>
<p>Utilisez le <a href="../free-tools.html">calculateur ROI gratuit</a>.</p>

<h2>Quand rester en Free</h2>
<ul>
<li>Test sur un jersey ou hoodie avec moins de ~1 500 vues PDP pertinentes/mois</li>
<li>Test A/B où la moitié du trafic ne voit pas le widget</li>
<li>QA interne avant lancement client</li>
</ul>

<h2>Quand upgrader</h2>
<ul>
<li><strong>Starter → Growth</strong> — 240+ essayages réussis/mois deux mois consécutifs, ou plus de ~8 SKU activés</li>
<li><strong>Growth → Scale</strong> — campagnes payantes prévisibles, ou 20+ produits avec adoption constante</li>
<li><strong>Tout plan</strong> — message limite atteinte ou file d'attente — upgrade avant un drop, pas après</li>
</ul>

<h2>Coût vs retour (cadre honnête)</h2>
<p>Pas de promesse de ROI garanti. Comparez plutôt le coût du plan à :</p>
<ul>
<li>Marge d'une commande incrémentale influencée par l'essayage</li>
<li>Coût d'un shooting produit ou campagne UGC</li>
<li>Tickets support sur l'incertitude taille/coupe sur les mêmes SKU</li>
</ul>
<p>Associez la dépense à un <a href="ab-test-virtual-try-on.html">test A/B</a>.</p>

<h2>Ressources</h2>
<ul>
<li><a href="reduce-purchase-hesitation-shopify.html">Guide déploiement 5 SKU</a></li>
<li><a href="mobile-first-virtual-try-on-shopify.html">Checklist mobile-first</a></li>
<li><a href="../free-tools.html">Outils gratuits & calculateur ROI</a></li>
</ul>`,
    },
  },
  {
    slug: 'shopper-photo-privacy-virtual-try-on',
    tag: { en: 'Privacy', fr: 'Confidentialité' },
    title: {
      en: 'Shopper photo privacy for virtual try-on on Shopify',
      fr: 'Confidentialité des photos clients pour l\'essayage virtuel Shopify',
    },
    excerpt: {
      en: 'What happens to customer photos during AI try-on, what to tell shoppers on your PDP, and how Stylab handles retention, GDPR, and uninstall — for merchants and compliance reviewers.',
      fr: 'Que deviennent les photos clients pendant l\'essayage IA, quoi dire sur la PDP, et comment Stylab gère rétention, RGPD et désinstallation — pour marchands et revue conformité.',
    },
    date: 'May 17, 2026',
    dateISO: '2026-05-17',
    summary: {
      en: 'Shoppers see an in-widget privacy notice before upload; photos are processed for generation, originals are not kept for marketing, and data is removed on app uninstall — confirm details in your live policy.',
      fr: 'Les clients voient une notice confidentialité avant upload ; photos traitées pour la génération, originaux non conservés pour le marketing, données supprimées à la désinstallation — confirmez dans votre politique live.',
    },
    content: {
      en: `<p>Virtual try-on requires a shopper photo. That single fact drives more pre-install questions from legal, support, and PR than any feature comparison. Merchants need plain-language answers for PDP copy, FAQ, and internal compliance — without overclaiming what the app guarantees.</p>
<p>This article summarizes how Stylab is designed to handle shopper images. Always confirm against your deployed app version and published privacy policy before making binding statements.</p>

<h2>What shoppers experience</h2>
<ul>
<li>Before upload, the widget shows a <strong>privacy notice</strong> explaining that the photo is used to generate a try-on image</li>
<li>The shopper chooses a photo from their device (or camera on mobile)</li>
<li>After processing, they see the generated result on the product page context</li>
</ul>
<p>Your storefront should not promise “we never store anything” unless that matches the current technical implementation and legal review.</p>

<h2>What merchants should say publicly</h2>
<h3>Safe, accurate phrasing</h3>
<ul>
<li>“Your photo is used only to generate your try-on preview.”</li>
<li>“See our privacy policy for how Style Lab processes try-on data.”</li>
<li>“You can shop without using try-on — it is optional.”</li>
</ul>
<h3>Avoid unless verified</h3>
<ul>
<li>“Photos are never stored” — specify whether you mean originals, derivatives, or analytics events</li>
<li>“100% GDPR compliant” — prefer “GDPR webhooks supported” and link to policy</li>
<li>Using try-on photos for ads or email without explicit consent</li>
</ul>

<h2>Data categories (conceptual)</h2>
<p>For compliance conversations, separate these buckets:</p>
<ul>
<li><strong>Shopper upload (original)</strong> — sent for inference; designed not to be retained for marketing reuse after processing</li>
<li><strong>Generated try-on image</strong> — shown to the shopper; may have a temporary URL for display</li>
<li><strong>Usage events</strong> — try-on started, completed, add-to-cart signals for merchant analytics</li>
<li><strong>Shop and product metadata</strong> — standard Shopify app scopes for configuration</li>
</ul>

<h2>GDPR and uninstall</h2>
<ul>
<li>Stylab supports Shopify GDPR webhooks in the codebase — customer data request and redact flows should be wired for EU stores</li>
<li>On app uninstall, merchant-connected app data should be removed per Shopify platform rules — verify your live deployment</li>
<li>Link your storefront privacy policy: <a href="../../confidentialite.html">confidentialite.html</a> (FR) or equivalent EN page on your site</li>
</ul>

<h2>Merchant checklist before launch</h2>
<ol>
<li>Legal reviews Stylab + your store privacy policy together</li>
<li>FAQ mentions try-on is optional and links to privacy policy</li>
<li>Support script for “where did my photo go?” — one paragraph, no jargon</li>
<li>Do not export try-on images into Klaviyo or ad platforms without a separate consent path</li>
<li>After theme changes, re-check that the privacy notice still displays on mobile</li>
</ol>

<h2>Related resources</h2>
<ul>
<li><a href="mobile-first-virtual-try-on-shopify.html">Mobile-first try-on checklist</a></li>
<li><a href="reduce-purchase-hesitation-shopify.html">5-SKU rollout guide</a></li>
<li><a href="../../confidentialite.html">Stylab privacy policy</a></li>
</ul>`,
      fr: `<p>L'essayage virtuel exige une photo client. Ce point génère plus de questions juridiques, support et PR qu'aucune comparaison de fonctionnalités. Les marchands ont besoin de réponses claires pour la PDP, la FAQ et la conformité interne — sans sur-promettre.</p>
<p>Cet article résume la conception Stylab pour les images clients. Confirmez toujours avec votre version déployée et politique de confidentialité publiée.</p>

<h2>Ce que vivent les clients</h2>
<ul>
<li>Avant upload, le widget affiche une <strong>notice confidentialité</strong> expliquant l'usage pour générer l'essayage</li>
<li>Le client choisit une photo sur l'appareil (ou caméra sur mobile)</li>
<li>Après traitement, il voit le résultat généré dans le contexte fiche produit</li>
</ul>

<h2>Ce que les marchands peuvent dire</h2>
<h3>Formulations sûres</h3>
<ul>
<li>« Votre photo sert uniquement à générer votre aperçu essayage. »</li>
<li>« Voir notre politique de confidentialité pour le traitement des données essayage. »</li>
<li>« L'essayage est optionnel — vous pouvez acheter sans l'utiliser. »</li>
</ul>
<h3>À éviter sans vérification</h3>
<ul>
<li>« Photos jamais stockées » — préciser originaux, dérivés ou événements analytics</li>
<li>« 100 % conforme RGPD » — préférer « webhooks RGPD supportés » + lien politique</li>
<li>Réutiliser les photos essayage en pub ou email sans consentement explicite</li>
</ul>

<h2>Catégories de données (conceptuel)</h2>
<ul>
<li><strong>Upload client (original)</strong> — envoyé pour inférence ; conçu pour ne pas être conservé pour le marketing après traitement</li>
<li><strong>Image essayage générée</strong> — montrée au client ; URL temporaire possible pour affichage</li>
<li><strong>Événements d'usage</strong> — démarrage, complétion, signaux ajout panier pour analytics marchand</li>
<li><strong>Métadonnées boutique/produit</strong> — scopes app Shopify standard pour configuration</li>
</ul>

<h2>RGPD et désinstallation</h2>
<ul>
<li>Stylab supporte les webhooks RGPD Shopify — flux demande et suppression client pour boutiques UE</li>
<li>À la désinstallation, données app liées au marchand supprimées selon règles Shopify — vérifiez le déploiement live</li>
<li>Lien politique : <a href="../../confidentialite.html">confidentialite.html</a></li>
</ul>

<h2>Checklist marchand avant lancement</h2>
<ol>
<li>Juridique revoit Stylab + politique boutique ensemble</li>
<li>FAQ : essayage optionnel + lien politique confidentialité</li>
<li>Script support « où est passée ma photo ? » — un paragraphe, sans jargon</li>
<li>Pas d'export images essayage vers Klaviyo ou ads sans consentement séparé</li>
<li>Après changement thème, revérifier la notice sur mobile</li>
</ol>

<h2>Ressources</h2>
<ul>
<li><a href="mobile-first-virtual-try-on-shopify.html">Checklist mobile-first</a></li>
<li><a href="reduce-purchase-hesitation-shopify.html">Guide déploiement 5 SKU</a></li>
<li><a href="../../confidentialite.html">Politique confidentialité Stylab</a></li>
</ul>`,
    },
  },
];
