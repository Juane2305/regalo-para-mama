type Props = {
  momName: string;
  data: { title: string; subtitle: string; bgImageMobile: string; bgImageDesktop: string };
};

export default function Hero({ momName, data }: Props) {
  return (
    <header className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <img
        src={data.bgImageMobile}
        alt={`Foto de ${momName} con su familia`}
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />
      <img
        src={data.bgImageDesktop}
        alt={`Foto de ${momName} con su familia`}
        className="absolute inset-0 h-full w-full object-cover hidden md:block"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="text-white max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl drop-shadow">{data.title}</h1>
          <p className="mt-4 text-lg md:text-2xl opacity-95">{data.subtitle}</p>
          <div className="mt-6 inline-block rounded-full bg-brand-primary/90 px-6 py-3 text-white">
            Para {momName}
          </div>
        </div>
      </div>
    </header>
  );
}