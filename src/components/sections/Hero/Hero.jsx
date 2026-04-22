import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative h-[779px]">
      {/* Background image */}
      <Image
        src="/images/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash.jpg"
        alt=""
        width={6016}
        height={4016}
        className="absolute h-full object-cover"
      />

      {/* Semi-transparent overlay */}
      <div className="absolute h-full w-full bg-black/50"></div>

      {/* Content */}
      <div className="absolute bottom-60 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center pt-16 text-white">
        <h1 className="heading-1">La Roma</h1>
        <p className="body-lg mt-6">
          L&apos;authenticité italienne au cœur de votre quartier
        </p>
        {/* Actions container */}
        <div className="body-md mt-14 flex gap-6">
          <Link href="/menu" className="btn-primary">
            Découvrir notre menu
          </Link>
          <Link href="/" className="btn bg-black">
            Commander une pizza
            {/* // todo: ajouter un numéro de téléphone */}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
