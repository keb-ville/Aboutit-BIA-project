"use client";

import Link from "next/link";
import AllSupportingBeliefsPage from "../../components/dataTable/AllSupportingBeliefs";

export default function SupportingBeliefsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl mt-10">
        <span className="font-bold">All</span>{" "}
        <span className="italic">Supporting Beliefs</span>
      </h1>

      <p className="mt-10 mb-6 md:w-full text-green-600">
        <>
          Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          .
        </>
      </p>
      <section>
        <div className="bg-gray-100  p-4 rounded-lg mb-4">
          <input
            type="text"
            placeholder="Search for Supporting Beliefs"
            className="p-2 border rounded-lg w-3/4 placeholder-lime-500 border-black outline-none"
          />
          <button className="ml-2 p-2 border border-black rounded-lg bg-green-600">
            🔍
          </button>
          <div className="flex mt-4 space-x-4">
            <select className="p-2 border border-black rounded-lg text-lime-500">
              <option>Order by: Total votes</option>
            </select>
            <select className="p-2 border border-black rounded-lg text-lime-500">
              <option>Filter by: None</option>
            </select>
          </div>
        </div>
      </section>
      <section>
        <AllSupportingBeliefsPage />
      </section>
    </div>
  );
}
