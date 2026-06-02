import type { Metadata } from "next";
import { ContactContent } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact — Stylab Virtual Try-On",
  description: "Contact Stylab for support, partnerships, and enterprise inquiries.",
};

export default function ContactPage() {
  return <ContactContent locale="en" />;
}
