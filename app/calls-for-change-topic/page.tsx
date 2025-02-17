"use client";

import { useState } from "react";
import Link from "next/link";
import { Triangle } from "lucide-react";

const topicData = [
  { id: 1, calls: 3, members: 872 },
  { id: 2, calls: 2, members: "1,327" },
  { id: 3, calls: 3, members: "1,236" },
  { id: 4, calls: 1, members: 76 },
  { id: 5, calls: 3, members: 962 },
  { id: 6, calls: 2, members: 801 },
  { id: 7, calls: 3, members: "1,469" },
  { id: 8, calls: 1, members: "1,034", isSpecial: true },
  { id: 9, calls: 3, members: "2,674" },
  { id: 10, calls: 2, members: 796 },
  { id: 11, calls: 2, members: 677 },
  { id: 12, calls: 2, members: 525 },
  { id: 13, calls: 1, members: 420 },
  { id: 14, calls: 3, members: 891 },
  { id: 15, calls: 3, members: "1,577" },
  { id: 16, calls: 2, members: 563 },
];
export default function TopicsPage() {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("Alphabetical");
  const [filter, setFilter] = useState("None");
  const [view, setView] = useState("Small tiles");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="container mx-auto p-6">
        <h1 className="text-3xl mt-10">
          <span className="font-bold">All</span>{" "}
          <span className="italic">Calls for Change</span>
          <span className="font-bold"> by Topic</span>
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
            . Description text with{" "}
            <Link href="/about" className="underline">
              Links
            </Link>
            .
          </>
        </p>

        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Search for Calls for Change in all Topics"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow p-2 border rounded-lg border-black placeholder-green-600"
          />
          <button className="ml-2 p-2 text-white rounded-lg bg-green-600 border border-black">
            🔍
          </button>
        </div>

        <div className="flex space-x-4 mt-4 text-green-600">
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="border p-2 rounded-lg bg-white border-black"
          >
            <option value="Alphabetical">Order by: Alphabetical</option>
            <option value="Most Popular">Most Popular</option>
          </select>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded-lg bg-white border-black"
          >
            <option value="None">Filter by: None</option>
            <option value="Active">Active</option>
          </select>

          <select
            value={view}
            onChange={(e) => setView(e.target.value)}
            className="border p-2 rounded-lg bg-white border-black"
          >
            <option value="Small tiles">Show in: Small tiles</option>
            <option value="Large tiles">Large tiles</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {topicData.map((topic) => (
            <Link
              key={topic.id}
              href={`/calls-for-change-topic/${topic.id}`}
              className="block h-full"
            >
              <div
                className={`border rounded-lg p-4 border-black bg-white text-left shadow hover:shadow-lg transition-shadow h-full flex flex-col ${
                  topic.isSpecial ? "ring-2 ring-green-600" : ""
                }`}
              >
                <div className="bg-gray-300 h-24 mb-2 relative flex-shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Triangle
                      className={`w-12 h-12 ${
                        topic.isSpecial ? "text-green-600" : "text-gray-400"
                      }`}
                    />
                  </div>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="font-bold text-xl text-black mb-2">
                      TOPIC {topic.id}
                    </h2>
                    <div className="mb-2">
                      <span className="text-green-600 font-bold">
                        {topic.calls}
                      </span>
                      <span className="italic text-black">
                        {" "}
                        Call{topic.calls !== 1 ? "s" : ""} for Change in this
                        Topic
                      </span>
                    </div>
                  </div>
                  <p className="text-black">
                    <span className="text-green-600 font-bold">
                      {topic.members}
                    </span>{" "}
                    Members joined
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
