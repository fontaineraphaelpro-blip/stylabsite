#!/usr/bin/env node
import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const pages = [
  { name: 'home EN', file: 'index.html', w: 1280 },
  { name: 'home EN mobile', file: 'index.html', w: 390 },
  { name: 'home EN small', file: 'index.html', w: 320 },
  { name: 'compare EN', file: 'compare/vs-antla.html', w: 1280 },
  { name: 'compare mobile', file: 'compare/vs-antla.html', w: 390 },
  { name: 'resources EN', file: 'resources/index.html', w: 1280 },
  { name: 'contact', file: 'contact.html', w: 1280 },
];

const browser = await chromium.launch();
let failed = 0;

for (const p of pages) {
  const page = await browser.newPage({ viewport: { width: p.w, height: 900 } });
  const url = 'file:///' + path.join(ROOT, p.file).replace(/\\/g, '/');
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);

  const r = await page.evaluate(() => {
    const bodyW = document.body.scrollWidth;
    const vw = window.innerWidth;
    const cluster = document.querySelector('.site-header__cluster');
    const clusterVisible = cluster && getComputedStyle(cluster).display !== 'none';
    const menu = document.getElementById('menuBtn');
    const menuVisible = menu && getComputedStyle(menu).display !== 'none';
    const heroInner = document.querySelector('.hero__inner');
    let heroGap = null;
    if (heroInner && getComputedStyle(heroInner).display === 'grid') {
      const kids = [...heroInner.children];
      if (kids.length >= 2) {
        const a = kids[0].getBoundingClientRect();
        const b = kids[1].getBoundingClientRect();
        heroGap = Math.round(b.left - a.right);
      }
    }
    const hidden = [...document.querySelectorAll('.reveal, [data-reveal]')].filter((el) => {
      const s = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return parseFloat(s.opacity) < 0.5 && rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
    }).length;
    const container = document.querySelector('.container, .hero__inner, .page-main .wrap');
    let edgePad = null;
    let innerPad = null;
    if (container) {
      edgePad = Math.round(container.getBoundingClientRect().left);
      innerPad = parseFloat(getComputedStyle(container).paddingLeft);
    }
    return { bodyW, vw, overflow: bodyW > vw + 2, clusterVisible, menuVisible, heroGap, hidden, edgePad, innerPad };
  });

  const issues = [];
  if (r.overflow) issues.push(`overflow ${r.bodyW}px>${r.vw}px`);
  if (r.hidden > 0) issues.push(`${r.hidden} hidden blocks`);
  if (p.w >= 1024 && r.heroGap != null && r.heroGap > 200) issues.push(`hero gap ${r.heroGap}px`);
  if (p.w >= 1024 && r.innerPad != null && r.innerPad < 16) issues.push(`inner pad ${r.innerPad}px`);
  if (p.w < 901 && !r.menuVisible) issues.push('menu hidden on mobile');

  const status = issues.length ? 'FAIL' : 'OK';
  if (issues.length) failed++;
  console.log(`${status}  ${p.name} (${p.w}px)${issues.length ? ' — ' + issues.join(', ') : ''}${r.edgePad != null ? ` [pad ${r.edgePad}px]` : ''}`);
  await page.close();
}

await browser.close();
console.log(failed ? `\n${failed} page(s) with issues` : '\nAll layout checks passed');
process.exit(failed ? 1 : 0);
