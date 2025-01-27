import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-3">
      <Textarea placeholder="Type your message here." />
      <Button>Get Started</Button>
    </div>
  );
}
