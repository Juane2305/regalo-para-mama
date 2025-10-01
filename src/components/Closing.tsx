export default function Closing({ text, signature }: { text: string; signature: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-xl md:text-2xl leading-relaxed">{text}</p>
      <p className="mt-4 font-display text-brand-primary text-lg">{signature}</p>
    </div>
  );
}