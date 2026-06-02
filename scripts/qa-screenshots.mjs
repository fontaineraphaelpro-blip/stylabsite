#!/usr/bin/env node
import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "_qa-screenshots");
const BASE = process.env.BASE_URL || "http://localhost:3000";

fs.mkdirSync(OUT, { recursive: true });

const shots = [
  { file: "home-desktop.png", path: "/", w: 1280, h: 900, full: false },
  { file: "home-mobile.png", path: "/", w: 390, h: 844, full: true },
  { file: "features-mobile.png", path: "/#features", w: 390, h: 844, full: false, scroll: "#features-title" },
  { file: "steps-mobile.png", path: "/#steps", w: 390, h: 844, full: false, scroll: "#steps-title" },
  { file: "compare-mobile.png", path: "/compare/vs-antla", w: 390, h: 844, full: true },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.w, height: s.h } });
  await page.goto(`${BASE}${s.path}`, { waitUntil: "networkidle", timeout: 30000 }).catch(() =>
    page.goto(`${BASE}${s.path}`, { waitUntil: "domcontentloaded" }),
  );
  await page.waitForTimeout(1000);
  if (s.scroll) {
    await page.locator(s.scroll).scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
  }
  await page.screenshot({
    path: path.join(OUT, s.file),
    fullPage: !!s.full,
  });
  console.log("saved", s.file);
}
await browser.close();
