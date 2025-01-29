import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/">
      <Image src="/imagelogo.svg" alt="Logo" width={120} height={120} />
    </Link>
  );
}

export default Logo;
