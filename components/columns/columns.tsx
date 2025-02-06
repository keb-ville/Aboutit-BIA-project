"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

export type TableData = {
  Trend: Icon;
  Rank: string;
  "Top Trending Calls For Change": string;
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
/////////SUPPORTING BELIEFS
export type SupportingBeliefsData = {
  beliefType: string;
  strengthRating: string;
  supportingBelief: string;
  upvotes: number;
  downvotes: number;
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
  },
  {
    accessorKey: "supportingBelief",
    header: "Supporting Beliefs",
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
