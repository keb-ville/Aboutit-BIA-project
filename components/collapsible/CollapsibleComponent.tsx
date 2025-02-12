"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const CollapsibleComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="w-full p-4 border rounded-lg"
    >
      <Collapsible.Trigger className="flex items-center justify-between w-full p-2 bg-gray-100 rounded-lg cursor-pointer">
        <span className="text-lg font-medium">Click to Expand</span>
        {open ? <ChevronDown /> : <ChevronRight />}
      </Collapsible.Trigger>

      <Collapsible.Content className="mt-2 p-2 bg-gray-50 rounded-lg">
        <p className="text-gray-700">
          This is the collapsible content. It appears when you click the
          trigger.
        </p>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default CollapsibleComponent;
