import Image from "next/image";

import { Badge } from "@/components/ui";
import badges from "@/data/badges.json";

function About() {
  return (
    <section className="flex items-center justify-center gap-[8vw] px-[2.7vw]">
      {/* Text content */}
      <div className="flex w-[45vw] flex-col gap-6">
        <h2 className="heading-2">Notre Histoire</h2>

        <p className="text-text-secondary text-lg">
          Depuis 1995, La Roma perpétue la tradition napolitaine authentique.
          Notre restaurant prépare chaque jour des pizza avec amour et
          savoir-faire.
        </p>

        <p className="text-text-secondary text-lg">
          Nous utilisons uniquement des ingrédients frais et de qualité,
          importés directement d&apos;Italie pour vous offrir une expérience
          gustative inoubliable.
        </p>

        {/* Badges container */}
        <div className="mt-4 flex justify-between">
          {badges.map((badge) => (
            <Badge
              key={badge.id}
              imageSrc={badge.iconSrc}
              imageAlt={badge.iconAlt}
              label={badge.label}
            />
          ))}
        </div>
      </div>

      {/* Image */}
      <Image
        src="/images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"
        alt="Photo de l'intérieur de La Roma"
        width={4032}
        height={3024}
        className="h-101 w-129 rounded-lg object-cover"
      />
    </section>
  );
}

export default About;
