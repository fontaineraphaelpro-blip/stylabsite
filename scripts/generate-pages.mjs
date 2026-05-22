#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { APP_URL, UI, BLOG_POSTS } from './page-data.mjs';
import { SHOPIFY_COMPARE, API_COMPARE, SOLUTIONS, COMPARE_HUB } from './compare-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SITE_URL = 'https://www.stylabtryon.site';
const OG_IMAGE = `${SITE_URL}/assets/screenshots/result-modal.png`;

function shopifyIcon(assetsPath) {
  return `<img class="shopify-icon" src="${assetsPath}shopify-logo.png" alt="" width="20" height="20" aria-hidden="true">`;
}

function installBtn(label, assetsPath, className = 'btn btn-primary') {
  return `<a href="${APP_URL}" class="${className}" target="_blank" rel="noopener">${shopifyIcon(assetsPath)}${label}</a>`;
}

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function blogCanonicalPath(locale, slug) {
  return locale === 'fr' ? `/fr/resources/blog/${slug}.html` : `/resources/blog/${slug}.html`;
}

function pagePathPair(pagePath) {
  const enPath = pagePath.startsWith('/fr/') ? (pagePath.slice(3) || '/') : pagePath;
  const frPath = pagePath.startsWith('/fr/') ? pagePath : (pagePath === '/' ? '/fr/' : `/fr${pagePath}`);
  return { enPath, frPath };
}

function pageHeadMeta({ locale, pagePath, title, description, type = 'website' }) {
  const url = `${SITE_URL}${pagePath}`;
  const { enPath, frPath } = pagePathPair(pagePath);
  const enUrl = `${SITE_URL}${enPath}`;
  const frUrl = `${SITE_URL}${frPath}`;
  const plainTitle = title.replace(/ \| Stylab$/, '');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: plainTitle,
    description,
    url,
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en-US',
    isPartOf: { '@type': 'WebSite', name: 'Stylab Virtual Try-On', url: `${SITE_URL}/` },
  };

  return `
    <link rel="canonical" href="${url}">
    <link rel="alternate" hreflang="en" href="${enUrl}">
    <link rel="alternate" hreflang="fr" href="${frUrl}">
    <link rel="alternate" hreflang="x-default" href="${enUrl}">
    <meta property="og:type" content="${type}">
    <meta property="og:title" content="${escapeAttr(title)}">
    <meta property="og:description" content="${escapeAttr(description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:site_name" content="Stylab Virtual Try-On">
    <meta property="og:locale" content="${locale === 'fr' ? 'fr_FR' : 'en_US'}">
    <meta property="og:locale:alternate" content="${locale === 'fr' ? 'en_US' : 'fr_FR'}">
    <meta property="og:image" content="${OG_IMAGE}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttr(plainTitle)}">
    <meta name="twitter:description" content="${escapeAttr(description)}">
    <meta name="twitter:image" content="${OG_IMAGE}">
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
}

function blogIndexHeadMeta(locale) {
  const pagePath = locale === 'fr' ? '/fr/resources/blog/' : '/resources/blog/';
  const title = locale === 'fr' ? 'Blog Stylab | Guides essayage virtuel Shopify' : 'Stylab Blog | Shopify Virtual Try-On Guides';
  const description = locale === 'fr'
    ? 'Guides pratiques pour marchands apparel Shopify : déploiement essayage, A/B test, photos flat-lay, mobile et privacy.'
    : 'Practical Shopify virtual try-on guides for apparel merchants: rollout, A/B testing, flat-lay photos, mobile, and privacy.';
  const url = `${SITE_URL}${pagePath}`;
  const { enPath, frPath } = pagePathPair(pagePath);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: locale === 'fr' ? 'Blog Stylab' : 'Stylab Blog',
    description,
    url,
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en-US',
    publisher: { '@type': 'Organization', name: 'Stylab Virtual Try-On', logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/logo.png` } },
  };

  return `
    <link rel="canonical" href="${url}">
    <link rel="alternate" hreflang="en" href="${SITE_URL}${enPath}">
    <link rel="alternate" hreflang="fr" href="${SITE_URL}${frPath}">
    <link rel="alternate" hreflang="x-default" href="${SITE_URL}${enPath}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${escapeAttr(title)}">
    <meta property="og:description" content="${escapeAttr(description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:site_name" content="Stylab Virtual Try-On">
    <meta property="og:locale" content="${locale === 'fr' ? 'fr_FR' : 'en_US'}">
    <meta property="og:image" content="${OG_IMAGE}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttr(title)}">
    <meta name="twitter:description" content="${escapeAttr(description)}">
    <meta name="twitter:image" content="${OG_IMAGE}">
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
}

function blogHeadMeta({ locale, post }) {
  const title = t(post.title, locale);
  const desc = t(post.excerpt, locale);
  const path = blogCanonicalPath(locale, post.slug);
  const url = `${SITE_URL}${path}`;
  const altPath = blogCanonicalPath(locale === 'en' ? 'fr' : 'en', post.slug);
  const altUrl = `${SITE_URL}${altPath}`;
  const defaultUrl = `${SITE_URL}/resources/blog/${post.slug}.html`;
  const image = OG_IMAGE;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: desc,
    datePublished: post.dateISO,
    dateModified: post.dateModified || post.dateISO,
    author: { '@type': 'Organization', name: 'Style Lab' },
    publisher: {
      '@type': 'Organization',
      name: 'Stylab Virtual Try-On',
      logo: { '@type': 'ImageObject', url: image },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en-US',
    image,
  };
  if (post.summary) jsonLd.abstract = t(post.summary, locale);

  return `
    <link rel="canonical" href="${url}">
    <link rel="alternate" hreflang="${locale}" href="${url}">
    <link rel="alternate" hreflang="${locale === 'en' ? 'fr' : 'en'}" href="${altUrl}">
    <link rel="alternate" hreflang="x-default" href="${defaultUrl}">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${escapeAttr(title)} | Stylab">
    <meta property="og:description" content="${escapeAttr(desc)}">
    <meta property="og:url" content="${url}">
    <meta property="og:site_name" content="Stylab Virtual Try-On">
    <meta property="og:locale" content="${locale === 'fr' ? 'fr_FR' : 'en_US'}">
    <meta property="article:published_time" content="${post.dateISO}">
    <meta property="og:image" content="${image}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttr(title)}">
    <meta name="twitter:description" content="${escapeAttr(desc)}">
    <meta name="twitter:image" content="${image}">
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
}

