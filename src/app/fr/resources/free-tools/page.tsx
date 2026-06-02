import type { Metadata } from "next";
import { FreeToolsView } from "@/components/pages/free-tools-view";

export const metadata: Metadata = {
  title: "Outils gratuits | Stylab",
  description: "Calculateur ROI essayage virtuel pour marchands Shopify apparel.",
};

export default function Page() {
  return <FreeToolsView locale="fr" />;
}
