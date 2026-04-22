import clsx from "clsx";
import Image from "next/image";

function GalleryImage({ imgSrc, imgAlt, width, height, variant }) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        variant === "vertical" && "row-span-2",
        variant === "horizontal" && "row-span-1",
      )}
    >
      <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
    </div>
  );
}

export default GalleryImage;
