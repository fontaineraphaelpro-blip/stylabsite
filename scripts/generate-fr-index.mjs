#!/usr/bin/env node
/**
 * Generates fr/index.html from index.html with French copy + adjusted paths.
 * Run: node scripts/generate-fr-index.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const replacements = [
  ['lang="en"', 'lang="fr"'],
  ['<html lang="fr">', '<html lang="fr">'],
  ['assets/', '../assets/'],
  ['href="vton-widget.js', 'href="../vton-widget.js'],
  ['href="solutions/"', 'href="solutions/"'],
  ['href="compare/"', 'href="compare/"'],
  ['href="resources/"', 'href="resources/"'],
  ['href="contact.html"', 'href="../contact.html"'],
  ['href="confidentialite.html"', 'href="../confidentialite.html"'],
  ['href="support.html"', 'href="../support.html"'],
  ['href="conditions.html"', 'href="../conditions.html"'],
  // Title & meta
  ['Stylab Virtual Try-On | AI Try-On for Shopify Apparel Stores', 'Stylab Virtual Try-On | Essayage virtuel IA pour Shopify'],
  ['content="Add AI virtual try-on to your Shopify product pages. Let shoppers see themselves wearing your apparel, reduce purchase hesitation, and measure try-on impact."', 'content="Ajoutez l\'essayage virtuel IA à vos pages produit Shopify. Permettez à vos clients de se voir porter vos vêtements et mesurez l\'impact."'],
  // Nav
  ['Live demo', 'Démo live'],
  ['>Product<', '>Produit<'],
  ['>Demo<', '>Démo<'],
  ['>Install<', '>Installer<'],
  ['Features', 'Fonctionnalités'],
  ['>Explore<span class="nav-chevron"', '>Explorer<span class="nav-chevron"'],
  ['drawer-label">Explore</span>', 'drawer-label">Explorer</span>'],
  ['<h4>Explore</h4>', '<h4>Découvrir</h4>'],
  ['Pricing', 'Tarifs'],
  ['Solutions', 'Solutions'],
  ['>Compare</a>', '>Comparer</a>'],
  ['Resources', 'Ressources'],
  ['<a href="/fr/" class="lang-switch">Français</a>', '<a href="/" class="lang-switch">EN</a>'],
  ['Everything you need to launch and measure try-on', 'Tout pour lancer et mesurer l\'essayage'],
  ['Install once from Shopify. Control which products get try-on, measure add-to-cart impact, and manage usage from one admin.', 'Installez depuis Shopify. Activez l\'essayage par produit, mesurez l\'impact panier et gérez l\'usage depuis un seul admin.'],
  ['No-code product page widget', 'Widget page produit sans code'],
  ['Install from the Shopify App Store. Shoppers upload a photo and preview on mobile or desktop — no theme edits.', 'Installez depuis l\'App Store Shopify. Le client uploade une photo et prévisualise sur mobile ou desktop — sans modifier le thème.'],
  ['Product-level activation', 'Activation par produit'],
  ['Enable or disable try-on per SKU from your admin — start with hero products, expand when you are ready.', 'Activez ou désactivez l\'essayage par SKU depuis l\'admin — commencez par vos produits phares.'],
  ['Flat-lay uploads', 'Uploads flat-lay'],
  ['Upload optional flat-lay garment photos for cleaner AI output on key products.', 'Uploadez des photos flat-lay pour un rendu IA plus propre sur vos produits clés.'],
  ['Built-in A/B testing', 'Tests A/B intégrés'],
  ['Compare product page behavior with and without try-on before rolling out store-wide.', 'Comparez le comportement avec et sans essayage avant un déploiement global.'],
  ['Add-to-cart analytics', 'Analytics ajout au panier'],
  ['Track try-on sessions and add-to-cart after try-on — see what happens once shoppers visualize fit.', 'Suivez les sessions d\'essayage et les ajouts panier — voyez ce qui se passe une fois le client visualisé.'],
  ['Smart quotas', 'Quotas intelligents'],
  ['Pay per successful generation. View remaining credits and usage by product in one dashboard.', 'Payez par génération réussie. Consultez crédits restants et usage par produit dans un seul dashboard.'],
  ['Let shoppers see themselves wearing your products before they buy.\n                            Install from the App Store and add a virtual fitting room to product pages in minutes.', 'Permettez à vos clients de se voir porter vos produits avant d\'acheter.\n                            Installez depuis l\'App Store et ajoutez une cabine d\'essayage virtuelle en quelques minutes.'],
  ['<strong>50</strong><span>Free try-ons / mo</span>', '<strong>50</strong><span>Essayages gratuits / mo</span>'],
  ['<strong>~30s</strong><span>Avg. preview time</span>', '<strong>~30s</strong><span>Temps moyen d\'aperçu</span>'],
  ['<strong>77.8%</strong><span>Try-on → cart (pilot store)</span>', '<strong>77,8&nbsp;%</strong><span>Essayage → panier (pilote)</span>'],
  ['Shopify App Store install', 'Installation App Store Shopify'],
  ['Free plan · 50/mo', 'Plan gratuit · 50/mo'],
  ['~30 sec preview', 'Aperçu ~30 sec'],
  ['Pay per successful try-on', 'Paiement à l\'essayage réussi'],
  ['GDPR webhooks', 'Webhooks RGPD'],
  ['Upload a photo on the demo product page below — same widget, same flow as on Shopify.', 'Uploadez une photo sur la page produit démo ci-dessous — même widget, même parcours que sur Shopify.'],
  // How it works
  ['How it works', 'Comment ça marche'],
  ['Live on your store in three steps', 'En ligne sur votre boutique en trois étapes'],
  ['From App Store install to shopper preview — no theme editing, no custom ML pipeline.', 'De l\'installation App Store à l\'aperçu client — sans modifier le thème, sans pipeline ML custom.'],
  ['Install the Shopify app', 'Installez l\'app Shopify'],
  ['Add Stylab from the Shopify App Store. The try-on widget appears on product pages automatically.', 'Ajoutez Stylab depuis l\'App Store Shopify. Le widget d\'essayage apparaît automatiquement sur les pages produit.'],
  ['~5 min setup', '~5 min d\'installation'],
  ['Select eligible products', 'Sélectionnez les produits éligibles'],
  ['Enable try-on on hero SKUs from your admin. Optionally upload flat-lay garment photos for cleaner AI output.', 'Activez l\'essayage sur vos SKU phares depuis l\'admin. Uploadez optionnellement des photos flat-lay pour un rendu IA plus propre.'],
  ['Per-product control', 'Contrôle par produit'],
  ['Let shoppers try items on with AI', 'Laissez les clients essayer avec l\'IA'],
  ['Customers upload a photo, get a preview in ~30 seconds, and move to checkout with more confidence.', 'Le client uploade une photo, obtient un aperçu en ~30 secondes et passe commande avec plus de confiance.'],
  ['See pricing', 'Voir les tarifs'],
  // Product section
  ['Help shoppers visualize fit before add-to-cart', 'Aidez les clients à visualiser le fit avant l\'ajout au panier'],
  ['When customers can&rsquo;t picture themselves in the garment, they hesitate. Stylab adds an interactive try-on button to your product pages and shows you what happens next.', 'Quand le client ne se projette pas dans le vêtement, il hésite. Stylab ajoute un bouton d\'essayage interactif sur vos pages produit et vous montre ce qui se passe ensuite.'],
  ['Shopify-native widget', 'Widget natif Shopify'],
  ['Install from the App Store. Shoppers upload a photo and preview on mobile or desktop — no theme edits.', 'Installez depuis l\'App Store. Le client uploade une photo et prévisualise sur mobile ou desktop — sans modifier le thème.'],
  ['Enable try-on on hero SKUs first. Upload optional flat-lay photos for cleaner AI output on key products.', 'Activez l\'essayage sur vos SKU phares d\'abord. Uploadez des photos flat-lay optionnelles pour un rendu IA plus propre.'],
  ['Analytics &amp; A/B testing', 'Analytics &amp; tests A/B'],
  ['Track try-on sessions, add-to-cart after try-on, and compare with/without try-on before rolling out store-wide.', 'Suivez les sessions d\'essayage, les ajouts panier après essayage, et comparez avec/sans essayage avant un déploiement global.'],
  ['Pay per successful try-on', 'Paiement à l\'essayage réussi'],
  ['Only successful generations count toward your quota. Failed runs can be retried. Credits visible in one dashboard.', 'Seules les générations réussies comptent dans votre quota. Les échecs peuvent être retentés. Crédits visibles dans un seul dashboard.'],
  // Social proof
  ['Results', 'Résultats'],
  ['Early stores, measurable signals', 'Boutiques early, signaux mesurables'],
  ['Pilot data from REMADE ICONS and feedback from early Shopify merchants. Results vary by catalog, traffic, and photography.', 'Données pilote REMADE ICONS et retours de marchands Shopify early. Résultats variables selon catalogue, trafic et photos.'],
  ['Try-on → add-to-cart (pilot)', 'Essayage → panier (pilote)'],
  ['Generation success rate', 'Taux de succès génération'],
  ['Average preview time', 'Temps moyen d\'aperçu'],
  ['Pilot metrics from REMADE ICONS (single store). Not a guaranteed conversion lift for every catalog.', 'Métriques pilote REMADE ICONS (une boutique). Pas une garantie de conversion pour tous les catalogues.'],
  ['We run Stylab on our jersey PDPs so shoppers preview the fit before buying — the same widget you can try on this page.', 'Nous utilisons Stylab sur nos PDP maillots pour que les clients prévisualisent le fit avant d\'acheter — le même widget que sur cette page.'],
  ['Streetwear · Live Shopify store · Official demo partner', 'Streetwear · Boutique Shopify live · Partenaire démo officiel'],
  ['Independent apparel brand', 'Marque apparel indépendante'],
  ['Shopify merchant · Early pilot · Hoodies &amp; tees', 'Marchand Shopify · Pilote early · Hoodies &amp; tees'],
  ['Streetwear label', 'Label streetwear'],
  ['Shopify merchant · Jerseys &amp; drops · Pilot phase', 'Marchand Shopify · Maillots &amp; drops · Phase pilote'],
  ['Listed on Shopify App Store', 'Listé sur l\'App Store Shopify'],
  ['What early Shopify merchants are saying', 'Ce que disent les premiers marchands Shopify'],
  ['Feedback from stores piloting try-on on product pages. Results vary by catalog, traffic, and photography.', 'Retours de boutiques qui testent l\'essayage sur leurs pages produit. Résultats variables selon catalogue, trafic et photos.'],
  ['We use Stylab on our product pages so shoppers can preview jerseys on themselves before buying — the same widget you can try on this site.', 'Nous utilisons Stylab sur nos pages produit pour que les clients prévisualisent les maillots sur eux — le même widget que sur ce site.'],
  ['Apparel · Live Shopify store', 'Apparel · Boutique Shopify live'],
  ['View live store →', 'Voir la boutique live →'],
  ['Installed from the App Store in one afternoon. No theme edits — we enabled try-on on five hero SKUs first.', 'Installé depuis l\'App Store en un après-midi. Sans modifier le thème — essayage activé sur cinq SKU phares d\'abord.'],
  ['Early pilot merchant', 'Marchand pilote early'],
  ['<span>Shopify apparel brand</span>', '<span>marque apparel Shopify</span>'],
  // Hero & phrases longues AVANT toute substitution partielle
  ['Built for Shopify apparel brands', 'Conçu pour marques apparel Shopify'],
  ['AI try-on for Shopify apparel brands', 'Essayage IA pour marques apparel Shopify'],
  ['Designed for Shopify apparel brands · ~30 sec average preview', 'Conçu pour marques apparel Shopify · aperçu en ~30 secondes'],
  ['Designed for Shopify apparel brands · Preview generated in seconds', 'Conçu pour marques apparel Shopify · aperçu en ~30 secondes'],
  ['AI virtual try-on for Shopify apparel brands.<br>Help shoppers visualize your products before they buy.', 'Essayage virtuel IA pour marques apparel Shopify.<br>Aidez vos clients à visualiser vos produits avant d\'acheter.'],
  ['AI virtual try-on for Shopify apparel brands.<br>Help shoppers buy with more confidence before checkout.', 'Essayage virtuel IA pour marques apparel Shopify.<br>Aidez vos clients à acheter avec plus de confiance.'],
  ['Streetwear &amp; jerseys', 'Streetwear &amp; maillots'],
  ['Live on REMADE ICONS', 'Live sur REMADE ICONS'],
  ['Feedback from early stores and pilot conversations. Full case studies with permission coming as we collect more data.', 'Retours de boutiques early et conversations pilotes. Études de cas complètes avec autorisation à venir.'],
  ['Pricing', 'Tarifs'],
  ['View live demo', 'Voir la démo'],
  ['Install on Shopify', 'Installer sur Shopify'],
  ['FAQ', 'FAQ'],
  ['Let shoppers see themselves wearing your products before they buy.\n                            Add a virtual fitting room to your product pages in minutes — no theme editing required.', 'Permettez à vos clients de se voir porter vos produits avant d\'acheter.\n                            Ajoutez une cabine d\'essayage virtuelle en quelques minutes — sans modifier votre thème.'],
  ['Free plan available · No-code setup · Works on mobile and desktop', 'Plan gratuit · Installation sans code · Mobile et desktop'],
  ['Free plan · 50 try-ons/mo', 'Plan gratuit · 50 essayages/mo'],
  ['No-code setup', 'Sans code'],
  ['Mobile-ready', 'Mobile'],
  ['We wanted add-to-cart after try-on, not vanity metrics. The admin shows sessions and cart actions in one place.', 'Nous voulions mesurer l\'ajout panier après essayage, pas des métriques vanity. L\'admin regroupe sessions et panier.'],
  ['Free try-ons / month', 'Essayages gratuits / mois'],
  ['App Store rating', 'Note App Store'],
  ['Same widget on Shopify', 'Même widget sur Shopify'],
  // Problem
  ['The challenge', 'Le défi'],
  ['Online shoppers hesitate when they can&rsquo;t picture the fit', 'Les acheteurs hésitent quand ils ne se projettent pas'],
  ['Product photos show the garment. Stylab helps shoppers imagine themselves wearing it.\n                            With a try-on button on your product pages, customers can upload a photo, generate a preview,\n                            and move to checkout with more confidence.', 'Les photos montrent le vêtement. Stylab aide le client à s\'imaginer le porter.\n                            Avec un bouton d\'essayage sur vos pages produit, il peut uploader une photo, générer un aperçu\n                            et passer commande avec plus de confiance.'],
  ['Reduce style hesitation before add-to-cart', 'Réduire l\'hésitation avant l\'ajout au panier'],
  ['Help shoppers visualize your products on themselves', 'Aider les clients à visualiser vos produits sur eux'],
  ['Create a more interactive product page experience', 'Créer une page produit plus interactive'],
  ['Measure how try-on sessions influence cart actions', 'Mesurer l\'influence de l\'essayage sur le panier'],
  // Try-it section
  ['Try the same widget your shoppers will see', 'Essayez le même widget que vos clients'],
  ['Upload a photo below and preview how try-on works on a Shopify product page. No install required on this site.', 'Uploadez une photo ci-dessous pour prévisualiser l\'essayage sur une page produit Shopify.'],
  ['Interactive trial · demo product page', 'Essai interactif · page produit démo'],
  ['Live · same Shopify widget', 'Live · même widget Shopify'],
  // Pilot
  ['Pilot store result', 'Résultat pilote'],
  ['In one pilot store, try-on showed strong add-to-cart intent', 'Dans une boutique pilote, l\'essayage a montré une forte intention d\'ajout au panier'],
  ['try-on → cart in one pilot', 'essayage → panier sur un pilote'],
  ['Based on one early store (REMADE ICONS). Results may vary depending on traffic, product type,\n                                    photos, pricing, and store experience. We&rsquo;re continuing to collect data across more stores.', 'Basé sur une boutique early (REMADE ICONS). Résultats variables selon trafic, produit, photos, prix et expérience. Nous collectons plus de données.'],
  // Pricing section title
  ['Start free, upgrade when shoppers use it', 'Commencez gratuit, évoluez avec l\'usage'],
  ['Only successful try-ons count toward your monthly quota. Failed generations can be retried. No seats, no install fees.', 'Seuls les essayages réussis comptent dans votre quota mensuel.'],
  // FAQ title
  ['Common questions from Shopify merchants', 'Questions fréquentes des marchands Shopify'],
  // Final CTA
  ['Add AI try-on to your Shopify product pages', 'Ajoutez l\'essayage IA à vos pages produit Shopify'],
  ['Start with a few products, measure shopper engagement, and see whether try-on helps customers buy with more confidence.', 'Commencez sur quelques produits, mesurez l\'engagement et voyez si l\'essayage aide vos clients à acheter avec confiance.'],
  // Footer tagline
  ['Fashion Brands', 'Marques mode'],
  ['Streetwear', 'Streetwear'],
  ['Enterprise', 'Enterprise'],
  ['Shopify alternatives', 'Alternatives Shopify'],
  ['API alternatives', 'Alternatives API'],
  ['Free Tools', 'Outils gratuits'],
  ['Blog', 'Blog'],
  ['Documentation', 'Documentation'],
  ['Changelog', 'Changelog'],
  ['Contact', 'Contact'],
  ['Official Shopify app · listed on the App Store', 'App Shopify officielle · listée sur l\'App Store'],
  // Hero pill & marquee (marquee finalized in post-processing)
  ['Designed for Shopify apparel brands', 'Conçu pour marques apparel Shopify'],
  ['<p class="section-label">Privacy</p>', '<p class="section-label">Confidentialité</p>'],
  // Trial widget copy
  ['This live demo uses the same widget installed on Shopify product pages.', ''],
  ['Upload a photo below to preview the same try-on widget shoppers see on Shopify product pages — no install required on this site.', 'Uploadez une photo ci-dessous pour prévisualiser le même widget d\'essayage que vos clients sur Shopify — sans installation sur ce site.'],
  ['REMADE ICONS · Official demo', 'REMADE ICONS · Démo officielle'],
  ['Click <strong>Try it on</strong> below — this is the same Stylab Virtual Try-On widget\n                                installed on Shopify product pages.', 'Cliquez sur <strong>Essayer</strong> ci-dessous — c\'est le même widget Stylab Virtual Try-On\n                                installé sur les pages produit Shopify.'],
  ['>Size<', '>Taille<'],
  ['Add to cart', 'Ajouter au panier'],
  ['Loading try-on widget…', 'Chargement du widget d\'essayage…'],
  ['If nothing appears in 5 seconds, <a href="https://remadeicons.shop/products/shadow-stripe-collared-soccer-jersey-4" target="_blank" rel="noopener">open the live demo store →</a>', 'Si rien n\'apparaît en 5 secondes, <a href="https://remadeicons.shop/products/shadow-stripe-collared-soccer-jersey-4" target="_blank" rel="noopener">ouvrir la boutique démo →</a>'],
  ['Photo not stored', 'Photo non stockée'],
  ['How we handle photos →', 'Traitement des photos →'],
  ['Same product on live store →', 'Même produit en boutique live →'],
  ['Install on my store', 'Installer sur ma boutique'],
  ['Product views', 'Vues produit'],
  // Privacy section
  ['Photos are used only to generate the try-on preview. We do not store original shopper photos in our database.', 'Les photos servent uniquement à générer l\'aperçu d\'essayage. Nous ne stockons pas les photos originales dans notre base.'],
  ['What happens to shopper photos', 'Que deviennent les photos clients'],
  ['Processed securely to generate the try-on preview', 'Traitées de façon sécurisée pour générer l\'aperçu'],
  ['Original photos are not saved in Stylab&rsquo;s database after processing', 'Les photos originales ne sont pas enregistrées dans la base Stylab après traitement'],
  ['Transit through our AI provider (Replicate) for inference only', 'Transitent via notre fournisseur IA (Replicate) pour l\'inférence uniquement'],
  ['Widget shows a clear &ldquo;photo not stored&rdquo; notice before upload', 'Le widget affiche clairement « photo non stockée » avant l\'upload'],
  ['What we keep for your store', 'Ce que nous conservons pour votre boutique'],
  ['Usage events (sessions, success rate, product viewed)', 'Événements d\'usage (sessions, taux de succès, produit consulté)'],
  ['Generated preview URLs in server logs (Replicate links expire ~1 h)', 'URLs d\'aperçu dans les logs serveur (liens Replicate expirent ~1 h)'],
  ['Privacy matters when shoppers upload photos', 'La confidentialité compte quand les clients uploadent des photos'],
  ['Read privacy policy →', 'Lire la politique de confidentialité →'],
  ['GDPR webhooks supported', 'Webhooks RGPD pris en charge'],
  ['Data removed on uninstall', 'Données supprimées à la désinstallation'],
  ['Your flat-lay garment photos in Shopify Files', 'Vos photos flat-lay dans Shopify Files'],
  // Problem bullets (updated copy)
  ['Help reduce purchase hesitation before add-to-cart', 'Réduire l\'hésitation avant l\'ajout au panier'],
  ['Measure try-on impact on cart actions', 'Mesurer l\'impact de l\'essayage sur le panier'],
  // Pricing cards
  ['Usage is based on successful try-on generations. Failed generations can be retried. No seats, no install fees.', 'Facturation basée sur les essayages réussis. Les échecs peuvent être retentés. Pas de sièges, pas de frais d\'installation.'],
  ['Plans billed through Shopify · cancel anytime from your admin', 'Plans facturés via Shopify · résiliation depuis l\'admin'],
  ['50 successful try-ons / month', '50 essayages réussis / mois'],
  ['300 successful try-ons / month', '300 essayages réussis / mois'],
  ['1,000 successful try-ons / month', '1 000 essayages réussis / mois'],
  ['4,000 successful try-ons / month', '4 000 essayages réussis / mois'],
  ['Unlimited products', 'Produits illimités'],
  ['Basic widget customization', 'Personnalisation widget de base'],
  ['Get started', 'Commencer'],
  ['Customizable widget', 'Widget personnalisable'],
  ['Basic analytics', 'Analytics de base'],
  ['Choose', 'Choisir'],
  ['POPULAR', 'POPULAIRE'],
  ['Advanced analytics', 'Analytics avancées'],
  ['Priority processing', 'Traitement prioritaire'],
  ['Priority support', 'Support prioritaire'],
  ['Subscribe', 'S\'abonner'],
  ['Dedicated onboarding', 'Onboarding dédié'],
  ['High-volume support', 'Support haut volume'],
  ['Only successful try-ons count toward your monthly quota.', 'Seuls les essayages réussis comptent dans votre quota mensuel.'],
  // FAQ
  ['Do I need to edit my Shopify theme?', 'Dois-je modifier mon thème Shopify ?'],
  ['No. Stylab Virtual Try-On is designed to install through Shopify and add a try-on experience to product pages without manual theme editing.', 'Non. Stylab s\'installe via Shopify et ajoute l\'essayage aux pages produit sans modification manuelle du thème.'],
  ['Which products work best?', 'Quels produits fonctionnent le mieux ?'],
  ['Stylab is best suited for apparel products such as t-shirts, hoodies, jerseys, dresses, and other visual fashion items where shoppers want to see style and fit before buying.', 'Stylab convient aux vêtements : t-shirts, hoodies, maillots, robes et autres articles où le client veut voir le style avant d\'acheter.'],
  ['Do failed generations use credits?', 'Les générations échouées consomment-elles des crédits ?'],
  ['Usage is based on successful try-on generations. Failed generations can be retried without consuming a successful try-on credit.', 'L\'usage est basé sur les essayages réussis. Les échecs peuvent être retentés sans consommer de crédit.'],
  ['Are shopper photos stored?', 'Les photos clients sont-elles stockées ?'],
  ['Original photos are not saved in Stylab&rsquo;s database — they are processed to generate the preview, then discarded. The widget shows a &ldquo;photo not stored&rdquo; notice. See our <a href="confidentialite.html">privacy policy</a> for full details.', 'Les photos originales ne sont pas enregistrées dans la base Stylab — elles sont traitées pour générer l\'aperçu, puis supprimées. Le widget affiche « photo non stockée ». Voir notre <a href="confidentialite.html">politique de confidentialité</a>.'],
  ['Yes. Track try-on sessions, add-to-cart after try-on, usage by product, and A/B test buckets from your Shopify admin.', 'Oui. Suivez sessions d\'essayage, ajouts panier après essayage, usage par produit et buckets A/B depuis l\'admin Shopify.'],
  ['Yes. Use the <a href="#try-it">live demo on this page</a> or visit <a href="https://remadeicons.shop/products/shadow-stripe-collared-soccer-jersey-4">REMADE ICONS</a>. Plans start free (50 try-ons/mo). See <a href="#pricing">pricing</a>.', 'Oui. Utilisez la <a href="#try-it">démo live sur cette page</a> ou visitez <a href="https://remadeicons.shop/products/shadow-stripe-collared-soccer-jersey-4">REMADE ICONS</a>. Plan gratuit (50 essayages/mo). Voir les <a href="#pricing">tarifs</a>.'],
  ['Start with a few hero products. Measure try-on sessions and add-to-cart — see if it helps shoppers buy with more confidence.', 'Commencez sur quelques produits phares. Mesurez sessions d\'essayage et ajouts panier — voyez si l\'essayage aide vos clients à acheter avec confiance.'],
  // Footer explore & company
  ['Shopify virtual try-on', 'Essayage virtuel Shopify'],
  ['AI try-on app', 'App essayage IA'],
  ['Virtual fitting room', 'Cabine d\'essayage virtuelle'],
  ['Genlook alternative', 'Alternative Genlook'],
  ['Try-on for streetwear', 'Essayage streetwear'],
  ['Privacy policy', 'Politique de confidentialité'],
  ['Terms of service', 'Conditions générales'],
  ['Support', 'Support'],
  ['Company', 'Entreprise'],
];

let html = src;
for (const [from, to] of replacements) {
  html = html.split(from).join(to);
}

// Lang switcher in nav
html = html.replace(
  '<a href="/fr/" class="lang-switch" hreflang="fr" lang="fr">FR</a>',
  '<a href="/" class="lang-switch" hreflang="en" lang="en">EN</a>'
);

// FR homepage SEO head
html = html.replace(
  '<link rel="canonical" href="https://www.stylabtryon.site/">',
  '<link rel="canonical" href="https://www.stylabtryon.site/fr/">'
);
html = html.replace(
  '<link rel="alternate" hreflang="en" href="https://www.stylabtryon.site/">',
  '<link rel="alternate" hreflang="en" href="https://www.stylabtryon.site/">'
);
html = html.replace(
  '<meta property="og:locale" content="en_US">',
  '<meta property="og:locale" content="fr_FR">'
);
html = html.replace(
  '<meta property="og:locale:alternate" content="fr_FR">',
  '<meta property="og:locale:alternate" content="en_US">'
);
html = html.replace(
  'content="Stylab Virtual Try-On — AI Try-On for Shopify Apparel"',
  'content="Stylab Virtual Try-On — Essayage IA pour Shopify Apparel"'
);
html = html.replace(
  'content="Let shoppers see themselves wearing your products before they buy. No-code setup, built-in analytics, and a free plan to get started."',
  'content="Permettez à vos clients de se voir porter vos produits avant d\'acheter. Installation sans code, analytics intégrées et plan gratuit."'
);
html = html.replace(
  '<meta property="og:url" content="https://www.stylabtryon.site/">',
  '<meta property="og:url" content="https://www.stylabtryon.site/fr/">'
);
html = html.replace(
  '<meta name="twitter:title" content="Stylab Virtual Try-On — AI Try-On for Shopify Apparel">',
  '<meta name="twitter:title" content="Stylab Virtual Try-On — Essayage IA pour Shopify Apparel">'
);
html = html.replace(
  '<meta name="twitter:description" content="Let shoppers see themselves wearing your products before they buy. No-code setup, built-in analytics, and a free plan to get started.">',
  '<meta name="twitter:description" content="Permettez à vos clients de se voir porter vos produits avant d\'acheter. Installation sans code, analytics intégrées et plan gratuit.">'
);
html = html.replace('"inLanguage": ["en-US", "fr-FR"]', '"inLanguage": "fr-FR"');
html = html.replace(
  '"description": "AI virtual try-on for Shopify apparel brands. Let shoppers see themselves wearing your products before they buy. No-code setup, built-in analytics, A/B testing, and per-product controls."',
  '"description": "Essayage virtuel IA pour marques apparel Shopify. Permettez à vos clients de se voir porter vos produits. Installation sans code, analytics, tests A/B et contrôle par produit."'
);
html = html.replace(
  '"@type": "WebSite",\n          "name": "Stylab Virtual Try-On",\n          "url": "https://www.stylabtryon.site/"',
  '"@type": "WebSite",\n          "name": "Stylab Virtual Try-On",\n          "url": "https://www.stylabtryon.site/fr/"'
);
html = html.replace(
  '"@type": "Organization",\n          "name": "Style Lab",\n          "url": "https://www.stylabtryon.site/"',
  '"@type": "Organization",\n          "name": "Style Lab",\n          "url": "https://www.stylabtryon.site/fr/"'
);

// Fix broken absolute asset URLs from assets/ → ../assets/ rewrite
html = html.replace(/https:\/\/www\.stylabtryon\.site\/\.\.\/assets\//g, 'https://www.stylabtryon.site/assets/');

// FR brand links should stay on French homepage
html = html.replace(/<a href="\/" class="brand"/g, '<a href="index.html" class="brand"');

// Remove empty paragraphs left by optional replacements
html = html.replace(/<p class="section-desc">\s*<\/p>\s*/g, '');

// French marquee (apply after partial replacements so the block stays consistent)
const frMarquee = '<span>Installation App Store Shopify</span><span>Plan gratuit · 50/mo</span><span>Aperçu ~30 sec</span><span>Paiement à l\'essayage réussi</span><span>Webhooks RGPD</span>';
html = html.replace(
  /<div class="marquee">[\s\S]*?<\/div>(\s*<\/div>\s*\n\s*<!-- INTERACTIVE TRIAL)/,
  `<div class="marquee">\n                ${frMarquee}\n                ${frMarquee}\n            </div>$1`
);

// Fix footer privacy link if partial replacement slipped through
html = html.replace('Confidentialité policy', 'Politique de confidentialité');

// Add vs Genlook to footer if not present
if (!html.includes('vs-genlook')) {
  html = html.replace(
    '<a href="compare/vs-antla.html">vs Antla</a>',
    '<a href="compare/vs-genlook.html">vs Genlook</a>\n                <a href="compare/vs-antla.html">vs Antla</a>'
  );
}

const out = path.join(ROOT, 'fr', 'index.html');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html, 'utf8');
console.log('Wrote fr/index.html');
