import Image from "next/image";

function TeamCard({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  name,
  role,
  description,
}) {
  return (
    // <article className="shadow-1 flex w-[35vw] flex-col items-center gap-4 rounded-2xl">
    <article className="shadow-1 flex w-[35vw] max-w-[480px] min-w-[300px] flex-col items-center gap-4 rounded-2xl">
      <div>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          className="h-[400px] rounded-t-2xl object-cover object-top"
        />
      </div>

      {/* Text content */}
      <div className="px-[3vw] pb-4">
        <div className="mt-1 mb-5 flex gap-6">
          {/* Heading */}
          <h3 className="heading-3">{name}</h3>

          <p className="bg-text-secondary flex w-fit items-center justify-center rounded-md px-2 py-0.5 text-sm text-white">
            {role}
          </p>
        </div>

        {/* Description */}
        {description.map((paragraph) => (
          <p key={paragraph.id} className="mb-4">
            {paragraph.text}
          </p>
        ))}
      </div>
    </article>
  );
}

export default TeamCard;
