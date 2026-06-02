import { type Locale, UI } from "@/lib/content";

export function AiMarquee({ locale }: { locale: Locale }) {
  const items = [...UI[locale].marqueeItems, ...UI[locale].marqueeItems];

  return (
    <div className="overflow-hidden py-4 my-4">
      <div className="marquee-track gap-8 px-4">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-2 text-sm text-zinc-500 whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
