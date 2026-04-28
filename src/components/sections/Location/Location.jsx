import { InfoCard } from "@/components/ui";
import infos from "@/data/infos.json";

function Location() {
  return (
    <section className="flex flex-col items-center">
      {/* Text content */}
      <div className="flex flex-col items-center">
        <h2 className="heading-2">Nous trouver</h2>
        <p className="text-text-secondary mt-4">
          Venez nous rendre visite ou passez commande
        </p>
      </div>

      {/* Card container */}
      <div className="mt-16 flex gap-8">
        {infos.map((info) => (
          <InfoCard
            key={info.id}
            iconSrc={info.iconSrc}
            iconAlt={info.iconAlt}
            title={info.name}
            description={info.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Location;
