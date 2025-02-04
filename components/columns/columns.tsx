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
  },
  {
    accessorKey: "Rank",
    header: "Rank",
  },
  {
    accessorKey: "Top Trending Calls For Change",
    header: "Top Trending Calls For Change",
  },
  {
    accessorKey: "New members in the last 24 hours",
    header: "New members in the last 24 hours",
  },
  {
    accessorKey: "Total members",
    header: "Total members",
  },
];
