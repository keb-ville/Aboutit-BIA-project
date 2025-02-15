// "use client";

// import { useState } from "react";
// import { Search } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../../components/ui/table";
// import Link from "next/link";
// interface SupportingBelief {
//   id: number;
//   type: "Factual" | "Opinion-based";
//   strengthRating: {
//     label: string;
//     score: number;
//   };
//   description: string;
//   totalVotes: string;
//   verifications: boolean[];
//   baseVotes: string;
//   downvotes: string;
// }

// const initialData: SupportingBelief[] = [
//   {
//     id: 1,
//     type: "Factual",
//     strengthRating: {
//       label: "Highly disputed",
//       score: 0,
//     },
//     description:
//       "Supporting Belief 1 Text. Supporting Belief 1 Text. Supporting Belief 1 Text. Supporting Belief 1 Text.",
//     totalVotes: "7,667",
//     verifications: [true],
//     baseVotes: "3,311",
//     downvotes: "4,356",
//   },
//   {
//     id: 2,
//     type: "Opinion-based",
//     strengthRating: {
//       label: "Somewhat strong",
//       score: 59,
//     },
//     description:
//       "Supporting Belief 22 Text. Supporting Belief 22 Text. Supporting Belief 22 Text. Supporting Belief 22 Text. Supporting Belief 22 Text. Supporting Belief 22 Text. Supporting Belief 22 Text.",
//     totalVotes: "2,301",
//     verifications: [false],
//     baseVotes: "2,070",
//     downvotes: "231",
//   },
//   {
//     id: 3,
//     type: "Opinion-based",
//     strengthRating: {
//       label: "Weak",
//       score: 20,
//     },
//     description:
//       "Supporting Belief 23 Text. Supporting Belief 23 Text. Supporting Belief 23 Text. Supporting Belief 23 Text.",
//     totalVotes: "1,598",
//     verifications: [true],
//     baseVotes: "153",
//     downvotes: "1,445",
//   },
//   {
//     id: 4,
//     type: "Factual",
//     strengthRating: {
//       label: "Undisputed",
//       score: 99,
//     },
//     description:
//       "Supporting Belief 4 Text. Supporting Belief 4 Text. Supporting Belief 4 Text.",
//     totalVotes: "687",
//     verifications: [true],
//     baseVotes: "544",
//     downvotes: "143",
//   },
//   {
//     id: 5,
//     type: "Opinion-based",
//     strengthRating: {
//       label: "Very Weak",
//       score: 3,
//     },
//     description:
//       "Supporting Belief 18 Text. Supporting Belief 18 Text. Supporting Belief 18 Text. Supporting Belief 18 Text. Supporting Belief 18 Text. Supporting Belief 18 Text. Supporting Belief 18 Text. Supporting Belief 18 Text. Supporting Belief 18 Text. Supporting Belief 18 Text.",
//     totalVotes: "574",
//     verifications: [true, true],
//     baseVotes: "124",
//     downvotes: "450",
//   },
//   {
//     id: 6,
//     type: "Factual",
//     strengthRating: {
//       label: "Mostly undisputable",
//       score: 70,
//     },
//     description:
//       "Supporting Belief 6 Text. Supporting Belief 6 Text. Supporting Belief 6 Text.",
//     totalVotes: "344",
//     verifications: [true],
//     baseVotes: "114",
//     downvotes: "230",
//   },
//   {
//     id: 7,
//     type: "Opinion-based",
//     strengthRating: {
//       label: "Very strong",
//       score: 87,
//     },
//     description:
//       "Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting Belief 17 Text. Supporting Belief 17 Text.",
//     totalVotes: "182",
//     verifications: [true, true],
//     baseVotes: "84",
//     downvotes: "98",
//   },
// ];

// export default function SupportingBeliefsPage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortByValue, setSortByValue] = useState(true);

//   const filteredData = initialData
//     .filter((belief) =>
//       belief.description.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => (sortByValue ? +b.totalVotes - +a.totalVotes : 0));

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl mt-10">
//         <span className="font-bold">All</span>{" "}
//         <span className="italic">Supporting Beliefs</span>
//       </h1>

