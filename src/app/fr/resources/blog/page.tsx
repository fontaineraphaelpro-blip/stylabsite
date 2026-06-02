import type { Metadata } from "next";
import { BlogIndexView } from "@/components/pages/blog-view";

export const metadata: Metadata = {
  title: "Blog Stylab | Guides essayage virtuel Shopify",
  description: "Guides pratiques pour marchands apparel Shopify.",
};

export default function Page() {
  return <BlogIndexView locale="fr" />;
}
