import Image from "next/image";

import { TextareaWithButton } from "../components/form/TextAreaInput";
function HomePage() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-3xl mt-6">Welcome to</h1>
      <Image src="/imagelogo.svg" alt="Logo" width={180} height={180} />
<h1>Where you can find your voice about it.</h1>
<h2>How About It works</h2>
      <div className="w-3/4 lg:w-1/2 md:w-1/3">
        <TextareaWithButton />
      </div>
    </div>
  );
}

export default HomePage;
