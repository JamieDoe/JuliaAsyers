import ImageGallery from "@/Components/ImageGallery";

export default function Home() {
  return (
    <main className="container">
      <section className="animate-slidein [--slidein-delay:300ms] opacity-0 py-20">
        <ImageGallery />
      </section>
    </main>
  );
}
