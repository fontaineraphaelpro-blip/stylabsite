import type { Metadata } from "next";
import { CompareHubView } from "@/components/pages/compare-view";

export const metadata: Metadata = {
  title: "Comparaisons Stylab",
  description: "Comparez Stylab avec Genlook, Antla, Banuba et plus.",
};

export default function Page() {
  return <CompareHubView locale="fr" />;
}
