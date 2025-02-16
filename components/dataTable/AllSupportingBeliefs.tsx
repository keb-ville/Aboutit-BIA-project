import Link from "next/link";
import { DataTable } from "../ui/data-table";
import {
  allBeliefsColumns,
  AllSupportingBeliefsData,
} from "../columns/columns";

const allBeliefsData: AllSupportingBeliefsData[] = [
  {
    id: 1,
    beliefType: "Factual",
    strengthRating: {
      label: "Highly disputed (0)",
      score: 0,
    },
    description: (
      <Link href="/supporting-belief-factual/1" className="underline">
        Supporting Belief 1 Text. Supporting Belief 1 Text. Supporting Belief 1
        Text. Supporting Belief 1 Text.
      </Link>
    ),
    totalVotes: "7,667",
    verifications: [true].map((v) => (v ? "✅" : "❌")),
    upVotes: "3,311",
    downvotes: "4,356",
  },
  {
    id: 2,
    beliefType: "Opinion-based",
    strengthRating: {
      label: "Somewhat strong (59)",
      score: 59,
    },
    description: (
      <Link href="/supporting-belief-opinion/17" className="underline">
        Supporting Belief 22 Text. Supporting Belief 22 Text. Supporting Belief
        22 Text. Supporting Belief 22 Text. Supporting Belief 22 Text.
        Supporting Belief 22 Text. Supporting Belief 22 Text.
      </Link>
    ),
    totalVotes: "2,301",
    verifications: [false, true, false].map((v) => (v ? "✅" : "❌")),
    upVotes: "2,070",
    downvotes: "231",
  },
  {
    id: 3,
    beliefType: "Opinion-based",
    strengthRating: {
      label: "Weak (20)",
      score: 20,
    },
    description: (
      <Link href="/supporting-belief-opinion/17" className="underline">
        Supporting Belief 23 Text. Supporting Belief 23 Text. Supporting Belief
        23 Text. Supporting Belief 23 Text.
      </Link>
    ),
    totalVotes: "1,598",
    verifications: [true].map((v) => (v ? "✅" : "❌")),
    upVotes: "153",
    downvotes: "1,445",
  },
  {
    id: 4,
    beliefType: "Factual",
    strengthRating: {
      label: "Undisputed (99)",
      score: 99,
    },
    description: (
      <Link href="/supporting-belief-factual/1" className="underline">
        Supporting Belief 4 Text. Supporting Belief 4 Text. Supporting Belief 4
        Text.
      </Link>
    ),
    totalVotes: "687",
    verifications: [false, true].map((v) => (v ? "✅" : "❌")),
    upVotes: "544",
    downvotes: "143",
  },
  {
    id: 5,
    beliefType: "Opinion-based",
    strengthRating: {
      label: "Very weak (3)",
      score: 3,
    },
    description: (
      <Link href="/supporting-belief-opinion/17" className="underline">
        Supporting Belief 18 Text. Supporting Belief 18 Text. Supporting Belief
        18 Text. Supporting Belief 18 Text. Supporting Belief 18 Text.
        Supporting Belief 18 Text. Supporting Belief 18 Text. Supporting Belief
        18 Text. Supporting Belief 18 Text. Supporting Belief 18 Text.
      </Link>
    ),
    totalVotes: "574",
    verifications: [false, true, false].map((v) => (v ? "✅" : "❌")),
    upVotes: "124",
    downvotes: "450",
  },
  {
    id: 6,
    beliefType: "Factual",
    strengthRating: {
      label: "Mostly undisputed (70)",
      score: 70,
    },
    description: (
      <Link href="/supporting-belief-factual/1" className="underline">
        Supporting Belief 6 Text. Supporting Belief 6 Text. Supporting Belief 6
        Text.
      </Link>
    ),
    totalVotes: "344",
    verifications: [true, false].map((v) => (v ? "✅" : "❌")),
    upVotes: "114",
    downvotes: "230",
  },
  {
    id: 7,
    beliefType: "Opinion-based",
    strengthRating: {
      label: "Very strong (87)",
      score: 87,
    },
    description: (
      <Link href="/supporting-belief-opinion/17" className="underline">
        Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting Belief
        17 Text. Supporting Belief 17 Text. Supporting Belief 17 Text.
        Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting Belief
        17 Text. Supporting Belief 17 Text.
      </Link>
    ),
    totalVotes: "182",
    verifications: [true, false].map((v) => (v ? "✅" : "❌")),
    upVotes: "84",
    downvotes: "98",
  },
];

export default function AllSupportingBeliefsPage() {
  return (
    <div className="container mx-auto py-1 w-1/2 md:w-full">
      <DataTable columns={allBeliefsColumns} data={allBeliefsData} />
    </div>
  );
}
