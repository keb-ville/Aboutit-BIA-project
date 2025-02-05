import DataTablePage from "../../components/dataTable/DataTablePage";
import Link from "next/link";
function TrendingCfc() {
  return (
    <section>
      <Link href="/callsforchange" className="underline">
        ← See All Calls for Change
      </Link>
      <h1 className="text-3xl mt-10">Trending Calls for Change</h1>
      <p className="mt-10 mb-6 md:w-full">
        Top 50 Trending Calls for Change on About it are tracked by number of
        newly joining members in the last 24 hours. The rank is updated every
        minute. The green arrow indicates the Call for Change moved up the rank
        at the last update. The red arrow indicates it moved down. The black
        line indicates no change in rank.
      </p>
      <DataTablePage />
      <section>
        <h1 className="text-3xl mt-10 text-green-500 ">
          Top Supporting Beliefs
        </h1>
        <p className="mt-10 mb-6 md:w-full">
          The Supporting Beliefs on About it that support the top 50 Trending
          Calls for Change arranged by the total number of votes (upvotes and
          downvotes combined)
        </p>
        <div className="flex justify-between items-center mb-10">
          <Link href="/callsforchange" className="underline text-green-500">
            ← See All Supporting Beliefs
          </Link>
          <p className="text-sm">
            Find out more about Supporting Beliefs at What are Supporting
            Beliefs? on our About us (FAQs) page
          </p>
        </div>
      </section>
    </section>
  );
}

export default TrendingCfc;
