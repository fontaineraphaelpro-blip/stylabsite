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
  // Title & meta
  ['Stylab Virtual Try-On | AI Try-On for Shopify Apparel Stores', 'Stylab Virtual Try-On | Essayage virtuel IA pour Shopify'],
  ['content="Add AI virtual try-on to your Shopify product pages. Let shoppers see themselves wearing your apparel, reduce purchase hesitation, and measure try-on impact."', 'content="Ajoutez l\'essayage virtuel IA à vos pages produit Shopify. Permettez à vos clients de se voir porter vos vêtements et mesurez l\'impact."'],
  // Nav
  ['Live demo', 'Démo live'],
  ['Solutions', 'Solutions'],
  ['Compare', 'Comparer'],
  ['Resources', 'Ressources'],
  ['Product tour', 'Visite produit'],
  ['Pricing', 'Tarifs'],
  ['View live demo', 'Voir la démo'],
  ['Install on Shopify', 'Installer sur Shopify'],
  ['FAQ', 'FAQ'],
  // Hero
  ['Built for Shopify apparel brands', 'Conçu pour marques apparel Shopify'],
  ['AI try-on for Shopify apparel brands', 'Essayage IA pour marques apparel Shopify'],
  ['Let shoppers see themselves wearing your products before they buy.\n                            Add a virtual fitting room to your product pages in minutes — no theme editing required.', 'Permettez à vos clients de se voir porter vos produits avant d\'acheter.\n                            Ajoutez une cabine d\'essayage virtuelle en quelques minutes — sans modifier votre thème.'],
  ['Free plan available · No-code setup · Works on mobile and desktop', 'Plan gratuit · Installation sans code · Mobile et desktop'],
  ['Free plan · 50 try-ons/mo', 'Plan gratuit · 50 essayages/mo'],
  ['No-code setup', 'Sans code'],
  ['Mobile-ready', 'Mobile'],
  ['Avg preview time', 'Temps moyen'],
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
  ['AI virtual try-on for Shopify apparel brands.<br>Help shoppers visualize your products before they buy.', 'Essayage virtuel IA pour marques apparel Shopify.<br>Aidez vos clients à visualiser vos produits avant d\'acheter.'],
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
  ['Privacy', 'Confidentialité'],
  ['Official Shopify app · listed on the App Store', 'App Shopify officielle · listée sur l\'App Store'],
];

let html = src;
for (const [from, to] of replacements) {
  html = html.split(from).join(to);
}

// Lang switcher in nav
html = html.replace(
  '<a href="/fr/" class="lang-switch">Français</a>',
  '<a href="/" class="lang-switch">English</a>'
);

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
