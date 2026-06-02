import type { Metadata } from "next";
import { CompareHubView } from "@/components/pages/compare-view";

export const metadata: Metadata = {
  title: "Stylab Comparisons | Shopify & API Alternatives",
  description: "Compare Stylab with Genlook, Antla, Banuba, and API platforms.",
};

export default function Page() {
  return <CompareHubView locale="en" />;
}
