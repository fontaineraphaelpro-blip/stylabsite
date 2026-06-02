import type { Metadata } from "next";
import { BlogIndexView } from "@/components/pages/blog-view";

export const metadata: Metadata = {
  title: "Stylab Blog | Shopify Virtual Try-On Guides",
  description: "Practical Shopify virtual try-on guides for apparel merchants.",
};

export default function Page() {
  return <BlogIndexView locale="en" />;
}
