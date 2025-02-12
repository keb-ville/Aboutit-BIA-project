"use client";

import { useState } from "react";

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
          <span className="italic">Calls for Change by Topic</span>
        </h1>
        <p className="text-green-700 mt-2">
          Description text with{" "}
          <a href="#" className="underline">
            Links
          </a>
          . Description text with{" "}
          <a href="#" className="underline">
            Links
          </a>
          .
        </p>

        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Search for Calls for Change in all Topics"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow p-2 border rounded-lg"
          />
          <button className="ml-2 p-2 text-white rounded-lg border border-gray-300">
            🔍
          </button>
        </div>

        <div className="flex space-x-4 mt-4 text-green-700">
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="border p-2 rounded-lg bg-white"
          >
            <option value="Alphabetical">Order by: Alphabetical</option>
            <option value="Most Popular">Most Popular</option>
          </select>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded-lg bg-white"
          >
            <option value="None">Filter by: None</option>
            <option value="Active">Active</option>
          </select>

          <select
            value={view}
            onChange={(e) => setView(e.target.value)}
            className="border p-2 rounded-lg bg-white"
          >
            <option value="Small tiles">Show in: Small tiles</option>
            <option value="Large tiles">Large tiles</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-20 mt-8">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="border mt-4 rounded-lg p-4 bg-white text-left shadow"
            >
              <div className="bg-gray-300 h-24 mb-2"></div>
              <h2 className="font-bold">TOPIC {i + 1}</h2>
              <p className="text-sm text-gray-600">Calls for Change on Topic</p>
              <p className="text-xs text-gray-400">872 Members joined</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
