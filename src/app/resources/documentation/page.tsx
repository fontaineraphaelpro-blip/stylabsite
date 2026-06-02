import type { Metadata } from "next";
import { DocumentationView } from "@/components/pages/documentation-view";

export const metadata: Metadata = {
  title: "Documentation | Stylab",
  description: "Install and configure Stylab on Shopify.",
};

export default function Page() {
  return <DocumentationView locale="en" />;
}
