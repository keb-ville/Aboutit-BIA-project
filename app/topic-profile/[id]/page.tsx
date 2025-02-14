"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
//http://localhost:3000/topic-profile/1

export default function TopicPage() {
  const { id } = useParams(); // Get topic ID from URL

  return (
    <div className="container mx-auto p-6">
      <nav className="flex justify-between items-center mb-6">
        <Link href="/all-cfc-by-topic" className="underline">
          ← See all Topics
        </Link>
        <div className="space-x-4">
          <a href="/faq" className="text-sm text-gray-600">
            About us (FAQs)
          </a>
        </div>
      </nav>

      <h1 className="text-green-600 text-xl font-bold">Topic</h1>
      {/* <h1 className="text-3xl font-bold">TOPIC {id}</h1> */}
      <h1 className="text-3xl font-bold">TOPIC 8</h1>
      <h3 className="text-sm mt-4 font-semibold text-gray-700">Profile</h3>

      <div className="border-t border-b py-4 my-4">
        <p className="font-bold mb-4">Subject</p>
        <ul className="list-disc pl-4 text-gray-700 text-sm">
          <li>
            <strong>Description Text</strong>
          </li>
          <li>
            <strong>Description Text</strong>
          </li>
          <li>
            <strong>Description Text</strong>
          </li>
          <li>
            <strong>Description Text</strong>
          </li>
          <li>& more</li>
        </ul>
      </div>

      <div className="py-4">
        <p className="font-bold mb-4">Features</p>
        <p>
          There is <span className="font-bold text-green-600">1</span> Call for
          Change in this Topic.
        </p>
        <p>
          There are <span className="font-bold text-green-600">1,034</span>{" "}
          members who are part of <em>Calls for Change</em> in this Topic.
        </p>
      </div>
      <h1 className="mt-4 font-bold mb-4 text-2xl">
        Calls for Change <span className="text-green-600 mr-1">in</span> TOPIC 8
      </h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search for Calls for Change in this Topic"
          className="p-2 border rounded-lg w-3/4"
        />
        <button className="ml-2 p-2 border border-gray-500 rounded-lg">
          🔍
        </button>

        <div className="flex mt-4 space-x-4">
          <select className="p-2 border rounded-lg">
            <option>Order by: Total members</option>
          </select>
          <select className="p-2 border rounded-lg">
            <option>Filter by: None</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="border p-2">Date Created</th>
              <th className="border p-2">Soundness Score</th>
              <th className="border p-2">Call for Change</th>
              <th className="border p-2">Trending</th>
              <th className="border p-2">Supporting Beliefs</th>
              <th className="border p-2">Total Members</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="border p-2">DD/MM/YYYY</td>
              <td className="border p-2 text-center font-bold text-green-600">
                62
              </td>
              <td className="border p-2">
                Call for Change 4 Text. Call for Change 4 Text. Call for Change
                4 Text.
              </td>
              <td className="border p-2 text-center">🔥</td>
              <td className="border p-2 text-left">
                2 Factual
                <br />1 Opinion-Based
              </td>
              <td className="border p-2 text-center font-bold">1,034</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