function blogArticleBody(post, locale, u, px, demoHref) {
  const title = t(post.title, locale);
  const excerpt = t(post.excerpt, locale);
  const tag = t(post.tag, locale);
  const summary = post.summary ? t(post.summary, locale) : '';
  const tldrLabel = locale === 'fr' ? 'En bref' : 'TL;DR';
  const content = injectBlogContent(t(post.content, locale), demoHref);

  return `<article class="blog-article" itemscope itemtype="https://schema.org/Article">
        <meta itemprop="headline" content="${escapeAttr(title)}">
        <meta itemprop="datePublished" content="${post.dateISO}">
        <section class="page-hero"><div class="wrap reveal">
            <p class="breadcrumb"><a href="../index.html">${u.footerResources}</a> / <a href="index.html">${u.blog}</a></p>
            <p class="pill">${tag}</p>
            <h1 itemprop="name">${title}</h1>
            <p class="lead" itemprop="description">${excerpt}</p>
            <p class="meta"><time datetime="${post.dateISO}" itemprop="datePublished">${post.date}</time></p>
        </div></section>
        <section class="section section-white">
            <div class="wrap">
                ${summary ? `<aside class="article-tldr reveal" role="note" aria-label="${tldrLabel}"><p class="article-tldr-label">${tldrLabel}</p><p>${summary}</p></aside>` : ''}
                <div class="prose reveal" itemprop="articleBody">${content}</div>
            </div>
        </section></article>${cta(locale, 2)}`;
}

function paths(locale, depth) {
  const toSiteRoot = depth + (locale === 'fr' ? 1 : 0);
  const upSite = toSiteRoot === 0 ? '' : '../'.repeat(toSiteRoot);
  const upLocale = depth === 0 ? '' : '../'.repeat(depth);
  return {
    site: upSite,
    locale: upLocale,
    home: `${upLocale}index.html`,
    assets: `${upSite}assets/`,
    solutions: `${upLocale}solutions/`,
    compare: `${upLocale}compare/`,
    resources: `${upLocale}resources/`,
    contact: `${upSite}contact.html`,
    privacy: `${upSite}confidentialite.html`,
  };
}

function langHref(locale, section) {
  if (locale === 'en') {
    if (section === 'blog') return '/fr/resources/blog/';
    if (section === 'compare') return '/fr/compare/';
    if (section === 'resources') return '/fr/resources/';
    if (section === 'solutions') return '/fr/solutions/';
    return '/fr/';
  }
  if (section === 'blog') return '/resources/blog/';
  if (section === 'compare') return '/compare/';
  if (section === 'resources') return '/resources/';
  if (section === 'solutions') return '/solutions/';
  return '/';
}

