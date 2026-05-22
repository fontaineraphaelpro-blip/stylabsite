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

export const SOLUTIONS_HUB = {
  heroLead: {
    en: 'Virtual try-on paths for Shopify apparel merchants — from indie labels to high-volume catalogs.',
    fr: 'Parcours d\'essayage virtuel pour marchands apparel Shopify — de la marque indie au catalogue à fort volume.',
  },
  intro: {
    en: `<p>Stylab is built for brands that sell visual fashion on Shopify — where shoppers want to see style, color, and look before they buy. Pick the path that matches your catalog, traffic, and team. Every route starts the same way: install from the App Store, enable try-on on a few hero SKUs, measure, then expand.</p>
<h3>How to choose</h3>
<ul>
<li><strong>Fashion brands</strong> — seasonal collections, dresses, tops, and multi-SKU catalogs where visualization drives conversion</li>
<li><strong>Streetwear &amp; urban apparel</strong> — hoodies, jerseys, graphic tees; mobile-first shoppers who buy on vibe</li>
<li><strong>Enterprise</strong> — high-volume stores that need Scale plan quotas, onboarding, and catalog-wide controls</li>
<li><strong>Other platforms &amp; API</strong> — honest guidance when Shopify is not your stack, or when you need a custom build</li>
</ul>
<p>New to try-on? Read our <a href="../resources/blog/reduce-purchase-hesitation-shopify.html">5-SKU rollout guide</a>, try the <a href="../index.html#try-it">live demo</a>, or estimate volume in the <a href="../resources/free-tools.html">usage calculator</a>.</p>`,
    fr: `<p>Stylab est conçu pour les marques qui vendent de la mode visuelle sur Shopify — où le client veut voir le style, la couleur et le look avant d'acheter. Choisissez le parcours adapté à votre catalogue, trafic et équipe. Chaque route commence pareil : installer depuis l'App Store, activer l'essayage sur quelques SKU phares, mesurer, puis élargir.</p>
<h3>Comment choisir</h3>
<ul>
<li><strong>Marques mode</strong> — collections saisonnières, robes, tops et catalogues multi-SKU où la visualisation compte</li>
<li><strong>Streetwear</strong> — hoodies, maillots, tees graphiques ; clients mobile-first qui achètent sur l'identité visuelle</li>
<li><strong>Enterprise</strong> — boutiques à fort volume, plan Scale, onboarding et contrôles catalogue</li>
<li><strong>Autres plateformes &amp; API</strong> — guidance honnête hors Shopify ou pour un build sur mesure</li>
</ul>
<p>Nouveau sur l'essayage ? Lisez le <a href="../resources/blog/reduce-purchase-hesitation-shopify.html">guide 5 SKU</a>, essayez la <a href="../index.html#try-it">démo live</a> ou estimez votre volume avec le <a href="../resources/free-tools.html">calculateur</a>.</p>`,
  },
};

