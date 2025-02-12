"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Button } from "../../components/ui/button";

function NavMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCallForChangeOpen, setIsCallForChangeOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsCallForChangeOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            Menu
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="absolute left-0 top-[calc(100%+0.5rem)] z-50 min-w-[200px]">
          <div className="rounded-md border bg-white p-2 shadow-md">
            <nav className="flex flex-col gap-1">
              <Link
                href="/bia"
                className="rounded-md px-4 py-2 text-sm hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Speak to BIA
              </Link>
              <Collapsible
                open={isCallForChangeOpen}
                onOpenChange={setIsCallForChangeOpen}
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm hover:bg-muted">
                  Call for Change
                  {isCallForChangeOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-4 mt-1">
                  <Link
                    href="/calls-for-change/trending"
                    className="block rounded-md px-4 py-2 text-sm hover:bg-muted"
                    onClick={() => {
                      setIsOpen(false);
                      setIsCallForChangeOpen(false);
                    }}
                  >
                    Trending Calls for Change
                  </Link>
                  <Link
                    href="/calls-for-change/by-topic"
                    className="block rounded-md px-4 py-2 text-sm hover:bg-muted"
                    onClick={() => {
                      setIsOpen(false);
                      setIsCallForChangeOpen(false);
                    }}
                  >
                    All Calls for Change by Topic
                  </Link>
                  <Link
                    href="/calls-for-change/create"
                    className="block rounded-md px-4 py-2 text-sm hover:bg-muted"
                    onClick={() => {
                      setIsOpen(false);
                      setIsCallForChangeOpen(false);
                    }}
                  >
                    Request to create your own Call for Change
                  </Link>
                </CollapsibleContent>
              </Collapsible>
            </nav>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default NavMenu;
