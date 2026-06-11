#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BLOG_POSTS } from './page-data.mjs';
import { SHOPIFY_COMPARE, API_COMPARE, SOLUTIONS } from './compare-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SITE = 'https://www.stylabtryon.site';
const TODAY = new Date().toISOString().slice(0, 10);

function entry(loc, { changefreq = 'monthly', priority = '0.6' } = {}) {
  return `  <url><loc>${SITE}${loc}</loc><lastmod>${TODAY}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

const urls = [
  entry('/', { changefreq: 'weekly', priority: '1.0' }),
  entry('/fr', { changefreq: 'weekly', priority: '0.95' }),
  entry('/compare', { changefreq: 'monthly', priority: '0.85' }),
  ...SHOPIFY_COMPARE.map(c => entry(`/compare/${c.slug}`, { priority: '0.8' })),
  ...API_COMPARE.map(c => entry(`/compare/api/${c.slug}`, { priority: '0.7' })),
  entry('/fr/compare', { changefreq: 'monthly', priority: '0.8' }),
  ...SHOPIFY_COMPARE.map(c => entry(`/fr/compare/${c.slug}`, { priority: '0.75' })),
  ...API_COMPARE.map(c => entry(`/fr/compare/api/${c.slug}`, { priority: '0.7' })),
  entry('/solutions', { changefreq: 'monthly', priority: '0.8' }),
  ...SOLUTIONS.map(s => entry(`/solutions/${s.slug}`, { priority: '0.7' })),
  entry('/fr/solutions', { changefreq: 'monthly', priority: '0.75' }),
  ...SOLUTIONS.map(s => entry(`/fr/solutions/${s.slug}`, { priority: '0.65' })),
  entry('/resources', { changefreq: 'weekly', priority: '0.8' }),
  entry('/resources/free-tools', { priority: '0.75' }),
  entry('/resources/documentation', { priority: '0.7' }),
  entry('/resources/changelog', { changefreq: 'weekly', priority: '0.6' }),
  entry('/resources/blog', { changefreq: 'weekly', priority: '0.7' }),
  ...BLOG_POSTS.map(p => entry(`/resources/blog/${p.slug}`, { priority: '0.6' })),
  entry('/fr/resources', { changefreq: 'weekly', priority: '0.75' }),
  entry('/fr/resources/free-tools', { priority: '0.7' }),
  entry('/fr/resources/documentation', { priority: '0.65' }),
  entry('/fr/resources/changelog', { changefreq: 'weekly', priority: '0.55' }),
  entry('/fr/resources/blog', { changefreq: 'weekly', priority: '0.65' }),
  ...BLOG_POSTS.map(p => entry(`/fr/resources/blog/${p.slug}`, { priority: '0.55' })),
  entry('/contact', { priority: '0.6' }),
  entry('/support', { priority: '0.6' }),
  entry('/confidentialite', { changefreq: 'yearly', priority: '0.4' }),
  entry('/conditions', { changefreq: 'yearly', priority: '0.4' }),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

const publicDir = path.join(ROOT, 'public');
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml, 'utf8');
console.log(`Wrote public/sitemap.xml + public/robots.txt (${urls.length} URLs)`);
