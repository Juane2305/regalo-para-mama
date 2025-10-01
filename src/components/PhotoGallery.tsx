import { useState } from "react";
import Lightbox from "./Lightbox";

type Photo = { src: string; caption?: string };
export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {photos.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setOpenIndex(idx)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            aria-label={`Abrir foto ${idx + 1}`}
          >
            <img
              src={p.src}
              alt={p.caption ?? `Foto ${idx + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {p.caption && (
              <span className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs md:text-sm px-2 py-1">
                {p.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          photos={photos}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}