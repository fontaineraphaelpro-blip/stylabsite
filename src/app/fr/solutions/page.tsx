import type { Metadata } from "next";
import { SolutionsHubView } from "@/components/pages/solution-view";

export const metadata: Metadata = {
  title: "Solutions Stylab",
  description: "Solutions Stylab pour marques apparel Shopify.",
};

export default function Page() {
  return <SolutionsHubView locale="fr" />;
}
