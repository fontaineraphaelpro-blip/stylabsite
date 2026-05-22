/** Comparison page data — EN + FR. Verify vendor pricing/features before publishing updates. */

const SHOPIFY_EVAL = {
  en: `<p>Do not pick a try-on app from a feature checklist alone. Run a short, structured pilot on <strong>your</strong> catalog and <strong>your</strong> traffic.</p>
<h3>5-step side-by-side evaluation</h3>
<ol>
<li><strong>Pick 2–3 hero SKUs</strong> — hoodies, jerseys, or graphic tees with steady PDP views (not brand-new listings with zero history).</li>
<li><strong>Use the same reference photos</strong> — if flat-lays improve output, upload them in both tools before judging quality.</li>
<li><strong>Test on mobile first</strong> — most apparel shoppers try on from phone. Upload the same shopper photo in each widget.</li>
<li><strong>Compare admin workflows</strong> — per-product toggles, usage quotas, analytics, and how billing counts successful vs failed generations.</li>
<li><strong>Measure, do not guess</strong> — if you choose Stylab, run a 30-day A/B test. See our <a href="../resources/blog/ab-test-virtual-try-on.html">A/B testing guide</a> and <a href="../resources/free-tools.html">usage calculator</a>.</li>
</ol>
<blockquote><strong>Honest rule:</strong> The best app is the one that produces acceptable try-on quality on your images <em>and</em> gives you enough data to decide whether to expand — not the one with the longest feature list.</blockquote>`,
  fr: `<p>Ne choisissez pas une app d'essayage sur une checklist seule. Menez un pilote court sur <strong>votre</strong> catalogue et <strong>votre</strong> trafic.</p>
<h3>Évaluation en 5 étapes</h3>
<ol>
<li><strong>2–3 SKU phares</strong> — hoodies, jerseys ou tees graphiques à trafic PDP stable.</li>
<li><strong>Mêmes photos de référence</strong> — flat-lays si nécessaire, dans les deux outils.</li>
<li><strong>Tester mobile d'abord</strong> — même photo client dans chaque widget.</li>
<li><strong>Comparer l'admin</strong> — toggles par produit, quotas, analytics, facturation succès vs échec.</li>
<li><strong>Mesurer</strong> — avec Stylab, A/B 30 jours. Voir le <a href="../resources/blog/ab-test-virtual-try-on.html">guide A/B</a> et le <a href="../resources/free-tools.html">calculateur</a>.</li>
</ol>
<blockquote><strong>Règle honnête :</strong> La meilleure app produit un rendu acceptable sur vos images <em>et</em> assez de data pour décider d'élargir.</blockquote>`,
};

const API_EVAL = {
  en: `<p>This comparison is for teams deciding between a <strong>finished Shopify app</strong> and a <strong>developer API</strong>. The right choice depends on who owns the build, the timeline, and what you need to measure on the storefront.</p>
<h3>Build vs buy checklist</h3>
<ol>
<li><strong>Who maintains the widget?</strong> — Stylab ships the PDP button, upload flow, and admin. An API path means your team builds and maintains all of it.</li>
<li><strong>Time to first live try-on</strong> — merchants typically want days on Shopify; API projects are often weeks plus QA on mobile themes.</li>
<li><strong>Billing clarity</strong> — Stylab plans are try-on quotas through Shopify billing. APIs bill per call, GPU minute, or credit — plus your dev cost.</li>
<li><strong>Analytics &amp; A/B</strong> — Stylab includes cart tracking and try-on vs control buckets. With an API, you instrument events yourself.</li>
<li><strong>Total cost at your volume</strong> — estimate monthly try-ons in our <a href="../../resources/free-tools.html">calculator</a>, then add engineering and infra for the API route.</li>
</ol>
<blockquote><strong>When an API makes sense:</strong> Custom mobile apps, non-Shopify stacks, in-store kiosks, or a product team that already runs ML pipelines. For standard Shopify apparel PDPs, a managed app is usually faster to validate.</blockquote>`,
  fr: `<p>Cette comparaison aide à trancher entre une <strong>app Shopify clé en main</strong> et une <strong>API développeur</strong>.</p>
<h3>Checklist build vs buy</h3>
<ol>
<li><strong>Qui maintient le widget ?</strong> — Stylab livre bouton PDP, upload et admin. L'API = tout construire en interne.</li>
<li><strong>Délai de mise en ligne</strong> — jours côté marchand Shopify ; semaines + QA mobile côté API.</li>
<li><strong>Clarté facturation</strong> — quotas essayage via Shopify vs appels API + coût dev.</li>
<li><strong>Analytics &amp; A/B</strong> — inclus Stylab ; à instrumenter soi-même avec une API.</li>
<li><strong>Coût total à votre volume</strong> — <a href="../../resources/free-tools.html">calculateur</a> + ingénierie pour l'API.</li>
</ol>
<blockquote><strong>Quand l'API a du sens :</strong> apps mobile custom, hors Shopify, kiosks, équipe ML existante. Pour des PDP apparel Shopify standard, une app managée valide plus vite.</blockquote>`,
};

function row(feature, stylab, other) {
  const pack = (v) => (typeof v === 'string' ? { en: v, fr: v } : v);
  return { feature: pack(feature), stylab: pack(stylab), other: pack(other) };
}

