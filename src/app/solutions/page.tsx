import type { Metadata } from "next";
import { SolutionsHubView } from "@/components/pages/solution-view";

export const metadata: Metadata = {
  title: "Stylab Solutions",
  description: "Virtual try-on solutions for fashion brands, streetwear, enterprise, and API.",
};

export default function Page() {
  return <SolutionsHubView locale="en" />;
}
