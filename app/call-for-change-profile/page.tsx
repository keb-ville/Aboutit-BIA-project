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
          className="mt-10 bg-green-600 text-white px-6 py-2 rounded-md mx-auto block border-black border-2"
          onClick={() => router.push("/campaign")}
        >
          Join this Call for Change
        </button>

        <h3 className="text-xl font-semibold text-green-600">Profile</h3>
        <section className="mt-6 border p-4 rounded-lg shadow-md">
          <div className="flex">
            <h4 className="text-2xl font-bold leading-tight text-black">
              Supporting
              <br /> Beliefs
            </h4>
            <div>
              <p className="mt-2 mb-2 m-10">
                This <span className="italic">Call for Change</span> is
                supported by:
              </p>
              <ul className="text-green-600 underline list-none m-10">
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

        <section className="mt-6 flex items-stretch rounded-lg bg-white shadow-md">
          <div className="flex w-48 flex-col justify-start p-4">
            <h3 className="text-2xl font-bold leading-tight text-black">
              Soundness
              <br />
              score
            </h3>
            <div className="mt-2 space-y-2 text-sm">
              <p className="italic">A Call for Change</p>
              <p>
                Soundness score is determined by calculating the average of all
                its Supporting Beliefs' strength ratings. Find out more about{" "}
                <a className="italic hover:text-gray-600">Call for Change</a>{" "}
                Soundness Score at{" "}
                <a href="/about" className="underline hover:text-gray-600">
                  What is a Call for Change Soundness Score?
                </a>{" "}
                on our{" "}
                <a href="/about" className="underline hover:text-gray-600">
                  About us (FAQs)
                </a>{" "}
                page.
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-r-lg bg-[#a4d233] p-4 text-white">
            <div className="text-[72px] font-bold leading-none">62</div>
            <p className="mt-3 text-base leading-relaxed">
              A Soundness score of 62 is considered Description Text Description
              Text Description Text Description Text Description Text
              Description Text Description Text Description Text Description
              Text Description Text Description Text Description Text.
              <section className="mt-20">
                <p>
                  The average Soundness score of all{" "}
                  <span className="italic">Calls for Change</span> within this
                  Topic is XX.
                </p>
              </section>
            </p>
          </div>
        </section>

        <section className="mt-6 border p-4 rounded-lg shadow-md">
          <div className="flex">
            <h4 className="text-2xl font-bold leading-tight text-black">
              Members
            </h4>
            <div>
              <p className="mt-2 mb-2 m-10">
                <span className="text-green-600 underline text-2xl">
                  1,034{" "}
                </span>{" "}
                members are part of this
                <span className="italic"> Call for Change</span>
              </p>
              <ul className="text-black list-none m-10">
                <li>
                  <span className="italic">X</span> joined in the last day
                </li>
                <li>
                  <span className="italic">Y</span> joined in the last week
                </li>
                <li>
                  <span className="italic">Z</span> joined in the last month
                </li>
              </ul>
            </div>
          </div>
        </section>
        <button
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md mx-auto block border-black border-2"
          onClick={() => router.push("/campaign")}
        >
          Join this Call for Change
        </button>
        <section className="flex justify-center">
          <p className="text-sm mt-10">
            Find out more about what it means to join a Call for Change at{" "}
            <a href="/about" className="italic underline hover:text-gray-600">
              What does it mean to join a Call for Change?
            </a>{" "}
            on our{" "}
            <a href="/about" className="underline hover:text-gray-600">
              About us (FAQs)
            </a>{" "}
            page
          </p>
        </section>

        <section className="mt-6 border p-4 rounded-lg shadow-md">
          <div className="flex">
            <h4 className="text-2xl font-bold leading-tight text-black">
              Topics
            </h4>
            <div>
              <ul className="text-black list-none m-10 underline">
                <li>TOPIC 8</li>
                <li>TOPIC 21</li>
                <li>TOPIC 23</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-6 border p-4 rounded-lg shadow-md">
          <div className="flex">
            <h4 className="text-2xl font-bold leading-tight text-black">
              Related <br />
              Search Terms
            </h4>
            <div>
              <p className="text-black list-none m-10 underline">
                #cfc_4_ search_term_1 ; #cfc_4_ search_term_2 #cfc_4_
                search_term_3 ; #cfc_4_ search_term_4 ; #cfc_4_ search_term_5
              </p>
            </div>
          </div>
        </section>
        <section className="mt-6 border p-4 rounded-lg shadow-md">
          <div className="flex">
            <h4 className="text-2xl font-bold leading-tight text-black">
              Date created
            </h4>
            <div>
              <p className="text-black list-none m-10">DD Month YYYY</p>
            </div>
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
          more about <span className="italic">Call for Change</span> Logic
          Strings at{" "}
          <Link href="/about">
            <span className="underline italic">
              What are{" "}
              <span className="underline not-italic">Call for Change</span>{" "}
              Logic Strings?
            </span>{" "}
          </Link>
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
