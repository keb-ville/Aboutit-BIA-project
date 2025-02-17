/* eslint-disable @next/next/no-img-element */
import Logo from "../navbar/Logo";
// import Image from "next/image";

function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex justify-between items-center py-6 px-4">
        <Logo />
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-600">
            A product of Better Impact Analysis Limited, a UK registered company
          </p>
          <img
            src="/static/staticImage1.png"
            alt="image"
            width="450"
            height="450"
          />
          {/* <Image
            src="https://snazzy-gnome-babc7b.netlify.app/static/BIAlogo.webp"
            alt="Logo"
            width={50}
            height={180}
          /> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
