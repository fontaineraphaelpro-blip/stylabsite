#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.git') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

const EN_ONLY_PAGES = new Set([
  'contact.html',
  'support.html',
  'confidentialite.html',
  'conditions.html',
]);

const checks = [
  ['description', /<meta name="description" content="([^"]+)"/i],
  ['robots', /<meta name="robots" content="([^"]+)"/i],
  ['canonical', /<link rel="canonical" href="([^"]+)"/i],
  ['hreflang-en', /<link rel="alternate" hreflang="en" href="([^"]+)"/i],
  ['hreflang-fr', /<link rel="alternate" hreflang="fr" href="([^"]+)"/i],
  ['hreflang-x', /<link rel="alternate" hreflang="x-default" href="([^"]+)"/i],
  ['og-title', /<meta property="og:title" content="([^"]+)"/i],
  ['og-desc', /<meta property="og:description" content="([^"]+)"/i],
  ['og-url', /<meta property="og:url" content="([^"]+)"/i],
  ['og-image', /<meta property="og:image" content="([^"]+)"/i],
  ['twitter-card', /<meta name="twitter:card" content="([^"]+)"/i],
  ['lang', /<html lang="([^"]+)"/i],
  ['jsonld', /<script type="application\/ld\+json">/i],
];

const files = walk(ROOT).map((f) => path.relative(ROOT, f).replace(/\\/g, '/'));
const issues = [];

for (const rel of files.sort()) {
  const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const missing = [];
  const warnings = [];
  for (const [name, re] of checks) {
    if (!re.test(html)) {
      if (EN_ONLY_PAGES.has(rel) && (name === 'hreflang-fr')) continue;
      missing.push(name);
    }
  }
  const titleM = html.match(/<title>([^<]+)<\/title>/i);
  const descM = html.match(/<meta name="description" content="([^"]+)"/i);
  if (titleM && titleM[1].length > 70) warnings.push(`title-long:${titleM[1].length}`);
  if (descM && descM[1].length > 165) warnings.push(`desc-long:${descM[1].length}`);
  if (descM && descM[1].length < 50) warnings.push(`desc-short:${descM[1].length}`);
  const canonM = html.match(/<link rel="canonical" href="([^"]+)"/i);
  if (canonM && !canonM[1].startsWith('https://www.stylabtryon.site')) {
    warnings.push(`canonical-bad:${canonM[1]}`);
  }
  if (missing.length || warnings.length) issues.push({ rel, missing, warnings });
}

// Sitemap vs files
const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const htmlUrls = new Set(
  files.map((f) => {
    if (f === 'index.html') return 'https://www.stylabtryon.site/';
    if (f === 'fr/index.html') return 'https://www.stylabtryon.site/fr/';
    if (f.endsWith('/index.html')) {
      const dir = f.replace(/index\.html$/, '');
      return `https://www.stylabtryon.site/${dir}`;
    }
    return `https://www.stylabtryon.site/${f}`;
  })
);

const notInSitemap = [...htmlUrls].filter((u) => !sitemapUrls.includes(u));
const sitemapNoHtml = sitemapUrls.filter((u) => !u.endsWith('llms.txt') && !htmlUrls.has(u));

console.log('=== SEO AUDIT ===');
console.log('HTML files:', files.length);
console.log('Files with issues:', issues.length);
for (const i of issues) {
  console.log(`\n${i.rel}`);
  if (i.missing.length) console.log('  MISSING:', i.missing.join(', '));
  if (i.warnings.length) console.log('  WARN:', i.warnings.join(', '));
}
console.log('\n=== SITEMAP ===');
console.log('HTML URLs not in sitemap:', notInSitemap.length ? notInSitemap.join('\n  ') : 'none');
console.log('Sitemap URLs without HTML:', sitemapNoHtml.length ? sitemapNoHtml.join('\n  ') : 'none');

process.exit(issues.length || notInSitemap.length || sitemapNoHtml.length ? 1 : 0);
