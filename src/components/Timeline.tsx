import type { TimelineItem } from "../data/mothersDay";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-brand-accent/70 max-w-3xl mx-auto pl-5">
      {items.map((it, idx) => (
        <li key={idx} className="mb-8 ml-2">
          <div className="absolute -left-2 mt-1 h-3 w-3 rounded-full bg-brand-primary" />
          <h4 className="font-display text-xl">
            {it.year} — {it.title}
          </h4>
          {it.description && <p className="opacity-85 mt-1">{it.description}</p>}
          {it.image && <img src={it.image} alt={it.title} className="mt-3 rounded-lg shadow-sm" />}
        </li>
      ))}
    </ol>
  );
}