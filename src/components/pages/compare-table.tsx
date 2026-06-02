import { FadeIn } from "@/components/motion/fade-in";
import { UI, type CompareItem } from "@/lib/data";
import { t, type Locale } from "@/lib/i18n";

type CompareTableProps = {
  rows: CompareItem["rows"];
  competitor: string;
  locale: Locale;
};

export function CompareTable({ rows, competitor, locale }: CompareTableProps) {
  const u = UI[locale];
  const featureLabel = locale === "fr" ? "Fonctionnalité" : "Feature";

  return (
    <FadeIn delay={0.1}>
      {/* Mobile & tablet: stacked cards — no horizontal scroll */}
      <div className="compare-mobile lg:hidden space-y-3 mb-8" role="list">
        {rows.map((row, i) => (
          <article key={i} className="compare-mobile-card" role="listitem">
            <h3 className="compare-mobile-card__feature">{t(row.feature, locale)}</h3>
            <div className="compare-mobile-card__cols">
              <div className="compare-mobile-card__col compare-mobile-card__col--stylab">
                <span className="compare-mobile-card__brand">Stylab</span>
                <p>{t(row.stylab, locale)}</p>
              </div>
              <div className="compare-mobile-card__col compare-mobile-card__col--other">
                <span className="compare-mobile-card__brand">{competitor}</span>
                <p>{t(row.other, locale)}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop: full table */}
      <div className="compare-table-wrap hidden lg:block mb-8">
        <div className="compare-table-scroll overflow-x-auto rounded-xl border border-white/10">
          <table className="compare-table w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left bg-white/5">
                <th className="p-3 font-semibold">{featureLabel}</th>
                <th className="p-3 font-semibold">Stylab</th>
                <th className="p-3 font-semibold">{competitor}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 text-zinc-300">{t(row.feature, locale)}</td>
                  <td className="p-3 text-white font-medium">{t(row.stylab, locale)}</td>
                  <td className="p-3 text-zinc-400">{t(row.other, locale)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-zinc-500 mt-2 px-1">{u.compareScrollHint}</p>
      </div>
    </FadeIn>
  );
}
