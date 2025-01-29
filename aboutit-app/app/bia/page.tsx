import { TextareaWithButton } from "../../components/form/TextAreaInput";

function SpeakToBiaPage() {
  return (
    <div>
      <h2>
        <span className="text-green-500">Speak</span> To BIA
      </h2>
      <div className="w-3/4 lg:w-1/2 md:w-1/3">
        <TextareaWithButton />
      </div>
    </div>
  );
}

export default SpeakToBiaPage;
