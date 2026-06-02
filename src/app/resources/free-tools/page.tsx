import type { Metadata } from "next";
import { FreeToolsView } from "@/components/pages/free-tools-view";

export const metadata: Metadata = {
  title: "Free Tools | Stylab",
  description: "Virtual try-on ROI calculator and rollout tools for Shopify apparel merchants.",
};

export default function Page() {
  return <FreeToolsView locale="en" />;
}
