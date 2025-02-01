import Logo from "./Logo";

function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex justify-end py-6 pr-4">
        <div>
          <Logo />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
