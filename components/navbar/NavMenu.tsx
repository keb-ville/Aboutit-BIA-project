import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-2 bg-white border rounded-md shadow-md min-w-[200px]">
              <li>
                <Link href="/bia" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Speak to BIA
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/petitions" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Petitions
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/calls-for-change" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Call for Change
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;
