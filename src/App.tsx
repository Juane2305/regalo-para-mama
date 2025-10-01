import { giftData } from "./data/mothersDay";
import Hero from "./components/Hero";
import PhotoGallery from "./components/PhotoGallery";
import Dedications from "./components/Dedications";
import VideoSection from "./components/VideoSection";
import Timeline from "./components/Timeline";
import Closing from "./components/Closing";
import BgMusicToggle from "./components/BgMusicToggle";

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero data={giftData.hero} momName={giftData.momName} />
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center my-6">
          <BgMusicToggle src={giftData.bgMusic.url} />
        </div>

        <section id="gallery" className="py-10">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-6">Galería de recuerdos</h2>
          <PhotoGallery photos={giftData.photos} />
        </section>

        <section id="dedications" className="py-10">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-6">Dedicatorias</h2>
          <Dedications items={giftData.dedications} />
        </section>

        <section id="video" className="py-10">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-6">Video especial</h2>
          <VideoSection url={giftData.video.url} caption={giftData.video.caption} />
        </section>

        <section id="timeline" className="py-10">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-6">Momentos destacados</h2>
          <Timeline items={giftData.timeline} />
        </section>

        <section id="closing" className="py-14">
          <Closing text={giftData.closing.text} signature={giftData.closing.signature} />
        </section>
      </section>
    </main>
  );
}