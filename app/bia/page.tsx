import Chatbox from "../../components/chat/ChatBox";
import Link from "next/link";
function SpeakToBiaPage() {
  return (
    <div>
      <h2 className="flex justify-center text-lg">Speak to BIA</h2>
      <Link href="/trending-cfc" className="underline">
        ← Go to Trending Calls for Change
      </Link>
      <div className="w-3/4 lg:w-1/2 md:w-1/3">
        <Chatbox />
      </div>
    </div>
  );
}

export default SpeakToBiaPage;
