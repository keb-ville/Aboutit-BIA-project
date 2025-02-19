import Link from "next/link";
import { Check, X } from "lucide-react";

interface VoteCount {
  upvotes: number;
  downvotes: number;
}

interface CallForChangeOpinion {
  id: number;
  text: string;
}

const voteData: VoteCount = {
  upvotes: 84,
  downvotes: 98,
};

const callsForChange: CallForChangeOpinion[] = [
  {
    id: 1,
    text: "Call for Change 2 Text. Call for Change 2 Text. Call for Change 2 Text. Call for Change 2 Text.",
  },
  {
    id: 4,
    text: "Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change 4 Text.",
  },
  {
    id: 11,
    text: "Call for Change 17 Text. Call for Change 17 Text. Call for Change 17 Text. Call for Change 17 Text. Call for Change 17 Text.",
  },
];

export default function BeliefProfile() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        href="/supporting-beliefs"
        className="text-green-600 underline mb-8 block"
      >
        ← See all Supporting Beliefs
      </Link>

      <div className="space-y-8">
        <div>
          <h2 className="text-green-600 font-bold text-xl">
            Supporting Belief
          </h2>
          <h1 className="text-4xl font-bold mt-2">
            Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting
            Belief 17 Text. Supporting Belief 17 Text. Supporting Belief 17
            Text. Supporting Belief 17 Text. Supporting Belief 17 Text.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl text-green-600 font-bold mb-4">
                Profile
              </h2>

              <div className=" border border-none p-4 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Belief Type</h3>
                    <p className="text-sm">
                      Find out more about Belief Types at{" "}
                      <Link href="/about" className="underline">
                        What are Belief Types?
                      </Link>{" "}
                      on our{" "}
                      <Link href="/about" className="underline">
                        About us (FAQs)
                      </Link>{" "}
                      page
                    </p>
                  </div>
                  <p className="text-green-600 text-lg ml-4 font-bold">
                    Opinion-based
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Strength Rating</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-3xl font-bold">
                    Very Strong
                  </span>
                  <span className="bg-white p-3 text-green-500 text-9xl font-bold-rounded-full inline-block w-16 h-16 items-center justify-center">
                    →
                  </span>
                </div>
                <div className="text-green-600">(Score: 87)</div>
              </div>
              <div className="flex items-start gap-4 mt-4">
                <span className="text-lg mt-4 ">Arguability scale:</span>
                <div className="flex-1">
                  <div className="relative mt-6">
                    <div className="flex h-6 w-96">
                      <div className="w-1/5 bg-red-500 rounded-l-full" />
                      <div className="w-1/5 bg-orange-500" />
                      <div className="w-1/5 bg-yellow-500" />
                      <div className="w-1/5 bg-lime-500" />
                      <div className="w-1/5 bg-green-500 rounded-r-full" />
                    </div>

                    <div
                      className="absolute top-0 transform -translate-y-1/2"
                      style={{ marginTop: "8px", left: "85%" }}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-sm">87</span>
                        <div className="w-4 h-4 rounded-full border-4 border-green-600 bg-white" />
                      </div>
                    </div>

                    <div className="flex justify-between text-xs mt-2">
                      <span className="text-center w-1/5">Very weak</span>
                      <span className="text-center w-1/5">Somewhat weak</span>
                      <span className="text-center w-1/5">Moderate</span>
                      <span className="text-center w-1/5">Somewhat strong</span>
                      <span className="text-center w-1/5">Very strong</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm mt-6">
                Opinion-based Supporting Beliefs are given their Strength
                Ratings from the <Link href="/about">Arguability</Link> scale.
                The Arguability scale ranges from Very weak to Very strong
                (score 0 to 100).
              </p>
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
              <Link href="/about" className="underline">
                What does it mean to cast your vote?
              </Link>{" "}
              on our{" "}
              <Link href="/about" className="underline">
                About us (FAQs)
              </Link>{" "}
              page
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <div className="text-green-600 font-bold">
            <p className="mb-4">
              <strong>Very Strong</strong> means Description Text Description
              Text Description Text Description Text Description Text
              Description Text Description Text Description Text Description
              Text Description Text Description Text Description Text
            </p>
            <p>
              This has been determined by Description Text Description Text
              Description Text Description Text Description Text Description
              Text Description Text Description Text Description Text
              Description Text Description Text Description Text Description
              Text Description Text Description Text.
            </p>
          </div>

          <p className="text-sm">
            Find out more about what other Strength Ratings mean at{" "}
            <Link href="/about" className="underline italic">
              How are Strength Ratings determined?
            </Link>{" "}
            on our{" "}
            <Link href="/about" className="underline">
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
          <ul className="list-disc font-bold pl-6 space-y-4">
            {callsForChange.map((call) => (
              <li key={call.id}>
                <Link
                  href={`/call-for-change-profile`}
                  className="text-green-500 underline"
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