function cta(locale, depth) {
  const u = UI[locale];
  const px = paths(locale, depth);
  return `<section class="section"><div class="wrap"><div class="cta-final reveal"><h2>${u.ctaTitle}</h2><p>${u.ctaBody}</p><div class="btns">${installBtn(u.install, px.assets)}<a href="${px.home}#try-it" class="btn btn-ghost">${u.viewDemo}</a></div></div></div></section>`;
}

function comparePage(locale, depth, data) {
  const u = UI[locale];
  const px = paths(locale, depth);
  const comp = data.competitor;
  const isApi = depth === 2;
  const rows = data.rows.map(r => `<tr><td>${t(r.feature, locale)}</td><td>${cell(t(r.stylab, locale))}</td><td>${cell(t(r.other, locale))}</td></tr>`).join('');
  const overviewBlock = data.overview ? `
        <section class="section section-green"><div class="wrap prose reveal">${t(data.overview, locale)}</div></section>` : '';
  const evalLabel = locale === 'fr' ? 'Guide pratique' : 'Practical guide';
  const evalTitle = locale === 'fr' ? 'Comment évaluer les deux options' : 'How to evaluate both options';
  const evalBlock = data.evaluation ? `
        <section class="section section-white"><div class="wrap">
            <div class="section-head reveal"><p class="section-label">${evalLabel}</p><h2 class="section-title">${evalTitle}</h2></div>
            <div class="prose reveal">${t(data.evaluation, locale)}</div>
        </div></section>` : '';
  const pitfallsLabel = locale === 'fr' ? 'Erreurs fréquentes' : 'Common mistakes';
  const pitfallsBlock = data.pitfalls ? `
        <section class="section" style="background:var(--green-50);"><div class="wrap">
            <div class="section-head reveal"><p class="section-label">${pitfallsLabel}</p><h2 class="section-title">${locale === 'fr' ? 'À éviter lors de la comparaison' : 'Avoid when comparing'}</h2></div>
            <div class="prose reveal">${t(data.pitfalls, locale)}</div>
        </div></section>` : '';
  const body = `
        <section class="page-hero"><div class="wrap reveal">
            <p class="breadcrumb"><a href="${px.compare}">${u.compare}</a> / Stylab vs ${comp}</p>
            <p class="pill">${u.comparison}</p>
            <h1>Stylab vs ${comp}</h1>
            <p class="lead">${t(data.summary, locale)}</p>
            <div class="btns">${installBtn(u.installStylab, px.assets)}<a href="${px.home}#try-it" class="btn btn-ghost">${u.viewDemo}</a></div>
        </div></section>${overviewBlock}
        <section class="section section-white"><div class="wrap reveal">
            <div class="section-head center"><p class="section-label">${u.sideBySide}</p><h2 class="section-title">${u.featureComparison}</h2><p class="section-desc">${t(data.competitorDesc, locale)}</p></div>
            <div class="compare-table-wrap"><table class="compare-table"><thead><tr><th>${locale === 'fr' ? 'Fonctionnalité' : 'Feature'}</th><th>Stylab</th><th>${comp}</th></tr></thead><tbody>${rows}</tbody></table><p class="compare-scroll-hint">${u.compareScrollHint}</p></div>
            <div class="two-col">
                <div class="diff-card"><h3>${u.whenStylab}</h3><p>${t(data.chooseStylab, locale)}</p></div>
                <div class="diff-card"><h3>${u.whenOther.replace('{name}', comp)}</h3><p>${t(data.chooseOther, locale)}</p></div>
            </div>
            <p class="disclaimer">${u.disclaimer}</p>
        </div></section>${evalBlock}${pitfallsBlock}${cta(locale, depth)}`;
  const title = locale === 'fr'
    ? `Stylab vs ${comp} | ${isApi ? 'Comparaison API' : 'Comparaison Shopify'}`
    : `Stylab vs ${comp} | ${isApi ? 'API vs Shopify App' : 'Shopify Virtual Try-On'} Comparison`;
  const pagePath = `${locale === 'fr' ? '/fr' : ''}/compare/${isApi ? 'api/' : ''}${data.slug}.html`;
  return layout({ locale, depth, title, description: t(data.summary, locale), body, activeNav: 'compare', section: 'compare', pagePath });
}

function t(obj, locale) {
  if (typeof obj === 'string') return obj;
  return obj[locale] || obj.en;
}

