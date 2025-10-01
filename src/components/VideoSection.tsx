export default function VideoSection({ url, caption }: { url: string; caption?: string }) {
  return (
    <figure className="mx-auto max-w-3xl w-full">
      <video src={url} controls className="w-full rounded-xl shadow-lg border border-brand-accent/50" />
      {caption && <figcaption className="text-center mt-3 text-sm opacity-80">{caption}</figcaption>}
    </figure>
  );
}