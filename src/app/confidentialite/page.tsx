import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/legal-pages";

export const metadata: Metadata = {
  title: "Privacy Policy — Stylab Virtual Try-On",
  description: "Stylab Virtual Try-On privacy policy.",
};

export default function Page() {
  return (
    <LegalPage
      locale="en"
      title="Privacy Policy"
      html={`<p>Stylab Virtual Try-On processes shopper photos to generate try-on previews. Photos are processed for generation only and are not stored for marketing purposes.</p>
      <h2>Data we collect</h2><p>Merchants: Shopify store data required for app operation. Shoppers: photos uploaded for try-on preview.</p>
      <h2>Contact</h2><p>Questions: <a href="/contact">contact page</a>.</p>`}
    />
  );
}
