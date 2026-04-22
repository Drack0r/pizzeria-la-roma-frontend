import Image from "next/image";

function Badge({ imageSrc, imageAlt, label }) {
  return (
    <article className="inline-flex flex-col items-center gap-3 px-4 pb-6">
      <Image src={imageSrc} alt={imageAlt} width={48} height={48} />

      <span>{label}</span>
    </article>
  );
}

export default Badge;
