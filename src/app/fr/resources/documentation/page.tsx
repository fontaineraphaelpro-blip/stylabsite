import type { Metadata } from "next";
import { DocumentationView } from "@/components/pages/documentation-view";

export const metadata: Metadata = {
  title: "Documentation | Stylab — Essayage virtuel Shopify",
  description: "Installez et configurez Stylab sur Shopify.",
};

export default function Page() {
  return <DocumentationView locale="fr" />;
}
