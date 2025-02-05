import { type TableData, columns } from "../columns/columns";
import { DataTable } from "../ui/data-table";

// This is where you can put your own hardcoded data
const data: TableData[] = [
  {
    Trend: "▲",
    Rank: "1",
    "Top Trending Calls For Change": "Call a General Election",
    "New members in the last 24 hours": "3,031",
    "Total members": "44,356",
  },
  {
    Trend: "▼",
    Rank: "2",
    "Top Trending Calls For Change":
      "Close the borders! Suspend ALL immigration for 5 years!",
    "New members in the last 24 hours": "207",
    "Total members": "23,505",
  },
  {
    Trend: "▬",
    Rank: "3",
    "Top Trending Calls For Change":
      "Introduce compensation scheme for WASPI women",
    "New members in the last 24 hours": "153",
    "Total members": "11,304",
  },
  {
    Trend: "▲",
    Rank: "4",
    "Top Trending Calls For Change":
      "Don’t change inheritance tax relief for working farms",
    "New members in the last 24 hours": "145",
    "Total members": "55,442",
  },
  {
    Trend: "▼",
    Rank: "5",
    "Top Trending Calls For Change":
      "Don't apply VAT to independent school fees, or remove business rates relief. Introduce 16 as the minimum age for children to have social media",
    "New members in the last 24 hours": "124",
    "Total members": "2,450",
  },
  {
    Trend: "▲",
    Rank: "6",
    "Top Trending Calls For Change":
      "Limit the sale and use of Fireworks to licence holders only",
    "New members in the last 24 hours": "114",
    "Total members": "1,230",
  },
  {
    Trend: "▼",
    Rank: "7",
    "Top Trending Calls For Change":
      "Apply for the UK to join the European Union as a full member as soon as possible",
    "New members in the last 24 hours": "84",
    "Total members": "9,084",
  },
  {
    Trend: "▲",
    Rank: "8",
    "Top Trending Calls For Change": "Decriminalise Abortion",
    "New members in the last 24 hours": "65",
    "Total members": "7,893",
  },
  {
    Trend: "▲",
    Rank: "9",
    "Top Trending Calls For Change": "Reverse changes to Winter Fuel Payment",
    "New members in the last 24 hours": "61",
    "Total members": "2,002",
  },
  {
    Trend: "▲",
    Rank: "10",
    "Top Trending Calls For Change": "Ban driven grouse shooting",
    "New members in the last 24 hours": "58",
    "Total members": "12,324",
  },
];

export default function DataTablePage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
