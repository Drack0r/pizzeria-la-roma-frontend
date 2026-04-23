import Image from "next/image";
import Link from "next/link";

function Kitchen() {
  return (
    <section className="flex items-center justify-center gap-[8vw] px-[2.7vw]">
      {/* Image */}
      <Image
        src="/images/nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg"
        alt="Cuisinier pétrissant la pâte"
        width={5148}
        height={3432}
        className="h-101 w-[45vw] rounded-lg object-cover"
      />

      {/* Text content */}
      <div className="flex w-129 flex-col gap-6">
        <h2 className="heading-2">Notre cuisine</h2>

        <p className="text-text-secondary text-lg">
          Nos pizzaiolos, formés à Naples, façonnent chaque pâte à la main avec
          passion et précision.
        </p>

        <p className="text-text-secondary text-lg">
          Nos pizzas sont cuites dans un four à bois traditionnel, atteignant
          450°C pour une cuisson parfaite.
        </p>

        <p className="text-text-secondary text-lg">
          Tomates San Marzano, mozzarella di bufala, huile d&apos;olive extra
          vierge… chaque ingrédient est soigneusement sélectionné et importé
          directement d&apos;Italie.
        </p>

        <Link
          href="/menu"
          className="btn-primary body-md mt-4 w-fit text-white"
        >
          Découvrir notre menu
        </Link>
      </div>
    </section>
  );
}

export default Kitchen;
