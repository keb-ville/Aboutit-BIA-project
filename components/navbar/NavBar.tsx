import LinksDropdown from "./LinksDropdown";
import FeedbackPopover from "./FeedbackPopover";
import Logo from "./Logo";

import NavMenu from "./NavMenu";
function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-6">
        <Logo />
        <FeedbackPopover />
        <div className="flex gap-4 items-center ">
          <NavMenu />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
