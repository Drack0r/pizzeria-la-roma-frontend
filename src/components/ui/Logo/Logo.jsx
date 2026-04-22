import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 px-1">
      <Image
        src="/images/logo.svg"
        alt="Logo de La Roma"
        width={398}
        height={408}
        className="size-10"
      />
      <span className="heading-3">La Roma</span>
    </Link>
  );
}

export default Logo;