export const SOLUTIONS = [
  {
    slug: 'fashion-brands',
    title: { en: 'Virtual Try-On for Fashion Brands on Shopify', fr: 'Essayage virtuel pour marques mode sur Shopify' },
    lead: {
      en: 'Help shoppers see your collection on themselves before checkout. Stylab adds a virtual fitting room to Shopify product pages — no theme edits required.',
      fr: 'Aidez vos clients à se voir dans votre collection avant l\'achat. Stylab ajoute une cabine d\'essayage virtuelle à vos pages produit Shopify — sans modifier le thème.',
    },
    overview: {
      en: `<p>Fashion shoppers buy with their eyes — but a flat product photo rarely shows how a piece looks <em>on them</em>. When shoppers hesitate at add-to-cart, it is often because they cannot imagine fit, drape, color, and overall style on their own body.</p>
<p>Stylab gives Shopify apparel brands a try-on button on product pages. Shoppers upload a photo, generate a preview in seconds, and move toward checkout with more confidence. You control which SKUs get try-on, upload optional flat-lay garment photos for cleaner AI output, and measure sessions and add-to-cart activity from one admin.</p>
<h3>Who this is for</h3>
<ul>
<li>DTC and ready-to-wear labels with visual collections</li>
<li>Brands where color and silhouette matter more than precise sizing charts</li>
<li>Merchants who want data before enabling try-on store-wide</li>
</ul>`,
      fr: `<p>En mode, on achète avec les yeux — mais une photo à plat montre rarement comment la pièce tombe <em>sur soi</em>. L'hésitation à l'ajout panier vient souvent de l'impossibilité de se projeter : coupe, tombé, couleur et style global.</p>
<p>Stylab ajoute un bouton d'essayage sur vos pages produit Shopify. Le client uploade une photo, génère un aperçu en quelques secondes et avance vers le checkout avec plus de confiance. Vous choisissez les SKU, uploadez des flat-lays optionnels pour un meilleur rendu IA, et mesurez sessions et ajouts panier depuis un seul admin.</p>
<h3>Pour qui</h3>
<ul>
<li>Marques DTC et prêt-à-porter à collections visuelles</li>
<li>Catalogues où couleur et silhouette comptent plus qu'un tableau de mesures</li>
<li>Marchands qui veulent des data avant un déploiement global</li>
</ul>`,
    },
    featuresTitle: { en: 'Built for fashion merchandising', fr: 'Pensé pour le merchandising mode' },
    features: [
      {
        title: { en: 'Per-product activation', fr: 'Activation par produit' },
        body: { en: 'Start with hero SKUs, new drops, or color variants — expand when results justify it.', fr: 'Commencez par vos SKU phares, nouveautés ou variantes couleur — élargissez quand les résultats le justifient.' },
      },
      {
        title: { en: 'Flat-lay garment uploads', fr: 'Uploads flat-lay' },
        body: { en: 'Optional reference photos per product for cleaner try-on output on structured pieces.', fr: 'Photos de référence optionnelles par produit pour un rendu plus propre sur les pièces structurées.' },
      },
      {
        title: { en: 'Add-to-cart analytics', fr: 'Analytics ajout panier' },
        body: { en: 'See try-on sessions, usage by product, and cart actions after try-on — not vanity metrics.', fr: 'Sessions d\'essayage, usage par produit et actions panier après essayage — pas des métriques vanity.' },
      },
      {
        title: { en: 'Built-in A/B testing', fr: 'Tests A/B intégrés' },
        body: { en: 'Compare product page behavior with and without try-on before a full rollout.', fr: 'Comparez le comportement avec et sans essayage avant un déploiement complet.' },
      },
    ],
    rolloutTitle: { en: 'Launch try-on on your fashion catalog', fr: 'Lancer l\'essayage sur votre catalogue mode' },
    rollout: {
      en: `<ol>
<li><strong>Install from the Shopify App Store</strong> — no manual theme editing. The try-on widget appears on enabled product pages.</li>
<li><strong>Pick 3–5 hero SKUs</strong> — best sellers, new season pieces, or items with high PDP views and return-prone fit questions.</li>
<li><strong>Upload flat-lays where helpful</strong> — structured tops, dresses, and jackets often benefit from a clean garment reference photo.</li>
<li><strong>Run a 30-day A/B test</strong> — compare try-on vs control buckets. See our <a href="../resources/blog/ab-test-virtual-try-on.html">A/B guide</a>.</li>
<li><strong>Scale what works</strong> — enable more SKUs, upgrade plan when usage grows. Only successful try-ons count toward your quota.</li>
</ol>
<p>Plans start free (50 successful try-ons/month). <a href="../index.html#pricing">View pricing</a> or <a href="../index.html#try-it">try the live demo</a>.</p>`,
      fr: `<ol>
<li><strong>Installer depuis l'App Store Shopify</strong> — sans modifier le thème. Le widget apparaît sur les produits activés.</li>
<li><strong>Choisir 3–5 SKU phares</strong> — best-sellers, nouveautés saison ou produits à fort trafic PDP et questions de fit.</li>
<li><strong>Uploader des flat-lays si utile</strong> — tops structurés, robes et vestes bénéficient souvent d'une photo garment propre.</li>
<li><strong>Lancer un A/B 30 jours</strong> — essayage vs contrôle. Voir le <a href="../resources/blog/ab-test-virtual-try-on.html">guide A/B</a>.</li>
<li><strong>Scaler ce qui fonctionne</strong> — activer plus de SKU, upgrader le plan avec l'usage. Seuls les essayages réussis comptent.</li>
</ol>
<p>Plans gratuits (50 essayages réussis/mois). <a href="../index.html#pricing">Voir les tarifs</a> ou <a href="../index.html#try-it">essayer la démo live</a>.</p>`,
    },
    bullets: {
      en: ['Enable try-on on hero SKUs and new drops', 'Upload flat-lay photos for cleaner AI results', 'Measure add-to-cart after try-on', 'A/B test try-on vs control'],
      fr: ['Activez l\'essayage sur vos SKU phares et nouveautés', 'Uploadez des flat-lays pour un meilleur rendu IA', 'Mesurez les ajouts au panier après essayage', 'A/B test essayage vs contrôle'],
    },
  },
  {
    slug: 'streetwear',
    title: { en: 'AI Try-On for Streetwear & Urban Apparel', fr: 'Essayage IA pour streetwear & urban apparel' },
    lead: {
      en: 'Streetwear shoppers buy on vibe. Let them preview hoodies, jerseys, and graphic tees on themselves before they commit.',
      fr: 'Le streetwear se vend sur l\'identité visuelle. Permettez de prévisualiser hoodies, maillots et tees graphiques avant l\'achat.',
    },
    overview: {
      en: `<p>Streetwear and urban apparel is rarely about precise measurements — it is about identity, graphics, color, and how a piece looks on <em>you</em>. Your shoppers scroll on mobile, compare drops, and hesitate when they cannot picture the hoodie or jersey on themselves.</p>
<p>Stylab adds a mobile-first try-on widget to Shopify product pages. Upload a photo, see the graphic tee or jersey rendered on your body, then add to cart with more confidence. Built for the categories streetwear brands sell most: hoodies, jerseys, collared tops, and statement tees.</p>
<h3>Why streetwear brands use try-on</h3>
<ul>
<li>Graphics and color read differently on each person — preview reduces guesswork</li>
<li>Mobile PDP traffic is high; the widget is designed for phone upload flows</li>
<li>Drop culture rewards fast launches — enable try-on per SKU without dev tickets</li>
</ul>`,
      fr: `<p>Le streetwear ne se résume pas aux mesures — c'est l'identité, le graphisme, la couleur et le rendu sur <em>soi</em>. Vos clients scrollent sur mobile, comparent les drops et hésitent quand ils ne se voient pas dans le hoodie ou le maillot.</p>
<p>Stylab ajoute un widget d'essayage mobile-first sur vos pages produit Shopify. Photo, aperçu du tee graphique ou du maillot sur le corps, puis ajout panier avec plus de confiance. Conçu pour les catégories streetwear : hoodies, maillots, cols et tees statement.</p>
<h3>Pourquoi le streetwear utilise l'essayage</h3>
<ul>
<li>Graphismes et couleurs se lisent différemment sur chaque personne</li>
<li>Trafic mobile élevé sur les PDP ; widget pensé pour l'upload phone</li>
<li>Drops rapides — activation par SKU sans ticket dev</li>
</ul>`,
    },
    featuresTitle: { en: 'Made for hype drops and mobile shoppers', fr: 'Pensé pour les drops et le mobile' },
    features: [
      {
        title: { en: 'Hoodies, jerseys, graphic tees', fr: 'Hoodies, maillots, tees graphiques' },
        body: { en: 'Optimized for the visual categories streetwear catalogs run on every season.', fr: 'Optimisé pour les catégories visuelles de chaque saison streetwear.' },
      },
      {
        title: { en: 'Mobile-first widget', fr: 'Widget mobile-first' },
        body: { en: 'Shoppers upload from phone on standard Shopify product pages — where most streetwear traffic lives.', fr: 'Upload depuis le téléphone sur les PDP Shopify standard — là où vit le trafic streetwear.' },
      },
      {
        title: { en: 'Per-SKU toggles', fr: 'Toggles par SKU' },
        body: { en: 'Enable try-on on new drops only; leave accessories and non-apparel off.', fr: 'Activez l\'essayage sur les nouveautés uniquement ; laissez accessoires et non-apparel désactivés.' },
      },
      {
        title: { en: 'Free plan to validate', fr: 'Plan gratuit pour valider' },
        body: { en: 'Start with 50 successful try-ons/month — enough to test a drop before upgrading.', fr: 'Commencez avec 50 essayages réussis/mois — suffisant pour tester un drop avant d\'upgrader.' },
      },
    ],
    rolloutTitle: { en: 'Roll out try-on on your next drop', fr: 'Déployer l\'essayage sur votre prochain drop' },
    rollout: {
      en: `<ol>
<li><strong>Enable try-on on 2–3 drop SKUs</strong> — the pieces with the strongest visual identity (graphic tee, jersey, hoodie).</li>
<li><strong>Test on mobile yourself</strong> — use the same photo you expect shoppers to upload. Quality varies by lighting and garment photo.</li>
<li><strong>Promote try-on in PDP copy</strong> — a short line above the fold (“See it on you”) nudges usage without overpromising results.</li>
<li><strong>Track add-to-cart after try-on</strong> — compare against your baseline PDP conversion for those SKUs.</li>
</ol>
<p>See try-on live on our demo store <a href="https://remadeicons.shop/products/shadow-stripe-collared-soccer-jersey-4" target="_blank" rel="noopener">REMADE ICONS</a> or on the <a href="../index.html#try-it">marketing site demo</a>.</p>`,
      fr: `<ol>
<li><strong>Activer l'essayage sur 2–3 SKU du drop</strong> — pièces à forte identité visuelle (tee graphique, maillot, hoodie).</li>
<li><strong>Tester sur mobile vous-même</strong> — même type de photo que vos clients. Le rendu varie selon lumière et photo produit.</li>
<li><strong>Promouvoir l'essayage dans le copy PDP</strong> — une ligne courte (“Voyez-le sur vous”) sans sur-promettre.</li>
<li><strong>Suivre l'ajout panier après essayage</strong> — comparez à votre conversion PDP baseline sur ces SKU.</li>
</ol>
<p>Voyez l'essayage live sur <a href="https://remadeicons.shop/products/shadow-stripe-collared-soccer-jersey-4" target="_blank" rel="noopener">REMADE ICONS</a> ou sur la <a href="../index.html#try-it">démo du site</a>.</p>`,
    },
    bullets: {
      en: ['Hoodies, jerseys, graphic tees', 'Mobile-first widget', 'Enable try-on per SKU', 'Free: 50 successful try-ons/mo'],
      fr: ['Hoodies, maillots, tees graphiques', 'Widget mobile-first', 'Activation par SKU', 'Gratuit : 50 essayages réussis/mo'],
    },
  },
  {
    slug: 'enterprise',
    title: { en: 'Enterprise Virtual Try-On for High-Volume Stores', fr: 'Essayage virtuel enterprise pour gros volumes' },
    lead: {
      en: 'Scale try-on across a large catalog with dedicated onboarding, priority processing, and the Scale plan (4,000 try-ons/mo).',
      fr: 'Scalez l\'essayage sur un large catalogue avec onboarding dédié, traitement prioritaire et plan Scale (4 000 essayages/mo).',
    },
    overview: {
      en: `<p>High-volume Shopify apparel stores face a different problem than indie labels: not whether try-on works, but how to roll it out across hundreds of SKUs without blowing the quota, slowing PDPs, or losing analytics in spreadsheets.</p>
<p>Stylab's Scale plan supports 4,000 successful try-ons per month with priority processing and dedicated onboarding. Per-product controls let merchandising teams enable try-on by collection, season, or SKU list. Store-wide analytics and A/B buckets help you justify expansion to leadership with data — not hype.</p>
<h3>Enterprise fit signals</h3>
<ul>
<li>1,000+ apparel SKUs with meaningful PDP traffic</li>
<li>Merchandising team that needs per-product toggles at catalog scale</li>
<li>Leadership asking for measurable try-on ROI before budget approval</li>
</ul>`,
      fr: `<p>Les boutiques Shopify à fort volume ont un problème différent des labels indie : pas savoir si l'essayage marche, mais comment le déployer sur des centaines de SKU sans exploser le quota, ralentir les PDP ou perdre les analytics dans des tableurs.</p>
<p>Le plan Scale Stylab supporte 4 000 essayages réussis par mois avec traitement prioritaire et onboarding dédié. Les contrôles par produit permettent d'activer l'essayage par collection, saison ou liste de SKU. Analytics store-wide et buckets A/B aident à justifier l'expansion avec des data — pas du hype.</p>
<h3>Signaux enterprise</h3>
<ul>
<li>1 000+ SKU apparel avec trafic PDP significatif</li>
<li>Équipe merchandising qui a besoin de toggles à l'échelle catalogue</li>
<li>Direction qui demande un ROI mesurable avant budget</li>
</ul>`,
    },
    featuresTitle: { en: 'Scale without rebuilding your stack', fr: 'Scaler sans reconstruire votre stack' },
    features: [
      {
        title: { en: 'Scale plan: 4,000 try-ons/mo', fr: 'Plan Scale : 4 000 essayages/mo' },
        body: { en: 'Predictable Shopify billing at high volume. Only successful generations count.', fr: 'Facturation Shopify prévisible à fort volume. Seules les générations réussies comptent.' },
      },
      {
        title: { en: 'Dedicated onboarding', fr: 'Onboarding dédié' },
        body: { en: 'Phased rollout plan: which collections first, quota allocation, and success metrics.', fr: 'Plan de déploiement par phases : collections, allocation quota et métriques de succès.' },
      },
      {
        title: { en: 'Catalog-scale controls', fr: 'Contrôles à l\'échelle catalogue' },
        body: { en: 'Enable or disable try-on per product from admin — no theme deploy for each SKU.', fr: 'Activer ou désactiver par produit depuis l\'admin — pas de deploy thème par SKU.' },
      },
      {
        title: { en: 'Priority support & processing', fr: 'Support et traitement prioritaires' },
        body: { en: 'Faster generation queue and direct support channel for high-traffic stores.', fr: 'File de génération accélérée et canal support direct pour boutiques à fort trafic.' },
      },
    ],
    rolloutTitle: { en: 'Phased enterprise rollout', fr: 'Déploiement enterprise par phases' },
    rollout: {
      en: `<ol>
<li><strong>Audit top PDPs by traffic</strong> — start with the 20% of SKUs that drive most views and cart hesitation.</li>
<li><strong>Define success metrics upfront</strong> — try-on rate, add-to-cart after try-on, and comparison vs control PDPs.</li>
<li><strong>Pilot one collection</strong> — 30-day A/B on a single line before enabling adjacent categories.</li>
<li><strong>Align quota to traffic</strong> — use the <a href="../resources/free-tools.html">usage calculator</a> to pick Free, Growth, or Scale before launch.</li>
<li><strong>Contact Style Lab for onboarding</strong> — <a href="../contact.html">reach out</a> for Scale plan setup and rollout planning.</li>
</ol>`,
      fr: `<ol>
<li><strong>Auditer les PDP les plus visitées</strong> — commencer par les 20 % de SKU qui concentrent vues et hésitation panier.</li>
<li><strong>Définir les métriques de succès</strong> — taux d'essayage, ajout panier après essayage, comparaison vs PDP contrôle.</li>
<li><strong>Piloter une collection</strong> — A/B 30 jours sur une ligne avant d'activer les catégories adjacentes.</li>
<li><strong>Aligner le quota au trafic</strong> — <a href="../resources/free-tools.html">calculateur</a> pour choisir Free, Growth ou Scale.</li>
<li><strong>Contacter Style Lab pour l'onboarding</strong> — <a href="../contact.html">nous écrire</a> pour le plan Scale et le plan de déploiement.</li>
</ol>`,
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
      en: 'Stylab is built for Shopify today. For PrestaShop, WooCommerce, or custom stacks, contact Style Lab — we will be honest about what is available.',
      fr: 'Stylab est conçu pour Shopify aujourd\'hui. Pour PrestaShop, WooCommerce ou stacks custom, contactez Style Lab — nous serons transparents sur ce qui est disponible.',
    },
    overview: {
      en: `<p>Stylab Virtual Try-On ships as a native Shopify app: install from the App Store, manage products and analytics inside Shopify admin, and bill through Shopify subscriptions. That is the supported, production-ready path today.</p>
<p>We do <strong>not</strong> ship a PrestaShop module or WooCommerce plugin yet. If you are on another platform, contact Style Lab to discuss your stack, timeline, and whether a custom integration or future platform support makes sense.</p>
<h3>What works today</h3>
<ul>
<li><strong>Shopify</strong> — full widget, admin, analytics, A/B, and billing</li>
<li><strong>Other platforms</strong> — no self-serve plugin; contact us for roadmap and custom work</li>
</ul>`,
      fr: `<p>Stylab Virtual Try-On est une app Shopify native : installation App Store, gestion produits et analytics dans l'admin Shopify, facturation via abonnements Shopify. C'est le parcours supporté et production-ready aujourd'hui.</p>
<p>Nous ne proposons <strong>pas</strong> encore de module PrestaShop ou plugin WooCommerce. Sur une autre plateforme, contactez Style Lab pour discuter stack, timeline et intégration sur mesure ou support futur.</p>
<h3>Ce qui fonctionne aujourd'hui</h3>
<ul>
<li><strong>Shopify</strong> — widget complet, admin, analytics, A/B et facturation</li>
<li><strong>Autres plateformes</strong> — pas de plugin self-serve ; contactez-nous pour roadmap et travail custom</li>
</ul>`,
    },
    featuresTitle: { en: 'Shopify-native today', fr: 'Shopify-native aujourd\'hui' },
    features: [
      {
        title: { en: 'Shopify App Store install', fr: 'Installation App Store Shopify' },
        body: { en: 'Live in minutes on standard Shopify themes — no manual code edits.', fr: 'Live en minutes sur thèmes Shopify standard — sans modifier le code.' },
      },
      {
        title: { en: 'Admin inside Shopify', fr: 'Admin dans Shopify' },
        body: { en: 'Product toggles, widget settings, analytics, and billing in one merchant workflow.', fr: 'Toggles produit, réglages widget, analytics et facturation dans un seul workflow.' },
      },
      {
        title: { en: 'Other platforms: contact us', fr: 'Autres plateformes : contactez-nous' },
        body: { en: 'Tell us your platform, catalog size, and timeline. We will reply with honest options.', fr: 'Indiquez plateforme, taille catalogue et timeline. Réponse honnête sur les options.' },
      },
    ],
    rollout: {
      en: `<p>On Shopify? <a href="https://apps.shopify.com/try-on-stylelab">Install Stylab</a>, enable a few products, and measure. Not on Shopify? <a href="../contact.html">Contact Style Lab</a> with your platform and use case — no sales fluff, just a straight answer on fit and timeline.</p>`,
      fr: `<p>Sur Shopify ? <a href="https://apps.shopify.com/try-on-stylelab">Installez Stylab</a>, activez quelques produits et mesurez. Pas sur Shopify ? <a href="../contact.html">Contactez Style Lab</a> avec votre plateforme et cas d'usage — réponse directe sur faisabilité et délais.</p>`,
    },
    bullets: {
      en: ['Shopify App Store — live in minutes', 'Full admin inside Shopify', 'Other platforms: contact us'],
      fr: ['App Store Shopify — live en minutes', 'Admin complet dans Shopify', 'Autres plateformes : contactez-nous'],
    },
    note: { en: 'No PrestaShop or WooCommerce plugin shipped yet.', fr: 'Pas de plugin PrestaShop ou WooCommerce disponible pour l\'instant.' },
  },
  {
    slug: 'api',
    title: { en: 'API & Custom Integrations', fr: 'API et intégrations sur mesure' },
    lead: {
      en: 'Stylab is a managed Shopify app by default. For headless storefronts, mobile apps, or custom ML pipelines, contact Style Lab to discuss scope.',
      fr: 'Stylab est une app Shopify managée par défaut. Pour storefront headless, apps mobile ou pipelines ML custom, contactez Style Lab pour discuter du scope.',
    },
    overview: {
      en: `<p>Most apparel merchants on Shopify do not need an API — they need a try-on button on product pages, an admin to toggle SKUs, and analytics that tie try-on to cart actions. That is what the Stylab Shopify app delivers out of the box.</p>
<p>Teams evaluating a <strong>build-your-own</strong> route — headless Shopify, custom mobile app, in-store kiosk, or internal ML stack — should compare total cost: API credits, engineering time, widget maintenance, privacy compliance, and analytics instrumentation. See our <a href="../compare/">API comparison pages</a> for an honest build-vs-buy view.</p>
<h3>When to contact us for custom work</h3>
<ul>
<li>Non-standard storefront (headless, native app) that cannot use the Shopify theme widget</li>
<li>Enterprise volume with specific SLA, branding, or data residency requirements</li>
<li>Partners building multi-tenant try-on for agency clients</li>
</ul>`,
      fr: `<p>La plupart des marchands apparel Shopify n'ont pas besoin d'une API — ils veulent un bouton d'essayage sur les PDP, un admin pour toggler les SKU et des analytics liées au panier. C'est ce que l'app Stylab livre clé en main.</p>
<p>Les équipes qui évaluent un parcours <strong>build-your-own</strong> — Shopify headless, app mobile, kiosk magasin ou stack ML interne — doivent comparer le coût total : crédits API, temps dev, maintenance widget, conformité privacy et instrumentation analytics. Voir nos <a href="../compare/">pages comparaison API</a> pour un avis build-vs-buy honnête.</p>
<h3>Quand nous contacter pour du sur mesure</h3>
<ul>
<li>Storefront non standard (headless, app native) sans widget thème Shopify</li>
<li>Volume enterprise avec SLA, branding ou exigences de résidence data</li>
<li>Partenaires multi-tenant pour clients agence</li>
</ul>`,
    },
    featuresTitle: { en: 'Managed app vs custom build', fr: 'App managée vs build custom' },
    features: [
      {
        title: { en: 'Standard: Shopify widget + admin', fr: 'Standard : widget + admin Shopify' },
        body: { en: 'Fastest path to measurable try-on on product pages. Install, pilot, scale.', fr: 'Parcours le plus rapide vers un essayage mesurable sur PDP. Installer, piloter, scaler.' },
      },
      {
        title: { en: 'No public self-serve API', fr: 'Pas d\'API self-serve publique' },
        body: { en: 'There is no open API key signup today. Custom routes require a scoped conversation with Style Lab.', fr: 'Pas d\'inscription API ouverte aujourd\'hui. Routes custom = conversation scoped avec Style Lab.' },
      },
      {
        title: { en: 'Compare build vs buy', fr: 'Comparer build vs buy' },
        body: { en: 'Read Stylab vs FASHN AI, Replicate, Fal AI, and others before committing engineering weeks.', fr: 'Lisez Stylab vs FASHN AI, Replicate, Fal AI et autres avant d\'engager des semaines de dev.' },
      },
    ],
    rollout: {
      en: `<p><strong>Shopify merchant?</strong> Start with the <a href="https://apps.shopify.com/try-on-stylelab">App Store app</a> — validate quality and ROI before considering custom builds.</p>
<p><strong>Custom integration?</strong> Email <a href="../contact.html">Style Lab</a> with your architecture diagram, monthly try-on volume estimate, and launch timeline. We will tell you if Stylab can support it or if another path is a better fit.</p>`,
      fr: `<p><strong>Marchand Shopify ?</strong> Commencez par l'<a href="https://apps.shopify.com/try-on-stylelab">app App Store</a> — validez qualité et ROI avant un build custom.</p>
<p><strong>Intégration sur mesure ?</strong> Écrivez à <a href="../contact.html">Style Lab</a> avec schéma d'architecture, volume mensuel estimé et timeline. Nous dirons si Stylab peut supporter ou si une autre voie convient mieux.</p>`,
    },
    bullets: {
      en: ['Standard: Shopify widget + admin', 'No public self-serve API today', 'Enterprise: contact Style Lab'],
      fr: ['Standard : widget + admin Shopify', 'Pas d\'API self-serve publique', 'Enterprise : contactez Style Lab'],
    },
  },
];
