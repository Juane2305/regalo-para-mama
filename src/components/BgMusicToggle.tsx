import { useEffect, useRef, useState } from "react";

export default function BgMusicToggle({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.loop = true;
    if (enabled) a.play().catch(() => {});
    else a.pause();
  }, [enabled]);

  return (
    <div className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 shadow-sm border border-brand-accent/50">
      <button onClick={() => setEnabled((v) => !v)} className="text-sm font-medium text-brand-dark">
        {enabled ? "🎵 Música: ON" : "🔇 Música: OFF"}
      </button>
      <audio ref={audioRef} src={src} />
    </div>
  );
}