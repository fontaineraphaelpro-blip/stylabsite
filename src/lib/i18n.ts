export type Locale = "en" | "fr";

export type LocalizedString = { en: string; fr: string };

export function t(value: string | LocalizedString, locale: Locale): string {
  if (typeof value === "string") return value;
  return value[locale] ?? value.en;
}

export function localePath(locale: Locale, path = ""): string {
  const base = locale === "fr" ? "/fr" : "";
  if (!path) return base || "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export const LIVE_DEMO_ID = "try-on";

export function liveDemoHref(locale: Locale): string {
  return `${localePath(locale)}#${LIVE_DEMO_ID}`;
}

export function rewriteContentHtml(html: string, locale: Locale): string {
  const base = locale === "fr" ? "/fr" : "";

  return html
    .replace(/href="\.\.\/\.\.\/resources\/blog\/([^"]+)\.html"/g, `href="${base}/resources/blog/$1"`)
    .replace(/href="\.\.\/resources\/blog\/([^"]+)\.html"/g, `href="${base}/resources/blog/$1"`)
    .replace(/href="\.\.\/\.\.\/resources\/([^"]+)\.html"/g, `href="${base}/resources/$1"`)
    .replace(/href="\.\.\/resources\/([^"]+)\.html"/g, `href="${base}/resources/$1"`)
    .replace(/href="\.\.\/\.\.\/([^"]+)\.html"/g, 'href="/$1"')
    .replace(/href="\.\.\/([^"]+)\.html"/g, `href="${base}/$1"`)
    .replace(/href="index\.html#([^"]+)"/g, `href="${base || "/"}#$1"`)
    .replace(/href="\.\.\/index\.html#([^"]+)"/g, `href="${base || "/"}#$1"`)
    .replace(/href="\.\.\/\.\.\/index\.html#([^"]+)"/g, `href="${base || "/"}#$1"`)
    .replace(/href="([^"#]+\/)?([^"/#]+)\.html"/g, (_match, dir, file) => {
      const segment = dir ? `${dir}${file}` : file;
      if (segment === "index") return `href="${base || "/"}"`;
      return `href="${base}/${segment.replace(/\/$/, "")}"`;
    })
    .replace(/#try-it/g, "#try-on")
    .replace(/#pricing/g, "#faq");
}
