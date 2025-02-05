import { beliefsColumns, SupportingBeliefsData } from "../columns/columns";

import { DataTable } from "../ui/data-table";

// This is where you can put your own hardcoded data
const beliefsData: SupportingBeliefsData[] = [
  {
    beliefType: "F",
    strengthRating: "Highly disputed (0)",
    supportingBelief: "Supporting Belief 1 Text...",
    upvotes: 3311,
    downvotes: 4356,
  },
  {
    beliefType: "O",
    strengthRating: "Somewhat strong (59)",
    supportingBelief: "Supporting Belief 22 Text...",
    upvotes: 2070,
    downvotes: 231,
  },
  {
    beliefType: "O",
    strengthRating: "Weak (20)",
    supportingBelief: "Supporting Belief 23 Text...",
    upvotes: 153,
    downvotes: 1445,
  },
  {
    beliefType: "F",
    strengthRating: "Undisputed (99)",
    supportingBelief: "Supporting Belief 4 Text...",
    upvotes: 544,
    downvotes: 143,
  },
  {
    beliefType: "O",
    strengthRating: "Very weak (3)",
    supportingBelief: "Supporting Belief 18 Text...",
    upvotes: 124,
    downvotes: 450,
  },
  {
    beliefType: "F",
    strengthRating: "Mostly undisputed (70)",
    supportingBelief: "Supporting Belief 6 Text...",
    upvotes: 114,
    downvotes: 230,
  },
  {
    beliefType: "O",
    strengthRating: "Very strong (87)",
    supportingBelief: "Supporting Belief 17 Text...",
    upvotes: 84,
    downvotes: 98,
  },
];

export default function SupportingBeliefsPage() {
  return (
    <div className="container mx-auto py-1 w-1/2 md:w-full">
      <DataTable columns={beliefsColumns} data={beliefsData} />
    </div>
  );
}
