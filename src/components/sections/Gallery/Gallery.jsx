import { GalleryImage } from "@/components/ui";
import gallery from "@/data/gallery.json";

function Gallery() {
  return (
    <section className="flex flex-col items-center gap-16 px-[2.7vw]">
      {/* Text content */}
      <div className="inline-flex flex-col items-center gap-4">
        <h2 className="heading-2">Galerie photo</h2>

        <p className="text-text-secondary text-lg">
          Des pizzas artisanales préparées avec passion
        </p>
      </div>

      {/* Gallery */}
      <div className="grid h-[2000px] w-full grid-cols-2 grid-rows-4 gap-4">
        {gallery.map((image) => (
          <GalleryImage
            key={image.id}
            imgSrc={image.imgSrc}
            imgAlt={image.imgAlt}
            variant={image.variant}
          />
        ))}
      </div>

      {/* Tight text */}
      <p className="text-text-secondary italic">
        Toutes nos pizzas sont disponibles en pâte fine ou classique
      </p>
    </section>
  );
}

export default Gallery;