//       <p className="mt-10 mb-6 md:w-full text-green-600">
//         Description text. Description text. Description text. Description text.
//         Description text. Description text. Description text.{" "}
//         <Link href="/about" className="underline">
//           Description text with links. Description text with Links. Description
//           text with Links. Description text with Links. Description text with
//           Links. Description text with Links.
//         </Link>
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4 mb-6">
//         <div className="relative flex-1">
//           <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//           <Input
//             placeholder="Search for Supporting Beliefs"
//             className="pl-8 border-2 rounded-full h-12"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//         <div className="flex gap-2">
//           <Button
//             variant={sortByValue ? "default" : "outline"}
//             onClick={() => setSortByValue(true)}
//             className="rounded-full border-2 h-12"
//           >
//             Order by: Total votes
//           </Button>
//           <Button
//             variant={!sortByValue ? "default" : "outline"}
//             onClick={() => setSortByValue(false)}
//             className="rounded-full border-2 h-12"
//           >
//             Filter by: None
//           </Button>
//         </div>
//       </div>

//       <div className="border rounded-lg overflow-hidden">
//         <Table>
//           <TableHeader>
//             <TableRow className="bg-[#90C290]">
//               <TableHead className="text-black font-bold w-[80px]">
//                 Belief Type
//                 <div className="text-xs font-normal">
//                   F = Factual
//                   <br />O = Opinion-based
//                 </div>
//               </TableHead>
//               <TableHead className="text-black font-bold w-[120px]">
//                 Strength Rating (Score)
//               </TableHead>
//               <TableHead className="text-black font-bold">
//                 Supporting Belief
//               </TableHead>
//               <TableHead className="text-black font-bold text-right">
//                 Total votes ▼
//               </TableHead>
//               <TableHead className="text-black font-bold w-[100px]">
//                 Cast your vote
//               </TableHead>
//               <TableHead className="text-black font-bold text-right">
//                 Upvotes
//               </TableHead>
//               <TableHead className="text-black font-bold text-right">
//                 Downvotes
//               </TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {filteredData.map((belief) => (
//               <TableRow key={belief.id}>
//                 <TableCell className="font-medium">{belief.type}</TableCell>
//                 <TableCell className="text-sm">
//                   <div>{belief.strengthRating.label}</div>
//                   <div className="text-muted-foreground">
//                     ({belief.strengthRating.score})
//                   </div>
//                 </TableCell>
//                 <TableCell className="max-w-md">{belief.description}</TableCell>
//                 <TableCell className="text-right font-medium">
//                   {belief.totalVotes.toLocaleString()}
//                 </TableCell>
//                 <TableCell>
//                   <div className="flex flex-col gap-1">
//                     {belief.verifications.map((verified, index) => (
//                       <div
//                         key={index}
//                         className={verified ? "text-green-600" : "text-red-600"}
//                       >
//                         {verified ? "✓" : "✗"}
//                       </div>
//                     ))}
//                   </div>
//                 </TableCell>
//                 <TableCell className="text-right">
//                   {belief.baseVotes.toLocaleString()}
//                 </TableCell>
//                 <TableCell className="text-right text-red-600">
//                   {belief.downvotes.toLocaleString()}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }
"use client";

// import { useState } from "react";
// import { Search } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input"
import Link from "next/link";
import AllSupportingBeliefsPage from "../../components/dataTable/AllSupportingBeliefs";

