import type { Metadata } from "next";
import { ChangelogView } from "@/components/pages/changelog-view";

export const metadata: Metadata = {
  title: "Journal des modifications | Stylab",
  description: "Mises à jour du site marketing Stylab.",
};

export default function Page() {
  return <ChangelogView locale="fr" />;
}