export const SHOPIFY_COMPARE = [
  {
    slug: 'vs-genlook',
    competitor: 'Genlook',
    summary: {
      en: 'Two Shopify try-on apps — compare A/B testing, billing, flat-lays, and whether you need Klaviyo lead capture or Genlook Studio content tools.',
      fr: 'Deux apps Shopify d\'essayage — comparez A/B testing, facturation, flat-lays, et le besoin de capture Klaviyo ou Genlook Studio.',
    },
    competitorDesc: {
      en: 'Genlook is a Shopify virtual try-on app with widget, analytics, email lead capture (Klaviyo), Genlook Studio for AI product content, and a built-in revenue simulator.',
      fr: 'Genlook est une app Shopify d\'essayage virtuel avec widget, analytics, capture email (Klaviyo), Genlook Studio et simulateur de revenus.',
    },
    overview: {
      en: `<p>Genlook and Stylab both install from the Shopify App Store and add a try-on button to product pages. The decision usually comes down to <strong>how you will measure impact</strong> and <strong>what happens after try-on</strong> — not just preview quality.</p>
<p>Stylab is built around merchant measurement: native A/B buckets (try-on vs control), pay-only-on-success quotas, and per-product flat-lay uploads for jerseys and streetwear. Genlook adds marketing-layer features — email capture during try-on, Klaviyo sync, and Genlook Studio for generating product content beyond try-on.</p>
<p>Pricing structures differ. Compare total monthly cost at <em>your</em> expected try-on volume, not just the entry plan. Use our <a href="../resources/free-tools.html">usage calculator</a> for Stylab and verify Genlook's current plans on their site.</p>`,
      fr: `<p>Genlook et Stylab s'installent depuis l'App Store Shopify. La décision porte surtout sur <strong>comment mesurer l'impact</strong> et <strong>après l'essayage</strong> — pas seulement la qualité du preview.</p>
<p>Stylab centre l'expérience marchand : buckets A/B natifs, quotas au succès, flat-lays par produit. Genlook ajoute la couche marketing — capture email, Klaviyo, Genlook Studio pour du contenu produit IA.</p>
<p>Comparez le coût mensuel à <em>votre</em> volume avec notre <a href="../resources/free-tools.html">calculateur</a> et les tarifs Genlook actuels.</p>`,
    },
    rows: [
      row('Shopify App Store install', 'Yes — no-code', 'Yes'),
      row('Built-in A/B testing (try-on vs control)', 'Included on all plans', 'Not highlighted in public materials'),
      row('Usage billing model', 'Successful try-ons count toward quota', 'Usage-based plans — verify terms'),
      row('Per-product flat-lay upload', 'Yes — private garment reference', 'Product image picker'),
      row('Free plan (monthly try-ons)', '50 successful try-ons', '10 try-ons (verify current pricing)'),
      row('Mid-tier plan (price / quota)', '$49 / 1,000 try-ons (Growth)', '$29 / 250 try-ons (verify current)'),
      row('Email lead capture + Klaviyo', 'Not core focus', 'Yes on paid plans'),
      row('AI Studio for product content', 'No — try-on focused', 'Genlook Studio'),
      row('Revenue / usage estimator', 'Free tools calculator', 'Built-in simulator'),
      row('Add-to-cart analytics in admin', 'Yes', 'Yes — verify metrics available'),
      row('Interactive demo', 'Same widget on this site', 'Demo store on vendor site'),
    ],
    chooseStylab: {
      en: 'Choose Stylab if your priority is measuring try-on impact with built-in A/B testing, controlling flat-lay quality per SKU, and billing tied to successful generations — especially for streetwear, jerseys, and hoodies. You do not need email capture or a content studio in the same app.',
      fr: 'Choisissez Stylab si vous voulez mesurer l\'impact avec A/B intégré, flat-lays par SKU et facturation au succès — surtout streetwear, jerseys, hoodies — sans capture email ni studio contenu dans la même app.',
    },
    chooseOther: {
      en: 'Choose Genlook if Klaviyo lead capture during try-on, Genlook Studio content generation, or their built-in revenue simulator are higher priorities than native A/B buckets. Pilot both on identical product photos and mobile before committing.',
      fr: 'Choisissez Genlook si capture Klaviyo, Genlook Studio ou simulateur revenus passent avant l\'A/B natif. Pilotez les deux sur les mêmes photos mobile avant de décider.',
    },
    evaluation: SHOPIFY_EVAL,
    pitfalls: {
      en: `<ul>
<li>Comparing only free plan try-on counts without estimating volume at scale</li>
<li>Judging output on desktop alone — mobile is where apparel shoppers convert</li>
<li>Skipping A/B or control groups and attributing seasonal sales to try-on</li>
<li>Expecting either app to guarantee conversion lifts</li>
</ul>`,
      fr: `<ul>
<li>Comparer uniquement les plans gratuits sans estimer le volume à l'échelle</li>
<li>Juger sur desktop seulement</li>
<li>Attribuer des ventes saisonnières à l'essayage sans groupe contrôle</li>
<li>Attendre un lift de conversion garanti</li>
</ul>`,
    },
  },
  {
    slug: 'vs-antla',
    competitor: 'Antla',
    summary: {
      en: 'Compare two Shopify virtual try-on apps on setup speed, measurement, flat-lay controls, and how each handles billing at your try-on volume.',
      fr: 'Comparez deux apps Shopify d\'essayage sur installation, mesure, flat-lays et facturation à votre volume.',
    },
    competitorDesc: {
      en: 'Antla is a Shopify virtual try-on app focused on AI garment visualization for online fashion stores.',
      fr: 'Antla est une app Shopify d\'essayage virtuel orientée visualisation garment IA pour la mode en ligne.',
    },
    overview: {
      en: `<p>Antla and Stylab target the same buyer: a Shopify merchant who wants shoppers to preview apparel on the product page. Differences show up in <strong>measurement tooling</strong>, <strong>billing transparency</strong>, and <strong>merchant admin depth</strong> — areas that matter after the first demo, not during it.</p>
<p>Before choosing, list your must-haves: per-product enablement, failed-generation handling, A/B testing, and add-to-cart tracking. Then run both widgets on the same 2–3 SKUs. Output quality varies by photo — your catalog is the test bench.</p>`,
      fr: `<p>Antla et Stylab visent le même acheteur : un marchand Shopify qui veut un preview sur la PDP. Les différences apparaissent sur la <strong>mesure</strong>, la <strong>facturation</strong> et l'<strong>admin</strong>.</p>
<p>Listez vos must-haves : activation par produit, gestion des échecs, A/B, tracking panier. Testez les deux widgets sur 2–3 SKU identiques.</p>`,
    },
    rows: [
      row('Shopify App Store install', 'Yes — no-code', 'Yes'),
      row('Built-in A/B testing', 'Included on all plans', 'Verify on vendor site'),
      row('Successful-only quota billing', 'Yes — verify in admin', 'Check current plan terms'),
      row('Per-product flat-lay upload', 'Yes', 'Verify in product settings'),
      row('Free plan try-ons / month', '50 successful try-ons', 'Check current offer'),
      row('Add-to-cart analytics', 'Dashboard included', 'Verify metrics available'),
      row('Mobile PDP widget', 'Yes', 'Yes — test on your theme'),
      row('Enable try-on per product', 'Yes', 'Verify workflow'),
    ],
    chooseStylab: {
      en: 'Choose Stylab if built-in A/B testing, pay-per-success clarity, and flat-lay uploads per SKU are part of your rollout plan — and you want to measure cart behavior, not just launch a button.',
      fr: 'Choisissez Stylab si A/B intégré, facturation au succès et flat-lays par SKU font partie de votre plan — et que vous voulez mesurer le panier, pas seulement un bouton.',
    },
    chooseOther: {
      en: 'Choose Antla if, after testing on your images, output quality or pricing fits better for your catalog. Verify current plans, quotas, and analytics on Antla\'s site before migrating.',
      fr: 'Choisissez Antla si, après test sur vos images, le rendu ou le prix convient mieux. Vérifiez plans et quotas sur le site Antla.',
    },
    evaluation: SHOPIFY_EVAL,
    pitfalls: {
      en: `<ul><li>Picking from App Store screenshots instead of your own SKUs</li><li>Not checking how failed generations affect quota on each app</li></ul>`,
      fr: `<ul><li>Choisir depuis des screenshots au lieu de vos SKU</li><li>Ne pas vérifier l'impact des échecs sur le quota</li></ul>`,
    },
  },
  {
    slug: 'vs-banuba',
    competitor: 'Banuba',
    summary: {
      en: 'Banuba targets SDK and enterprise AR projects. Stylab is a no-code Shopify app — compare build effort, time to PDP, and merchant analytics.',
      fr: 'Banuba vise SDK et AR enterprise. Stylab est une app Shopify sans code — comparez effort, délai PDP et analytics.',
    },
    competitorDesc: {
      en: 'Banuba offers AR and AI try-on technology, often deployed via SDK, custom apps, or enterprise integrations rather than a standard Shopify merchant plugin.',
      fr: 'Banuba propose de la technologie AR/IA essayage, souvent via SDK, apps custom ou intégrations enterprise plutôt qu\'un plugin Shopify standard.',
    },
    overview: {
      en: `<p>Banuba and Stylab solve different buying processes. Banuba is technology you integrate — useful when you have mobile apps, custom storefronts, or in-store mirrors and an engineering team to maintain them. Stylab is a product you install on Shopify and manage from admin like any other app.</p>
<p>If your goal is <strong>try-on live on Shopify product pages this week</strong>, compare total time: SDK integration, QA on themes, ongoing model updates, and billing vs App Store install and per-product toggles.</p>`,
      fr: `<p>Banuba et Stylab correspondent à des processus d'achat différents. Banuba = technologie à intégrer (apps mobile, custom, miroirs magasin). Stylab = app Shopify installable comme les autres.</p>
<p>Si l'objectif est l'essayage live sur PDP Shopify rapidement, comparez le temps total d'intégration SDK vs installation App Store.</p>`,
    },
    rows: [
      row('Primary buyer', 'Shopify apparel merchant', 'Product / engineering team'),
      row('Shopify PDP widget (no-code)', 'Purpose-built app', 'SDK — custom build required'),
      row('Built-in A/B testing on PDP', 'Yes', 'Not typical — custom'),
      row('Time to first live try-on', 'Minutes to hours', 'Weeks to months'),
      row('Merchant admin dashboard', 'Included', 'Build yourself'),
      row('Billing model', 'Shopify subscription quotas', 'Enterprise / API licensing'),
      row('Ongoing maintenance', 'Vendor-managed app updates', 'Your engineering team'),
    ],
    chooseStylab: {
      en: 'Choose Stylab if you run on Shopify and need a maintained widget, per-product controls, and cart analytics without hiring SDK developers.',
      fr: 'Choisissez Stylab si vous êtes sur Shopify et voulez un widget maintenu, contrôles par produit et analytics sans développeurs SDK.',
    },
    chooseOther: {
      en: 'Choose Banuba if you are building a proprietary app, in-store experience, or multi-channel AR stack and have budget for integration and maintenance.',
      fr: 'Choisissez Banuba pour une app propriétaire, expérience magasin ou stack AR multi-canal avec budget intégration.',
    },
    evaluation: SHOPIFY_EVAL,
    pitfalls: {
      en: `<ul><li>Underestimating SDK maintenance after launch</li><li>Comparing enterprise quote pricing to a Shopify app subscription without volume context</li></ul>`,
      fr: `<ul><li>Sous-estimer la maintenance SDK</li><li>Comparer un devis enterprise à un abonnement app sans contexte de volume</li></ul>`,
    },
  },
  {
    slug: 'vs-mirrar',
    competitor: 'MirrAR',
    summary: {
      en: 'MirrAR serves broad fashion retail and omnichannel use cases. Stylab focuses on Shopify apparel PDPs with measurable widgets and a free entry plan.',
      fr: 'MirrAR couvre retail mode omnicanal. Stylab se concentre sur les PDP apparel Shopify avec widget mesurable et plan gratuit.',
    },
    competitorDesc: {
      en: 'MirrAR provides virtual try-on for fashion and jewelry across web, mobile, and retail touchpoints — often via sales-led deployment.',
      fr: 'MirrAR propose l\'essayage virtuel mode et bijoux sur web, mobile et retail — souvent en déploiement commercial.',
    },
    overview: {
      en: `<p>MirrAR and Stylab overlap on the surface — both help shoppers visualize products. MirrAR often appears in omnichannel, jewelry, or retail-led RFPs. Stylab is narrower: Shopify product pages, apparel-focused, self-serve install.</p>
<p>Ask: Do you need try-on inside standard Shopify checkout flow with merchant-controlled quotas? Or a broader retail platform integration? That answer usually decides faster than feature rows.</p>`,
      fr: `<p>MirrAR et Stylab se recoupent — visualisation produit. MirrAR apparaît souvent en omnicanal, bijoux ou RFP retail. Stylab est plus étroit : PDP Shopify apparel, install self-serve.</p>
<p>Avez-vous besoin de l'essayage dans le flux Shopify standard avec quotas marchands ? Ou d'une plateforme retail plus large ?</p>`,
    },
    rows: [
      row('Self-serve Shopify install', 'Yes — App Store', 'Typically sales-led — verify'),
      row('A/B test try-on vs control', 'Built-in', 'Not standard — verify'),
      row('Free entry plan', '50 try-ons/mo', 'Contact sales — verify'),
      row('Jewelry + apparel', 'Apparel-focused', 'Broader fashion / jewelry'),
      row('Omnichannel / in-store', 'Shopify PDP focus', 'Common use case — verify'),
      row('Per-product enablement', 'Yes', 'Verify workflow'),
    ],
    chooseStylab: {
      en: 'Choose Stylab for Shopify-native workflow, self-serve launch, per-product toggles, and built-in cart analytics without a sales cycle.',
      fr: 'Choisissez Stylab pour un workflow Shopify natif, lancement self-serve, toggles par produit et analytics panier sans cycle commercial.',
    },
    chooseOther: {
      en: 'Choose MirrAR if your project spans retail stores, jewelry, or custom enterprise deployment beyond a standard Shopify app scope.',
      fr: 'Choisissez MirrAR pour magasins, bijoux ou déploiement enterprise au-delà d\'une app Shopify standard.',
    },
    evaluation: SHOPIFY_EVAL,
    pitfalls: {
      en: `<ul><li>Starting an enterprise sales process when a Shopify app pilot would answer the question in two weeks</li></ul>`,
      fr: `<ul><li>Lancer un process enterprise quand un pilote app Shopify répondrait en deux semaines</li></ul>`,
    },
  },
  {
    slug: 'vs-camweara',
    competitor: 'Camweara',
    summary: {
      en: 'Compare Camweara and Stylab on measurement, billing, and whether you can run a controlled try-on pilot on Shopify apparel SKUs.',
      fr: 'Comparez Camweara et Stylab sur mesure, facturation et pilote contrôlé sur SKU apparel Shopify.',
    },
    competitorDesc: {
      en: 'Camweara offers virtual try-on for fashion e-commerce, helping online stores add visualization to product pages.',
      fr: 'Camweara propose l\'essayage virtuel pour l\'e-commerce mode sur les pages produit.',
    },
    overview: {
      en: `<p>Camweara and Stylab both aim to reduce visualization friction on fashion product pages. For Shopify merchants, the practical questions are the same: How fast can you go live? Can you enable try-on per SKU? How are successful vs failed generations billed? Can you compare try-on vs no try-on on the same traffic?</p>
<p>Run a head-to-head on identical SKUs. Quality depends heavily on reference photos — see our <a href="../resources/blog/flat-lay-photos-better-tryon.html">flat-lay guide</a> before judging either tool unfairly.</p>`,
      fr: `<p>Camweara et Stylab visent à réduire la friction de visualisation. Questions pratiques : délai de mise en ligne, activation par SKU, facturation succès vs échec, comparaison avec/sans essayage.</p>
<p>Test côte à côte sur SKU identiques. Voir le <a href="../resources/blog/flat-lay-photos-better-tryon.html">guide flat-lay</a>.</p>`,
    },
    rows: [
      row('Shopify integration', 'Native app', 'Verify current Shopify offer'),
      row('Built-in A/B testing', 'Yes', 'Unlikely — verify'),
      row('Successful-only billing', 'Yes', 'Check plan terms'),
      row('Free plan', '50 try-ons/mo', 'Varies — verify'),
      row('Flat-lay garment upload', 'Yes', 'Verify'),
      row('Add-to-cart tracking', 'Yes', 'Verify'),
    ],
    chooseStylab: {
      en: 'Choose Stylab to measure impact with native A/B buckets and transparent successful-try-on quotas — not just add a visualization button without a control group.',
      fr: 'Choisissez Stylab pour mesurer avec buckets A/B natifs et quotas transparents — pas seulement un bouton sans groupe contrôle.',
    },
    chooseOther: {
      en: 'Choose Camweara if, after testing on your catalog and theme, output quality or pricing fits better. Confirm Shopify compatibility and analytics on their current site.',
      fr: 'Choisissez Camweara si le rendu ou le prix convient mieux après test. Confirmez compatibilité Shopify sur leur site.',
    },
    evaluation: SHOPIFY_EVAL,
    pitfalls: {
      en: `<ul><li>Launching store-wide before a 5-SKU pilot — see our <a href="../resources/blog/reduce-purchase-hesitation-shopify.html">rollout guide</a></li></ul>`,
      fr: `<ul><li>Déploiement global avant pilote 5 SKU — voir le <a href="../resources/blog/reduce-purchase-hesitation-shopify.html">guide rollout</a></li></ul>`,
    },
  },
  {
    slug: 'vs-looksy',
    competitor: 'Looksy',
    summary: {
      en: 'Looksy vs Stylab for Shopify fashion stores — compare try-on quality on your photos, analytics, A/B testing, and rollout control.',
      fr: 'Looksy vs Stylab pour boutiques mode Shopify — rendu sur vos photos, analytics, A/B et contrôle du déploiement.',
    },
    competitorDesc: {
      en: 'Looksy is a virtual try-on option for online fashion stores adding visualization to the shopping experience.',
      fr: 'Looksy est une option d\'essayage virtuel pour boutiques mode en ligne.',
    },
    overview: {
      en: `<p>Looksy and Stylab compete for the same shopper moment: “how will this look on me?” on a product page. Merchants should evaluate both on <strong>mobile output</strong>, <strong>admin control</strong>, and <strong>measurement</strong> — not marketing claims.</p>
<p>Stylab includes A/B testing and add-to-cart analytics on all plans. If Looksy (or any alternative) produces better visuals on your images but lacks control-group testing, you still will not know if try-on changed purchase behavior.</p>`,
      fr: `<p>Looksy et Stylab visent le même moment client sur la PDP. Évaluez le <strong>rendu mobile</strong>, l'<strong>admin</strong> et la <strong>mesure</strong>.</p>
<p>Stylab inclut A/B et analytics panier. Un meilleur visuel sans groupe contrôle ne prouve pas l'impact sur les achats.</p>`,
    },
    rows: [
      row('Shopify product page widget', 'Yes', 'Verify integration'),
      row('A/B test included', 'All plans', 'Unlikely — verify'),
      row('Custom flat-lay for AI', 'Yes', 'Unknown — test on your SKUs'),
      row('Add-to-cart tracking', 'Yes', 'Varies — verify'),
      row('Free plan entry', '50 try-ons/mo', 'Verify on vendor site'),
      row('Per-product activation', 'Yes', 'Verify'),
    ],
    chooseStylab: {
      en: 'Choose Stylab for a measurable rollout: start free, A/B test hero SKUs, expand based on cart data — not session count alone.',
      fr: 'Choisissez Stylab pour un déploiement mesurable : gratuit, A/B sur SKU phares, extension selon data panier.',
    },
    chooseOther: {
      en: 'Choose Looksy if try-on output on your specific images is consistently stronger in side-by-side mobile tests. Still run a timed pilot before store-wide enablement.',
      fr: 'Choisissez Looksy si le rendu est nettement meilleur en test mobile côte à côte. Pilote limité avant déploiement global.',
    },
    evaluation: SHOPIFY_EVAL,
    pitfalls: {
      en: `<ul><li>Choosing better visuals without measuring add-to-cart vs control traffic</li></ul>`,
      fr: `<ul><li>Choisir le meilleur visuel sans mesurer le panier vs trafic contrôle</li></ul>`,
    },
  },
  {
    slug: 'vs-trypoint',
    competitor: 'TryPoint',
    summary: {
      en: 'TryPoint vs Stylab — enterprise-oriented try-on vs a self-serve Shopify app with quotas, toggles, and built-in A/B testing.',
      fr: 'TryPoint vs Stylab — essayage orienté enterprise vs app Shopify self-serve avec quotas, toggles et A/B intégré.',
    },
    competitorDesc: {
      en: 'TryPoint provides virtual try-on for fashion retailers, often in sales-led or high-touch deployments.',
      fr: 'TryPoint propose l\'essayage virtuel pour retailers mode, souvent en déploiement commercial.',
    },
    overview: {
      en: `<p>TryPoint and Stylab may both appear in a merchant’s longlist for virtual try-on. TryPoint often fits conversations that start with sales teams and custom scope. Stylab fits merchants who want to install from Shopify, toggle products themselves, and read analytics in admin without a project timeline.</p>
<p>Compare time-to-pilot: Can you test on five SKUs within two weeks and read add-to-cart signals? That cadence matters more than logo count on a slide deck.</p>`,
      fr: `<p>TryPoint et Stylab peuvent figurer sur la même longlist. TryPoint = souvent commercial et scope custom. Stylab = install Shopify, toggles autonomes, analytics admin.</p>
<p>Comparez le délai de pilote : cinq SKU en deux semaines avec signaux panier ?</p>`,
    },
    rows: [
      row('Self-serve Shopify install', 'Yes', 'Verify — may be sales-led'),
      row('Built-in A/B testing', 'Yes', 'Rare — verify'),
      row('Pay only on success', 'Yes', 'Check billing model'),
      row('Scale plan (high volume)', '4,000 try-ons/mo (Scale $149)', 'Contact vendor'),
      row('Per-product controls', 'Yes', 'Verify'),
      row('Merchant dashboard', 'Included', 'Verify scope'),
    ],
    chooseStylab: {
      en: 'Choose Stylab for a complete merchant workflow you control: product toggles, usage limits, cart analytics, and A/B testing without a custom statement of work.',
      fr: 'Choisissez Stylab pour un workflow marchand autonome : toggles, limites, analytics panier et A/B sans SOW custom.',
    },
    chooseOther: {
      en: 'Choose TryPoint if your organization requires enterprise procurement, custom integrations, or vendor-led rollout beyond standard Shopify app scope.',
      fr: 'Choisissez TryPoint pour procurement enterprise, intégrations custom ou rollout vendor au-delà d\'une app Shopify standard.',
    },
    evaluation: SHOPIFY_EVAL,
    pitfalls: {
      en: `<ul><li>Waiting on enterprise timelines when a Shopify app pilot could produce learning in 14 days</li></ul>`,
      fr: `<ul><li>Attendre un calendrier enterprise quand un pilote app Shopify apprend en 14 jours</li></ul>`,
    },
  },
];

