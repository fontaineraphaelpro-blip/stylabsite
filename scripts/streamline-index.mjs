import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const p = path.join(ROOT, 'index.html');
let html = fs.readFileSync(p, 'utf8');

function removeSection(startComment, endBeforeComment) {
  const start = html.indexOf(startComment);
  const end = html.indexOf(endBeforeComment, start + 1);
  if (start === -1) return false;
  if (end === -1) {
    console.warn('end not found for', startComment);
    return false;
  }
  html = html.slice(0, start) + html.slice(end);
  return true;
}

removeSection('        <!-- BEFORE / AFTER -->\n', '        <!-- PRIVACY');
removeSection('        <!-- PRIVACY & TRUST', '        <!-- PRODUCT');
removeSection('        <!-- PRODUCT — merchant benefits -->', '        <!-- PRICING -->');
removeSection('        <section id="discover"', '        <section class="pp-final-cta">');

html = html.replace(
  '<p class="section-desc">From App Store install to shopper preview — no theme editing, no custom ML pipeline.</p>',
  '<p class="section-desc">Install → enable on products → shoppers try on. No theme edits.</p>'
);
html = html.replace(
  `<div class="section-cta reveal">
                    <a href="https://apps.shopify.com/try-on-stylelab" class="btn btn-primary" target="_blank" rel="noopener"><img class="shopify-icon" src="assets/shopify-icon-logo.svg" alt="" width="20" height="20" aria-hidden="true">Install on Shopify</a>
                    <a href="#journey" class="btn btn-ghost">View live demo</a>
                </div>`,
  `<div class="section-cta reveal">
                    <a href="https://apps.shopify.com/try-on-stylelab" class="btn btn-primary" target="_blank" rel="noopener"><img class="shopify-icon" src="assets/shopify-icon-logo.svg" alt="" width="20" height="20" aria-hidden="true">Install free on Shopify</a>
                </div>`
);

// Trim FAQ — keep 4 items
const faqStart = html.indexOf('<div class="faq-list reveal">');
const faqEnd = html.indexOf('</div>\n            </div>\n        </section>\n\n        <section class="pp-final-cta">');
if (faqStart !== -1 && faqEnd !== -1) {
  const faqBlock = `                <div class="faq-list reveal">
                    <div class="faq-item open">
                        <button type="button" class="faq-q" aria-expanded="true"><span class="faq-q-text">Do I need to edit my Shopify theme?</span><span class="icon" aria-hidden="true">+</span></button>
                        <div class="faq-a">No. Install from the App Store — the try-on widget appears on product pages automatically.</div>
                    </div>
                    <div class="faq-item">
                        <button type="button" class="faq-q" aria-expanded="false"><span class="faq-q-text">Is it really free to start?</span><span class="icon" aria-hidden="true">+</span></button>
                        <div class="faq-a">Yes. 50 successful try-ons per month on the free plan. No credit card required.</div>
                    </div>
                    <div class="faq-item">
                        <button type="button" class="faq-q" aria-expanded="false"><span class="faq-q-text">Are shopper photos stored?</span><span class="icon" aria-hidden="true">+</span></button>
                        <div class="faq-a">No. Photos are processed for the preview only, then discarded. See our <a href="confidentialite.html">privacy policy</a>.</div>
                    </div>
                    <div class="faq-item">
                        <button type="button" class="faq-q" aria-expanded="false"><span class="faq-q-text">Can I try before installing?</span><span class="icon" aria-hidden="true">+</span></button>
                        <div class="faq-a">Yes — use the <a href="#journey">live demo above</a> with your own photo.</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pp-final-cta">`;
  html = html.slice(0, faqStart) + faqBlock + html.slice(faqEnd + '</div>\n            </div>\n        </section>\n\n        <section class="pp-final-cta">'.length);
}

html = html.replace(
  `<h2>Don&rsquo;t leave shoppers guessing on your product pages</h2>
                    <p>Try the demo above, then install from the Shopify App Store. Live in ~5 minutes — no credit card required.</p>
                    <div class="btns">
                        <a href="https://apps.shopify.com/try-on-stylelab" class="btn btn-white" target="_blank" rel="noopener"><img class="shopify-icon" src="assets/shopify-icon-logo.svg" alt="" width="20" height="20" aria-hidden="true">Install free on Shopify</a>
                        <a href="#journey" class="btn btn-ghost" style="border-color:rgba(255,255,255,0.35);color:#fff;">Try live demo first</a>
                    </div>`,
  `<h2>Ready to turn browsers into buyers?</h2>
                    <p>Install free from the Shopify App Store. Live in ~5 minutes.</p>
                    <div class="btns">
                        <a href="https://apps.shopify.com/try-on-stylelab" class="btn btn-primary" target="_blank" rel="noopener"><img class="shopify-icon" src="assets/shopify-icon-logo.svg" alt="" width="20" height="20" aria-hidden="true">Install free on Shopify</a>
                    </div>`
);

html = html.replace(
  `<h2 id="exitModalTitle">See it on yourself in 30 seconds</h2>
            <p>Pilot stores saw <strong>77.8% try-on → add-to-cart</strong>. Try the live demo — same widget your shoppers get on Shopify product pages.</p>
            <div class="btns">
                <a href="#journey" class="btn btn-primary" id="exitModalDemo">Try live demo</a>
                <a href="https://apps.shopify.com/try-on-stylelab" class="btn btn-ghost" target="_blank" rel="noopener">Install free — 50 try-ons/mo</a>
            </div>`,
  `<h2 id="exitModalTitle">Install free before you go</h2>
            <p>50 try-ons/mo included. Pilot store: <strong>77.8% try-on → add-to-cart</strong>.</p>
            <div class="btns">
                <a href="https://apps.shopify.com/try-on-stylelab" class="btn btn-primary" target="_blank" rel="noopener">Install free on Shopify</a>
                <a href="#journey" class="btn btn-ghost" id="exitModalDemo">Try demo first</a>
            </div>`
);

html = html.replace(
  '<a href="#journey" class="btn btn-ghost" id="stickyCtaSecondary">Try live demo</a>',
  ''
);

fs.writeFileSync(p, html);
console.log('streamlined index.html');
