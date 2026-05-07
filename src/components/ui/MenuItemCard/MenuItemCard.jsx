import Image from "next/image";

function MenuItemCard({ imageSrc, imageAlt, name, description, tags, price }) {
  return (
    <article className="shadow-2 h-[354px] w-[246px] rounded-xl">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1000}
        height={1000}
        className="h-[185px] object-contain"
      />

      {/* Text content */}
      <div className="flex h-[169px] flex-col justify-between gap-2 p-4">
        <h3 className="body-md-xbold">{name}</h3>

        <p className="body-sm text-text-secondary">{description}</p>

        <div className="flex w-full items-center justify-between">
          {/* Badges */}
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="body-xs bg-primary/20 border-primary/50 text-primary rounded-2xl border px-2.5 py-1"
              >
                {tag.text}
              </span>
            ))}
          </div>

          {/* Price */}
          <span className="body-md-xbold">{price}€</span>
        </div>
      </div>
    </article>
  );
}

export default MenuItemCard;
