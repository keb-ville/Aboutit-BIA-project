import { type TableData, columns } from "../columns/columns";
import { DataTable } from "../ui/data-table";

// This is where you can put your own hardcoded data
const data: TableData[] = [
  {
    Trend: "▲",
    Rank: "1",
    "Top Trending Calls For Change": "Trending Calls for Change Text...",
    "New members in the last 24 hours": "3,031",
    "Total members": "44,356",
  },
  {
    Trend: "▼",
    Rank: "2",
    "Top Trending Calls For Change": "Trending Calls for Change Text...",
    "New members in the last 24 hours": "207",
    "Total members": "23,505",
  },
  {
    Trend: "▬",
    Rank: "3",
    "Top Trending Calls For Change": "Trending Calls for Change Text...",
    "New members in the last 24 hours": "153",
    "Total members": "11,304",
  },
  {
    Trend: "▲",
    Rank: "4",
    "Top Trending Calls For Change": "Trending Calls for Change Text...",
    "New members in the last 24 hours": "145",
    "Total members": "55,442",
  },
  {
    Trend: "▼",
    Rank: "5",
    "Top Trending Calls For Change": "Trending Calls for Change Text...",
    "New members in the last 24 hours": "124",
    "Total members": "2,450",
  },
  {
    Trend: "▲",
    Rank: "6",
    "Top Trending Calls For Change": "Trending Calls for Change Text...",
    "New members in the last 24 hours": "114",
    "Total members": "1,230",
  },
  {
    Trend: "▼",
    Rank: "7",
    "Top Trending Calls For Change": "Trending Calls for Change Text...",
    "New members in the last 24 hours": "84",
    "Total members": "9,084",
  },
  {
    Trend: "▲",
    Rank: "8",
    "Top Trending Calls For Change": "Trending Calls for Change Text...",
    "New members in the last 24 hours": "65",
    "Total members": "7,893",
  },
  {
    Trend: "▲",
    Rank: "9",
    "Top Trending Calls For Change": "Trending Calls for Change Text...",
    "New members in the last 24 hours": "61",
    "Total members": "2,002",
  },
  {
    Trend: "▲",
    Rank: "10",
    "Top Trending Calls For Change": "Trending Calls for Change Text...",
    "New members in the last 24 hours": "58",
    "Total members": "12,324",
  },
];

export default function DataTablePage() {
  return (
    <div className="container mx-auto py-1 w-1/2 md:w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
