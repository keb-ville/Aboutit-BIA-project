import Link from "next/link";

function ContactPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl mt-10">
        <span className="font-bold">Contact</span>{" "}
        <span className="italic">us</span>
      </h1>
      <p className="mt-10 mb-6 md:w-full text-green-600">
        Description text. Description text. Description text. Description text.
        Description text. Description text. Description text.{" "}
        <Link href="/contact" className="underline">
          Description text with links. Description text with Links. Description
          text with Links. Description text with Links. Description text with
          Links. Description text with Links.
        </Link>
      </p>
      <p className="mt-10 mb-6 md:w-full text-green-600">
        Description text. Description text. Description text. Description text.
        Description text. Description text. Description text.{" "}
        <Link href="/about" className="underline">
          Description text with links. Description text with Links. Description
          text with Links. Description text with Links. Description text with
          Links. Description text with Links.
        </Link>
      </p>
      <p className="mt-10 mb-6 md:w-full text-green-600">
        Description text. Description text. Description text. Description text.
        Description text. Description text. Description text.{" "}
        <Link href="/about" className="underline">
          Description text with links. Description text with Links. Description
          text with Links. Description text with Links. Description text with
          Links. Description text with Links.
        </Link>
      </p>
    </div>
  );
}

export default ContactPage;
