/* eslint-disable @next/next/no-img-element */
import Logo from "../navbar/Logo";
import Image from "next/image";

function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex justify-between items-center py-6 px-4">
        <Logo />
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-600">
            A product of Better Impact Analysis Limited, a UK registered company
          </p>

          <Image src="/bialogo.jpeg" alt="Logo" width={120} height={120} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