export default function SupportingBeliefsPage() {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [sortByValue, setSortByValue] = useState(true);

  // const data = initialData
  //   // .filter
  //   // ((belief) =>
  //   // belief.description.toLowerCase().includes(searchQuery.toLowerCase())
  //   // )
  //   .sort((a, b) => (sortByValue ? +b.totalVotes - +a.totalVotes : 0));

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl mt-10">
        <span className="font-bold">All</span>{" "}
        <span className="italic">Supporting Beliefs</span>
      </h1>

      <p className="mt-10 mb-6 md:w-full text-green-600">
        <>
          Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          . Description text with{" "}
          <Link href="/about" className="underline">
            Links
          </Link>
          .
        </>
      </p>
      <section>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <input
            type="text"
            placeholder="Search for Supporting Beliefs"
            className="p-2 border rounded-lg w-3/4 placeholder-lime-500"
          />
          <button className="ml-2 p-2 border border-gray-500 rounded-lg bg-green-600">
            🔍
          </button>

          <div className="flex mt-4 space-x-4">
            <select className="p-2 border rounded-lg text-lime-500">
              <option>Order by: Total votes</option>
            </select>
            <select className="p-2 border rounded-lg text-lime-500">
              <option>Filter by: None</option>
            </select>
          </div>
        </div>
      </section>
      {/* <div className="flex flex-col sm:flex-row gap-4 mb-6"> */}
      {/* <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for Supporting Beliefs"
            className="pl-8 border-2 rounded-full h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={sortByValue ? "default" : "outline"}
            onClick={() => setSortByValue(true)}
            className="rounded-full border-2 h-12"
          >
            Order by: Total votes
          </Button>
          <Button
            variant={!sortByValue ? "default" : "outline"}
            onClick={() => setSortByValue(false)}
            className="rounded-full border-2 h-12 bg-green-600 text-white"
          >
            Filter by: None
          </Button>
        </div> */}
      {/* </div> */}
      <section>
        <AllSupportingBeliefsPage />
      </section>
      {/* <div className="border rounded-lg overflow-hidden"> */}
      {/* <div className="container mx-auto py-1 w-1/2 md:w-full">
        <DataTable columns={allBeliefsColumns} data={} />
      </div> */}
      {/* <Table className="[&_th:hover]:bg-green-600">
  //           <TableHeader>
  //             <TableRow className="bg-green-600">
  //               <TableHead className="text-black font-bold border-r last:border-r-0 p-2 w-[80px]">
  //                 Belief Type
  //                 <div className="text-xs font-normal">
  //                   F = Factual
  //                   <br />O = Opinion-based
  //                 </div>
  //               </TableHead>
  //               <TableHead className="text-black font-bold border-r last:border-r-0 p-2 w-[120px]">
  //                 Strength Rating (Score)
  //               </TableHead>
  //               <TableHead className="text-black font-bold border-r last:border-r-0 p-2">
  //                 Supporting Belief
  //               </TableHead>
  //               <TableHead className="text-black font-bold border-r last:border-r-0 p-2 text-right">
  //                 Total votes ▼
  //               </TableHead>
  //               <TableHead className="text-black font-bold border-r last:border-r-0 p-2 w-[100px]">
  //                 Cast your vote
  //               </TableHead>
  //               <TableHead className="text-black font-bold border-r last:border-r-0 p-2 text-right">
  //                 Upvotes
  //               </TableHead>
  //               <TableHead className="text-black font-bold border-r last:border-r-0 p-2 text-right">
  //                 Downvotes
  //               </TableHead>
  //             </TableRow>
  //           </TableHeader>
  //           <TableBody className="divide-x">
  //             {filteredData.map((belief) => (
  //               <TableRow key={belief.id}>
  //                 <TableCell className="p-2 font-medium">{belief.type}</TableCell>
  //                 <TableCell className="p-2 text-sm">
  //                   <div>{belief.strengthRating.label}</div>
  //                   <div className="text-muted-foreground">
  //                     ({belief.strengthRating.score})
  //                   </div>
  //                 </TableCell>
  //                 <TableCell className="p-2 max-w-md">
  //                   {belief.description}
  //                 </TableCell>
  //                 <TableCell className="p-2 text-right font-medium">
  //                   {belief.totalVotes.toLocaleString()}
  //                 </TableCell>
  //                 <TableCell className="p-2">
  //                   <div className="flex flex-col gap-1">
  //                     {belief.verifications.map((verified, index) => (
  //                       <div
  //                         key={index}
  //                         className={verified ? "text-green-600" : "text-red-600"}
  //                       >
  //                         {verified ? "✓" : "✗"}
  //                       </div>
  //                     ))}
  //                   </div>
  //                 </TableCell>
  //                 <TableCell className="p-2 text-right">
  //                   {belief.baseVotes.toLocaleString()}
  //                 </TableCell>
  //                 <TableCell className="p-2 text-right text-red-600">
  //                   {belief.downvotes.toLocaleString()}
  //                 </TableCell>
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table> */}
      {/* </div> */}
    </div>
  );
}
