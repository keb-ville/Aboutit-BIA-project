import Link from "next/link";
import { TbRobot } from "react-icons/tb";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button>
      <Link href="/">
        <TbRobot className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
