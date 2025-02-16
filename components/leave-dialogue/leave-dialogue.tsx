import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../src/components/ui/dialog";
import { Button } from "../../components/ui/button";
import Link from "next/link";
interface LeaveDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirmLeave: () => void;
}

export function LeaveDialog({
  open,
  onOpenChange,
  onConfirmLeave,
}: LeaveDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Are you sure?
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Our campaigns are decentralised and individual-based, so being a
            member only means you&apos;re in favour of the{" "}
            <span className="italic">Call for Change</span>. Your campaigning
            experience is entirely <span className="">what you make of it</span>
            .
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 pt-4">
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-green-600 text-white h-12 text-base font-medium border border-black hover:bg-green-600"
          >
            Okay, I&apos;ll stay and check it out
          </Button>

          <Button
            onClick={onConfirmLeave}
            variant="outline"
            className="border border-black text-green-600 hover:bg-green-50 hover:text-green-600 h-12 text-base font-medium w-full"
          >
            I&apos;d still like to leave
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
