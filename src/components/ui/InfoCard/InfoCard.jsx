import Image from "next/image";

function InfoCard({ iconSrc, iconAlt, title, description }) {
  return (
    <article className="shadow-2 flex h-[260px] w-[28vw] flex-col items-center justify-center gap-4 rounded-xl">
      {/* Icon */}
      <Image src={iconSrc} alt={iconAlt} width={48} height={48} />

      {/* Title */}
      <h3 className="body-lg font-medium">{title}</h3>

      {/* Description */}
      <div className="text-text-secondary flex flex-col items-center gap-2">
        {description.map((paragraph) => (
          <p key={paragraph.id}>{paragraph.text}</p>
        ))}
      </div>
    </article>
  );
}

export default InfoCard;
