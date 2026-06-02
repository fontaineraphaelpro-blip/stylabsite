import type { Metadata } from "next";
import { ChangelogView } from "@/components/pages/changelog-view";

export const metadata: Metadata = {
  title: "Changelog | Stylab",
  description: "Stylab marketing site updates.",
};

export default function Page() {
  return <ChangelogView locale="en" />;
}