function cell(val) {
  const v = val;
  if (/^Yes|^Oui|^Included|^Inclus|^Purpose|^Automatic|^Built|^Minutes|^Hours|^Dashboard|^Merchant|^One click|^Predictable|^50|^Scale|^Free|^All plans|^Hoodies|^Native|^Live|^4,000|^Shopify apparel|^Apparel-focused|^Try-on-focused|^Verify workflow|^Included widget|^Plan tiers|^Broad generative|^No — try-on|^Not applicable|^Not the core|^Yes — verify|^Yes — App Store|^Yes — private|^Yes — no-code|^Verify in product|^Verify metrics|^Verify integration|^Verify current|^Verify on vendor|^Verify — may/i.test(v)) {
    return `<span class="yes">${v}</span>`;
  }
  if (/^No|^Non|^Unlikely|^Rare|^Not |^Build yourself|^Custom build|^Manual|^Dev required|^Contact|^Unknown|^Check |^Varies|^SDK|^Platform|^Enterprise|^API credits|^Weeks|^Pay per API|^Creative|^Typically sales|^Custom |^Unknown —|^Unlikely —|^Rare —|^Varies —|^Contact vendor|^Contact sales|^Verify —|^Verify on|^Verify in|^Verify current|^Not Shopify-native|^Not highlighted|^Not standard|^Not typical|^Not core|^Manual \/|^Enterprise \/|^Usage-based|^Product \/|^Shopify merchant|^Shopify plan|^Your engineering|^Your team|^Your compliance|^Stylab vendor|^API credits \+/i.test(v)) {
    return `<span class="partial">${v}</span>`;
  }
  return v;
}

function writeFile(relPath, content) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log('Wrote', relPath);
}

function footer(locale, px, u, home) {
  return `<footer>
        <div class="wrap footer-top">
            <div class="footer-brand">
                <a href="${home}" class="brand">
                    <span class="brand-mark"><img src="${px.assets}logo.png" alt="" width="36" height="36"></span>
                    <span class="brand-name">Stylab <span>Virtual Try-On</span></span>
                </a>
                <p>${u.footerTagline}</p>
            </div>
            <div class="footer-col"><h4>${u.footerSolutions}</h4>
                <a href="${px.locale}solutions/fashion-brands.html">${u.fashionBrands}</a>
                <a href="${px.locale}solutions/streetwear.html">${u.streetwear}</a>
                <a href="${px.locale}solutions/enterprise.html">${u.enterprise}</a>
                <a href="${px.locale}solutions/prestashop.html">${u.prestashop}</a>
                <a href="${px.locale}solutions/api.html">${u.api}</a>
            </div>
            <div class="footer-col"><h4>${u.footerShopifyAlt}</h4>
                <a href="${px.locale}compare/vs-genlook.html">vs Genlook</a>
                <a href="${px.locale}compare/vs-antla.html">vs Antla</a>
                <a href="${px.locale}compare/vs-banuba.html">vs Banuba</a>
                <a href="${px.locale}compare/vs-mirrar.html">vs MirrAR</a>
                <a href="${px.locale}compare/vs-camweara.html">vs Camweara</a>
                <a href="${px.locale}compare/vs-looksy.html">vs Looksy</a>
                <a href="${px.locale}compare/vs-trypoint.html">vs TryPoint</a>
            </div>
            <div class="footer-col"><h4>${u.footerApiAlt}</h4>
                <a href="${px.locale}compare/api/vs-fashn-ai.html">vs FASHN AI</a>
                <a href="${px.locale}compare/api/vs-aiuta.html">vs Aiuta</a>
                <a href="${px.locale}compare/api/vs-pixelcut.html">vs Pixelcut</a>
                <a href="${px.locale}compare/api/vs-replicate.html">vs Replicate</a>
                <a href="${px.locale}compare/api/vs-fal-ai.html">vs Fal AI</a>
            </div>
            <div class="footer-col"><h4>${u.footerResources}</h4>
                <a href="${px.locale}resources/free-tools.html">${u.freeTools}</a>
                <a href="${px.locale}resources/blog/">${u.blog}</a>
                <a href="${px.locale}resources/documentation.html">${u.documentation}</a>
                <a href="${px.locale}resources/changelog.html">${u.changelog}</a>
                <a href="${px.contact}">${u.contact}</a>
                <a href="${px.privacy}">${u.privacy}</a>
            </div>
        </div>
        <div class="wrap footer-copy">© 2026 Style Lab · Stylab Virtual Try-On</div>
    </footer>`;
}

function injectBlogContent(html, demoHref) {
  return html.replace(/\{\{DEMO_LINK\}\}/g, demoHref);
}

