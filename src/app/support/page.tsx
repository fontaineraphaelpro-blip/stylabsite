import type { Metadata } from "next";
import { SupportPage } from "@/components/pages/legal-pages";

export const metadata: Metadata = {
  title: "Support — Stylab Virtual Try-On",
  description: "Get help with Stylab Virtual Try-On on Shopify.",
};

export default function Page() {
  return <SupportPage locale="en" />;
}
