"use client";
import Link from "next/link";

export default function TopicPage() {
  return (
    <div className="container mx-auto p-6">
      <nav className="flex justify-between items-center mb-6">
        <Link
          href="/calls-for-change-topic"
          className="underline text-green-600"
        >
          ← See all Topics
        </Link>
        <div className="space-x-4">
          <section className="flex text-right ">
            <a href="/about" className="text-sm text-gray-600">
              Find out more about Topics <br /> at{" "}
              <span className="underline italic">What is a Topic? </span>on our{" "}
              <br />
              <a href="/about" className="underline">
                About us (FAQs){" "}
              </a>
              page
            </a>
          </section>
        </div>
      </nav>

      <h1 className="text-green-600 text-2xl font-bold mb-6">Topic</h1>
      <h1 className="text-4xl font-bold">TOPIC 8</h1>
      <h3 className="text-xl mt-4 font-semibold text-green-600">Profile</h3>
      <section className="mt-6 border-none p-4">
        <div className="flex">
          <h4 className="text-2xl font-bold leading-tight text-black">
            Subject
          </h4>
          <div>
            <p className="mt-2 mb-2 m-10">
              This Topic includes
              <span className="italic"> Call for Change</span> about:
            </p>
            <ul className="text-black m-10 font-bold">
              <li>Description Text</li>
              <li>Description Text</li>
              <li>Description Text</li>
              <li>Description Text</li>
              <li className="font-normal">& more</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="py-4 mb-4">
        <p className="font-bold mb-4 text-2xl pl-6">Features</p>
        <p className="pl-40 text-lg">
          {" "}
          There is <span className="font-bold text-green-600">1</span>
          <span className="italic"> Call for Change</span> in this Topic.
        </p>

        <p className="pl-40 text-lg">
          {" "}
          There are <span className="font-bold text-green-600">1,034</span>{" "}
          members who are part of <em>Calls for Change</em> in this Topic.
        </p>
        <div className="space-x-4">
          <section className="flex mt-2 ml-40">
            <a href="/about" className="text-sm text-gray-600">
              Find out more about{" "}
              <span className="italic">Calls for Change</span> at{" "}
              <span className="underline italic">
                What is a Call for Change?{" "}
              </span>
              on our{" "}
              <a href="/about" className="underline">
                About us (FAQs){" "}
              </a>
              page
            </a>
          </section>
        </div>
      </div>
      <h1 className="text-3xl mt-10">
        <span className="font-bold italic">Calls for Change</span>{" "}
        <span className="text-green-600">in</span>
        <span className="font-bold"> TOPIC 8</span>
      </h1>
      <div className="space-x-4">
        <section className="flex mt-2">
          <a href="/about" className="text-sm text-gray-600">
            Find out more about <span className="italic">Calls for Change</span>{" "}
            at{" "}
            <span className="underline italic">
              What is a Call for Change?{" "}
            </span>
            on our{" "}
            <a href="/about" className="underline">
              About us (FAQs){" "}
            </a>
            page
          </a>
        </section>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search for Calls for Change in this Topic"
          className="p-2 border rounded-lg w-3/4 placeholder-lime-500"
        />
        <button className="ml-2 p-2 border border-gray-500 rounded-lg bg-green-600">
          🔍
        </button>

        <div className="flex mt-4 space-x-4">
          <select className="p-2 border rounded-lg text-lime-500">
            <option>Order by: Total members</option>
          </select>
          <select className="p-2 border rounded-lg text-lime-500">
            <option>Filter by: None</option>
          </select>
        </div>
      </div>
      <section className="text-lime-500 mt-10 underline">
        <Link href="/calls-for-change-topic">
          See <span className="italic">Calls for Change </span>in all Topics
        </Link>
      </section>

      <div className="mt-6">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="border p-2 font-normal">Date Created</th>
              <th className="border p-2 font-normal">Soundness Score</th>
              <th className="border p-2 italic font-normal">Call for Change</th>
              <th className="border p-2 font-normal">Trending</th>
              <th className="border p-2 font-normal">Supporting Beliefs</th>
              <th className="border p-2 font-normal">Total Members</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="border p-2">DD/Month/YYYY</td>
              <td className="border p-2 text-center font-bold text-white bg-lime-500">
                62
              </td>
              <Link href="/call-for-change-profile">
                <td className="border p-2 underline">
                  Call for Change 4 Text. Call for Change 4 Text. Call for
                  Change 4 Text. Call for Change 4 Text. Call for Change 4 Text.
                  Call for Change 4 Text. Call for Change 4 Text. Call for
                  Change 4 Text. Call for Change 4 Text.
                </td>
              </Link>
              <td className="border p-2 text-center">🔥</td>

              <td className="border p-2 text-left underline">
                <a href="/call-for-change-profile">
                  <span className="font-bold">2</span> Factual
                  <br />
                  <span className="font-bold">1</span> Opinion-Based
                </a>
              </td>
              <td className="border p-2 text-center font-bold underline">
                <a href="/call-for-change-profile">1,034</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
