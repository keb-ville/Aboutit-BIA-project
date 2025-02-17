import DataTablePage from "../../components/dataTable/DataTablePage";
import Link from "next/link";
import SupportingBeliefsData from "../../components/dataTable/SupportingBeliefs";
function TrendingCfc() {
  return (
    <section>
      <Link href="/calls-for-change-topic" className="underline text-green-600">
        ← See All Calls for Change by Topic
      </Link>
      <h1 className="text-3xl mt-10">
        <span className="font-bold">Trending</span>{" "}
        <span className="italic">Calls for Change</span>
      </h1>
      <p className="mt-10 mb-6 md:w-full text-green-600">
        Description text. Description text. Description text. Description text.
        Description text. Description text. Description text. Description text.
        Description text with Links. Description text with Links. Description
        text with Links. Description text with Links. Description text with
        Links. Description text with Links.
      </p>
      <DataTablePage />
      <section>
        <h1 className="text-3xl mt-10 text-green-500 ">
          Top Supporting Beliefs
        </h1>
        <p className="mt-10 mb-6 md:w-full">
          Description text. Description text. Description text. Description
          text. Description text. Description text. Description text.{" "}
          <Link href="/about" className="underline">
            Description text. Description text with Links. Description text with
            Links.
          </Link>
        </p>
        <div className="flex justify-between items-center mb-10">
          <Link href="/callsforchange" className="underline text-green-500">
            ← See all Supporting Beliefs
          </Link>
        </div>
      </section>
      <SupportingBeliefsData />
    </section>
  );
}

export default TrendingCfc;
