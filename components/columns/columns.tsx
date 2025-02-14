"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { ArrowLeft, ArrowRight } from "lucide-react";

const getArrowIcon = (rating: string) => {
  if (rating.includes("Highly disputed") || rating.includes("Very weak"))
    return <ArrowLeft className="w-8 h-8 text-red-600" />;
  if (rating.includes("Weak"))
    return <ArrowLeft className="w-8 h-8 text-orange-400" />;
  if (rating.includes("Somewhat strong"))
    return <ArrowRight className="w-8 h-8 text-yellow-400" />;
  if (rating.includes("Mostly undisputed"))
    return <ArrowRight className="w-8 h-8 text-green-400" />;
  if (rating.includes("Very strong") || rating.includes("Undisputed"))
    return <ArrowRight className="w-8 h-8 text-green-600" />;

  return <ArrowRight className="w-8 h-8 text-gray-500" />;
};

export type TableData = {
  Trend: Icon;
  Rank: string;
  "Top Trending Calls For Change": React.ReactNode;
  "New members in the last 24 hours": string;
  "Total members": string;
};

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "Trend",
    header: "Trend",
    size: 50,
  },
  {
    accessorKey: "Rank",
    header: "Rank",
    size: 50,
  },
  {
    accessorKey: "Top Trending Calls For Change",
    header: "Top Trending Calls For Change",
    cell: ({ row }) => row.original["Top Trending Calls For Change"],
    size: 400,
  },
  {
    accessorKey: "New members in the last 24 hours",
    header: "New members in the last 24 hours",
    size: 100,
  },
  {
    accessorKey: "Total members",
    header: "Total members",
    size: 100,
  },
];

export type SupportingBeliefsData = {
  beliefType: string;
  strengthRating: string;
  supportingBelief: React.ReactNode;
  upvotes: string;
  downvotes: string;
};

export const beliefsColumns: ColumnDef<SupportingBeliefsData>[] = [
  {
    accessorKey: "beliefType",
    header: "Belief Type",
    size: 40,
  },
  {
    accessorKey: "strengthRating",
    header: "Strength Rating",
    size: 70,
    cell: ({ row }) => {
      const rating = row.getValue("strengthRating") as string;
      return (
        <div className="flex items-center gap-2">
          {getArrowIcon(rating)}
          <span>{rating}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "supportingBelief",
    header: "Supporting Beliefs",
    cell: ({ row }) => row.original["supportingBelief"],
    size: 200,
  },
  {
    accessorKey: "upvotes",
    header: "Upvotes",
    size: 40,
  },
  {
    accessorKey: "downvotes",
    header: "Downvotes",
    size: 40,
  },
];
