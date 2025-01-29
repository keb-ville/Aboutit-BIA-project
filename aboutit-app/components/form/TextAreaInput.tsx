import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-3 place-items-center">
      <Textarea className="border-4 border-green-500 focus:border-green-700 focus:ring-green-700 h-64 w-3/4 mx-auto rounded-2xl resize-y" />
      <Button className="w-1/3">Get Started</Button>
    </div>
  );
}
