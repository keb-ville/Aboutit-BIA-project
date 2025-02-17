import { type TableData, columns } from "../columns/columns";
import { DataTable } from "../ui/data-table";
import Link from "next/link";

const data: TableData[] = [
  {
    Trend: "▲",
    Rank: "1",
    "Top Trending Calls For Change": (
      <Link href="/call-for-change-profile">
        <u>
          Call for Change 18 Text. Call for Change 18 Text. Call for Change 18
          Text. Call for Change 18 Text. Call for Change 18 Text. Call for
          Change 18 Text.
        </u>
      </Link>
    ),
    "New members in the last 24 hours": "303",
    "Total members": "1,200",
  },
  {
    Trend: "▼",
    Rank: "2",
    "Top Trending Calls For Change": (
      <Link href="/call-for-change-profile">
        <u>
          Call for Change 17 Text. Call for Change 17 Text. Call for Change 17
          Text. Call for Change 17 Text. Call for Change 17 Text.
        </u>
      </Link>
    ),
    "New members in the last 24 hours": "207",
    "Total members": "1,167",
  },
  {
    Trend: "▬",
    Rank: "3",
    "Top Trending Calls For Change": (
      <Link href="/call-for-change-profile">
        <u>
          Call for Change 4 Text. Call for Change 4 Text. Call for Change 4
          Text. Call for Change 4 Text. Call for Change 4 Text. Call for Change
          4 Text. Call for Change 4 Text. Call for Change 4 Text. Call for
          Change 4 Text.
        </u>
      </Link>
    ),
    "New members in the last 24 hours": "153",
    "Total members": "1,034",
  },
  {
    Trend: "▲",
    Rank: "4",
    "Top Trending Calls For Change": (
      <Link href="/call-for-change-profile">
        <u>
          Call for Change 2 Text. Call for Change 2 Text. Call for Change 2
          Text. Call for Change 2 Text.
        </u>
      </Link>
    ),
    "New members in the last 24 hours": "41",
    "Total members": "1,017",
  },
  {
    Trend: "▼",
    Rank: "5",
    "Top Trending Calls For Change": (
      <Link href="/call-for-change-profile">
        <u>
          Call for Change 10 Text. Call for Change 10 Text. Call for Change 10
          Text. Call for Change 10 Text. Call for Change 10 Text. Call for
          Change 10 Text.
        </u>
      </Link>
    ),
    "New members in the last 24 hours": "41",
    "Total members": "863",
  },
  {
    Trend: "▲",
    Rank: "6",
    "Top Trending Calls For Change": (
      <Link href="/call-for-change-profile">
        <u>
          Call for Change 23 Text. Call for Change 23 Text. Call for Change 23
          Text. Call for Change 23 Text. Call for Change 23 Text.
        </u>
      </Link>
    ),
    "New members in the last 24 hours": "22",
    "Total members": "831",
  },
  {
    Trend: "▼",
    Rank: "7",
    "Top Trending Calls For Change": (
      <Link href="/call-for-change-profile">
        <u>
          Call for Change 13 Text. Call for Change 13 Text. Call for Change 13
          Text. Call for Change 13 Text. Call for Change 13 Text.
        </u>
      </Link>
    ),
    "New members in the last 24 hours": "19",
    "Total members": "766",
  },
  {
    Trend: "▲",
    Rank: "8",
    "Top Trending Calls For Change": (
      <Link href="/call-for-change-profile">
        <u>
          Call for Change 19 Text. Call for Change 19 Text. Call for Change 19
          Text.
        </u>
      </Link>
    ),
    "New members in the last 24 hours": "17",
    "Total members": "675",
  },
  {
    Trend: "▲",
    Rank: "9",
    "Top Trending Calls For Change": (
      <Link href="/call-for-change-profile">
        <u>
          Call for Change 14 Text. Call for Change 14 Text. Call for Change 14
          Text.
        </u>
      </Link>
    ),
    "New members in the last 24 hours": "11",
    "Total members": "673",
  },
  {
    Trend: "▲",
    Rank: "10",
    "Top Trending Calls For Change": (
      <Link href="/call-for-change-profile">
        <u>
          Call for Change 28 Text. Call for Change 28 Text. Call for Change 28
          Text. Call for Change 28 Text.
        </u>
      </Link>
    ),
    "New members in the last 24 hours": "8",
    "Total members": "643",
  },
];

export default function DataTablePage() {
  return (
    <div className="container mx-auto py-1 w-1/2 md:w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