function layout({ locale, depth, title, description, body, activeNav, extraScripts = '', section = '', headExtra = '', pagePath = '' }) {
  const px = paths(locale, depth);
  const u = UI[locale];
  const home = px.home;
  const pricingHref = `${home}#pricing`;
  const featuresHref = `${home}#features`;
  const langSwitch = langHref(locale, section);
  const seoHead = headExtra || (pagePath ? pageHeadMeta({ locale, pagePath, title, description }) : '');

  return `<!DOCTYPE html>
<html lang="${u.lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${escapeAttr(description)}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <link rel="icon" type="image/png" href="${px.assets}logo.png">${seoHead}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=Geist:wght@500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${px.assets}marketing.css">
</head>
<body>
    <div class="ambient" aria-hidden="true"></div>
    <header class="header" id="header">
        <div class="wrap nav">
            <a href="${home}" class="brand"><span class="brand-mark"><img src="${px.assets}logo.png" alt="" width="36" height="36"></span><span class="brand-name">Stylab <span>Virtual Try-On</span></span></a>
            <nav class="nav-links" aria-label="Main">
                <a href="${featuresHref}">${u.features}</a>
                <a href="${pricingHref}">${u.pricing}</a>
                <div class="nav-dropdown">
                    <button type="button" class="nav-dropdown-btn" aria-haspopup="true" aria-expanded="false">${u.explore}<span class="nav-chevron" aria-hidden="true"></span></button>
                    <div class="nav-dropdown-menu">
                        <a href="${px.solutions}">${u.solutions}</a>
                        <a href="${px.compare}"${activeNav === 'compare' ? ' class="active"' : ''}>${u.compare}</a>
                        <a href="${px.resources}">${u.resources}</a>
                        <a href="${px.resources}blog/">${u.blog}</a>
                    </div>
                </div>
                <a href="${langSwitch}" class="lang-switch">${u.otherLang}</a>
            </nav>
            <div class="nav-actions">
                ${installBtn(u.install, px.assets)}
                <button class="menu-btn" id="menuBtn" type="button" aria-label="Menu"><span></span><span></span><span></span></button>
            </div>
        </div>
    </header>
    <div class="mobile-drawer" id="mobileDrawer">
        <a href="${featuresHref}">${u.features}</a>
        <a href="${pricingHref}">${u.pricing}</a>
        <span class="drawer-label">${u.explore}</span>
        <a href="${px.solutions}" class="drawer-sub">${u.solutions}</a>
        <a href="${px.compare}" class="drawer-sub">${u.compare}</a>
        <a href="${px.resources}" class="drawer-sub">${u.resources}</a>
        <a href="${px.resources}blog/" class="drawer-sub">${u.blog}</a>
        <a href="${home}#try-it">${u.liveDemo}</a>
        <a href="${langSwitch}" class="lang-switch">${u.otherLang}</a>
        ${installBtn(u.install, px.assets)}
    </div>
    <main class="page-main">${body}</main>
    ${footer(locale, px, u, home)}
    <script src="${px.assets}marketing.js"></script>${extraScripts}
</body>
</html>`;
}

function roiBlock(locale) {
  const fr = locale === 'fr';
  return `
        <section class="section section-green"><div class="wrap reveal">
            <div class="section-head center"><p class="section-label">${fr ? 'Simulateur' : 'Calculator'}</p>
            <h2 class="section-title">${fr ? 'Estimateur d\'usage et de revenus' : 'Try-on usage & revenue estimator'}</h2>
            <p class="section-desc">${fr ? 'Estimez vos essayages mensuels, le plan Stylab adapté et un revenu incrémental prudent.' : 'Estimate monthly try-ons, recommended Stylab plan, and conservative incremental revenue.'}</p></div>
            <form id="roi-form" class="roi-form">
                <div class="roi-grid">
                    <label>${fr ? 'Vues page produit / mois' : 'Product page views / month'}<input type="number" id="roi-views" value="50000" min="0"></label>
                    <label>${fr ? 'Taux d\'adoption essayage' : 'Try-on adoption rate'} <span id="roi-adoption-val">5%</span><input type="range" id="roi-adoption" min="1" max="30" value="5"></label>
                    <label>${fr ? 'Taux conversion de base (%)' : 'Baseline conversion (%)'}<input type="number" id="roi-conv" value="2.5" min="0" step="0.1"></label>
                    <label>${fr ? 'Lift relatif sur sessions essayage' : 'Relative lift on try-on sessions'} <span id="roi-lift-val">10%</span><input type="range" id="roi-lift" min="0" max="50" value="10"></label>
                    <label>${fr ? 'Panier moyen ($)' : 'Average order value ($)'}<input type="number" id="roi-aov" value="65" min="0"></label>
                </div>
                <div class="roi-results">
                    <div class="roi-result"><span>${fr ? 'Essayages / mois' : 'Try-ons / month'}</span><strong id="out-tryons">—</strong></div>
                    <div class="roi-result"><span>${fr ? 'Plan recommandé' : 'Recommended plan'}</span><strong id="out-plan">—</strong></div>
                    <div class="roi-result"><span>${fr ? 'Coût Stylab' : 'Stylab cost'}</span><strong id="out-cost">—</strong></div>
                    <div class="roi-result"><span>${fr ? 'Revenu incrémental est.' : 'Est. incremental revenue'}</span><strong id="out-extra">—</strong></div>
                </div>
                <p class="disclaimer" id="out-note">${fr ? 'Estimation indicative — résultats réels variables.' : 'Indicative estimate — actual results vary.'}</p>
            </form>
        </div></section>`;
}

