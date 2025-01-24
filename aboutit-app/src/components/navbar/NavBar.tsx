//import NavSearch from "./NavSearch";
//import LinksDropdown from "./LinksDropdown";
//import DarkMode from "./DarkMode";

import Logo from "./logo";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <h1>faq</h1>
      </div>
    </nav>
  );
}
export default Navbar;
