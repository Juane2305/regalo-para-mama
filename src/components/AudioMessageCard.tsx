import { useRef, useState } from "react";

export default function AudioMessageCard({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
    } else {
      a.play();
    }
  };

  return (
    <div className="flex items-center gap-3 rounded-lg border border-brand-accent/60 p-3">
      <button
        onClick={toggle}
        className="rounded-full bg-brand-primary text-white px-4 py-2"
        aria-label={playing ? "Pausar mensaje" : "Reproducir mensaje"}
      >
        {playing ? "Pausa" : "Play"}
      </button>
      <span className="text-sm opacity-80">Mensaje de voz</span>
      <audio
        ref={audioRef}
        src={src}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="hidden"
      />
    </div>
  );
}