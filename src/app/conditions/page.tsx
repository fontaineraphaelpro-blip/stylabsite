import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/legal-pages";

export const metadata: Metadata = {
  title: "Terms of Service — Stylab Virtual Try-On",
  description: "Terms of service for Stylab Virtual Try-On.",
};

export default function Page() {
  return (
    <LegalPage
      locale="en"
      title="Terms of Service"
      html={`<p>Stylab Virtual Try-On is a Shopify application operated by Style Lab. By installing the app you agree to these terms and Shopify's terms of service.</p>
      <h2>Service</h2><p>AI virtual try-on for apparel product pages on Shopify.</p>
      <h2>Billing</h2><p>Plans billed through Shopify based on successful try-on usage.</p>`}
    />
  );
}
