"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const CallForChangePage = () => {
  const router = useRouter();
  return (
    <div>
      <Link href="/all-cfc-by-topic" className="underline text-green-600">
        ← See all <span className="italic">Calls for Change</span> by Topic
      </Link>
      <main className="mt-6">
        <h2 className="mt-10 text-2xl font-bold text-green-600">
          Call for Change
        </h2>
        <p className="mt-2 font-bold text-black-700 text-5xl">
          Call for Change 4 Text. Call for Change 4 Text. Call for Change 4
          Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change
          4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for
          Change 4 Text.
        </p>
        <p className="mt-8 mb-4">🔥Trending Rank #3</p>
        <Link href="/trending-cfc" className="underline text-green-600">
          ← See all <span className="italic">Trending Calls for Change</span>
        </Link>
        <button
          className="mt-10 bg-green-600 text-white px-6 py-2 rounded-md mx-auto block"
          onClick={() => router.push("/campaign")}
        >
          Join this Call for Change
        </button>

        {/* <section className="mt-6 border p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-green-600">Profile</h3>
          <p className="mt-2 mb-2">
            This <span className="italic">Call for Change</span> is supported
            by:
          </p>
          <ul className="ml-6 text-green-600 underline list-none">
            <li>
              <span className="font-bold">2</span> Factual Supporting Beliefs
            </li>
            <li>
              <span className="font-bold">1</span> Opinion-based Supporting
              Belief
            </li>
          </ul>
        </section> */}

        {/* <section className="mt-6 border p-4 bg-lime-500 text-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Soundness Score</h3>
          <p className="text-5xl font-bold">62</p>
          <p className="mt-2 text-sm">
            A Soundness score of 62 is considered descriptive. The average
            Soundness score of all Calls for Change within this topic is XX.
          </p>
        </section> */}
        <section className="mt-6 border p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-green-600">Profile</h3>
          <div className="flex">
            <h4 className="font-bold mr-4">Supporting Beliefs</h4>
            <div>
              <p className="mt-2 mb-2">
                This <span className="italic">Call for Change</span> is
                supported by:
              </p>
              <ul className="text-green-600 underline list-none">
                <li>
                  <span className="font-bold">2</span> Factual Supporting
                  Beliefs
                </li>
                <li>
                  <span className="font-bold">1</span> Opinion-based Supporting
                  Belief
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-6 border p-4 bg-lime-500 text-white rounded-lg shadow-md">
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Soundness Score</h3>
            <p className="text-5xl font-bold">62</p>
            <p className="mt-2 text-sm">
              A Soundness score of 62 is considered descriptive. The average
              Soundness score of all Calls for Change within this topic is XX.
            </p>
          </div>
        </section>

        <section className="mt-6 border p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Members</h3>
          <p className="text-lg font-bold">1,034 members</p>
          <p className="mt-1">X joined in the last day</p>
          <p>Y joined in the last week</p>
          <p>Z joined in the last month</p>
        </section>

        <button
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md mx-auto block"
          onClick={() => router.push("/campaign")}
        >
          Join this Call for Change
        </button>

        <section className="mt-6 border p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Topics</h3>
          <ul className="list-disc ml-6 underline list-none">
            <li>TOPIC 8</li>
            <li>TOPIC 21</li>
            <li>TOPIC 23</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Related Search Terms</h3>
          <p className="underline">
            #cfc_4_ search_term_1 ; #cfc_4_ search_term_2 #cfc_4_ search_term_3
            ; #cfc_4_ search_term_4 ; #cfc_4_ search_term_5
          </p>
          <div className="flex items-center gap-8 mt-4">
            <h3 className="text-xl font-semibold">Date created</h3>
            <p className="text-xl font-normal">DD Month YYYY</p>
          </div>
        </section>
      </main>

      <section className="mt-10 p-6 bg-yellow-100 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold">
          <span className="italic">Call for Change </span>Logic String
        </h3>
        <p className="mt-2">
          Call for Change Logic Strings are made up of at least one Factual
          Supporting Belief and one Opinion-based Supporting Belief. Find out
          more about Call for Change Logic Strings at{" "}
          <span className="underline italic">
            What are Call for Change Logic Strings?
          </span>{" "}
          on our{" "}
          <a href="/about" className="underline">
            About us (FAQs) page
          </a>
          .
        </p>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow-md">
            <h4 className="text-lg font-semibold">FACTUAL</h4>
          </div>
          <div className="p-4 text-green-600 underline">
            Supporting Belief 1 Text. Supporting Belief 1 Text. Supporting
            Belief 1 Text. Supporting Belief 1 Text.
          </div>
          <div className="p-4 bg-red-500 text-white shadow-md">
            <p>Highly Disputed (0)</p>
          </div>
        </div>
        <p className="text-center text-xl font-bold">+</p>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow-md">
            <h4 className="text-lg font-semibold">FACTUAL</h4>
          </div>
          <div className="p-4 text-green-600 underline">
            Supporting Belief 4 Text. Supporting Belief 4 Text. Supporting
            Belief 4 Text.
          </div>
          <div className="p-4 bg-green-500 text-white shadow-md">
            <p>Undisputed (99)</p>
          </div>
        </div>
        <p className="text-center text-xl font-bold">+</p>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow-md">
            <h4 className="text-lg font-semibold">OPINION-BASED</h4>
          </div>
          <div className="p-4 text-green-600 underline">
            Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting
            Belief 17 Text. Supporting Belief 17 Text. Supporting Belief 17
            Text. Supporting Belief 17 Text. Supporting Belief 17 Text.
            Supporting Belief 17 Text. Supporting Belief 17 Text.
          </div>
          <div className="p-4 bg-green-700 text-white shadow-md">
            <p>Very Strong (87)</p>
          </div>
        </div>
        <p className="text-center text-xl font-bold">=</p>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow-md">
            <h3 className="text-2xl font-semibold mt-6 text-green-600">
              Call for Change
            </h3>
          </div>
          <div className="p-4 text-black">
            Call for Change 4 Text. Call for Change 4 Text. Call for Change 4
            Text. Call for Change 4 Text.
          </div>
          <div className="flex">
            <div className="p-6 bg-black text-white flex justify-center items-center w-30 h-30">
              <h3 className="text-1xl font-semibold">
                Call for Change Soundness Score:
              </h3>
            </div>
            <div className="p-4 bg-green-300 text-white text-4xl font-bold flex items-center justify-center w-30 h-30">
              62
            </div>
          </div>
        </div>
        <p className="text-right mt-6 text-sm font-semibold">
          A Call for Change Soundness score is determined by calculating the
          average of all its Supporting Beliefs strength ratings. Find out more
          about Call for Change Soundness Score at{" "}
          <span className="underline italic">
            What is a Call for Change Soundness score?
          </span>{" "}
          on our{" "}
          <a href="/about" className="underline">
            About us (FAQs) page
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default CallForChangePage;
