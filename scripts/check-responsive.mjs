#!/usr/bin/env node
import { chromium } from "playwright";

const BASE = process.env.BASE_URL || "http://localhost:3000";

const pages = [
  { name: "home EN", path: "/", widths: [1280, 768, 390, 320] },
  { name: "home FR", path: "/fr", widths: [1280, 390] },
  { name: "compare", path: "/compare/vs-antla", widths: [1280, 390] },
  { name: "blog", path: "/resources/blog", widths: [1280, 390] },
];

const browser = await chromium.launch();
let failed = 0;

for (const p of pages) {
  for (const w of p.widths) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    const url = `${BASE}${p.path}`;
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    } catch {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    }
    await page.waitForTimeout(800);

    const r = await page.evaluate(() => {
      const bodyW = document.body.scrollWidth;
      const vw = window.innerWidth;
      const container = document.querySelector("header .container");
      const padLeft = container ? parseFloat(getComputedStyle(container).paddingLeft) : null;
      const menuBtn = document.querySelector('header button[aria-expanded]');
      const menuVisible = menuBtn && getComputedStyle(menuBtn).display !== "none";
      const navLinks = document.querySelector("header .hidden.md\\:flex");
      const desktopNav = navLinks && getComputedStyle(navLinks).display !== "none";
      const h1 = document.querySelector("h1");
      const h1Overflow = h1 ? h1.scrollWidth > h1.clientWidth + 2 : false;
      const offscreen = [...document.querySelectorAll("body *")].filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && (rect.right > vw + 2 || rect.left < -2);
      }).length;
      return { bodyW, vw, padLeft, menuVisible, desktopNav, h1Overflow, offscreen };
    });

    const issues = [];
    if (r.bodyW > r.vw + 2) issues.push(`overflow ${r.bodyW}>${r.vw}px`);
    if (r.padLeft != null && r.padLeft < 12) issues.push(`inner pad ${r.padLeft}px`);
    if (w < 768 && !r.menuVisible) issues.push("mobile menu hidden");
    if (w >= 768 && !r.desktopNav) issues.push("desktop nav hidden");
    if (r.h1Overflow) issues.push("h1 text overflow");

    const status = issues.length ? "FAIL" : "OK";
    if (issues.length) failed++;
    console.log(
      `${status}  ${p.name} (${w}px)${issues.length ? " — " + issues.join(", ") : ""}${r.padLeft != null ? ` [pad ${r.padLeft}px]` : ""}${r.offscreen > 0 ? ` [offscreen els ${r.offscreen}]` : ""}`,
    );
    await page.close();
  }
}

await browser.close();
console.log(failed ? `\n${failed} check(s) with issues` : "\nAll responsive checks passed");
process.exit(failed ? 1 : 0);
