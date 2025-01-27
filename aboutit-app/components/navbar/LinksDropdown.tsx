import { DropdownMenu } from "../ui/dropdown-menu";
import { DropdownMenuTrigger,DropdownMenuSeparator } from "../ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";

import { Button } from "../ui/button";

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuSeparator />
    </DropdownMenu>
  );
}
export default LinksDropdown;
