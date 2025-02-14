import { beliefsColumns, SupportingBeliefsData } from "../columns/columns";
import Link from "next/link";
import { DataTable } from "../ui/data-table";

const beliefsData: SupportingBeliefsData[] = [
  {
    beliefType: "Factual",
    strengthRating: "Highly disputed (0)",
    supportingBelief: (
      <Link href="/supporting-beliefs/1">
        <u>
          Supporting Belief 1 Text. Supporting Belief 1 Text. Supporting Belief
          1 Text. Supporting Belief 1 Text
        </u>
      </Link>
    ),
    upvotes: "3,311",
    downvotes: "4,356",
  },
  {
    beliefType: "Opinion-based",
    strengthRating: "Somewhat strong (59)",
    supportingBelief: (
      <Link href="/supporting-beliefs/1">
        <u>
          Supporting Belief 22 Text. Supporting Belief 22 Text. Supporting
          Belief 22 Text. Supporting Belief 22 Text. Supporting Belief 22 Text.
          Supporting Belief 22 Text. Supporting Belief 22 Text.
        </u>
      </Link>
    ),
    upvotes: "2,070",
    downvotes: "231",
  },
  {
    beliefType: "Opinion-based",
    strengthRating: "Weak (20)",
    supportingBelief: (
      <Link href="/supporting-beliefs/1">
        <u>
          Supporting Belief 23 Text. Supporting Belief 23 Text. Supporting
          Belief 23 Text. Supporting Belief 23 Text.
        </u>
      </Link>
    ),
    upvotes: "153",
    downvotes: "1,445",
  },
  {
    beliefType: "Factual",
    strengthRating: "Undisputed (99)",
    supportingBelief: (
      <Link href="/supporting-beliefs/1">
        <u>
          Supporting Belief 4 Text. Supporting Belief 4 Text. Supporting Belief
          4 Text.
        </u>
      </Link>
    ),
    upvotes: "544",
    downvotes: "143",
  },
  {
    beliefType: "Opinion-based",
    strengthRating: "Very weak (3)",
    supportingBelief: (
      <Link href="/supporting-beliefs/1">
        <u>
          Supporting Belief 18 Text. Supporting Belief 18 Text. Supporting
          Belief 18 Text. Supporting Belief 18 Text. Supporting Belief 18 Text.
          Supporting Belief 18 Text. Supporting Belief 18 Text. Supporting
          Belief 18 Text. Supporting Belief 18 Text. Supporting Belief 18 Text.
        </u>
      </Link>
    ),
    upvotes: "124",
    downvotes: "450",
  },
  {
    beliefType: "Factual",
    strengthRating: "Mostly undisputed (70)",
    supportingBelief: (
      <Link href="/supporting-beliefs/1">
        <u>
          Supporting Belief 6 Text. Supporting Belief 6 Text. Supporting Belief
          6 Text.
        </u>
      </Link>
    ),
    upvotes: "114",
    downvotes: "230",
  },
  {
    beliefType: "Opinion-based",
    strengthRating: "Very strong (87)",
    supportingBelief: (
      <Link href="/supporting-beliefs/1">
        <u>
          Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting
          Belief 17 Text. Supporting Belief 17 Text. Supporting Belief 17 Text.
          Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting
          Belief 17 Text. Supporting Belief 17 Text.
        </u>
      </Link>
    ),
    upvotes: "84",
    downvotes: "98",
  },
];

export default function SupportingBeliefsPage() {
  return (
    <div className="container mx-auto py-1 w-1/2 md:w-full">
      <DataTable columns={beliefsColumns} data={beliefsData} />
    </div>
  );
}