export const API_COMPARE = [
  {
    slug: 'vs-fashn-ai',
    competitor: 'FASHN AI',
    summary: {
      en: 'FASHN AI is a developer try-on API. Stylab is a managed Shopify app — compare build time, billing, and who maintains the storefront widget.',
      fr: 'FASHN AI est une API essayage développeur. Stylab est une app Shopify managée — comparez build, facturation et maintenance widget.',
    },
    competitorDesc: {
      en: 'FASHN AI offers a virtual try-on API for teams building custom fashion tech products and integrations.',
      fr: 'FASHN AI propose une API d\'essayage virtuel pour équipes produit mode custom.',
    },
    overview: {
      en: `<p>FASHN AI gives developers an inference endpoint. Stylab gives merchants a finished Shopify experience: widget, upload UX, admin, billing, and analytics. Neither replaces the other — they serve different org charts.</p>
<p>If you are a Shopify merchant without in-house ML engineers, total cost of an API includes frontend build, mobile QA, monitoring, and quota logic. A managed app bundles those by default.</p>`,
      fr: `<p>FASHN AI = endpoint d'inférence. Stylab = expérience Shopify complète. Ils servent des profils d'organisation différents.</p>
<p>Sans ingénieurs ML, le coût API inclut frontend, QA mobile, monitoring et quotas.</p>`,
    },
    rows: [
      row('Ready-made Shopify PDP widget', 'Included', 'Build yourself'),
      row('Shopify billing / merchant plans', 'Yes', 'API credits + your infra'),
      row('Built-in A/B testing', 'Included', 'Custom instrumentation'),
      row('Time to first live try-on', 'Hours', 'Weeks+ typical'),
      row('Add-to-cart analytics', 'Dashboard included', 'Build yourself'),
      row('Maintained by', 'Stylab vendor', 'Your engineering team'),
    ],
    chooseStylab: {
      en: 'Choose Stylab if you sell on Shopify and need try-on live on product pages without staffing a dev project.',
      fr: 'Choisissez Stylab si vous vendez sur Shopify sans projet dev dédié.',
    },
    chooseOther: {
      en: 'Choose FASHN AI if you build proprietary apps, marketplaces, or non-Shopify stacks and already operate ML/API infrastructure.',
      fr: 'Choisissez FASHN AI pour apps propriétaires, marketplaces ou stacks hors Shopify avec infra ML/API.',
    },
    evaluation: API_EVAL,
    pitfalls: {
      en: `<ul><li>Quoting API per-call cost without adding frontend + maintenance labor</li><li>Building custom when a 5-SKU Shopify pilot would validate demand first</li></ul>`,
      fr: `<ul><li>Comparer le coût par appel sans le travail frontend/maintenance</li><li>Construire custom avant un pilote 5 SKU Shopify</li></ul>`,
    },
  },
  {
    slug: 'vs-aiuta',
    competitor: 'Aiuta',
    summary: {
      en: 'Aiuta API vs Stylab Shopify app — when to build custom try-on infrastructure vs install a merchant-ready widget.',
      fr: 'API Aiuta vs app Shopify Stylab — quand construire custom vs installer un widget marchand.',
    },
    competitorDesc: {
      en: 'Aiuta provides virtual try-on APIs for fashion technology teams building custom experiences.',
      fr: 'Aiuta fournit des API d\'essayage virtuel pour équipes fashion tech.',
    },
    overview: {
      en: `<p>Aiuta fits product teams integrating try-on into owned apps or retail systems. Stylab fits Shopify merchants who want the feature live on PDPs with predictable monthly try-on quotas.</p>
<p>Decision shortcut: If your roadmap includes Shopify checkout on standard themes, a managed app is usually the fastest path to learning. If your roadmap is a native mobile app with custom UX, an API may be appropriate — budget for ongoing model and API maintenance.</p>`,
      fr: `<p>Aiuta = intégration dans apps ou systèmes retail. Stylab = PDP Shopify avec quotas mensuels prévisibles.</p>
<p>Raccourci : checkout Shopify standard → app managée. App mobile native custom → API avec budget maintenance.</p>`,
    },
    rows: [
      row('Shopify PDP widget', 'Included', 'Custom build required'),
      row('Merchant admin UI', 'Yes', 'Build yourself'),
      row('Free / entry tier', '50 try-ons/mo', 'API credits vary'),
      row('A/B test try-on vs control', 'Built-in', 'Custom'),
      row('Engineering required', 'No', 'Yes'),
      row('Billing predictability for merchants', 'Shopify plan tiers', 'Usage-based API'),
    ],
    chooseStylab: {
      en: 'Choose Stylab to go live on Shopify quickly with per-product controls and a dashboard merchants actually use day to day.',
      fr: 'Choisissez Stylab pour aller live sur Shopify vite avec contrôles par produit et dashboard marchand.',
    },
    chooseOther: {
      en: 'Choose Aiuta for kiosks, proprietary mobile apps, or headless stacks where Shopify\'s standard PDP is not the primary surface.',
      fr: 'Choisissez Aiuta pour kiosks, apps mobile propriétaires ou headless hors PDP Shopify standard.',
    },
    evaluation: API_EVAL,
    pitfalls: {
      en: `<ul><li>Treating API latency/cost spreadsheets as a substitute for shopper UX testing on mobile</li></ul>`,
      fr: `<ul><li>Remplacer les tests UX mobile par des tableurs latence/coût API</li></ul>`,
    },
  },
  {
    slug: 'vs-pixelcut',
    competitor: 'Pixelcut',
    summary: {
      en: 'Pixelcut is a general AI photo suite. Stylab is built for always-on Shopify product page try-on with cart analytics.',
      fr: 'Pixelcut est une suite photo IA généraliste. Stylab est conçu pour l\'essayage permanent sur PDP Shopify avec analytics panier.',
    },
    competitorDesc: {
      en: 'Pixelcut offers AI photo editing tools including try-on and background features, aimed at creators and marketers more than Shopify PDP automation.',
      fr: 'Pixelcut propose des outils photo IA dont essayage, orientés créateurs et marketers plus que l\'automation PDP Shopify.',
    },
    overview: {
      en: `<p>Pixelcut and Stylab both touch “AI + fashion images,” but the workflows differ. Pixelcut fits campaign assets, one-off edits, and creative production. Stylab fits always-on try-on embedded in Shopify product pages with session tracking and A/B testing.</p>
<p>If shoppers need try-on while browsing checkout-bound products — not in a design tool — you need a storefront widget, not a manual export workflow.</p>`,
      fr: `<p>Pixelcut et Stylab touchent tous deux à l'IA mode, mais les workflows diffèrent. Pixelcut = assets campagne et édition. Stylab = essayage permanent sur PDP Shopify avec sessions et A/B.</p>
<p>Pour l'essayage pendant la navigation produit, il faut un widget storefront — pas un export manuel.</p>`,
    },
    rows: [
      row('Shopify App Store app', 'Yes', 'Not Shopify-native PDP automation'),
      row('Live on every enabled PDP', 'Automatic', 'Manual / creative workflow'),
      row('Shopper self-serve upload on PDP', 'Yes', 'Not the core workflow'),
      row('Add-to-cart measurement', 'Yes', 'No — not storefront analytics'),
      row('A/B test impact', 'Built-in', 'Not applicable'),
      row('Best for', 'Shopify merchants', 'Creative / marketing teams'),
    ],
    chooseStylab: {
      en: 'Choose Stylab when try-on must run on product pages for every shopper session and you need cart analytics.',
      fr: 'Choisissez Stylab quand l\'essayage doit tourner sur les PDP avec analytics panier.',
    },
    chooseOther: {
      en: 'Choose Pixelcut for ad creatives, catalog cleanup, or one-off AI edits — not as a replacement for embedded PDP try-on.',
      fr: 'Choisissez Pixelcut pour créas pub ou retouches ponctuelles — pas en remplacement d\'un essayage PDP intégré.',
    },
    evaluation: API_EVAL,
    pitfalls: {
      en: `<ul><li>Using manual AI edits as a stand-in for scalable PDP try-on</li></ul>`,
      fr: `<ul><li>Utiliser des retouches manuelles comme substitut à l'essayage PDP scalable</li></ul>`,
    },
  },
  {
    slug: 'vs-replicate',
    competitor: 'Replicate',
    summary: {
      en: 'Replicate hosts try-on models via API. Stylab is managed try-on for Shopify merchants — compare DIY ops vs install-and-measure.',
      fr: 'Replicate héberge des modèles essayage via API. Stylab = essayage managé pour marchands Shopify.',
    },
    competitorDesc: {
      en: 'Replicate runs machine learning models in the cloud via API — including try-on models teams can call from custom pipelines.',
      fr: 'Replicate exécute des modèles ML via API — dont des modèles d\'essayage pour pipelines custom.',
    },
    overview: {
      en: `<p>Replicate is infrastructure: you pick a model, pay per run, and wire it into your product. Stylab is a product: Shopify widget, shopper UX, quotas, admin, and billing through Shopify.</p>
<p>Teams choose Replicate when try-on is one step inside a larger ML system they already operate. Merchants choose Stylab when try-on is a feature to launch and measure on the storefront this month.</p>
<p>Remember hidden costs on the API path: image preprocessing, error handling, GDPR/privacy copy, mobile UI, and version changes when models update.</p>`,
      fr: `<p>Replicate = infra : modèle, paiement à l'exécution, intégration produit. Stylab = produit : widget, UX, quotas, admin, facturation Shopify.</p>
<p>Coûts cachés API : preprocessing, erreurs, privacy, UI mobile, versions de modèles.</p>`,
    },
    rows: [
      row('No engineering required', 'Merchant app', 'Dev required'),
      row('Shopper-facing upload UX', 'Included', 'Build yourself'),
      row('Pay per success clarity', 'Quota on successful try-ons', 'Pay per API run — verify model'),
      row('Model version changes', 'Vendor-managed', 'Your team adapts pipeline'),
      row('Merchant analytics dashboard', 'Included', 'Custom'),
      row('Shopify billing integration', 'Yes', 'No'),
    ],
    chooseStylab: {
      en: 'Choose Stylab when try-on is a merchant feature to launch and measure — not an engineering side project.',
      fr: 'Choisissez Stylab quand l\'essayage est une feature marchand à lancer et mesurer — pas un side project technique.',
    },
    chooseOther: {
      en: 'Choose Replicate if you already run custom ML pipelines and need raw model access across multiple generative tasks.',
      fr: 'Choisissez Replicate si vous opérez déjà des pipelines ML custom et avez besoin d\'accès modèle brut.',
    },
    evaluation: API_EVAL,
    pitfalls: {
      en: `<ul><li>Assuming per-run API pricing equals total cost of ownership</li><li>No plan for failed runs, retries, and shopper-facing error states</li></ul>`,
      fr: `<ul><li>Égaliser prix par run et coût total de possession</li><li>Pas de plan pour échecs, retries et messages client</li></ul>`,
    },
  },
  {
    slug: 'vs-fal-ai',
    competitor: 'Fal AI',
    summary: {
      en: 'Fal AI powers generative media APIs. Stylab packages try-on specifically for Shopify apparel merchants with plans and A/B testing.',
      fr: 'Fal AI alimente des API média génératif. Stylab package l\'essayage pour marchands apparel Shopify avec plans et A/B.',
    },
    competitorDesc: {
      en: 'Fal AI provides fast inference APIs for generative media — useful for teams building multi-model creative pipelines.',
      fr: 'Fal AI fournit des API d\'inférence rapide pour média génératif — pipelines multi-modèles.',
    },
    overview: {
      en: `<p>Fal AI is horizontal infrastructure for builders. Stylab is vertical software for Shopify apparel: one job (PDP try-on), one admin, one billing relationship.</p>
<p>If your team already integrates Fal for multiple generative features and has frontend resources, adding try-on via API can make sense. If you only need try-on on Shopify PDPs, building on Fal is often slower than installing a purpose-built app.</p>`,
      fr: `<p>Fal AI = infra horizontale pour builders. Stylab = logiciel vertical apparel Shopify : un job, un admin, une facturation.</p>
<p>Si vous intégrez déjà Fal pour plusieurs features génératives, l'API peut convenir. Si vous n'avez besoin que de l'essayage PDP Shopify, une app dédiée est souvent plus rapide.</p>`,
    },
    rows: [
      row('One-click Shopify install', 'Yes', 'Custom integration'),
      row('Try-on-specific merchant admin', 'Yes', 'Build yourself'),
      row('A/B test storefront impact', 'Built-in', 'Custom'),
      row('Predictable merchant pricing', 'Plan tiers ($0–$149/mo)', 'Dev time + API usage'),
      row('Scope', 'Shopify apparel try-on', 'Broad generative API platform'),
      row('Shopper privacy UX (upload flow)', 'Included widget copy', 'Your compliance copy'),
    ],
    chooseStylab: {
      en: 'Choose Stylab to validate try-on on Shopify this week with measurement built in — especially if generative API infrastructure is not already on your roadmap.',
      fr: 'Choisissez Stylab pour valider l\'essayage sur Shopify cette semaine avec mesure intégrée — surtout sans infra API génératif existante.',
    },
    chooseOther: {
      en: 'Choose Fal AI when engineers already orchestrate multiple generative models and try-on is one component of a larger product.',
      fr: 'Choisissez Fal AI quand des ingénieurs orchestrent déjà plusieurs modèles génératifs et l\'essayage n\'est qu\'un composant.',
    },
    evaluation: API_EVAL,
    pitfalls: {
      en: `<ul><li>Subscribing to generative infra breadth when you only need one merchant-facing workflow</li></ul>`,
      fr: `<ul><li>Souscrire à une infra génératif large pour un seul workflow marchand</li></ul>`,
    },
  },
];

