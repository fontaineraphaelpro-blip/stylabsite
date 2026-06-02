import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import {
  HubGrid,
  MarketingCta,
  PageHero,
  ProseSection,
  SectionBlock,
} from "@/components/pages/marketing-blocks";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { BLOG_POSTS, type BlogPost, UI } from "@/lib/data";
import { localePath, rewriteContentHtml, t, type Locale } from "@/lib/i18n";

export function BlogIndexView({ locale }: { locale: Locale }) {
  const u = UI[locale];
  const posts = BLOG_POSTS.map((p) => ({
    href: localePath(locale, `/resources/blog/${p.slug}`),
    title: t(p.title, locale),
    desc: t(p.excerpt, locale),
    cta: "→",
  }));

  return (
    <MarketingShell locale={locale}>
      <PageHero
        locale={locale}
        eyebrow={u.blog}
        title={u.blog}
        lead={
          locale === "fr"
            ? "Guides pratiques pour marchands apparel Shopify."
            : "Practical guides for Shopify apparel merchants."
        }
        breadcrumb={[{ href: localePath(locale, "/resources"), label: u.footerResources }]}
      />
      <SectionBlock>
        <div className="grid sm:grid-cols-2 gap-4">
          {BLOG_POSTS.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.08}>
              <Link
                href={localePath(locale, `/resources/blog/${p.slug}`)}
                className="glass-card gradient-border hover-lift block p-5 h-full group"
              >
                <span className="text-xs uppercase tracking-wide text-purple-400">{t(p.tag, locale)}</span>
                <h2 className="font-semibold text-lg mt-2 mb-2 group-hover:text-purple-300 transition-colors">
                  {t(p.title, locale)}
                </h2>
                <p className="text-sm text-zinc-400">{t(p.excerpt, locale)}</p>
                <time className="text-xs text-zinc-500 mt-4 block" dateTime={p.dateISO}>
                  {p.date}
                </time>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionBlock>
      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}

export function BlogPostView({ locale, post }: { locale: Locale; post: BlogPost }) {
  const u = UI[locale];
  const content = rewriteContentHtml(t(post.content, locale), locale);

  return (
    <MarketingShell locale={locale}>
      <article className="container max-w-3xl">
        <PageHero
          locale={locale}
          eyebrow={t(post.tag, locale)}
          title={t(post.title, locale)}
          lead={t(post.summary, locale)}
          breadcrumb={[
            { href: localePath(locale, "/resources"), label: u.footerResources },
            { href: localePath(locale, "/resources/blog"), label: u.blog },
          ]}
        />
        <SectionBlock>
          <ProseSection html={content} locale={locale} className="prose-headings:scroll-mt-24" />
        </SectionBlock>
        <SectionBlock>
          <div className="glass-card gradient-border p-6 text-center">
            <p className="text-zinc-400 mb-4">
              {locale === "fr" ? "Essayez le widget sur un produit réel." : "Try the widget on a real product."}
            </p>
            <Link href={`${localePath(locale)}#journey`} className="btn btn--primary">
              {u.viewDemo}
            </Link>
          </div>
        </SectionBlock>
      </article>
      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}

export function ResourcesHubView({ locale }: { locale: Locale }) {
  const u = UI[locale];
  const fr = locale === "fr";
  const links = [
    {
      href: localePath(locale, "/resources/free-tools"),
      title: u.freeTools,
      desc: fr ? "Calculateur usage & checklist" : "Usage calculator & checklists",
    },
    { href: localePath(locale, "/resources/blog"), title: u.blog, desc: "Guides" },
    { href: localePath(locale, "/resources/documentation"), title: u.documentation, desc: "Install & config" },
    { href: localePath(locale, "/resources/changelog"), title: u.changelog, desc: "Updates" },
    {
      href: localePath(locale, "/compare"),
      title: u.compare,
      desc: fr ? "Stylab vs Genlook, Antla, Banuba et API" : "Stylab vs Genlook, Antla, Banuba, and APIs",
    },
    {
      href: localePath(locale, "/solutions"),
      title: u.solutions,
      desc: fr ? "Mode, streetwear, enterprise" : "Fashion, streetwear, enterprise",
    },
  ];

  return (
    <MarketingShell locale={locale}>
      <PageHero
        locale={locale}
        eyebrow={u.footerResources}
        title={fr ? "Apprendre et lancer" : "Learn and launch"}
      />
      <SectionBlock>
        <HubGrid items={links} />
      </SectionBlock>
      <MarketingCta locale={locale} />
    </MarketingShell>
  );
}