function generateLocale(locale) {
  const base = locale === 'fr' ? 'fr/' : '';
  const u = UI[locale];

  writeFile(`${base}compare/index.html`, layout({
    locale, depth: 1,
    title: locale === 'fr' ? 'Comparaisons Stylab' : 'Stylab Comparisons | Shopify & API Alternatives',
    description: locale === 'fr' ? 'Comparez Stylab avec Genlook, Antla, Banuba et plus.' : 'Compare Stylab with Genlook, Antla, Banuba, and API platforms.',
    activeNav: 'compare',
    section: 'compare',
    pagePath: `${locale === 'fr' ? '/fr' : ''}/compare/`,
    body: `
        <section class="page-hero"><div class="wrap reveal"><p class="pill">${u.compare}</p><h1>${locale === 'fr' ? 'Comment Stylab se compare' : 'How Stylab compares'}</h1><p class="lead">${locale === 'fr' ? 'Guides factuels pour shortlister, piloter et mesurer — pas du SEO générique.' : 'Factual guides to shortlist, pilot, and measure — not generic SEO filler.'}</p></div></section>
        <section class="section section-green"><div class="wrap prose reveal">${t(COMPARE_HUB.intro, locale)}</div></section>
        <section class="section section-white"><div class="wrap"><div class="section-head reveal"><p class="section-label">Shopify</p><h2 class="section-title">${u.footerShopifyAlt}</h2><p class="section-desc">${locale === 'fr' ? 'Apps App Store et essayage mode pour pages produit standard.' : 'App Store apps and fashion try-on for standard product pages.'}</p></div>
        <div class="hub-grid reveal">${SHOPIFY_COMPARE.map(c => `<a href="${c.slug}.html" class="hub-card"><h3>Stylab vs ${c.competitor}</h3><p>${t(c.summary, locale).slice(0, 130)}…</p><span class="arrow">${u.readComparison}</span></a>`).join('')}</div></div></section>
        <section class="section section-green"><div class="wrap"><div class="section-head reveal"><p class="section-label">API</p><h2 class="section-title">${u.footerApiAlt}</h2><p class="section-desc">${locale === 'fr' ? 'Routes build-your-own si vous avez une équipe technique.' : 'Build-your-own routes if you have an engineering team.'}</p></div>
        <div class="hub-grid reveal">${API_COMPARE.map(c => `<a href="api/${c.slug}.html" class="hub-card"><h3>Stylab vs ${c.competitor}</h3><p>${t(c.summary, locale).slice(0, 130)}…</p><span class="arrow">${u.readComparison}</span></a>`).join('')}</div></div></section>${cta(locale, 1)}`,
  }));

  SHOPIFY_COMPARE.forEach(c => writeFile(`${base}compare/${c.slug}.html`, comparePage(locale, 1, c)));
  API_COMPARE.forEach(c => writeFile(`${base}compare/api/${c.slug}.html`, comparePage(locale, 2, c)));

  writeFile(`${base}solutions/index.html`, layout({
    locale, depth: 1,
    title: locale === 'fr' ? 'Solutions Stylab' : 'Stylab Solutions',
    description: t(SOLUTIONS[0].lead, locale),
    section: 'solutions',
    pagePath: `${locale === 'fr' ? '/fr' : ''}/solutions/`,
    body: `<section class="page-hero"><div class="wrap reveal"><p class="pill">${u.solutions}</p><h1>${locale === 'fr' ? 'Pour marchands apparel Shopify' : 'Built for Shopify apparel merchants'}</h1></div></section>
        <section class="section section-white"><div class="wrap hub-grid reveal">${SOLUTIONS.map(s => `<a href="${s.slug}.html" class="hub-card"><h3>${t(s.title, locale)}</h3><p>${t(s.lead, locale).slice(0, 90)}…</p><span class="arrow">${u.learnMore}</span></a>`).join('')}</div></section>${cta(locale, 1)}`,
  }));

  SOLUTIONS.forEach(s => {
    writeFile(`${base}solutions/${s.slug}.html`, layout({
      locale, depth: 1,
      title: `${t(s.title, locale)} | Stylab`,
      description: t(s.lead, locale),
      section: 'solutions',
      pagePath: `${locale === 'fr' ? '/fr' : ''}/solutions/${s.slug}.html`,
      body: `<section class="page-hero"><div class="wrap reveal"><p class="breadcrumb"><a href="index.html">${u.solutions}</a></p><h1>${t(s.title, locale)}</h1><p class="lead">${t(s.lead, locale)}</p><div class="btns">${installBtn(u.install, paths(locale, 1).assets)}<a href="${paths(locale, 1).home}#try-it" class="btn btn-ghost">${u.viewDemo}</a></div></div></section>
            <section class="section section-white"><div class="wrap"><ul class="problem-bullets reveal" style="max-width:560px;margin:0 auto">${t(s.bullets, locale).map(b => `<li>${b}</li>`).join('')}</ul>${s.note ? `<p class="disclaimer" style="max-width:560px;margin:2rem auto 0">${t(s.note, locale)}</p>` : ''}</div></section>${cta(locale, 1)}`,
    }));
  });

  const docBody = locale === 'fr' ? `
        <section class="page-hero"><div class="wrap reveal"><h1>Documentation</h1><p class="lead">Installez Stylab en quelques minutes.</p></div></section>
        <section class="section section-white"><div class="wrap prose reveal">
            <h2>1. Installer depuis Shopify</h2><p>Installez depuis l'App Store. Aucune modification de thème requise.</p>
            <h2>2. Activer par produit</h2><p>Ouvrez Products dans l'admin Stylab. Toggle par produit + flat-lay optionnel.</p>
            <h2>3. Personnaliser le widget</h2><p>Page Widget : texte, couleurs, A/B test 10–90%.</p>
            <h2>4. Mesurer</h2><p>Dashboard : sessions, ajouts panier, crédits restants.</p>
        </div></section>${cta(locale, 1)}` : `
        <section class="page-hero"><div class="wrap reveal"><h1>Documentation</h1><p class="lead">Get Stylab running in minutes.</p></div></section>
        <section class="section section-white"><div class="wrap prose reveal">
            <h2>1. Install from Shopify</h2><p>Install from the App Store. No theme edits required.</p>
            <h2>2. Enable by product</h2><p>Open Products in Stylab admin. Toggle per product + optional flat-lay.</p>
            <h2>3. Customize widget</h2><p>Widget page: text, colors, A/B test 10–90%.</p>
            <h2>4. Measure</h2><p>Dashboard: sessions, add-to-cart, remaining credits.</p>
        </div></section>${cta(locale, 1)}`;

  writeFile(`${base}resources/index.html`, layout({
    locale, depth: 1,
    title: locale === 'fr' ? 'Ressources Stylab' : 'Stylab Resources',
    description: locale === 'fr'
      ? 'Documentation, blog, outils gratuits et changelog pour lancer l\'essayage virtuel sur Shopify.'
      : 'Documentation, blog, free tools, and changelog to launch virtual try-on on Shopify.',
    section: 'resources',
    pagePath: `${locale === 'fr' ? '/fr' : ''}/resources/`,
    body: `<section class="page-hero"><div class="wrap reveal"><p class="pill">${u.footerResources}</p><h1>${locale === 'fr' ? 'Apprendre et lancer' : 'Learn and launch'}</h1></div></section>
        <section class="section section-white"><div class="wrap hub-grid reveal">
            <a href="free-tools.html" class="hub-card"><h3>${u.freeTools}</h3><p>${locale === 'fr' ? 'Calculateur usage & checklist' : 'Usage calculator & checklists'}</p><span class="arrow">→</span></a>
            <a href="blog/" class="hub-card"><h3>${u.blog}</h3><p>Guides</p><span class="arrow">→</span></a>
            <a href="documentation.html" class="hub-card"><h3>${u.documentation}</h3><p>Install & config</p><span class="arrow">→</span></a>
            <a href="changelog.html" class="hub-card"><h3>${u.changelog}</h3><p>Updates</p><span class="arrow">→</span></a>
        </div></section>${cta(locale, 1)}`,
  }));

  writeFile(`${base}resources/free-tools.html`, layout({
    locale, depth: 1,
    title: locale === 'fr' ? 'Outils gratuits' : 'Free Tools | Stylab',
    description: locale === 'fr'
      ? 'Calculateur ROI essayage virtuel, checklist de déploiement et planificateur A/B pour marchands Shopify apparel.'
      : 'Virtual try-on ROI calculator, rollout checklist, and A/B planner for Shopify apparel merchants.',
    section: 'resources',
    pagePath: `${locale === 'fr' ? '/fr' : ''}/resources/free-tools.html`,
    extraScripts: `<script src="${paths(locale, 1).assets}roi-calculator.js"></script>`,
    body: `<section class="page-hero"><div class="wrap reveal"><h1>${u.freeTools}</h1><p class="lead">${locale === 'fr' ? 'Planifiez votre déploiement essayage.' : 'Plan your try-on rollout.'}</p></div></section>
        <section class="section section-white"><div class="wrap"><div class="diff-grid reveal">
            <div class="diff-card"><h3>${locale === 'fr' ? 'Checklist readiness' : 'Readiness checklist'}</h3><p>${locale === 'fr' ? 'Photos claires, SKU phares, PDP mobile.' : 'Clear photos, hero SKUs, mobile PDPs.'}</p></div>
            <div class="diff-card"><h3>${locale === 'fr' ? 'Guide plans' : 'Plan picker'}</h3><p>Free 50 · Starter 300 · Growth 1,000 · Scale 4,000</p></div>
            <div class="diff-card"><h3>A/B planner</h3><p>50/50 · 30 days · 2–5 products</p></div>
        </div></div></section>${roiBlock(locale)}${cta(locale, 1)}`,
  }));

  writeFile(`${base}resources/documentation.html`, layout({
    locale, depth: 1,
    title: locale === 'fr' ? 'Documentation | Stylab' : 'Documentation | Stylab',
    description: locale === 'fr'
      ? 'Installez et configurez Stylab sur Shopify : activation par produit, widget, tests A/B et analytics.'
      : 'Install and configure Stylab on Shopify: per-product activation, widget setup, A/B testing, and analytics.',
    section: 'resources',
    pagePath: `${locale === 'fr' ? '/fr' : ''}/resources/documentation.html`,
    body: docBody,
  }));
  writeFile(`${base}resources/changelog.html`, layout({
    locale, depth: 1,
    title: locale === 'fr' ? 'Changelog | Stylab' : 'Changelog | Stylab',
    description: locale === 'fr'
      ? 'Mises à jour du site marketing Stylab, comparaisons, blog et outils pour l\'essayage virtuel Shopify.'
      : 'Stylab marketing site updates: comparisons, blog, tools, and Shopify virtual try-on resources.',
    section: 'resources',
    pagePath: `${locale === 'fr' ? '/fr' : ''}/resources/changelog.html`,
    body: `<section class="page-hero"><div class="wrap reveal"><h1>${u.changelog}</h1></div></section>
        <section class="section section-white"><div class="wrap prose reveal"><h2>May 2026</h2><ul><li>${locale === 'fr' ? 'Site FR + comparaisons + simulateur ROI' : 'FR site + comparisons + ROI simulator'}</li><li>Stylab vs Genlook page</li><li>Full blog articles</li></ul></div></section>${cta(locale, 1)}`,
  }));

  writeFile(`${base}resources/blog/index.html`, layout({
    locale, depth: 2,
    title: locale === 'fr' ? 'Blog Stylab | Guides essayage virtuel Shopify' : 'Stylab Blog | Shopify Virtual Try-On Guides',
    description: locale === 'fr'
      ? 'Guides pratiques pour marchands apparel Shopify : déploiement essayage, A/B test, photos flat-lay, mobile et privacy.'
      : 'Practical Shopify virtual try-on guides for apparel merchants: rollout, A/B testing, flat-lay photos, mobile, and privacy.',
    section: 'blog',
    headExtra: blogIndexHeadMeta(locale),
    body: `<section class="page-hero"><div class="wrap reveal"><p class="breadcrumb"><a href="../index.html">${u.footerResources}</a> / ${u.blog}</p><h1>${u.blog}</h1><p class="lead">${locale === 'fr' ? 'Guides pratiques pour marchands apparel Shopify.' : 'Practical guides for Shopify apparel merchants.'}</p></div></section>
        <section class="section section-white"><div class="wrap blog-grid reveal">${BLOG_POSTS.map(p => `<a href="${p.slug}.html" class="blog-card"><div class="blog-card-body"><span class="tag">${t(p.tag, locale)}</span><h2>${t(p.title, locale)}</h2><p>${t(p.excerpt, locale)}</p><p class="meta"><time datetime="${p.dateISO}">${p.date}</time></p></div></a>`).join('')}</div></section>${cta(locale, 2)}`,
  }));

  BLOG_POSTS.forEach(p => {
    const px = paths(locale, 2);
    const demoHref = `${px.home}#try-it`;
    writeFile(`${base}resources/blog/${p.slug}.html`, layout({
      locale, depth: 2,
      title: `${t(p.title, locale)} | Stylab`,
      description: t(p.excerpt, locale),
      section: 'blog',
      headExtra: blogHeadMeta({ locale, post: p }),
      body: blogArticleBody(p, locale, u, px, demoHref),
    }));
  });
}

generateLocale('en');
generateLocale('fr');
console.log('Done. Generated EN + FR marketing pages.');