export const COMPARE_HUB = {
  intro: {
    en: `<p>These pages help Shopify apparel merchants compare Stylab with other try-on options — honestly. We do not claim to be the best fit for every store. Use the guides to shortlist, pilot on your SKUs, and measure before scaling.</p>
<h3>How to use these comparisons</h3>
<ul>
<li><strong>Shopify alternatives</strong> — other App Store or fashion try-on apps for standard product pages</li>
<li><strong>API alternatives</strong> — build-your-own routes if you have engineers and non-Shopify surfaces</li>
</ul>
<p>Start with the comparison closest to your shortlist, then read our <a href="../resources/blog/reduce-purchase-hesitation-shopify.html">5-SKU rollout guide</a> and <a href="../resources/blog/ab-test-virtual-try-on.html">A/B testing guide</a>.</p>`,
    fr: `<p>Ces pages aident les marchands apparel Shopify à comparer Stylab avec d'autres options — honnêtement. Utilisez-les pour shortlister, piloter sur vos SKU et mesurer avant de scaler.</p>
<h3>Comment utiliser ces comparaisons</h3>
<ul>
<li><strong>Alternatives Shopify</strong> — autres apps App Store pour pages produit standard</li>
<li><strong>Alternatives API</strong> — routes build-your-own avec ingénieurs</li>
</ul>
<p>Commencez par la comparaison la plus proche de votre shortlist, puis le <a href="../resources/blog/reduce-purchase-hesitation-shopify.html">guide 5 SKU</a> et le <a href="../resources/blog/ab-test-virtual-try-on.html">guide A/B</a>.</p>`,
  },
};

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
