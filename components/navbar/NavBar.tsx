import FeedbackPopover from "./FeedbackPopover";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-6">
        <Logo />
        <div className="flex gap-24">
          <Link href="/about" className="text-black hover:text-green-600">
            About Us
          </Link>
          <Link href="/newsletter" className="text-black hover:text-green-600">
            Our Newsletter
          </Link>
          <Link href="/contact" className="text-black hover:text-green-600">
            Contact Us
          </Link>
        </div>
        <FeedbackPopover />
        <div className="flex gap-4 items-center">
          <NavMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
