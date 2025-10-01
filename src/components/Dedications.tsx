import AudioMessageCard from "./AudioMessageCard";
import type { ChildDedication } from "../data/mothersDay";

export default function Dedications({ items }: { items: ChildDedication[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
      {items.map((d, i) => (
        <article key={i} className="rounded-xl bg-white p-5 shadow-sm border border-brand-accent/40">
          <header className="flex items-center justify-between mb-2">
            <h3 className="font-display text-xl">{d.name}</h3>
            <span className="text-brand-primary text-sm">Con amor</span>
          </header>
          <p className="leading-relaxed">{d.text}</p>
          {d.audioUrl && (
            <div className="mt-4">
              <AudioMessageCard src={d.audioUrl} />
            </div>
          )}
        </article>
      ))}
    </div>
  );
}