import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

function Logo({ variant }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2 px-1">
      <Image
        src="/icons/logo.svg"
        alt="Logo de La Roma"
        width={285}
        height={291}
        className="size-8"
      />
      <span className={clsx("heading-3", variant === "light" && "text-white")}>
        La Roma
      </span>
    </Link>
  );
}

export default Logo;
