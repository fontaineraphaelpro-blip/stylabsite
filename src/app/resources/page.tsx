import type { Metadata } from "next";
import { ResourcesHubView } from "@/components/pages/blog-view";

export const metadata: Metadata = {
  title: "Stylab Resources",
  description: "Documentation, blog, free tools, and changelog.",
};

export default function Page() {
  return <ResourcesHubView locale="en" />;
}
