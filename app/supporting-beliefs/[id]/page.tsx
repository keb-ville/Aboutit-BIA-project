import Link from "next/link";
import { Check, X } from "lucide-react";

interface VoteCount {
  upvotes: number;
  downvotes: number;
}

interface CallForChange {
  id: number;
  text: string;
}

const voteData: VoteCount = {
  upvotes: 3310,
  downvotes: 4356,
};

const callsForChange: CallForChange[] = [
  {
    id: 1,
    text: "Call for Change 1 Text. Call for Change 1 Text. Call for Change 1 Text.",
  },
  {
    id: 4,
    text: "Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text.",
  },
  {
    id: 11,
    text: "Call for Change 11 Text. Call for Change 11 Text.",
  },
  {
    id: 21,
    text: "Call for Change 21 Text. Call for Change 21 Text. Call for Change 21 Text.",
  },
];

export default function BeliefProfile() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        href="/supporting-beliefs"
        className="text-green-600 hover:underline mb-8 block"
      >
        See All Supporting Beliefs
      </Link>

      <div className="space-y-8">
        <div>
          <h2 className="text-green-600 text-xl">Supporting Belief</h2>
          <h1 className="text-4xl font-bold mt-2">
            Supporting Belief 1 Text. Supporting Belief 1 Text. Supporting
            Belief 1 Text. Supporting Belief 1 Text.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Profile</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Belief Type</h3>
                  <p className="text-green-600 text-lg">Factual</p>
                  <p className="text-sm">
                    Find out more about Belief Types at{" "}
                    <Link href="/faq#belief-types" className="underline">
                      What are Belief Types?
                    </Link>{" "}
                    on our{" "}
                    <Link href="/faq" className="underline">
                      About us (FAQs)
                    </Link>{" "}
                    page
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Strength Rating</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">
                    Highly Disputed
                  </span>
                  <span className="bg-red-500 p-1 text-white text-xs rounded-full">
                    ←
                  </span>
                </div>
                <div className="text-green-600">(Score: 0)</div>

                <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full mt-4" />

                <div className="flex justify-between text-sm mt-2">
                  <span>Highly disputed</span>
                  <span>Moderately disputed</span>
                  <span>Sometimes disputed</span>
                  <span>Mostly undisputed</span>
                  <span>Undisputed</span>
                </div>

                <p className="text-sm mt-4">
                  Factual Supporting Beliefs are given their Strength Ratings
                  from the{" "}
                  <Link
                    href="/disputability"
                    className="text-red-600 underline"
                  >
                    Disputability
                  </Link>{" "}
                  scale. The Disputability scale ranges from Highly disputed to
                  Undisputed (score 0 to 100).
                </p>
              </div>
            </section>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-center mb-4">Cast your vote:</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="space-y-2">
                <div className="mx-auto w-16 h-16 flex items-center justify-center border-2 border-green-600 rounded">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-green-600 font-bold">
                  {voteData.upvotes.toLocaleString()}
                </div>
                <div className="text-sm">
                  people have upvoted this Supporting Belief
                </div>
              </div>
              <div className="space-y-2">
                <div className="mx-auto w-16 h-16 flex items-center justify-center border-2 border-red-600 rounded">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-red-600 font-bold">
                  {voteData.downvotes.toLocaleString()}
                </div>
                <div className="text-sm">
                  people have downvoted this Supporting Belief
                </div>
              </div>
            </div>
            <div className="text-center mt-4 text-sm">
              Find out more about{" "}
              <Link href="/faq#voting" className="underline">
                What does it mean to cast your vote?
              </Link>{" "}
              on our{" "}
              <Link href="/faq" className="underline">
                About us (FAQs)
              </Link>{" "}
              page
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <div className="text-green-600">
            <p className="mb-4">
              <strong>Mostly undisputed</strong> means Description Text
              Description Text Description Text Description Text Description
              Text Description Text Description Text Description Text
              Description Text Description Text Description Text Description
              Text Description Text.
            </p>
            <p>
              This has been determined by Description Text Description Text
              Description Text Description Text Description Text Description
              Text Description Text Description Text.
            </p>
          </div>

          <p className="text-sm">
            Find out more about what other Strength Ratings mean at{" "}
            <Link href="/faq#strength-ratings" className="underline italic">
              How are Strength Ratings determined?
            </Link>{" "}
            on our{" "}
            <Link href="/faq" className="underline">
              About us (FAQs)
            </Link>{" "}
            page
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">
            Calls for Change{" "}
            <span className="font-normal">
              supported by this Supporting Belief
            </span>
          </h2>
          <ul className="list-disc pl-6 space-y-4">
            {callsForChange.map((call) => (
              <li key={call.id}>
                <Link
                  href={`/calls-for-change/${call.id}`}
                  className="text-green-600 hover:underline"
                >
                  {call.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
