import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const legacyHtml = [
  "index.html",
  "contact.html",
  "support.html",
  "confidentialite.html",
  "conditions.html",
  "compare/index.html",
  "compare/vs-genlook.html",
  "compare/vs-antla.html",
  "compare/vs-banuba.html",
  "compare/vs-mirrar.html",
  "compare/vs-camweara.html",
  "compare/vs-looksy.html",
  "compare/vs-trypoint.html",
  "compare/api/vs-fashn-ai.html",
  "compare/api/vs-aiuta.html",
  "compare/api/vs-pixelcut.html",
  "compare/api/vs-replicate.html",
  "compare/api/vs-fal-ai.html",
  "solutions/index.html",
  "solutions/fashion-brands.html",
  "solutions/streetwear.html",
  "solutions/enterprise.html",
  "solutions/prestashop.html",
  "solutions/api.html",
  "resources/index.html",
  "resources/free-tools.html",
  "resources/documentation.html",
  "resources/changelog.html",
  "resources/blog/index.html",
  "fr/index.html",
];

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  trailingSlash: false,
  async redirects() {
    return legacyHtml.flatMap((file) => {
      const withoutIndex = file.replace(/\/index\.html$/, "").replace(/index\.html$/, "");
      const enDest = withoutIndex ? `/${withoutIndex.replace(/\.html$/, "")}` : "/";
      const frDest = file.startsWith("fr/")
        ? `/fr${enDest === "/" ? "" : enDest.replace(/^\//, "/")}`
        : `/fr/${withoutIndex.replace(/\.html$/, "")}`;

      const rules = [
        { source: `/${file}`, destination: enDest, permanent: true },
      ];

      if (file.startsWith("fr/")) {
        rules.push({ source: `/${file}`, destination: frDest, permanent: true });
      } else if (file !== "index.html") {
        rules.push({
          source: `/fr/${file}`,
          destination: `/fr/${withoutIndex.replace(/\.html$/, "")}`,
          permanent: true,
        });
      }

      return rules;
    });
  },
};

export default nextConfig;
