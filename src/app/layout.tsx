import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stylabtryon.site"),
  title: {
    default: "Stylab Virtual Try-On — AI Try-On for Shopify Apparel",
    template: "%s | Stylab Virtual Try-On",
  },
  description:
    "AI virtual try-on for Shopify apparel. Try the live demo, install free from the App Store — live in ~5 min.",
  icons: { icon: "/assets/logo.png", apple: "/assets/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`${GeistSans.className} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
