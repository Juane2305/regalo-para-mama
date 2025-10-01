import { useEffect, useState } from "react";

type Photo = { src: string; caption?: string };

export default function Lightbox({
  photos,
  startIndex,
  onClose,
}: {
  photos: Photo[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, photos.length]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20"
      >
        Cerrar ✕
      </button>

      <button
        aria-label="Anterior"
        onClick={() => setIndex((i) => (i - 1 + photos.length) % photos.length)}
        className="absolute left-3 md:left-6 text-white text-2xl md:text-4xl"
      >
        ‹
      </button>

      <figure className="max-w-5xl w-full">
        <img
          src={photos[index].src}
          alt={photos[index].caption ?? `Foto ${index + 1}`}
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
        {photos[index].caption && (
          <figcaption className="text-center text-white/90 mt-3">
            {photos[index].caption}
          </figcaption>
        )}
      </figure>

      <button
        aria-label="Siguiente"
        onClick={() => setIndex((i) => (i + 1) % photos.length)}
        className="absolute right-3 md:right-6 text-white text-2xl md:text-4xl"
      >
        ›
      </button>
    </div>
  );
}