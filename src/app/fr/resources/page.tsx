import type { Metadata } from "next";
import { ResourcesHubView } from "@/components/pages/blog-view";

export const metadata: Metadata = {
  title: "Ressources Stylab",
  description: "Documentation, blog, outils gratuits et changelog.",
};

export default function Page() {
  return <ResourcesHubView locale="fr" />;
}
