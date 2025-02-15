import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
//import { Progress } from "../../components/ui/"

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-8">
      <main className="mx-auto max-w-7xl space-y-8">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-[#4C9C6B] md:text-5xl">
            Welcome to the
          </h1>
          <p className="text-xl font-italic text-black/80">Campaigns page</p>
        </div>

        {/* Membership Section */}
        <div className="space-y-2">
          <p className="text-lg">
            Thanks for joining this{" "}
            <span className="italic">Call for Change</span>.
          </p>
          <p className="text-lg">
            You are the one of{" "}
            <span className="text-[#4C9C6B] font-semibold">1,035</span> members.
          </p>
        </div>

        {/* Stats Card */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="col-span-3 grid gap-8">
            <section>
              <h2 className="mb-6 text-3xl font-bold">Start taking action</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {/* General Campaigns */}
                <Card className="p-4">
                  <h3 className="mb-4 text-lg font-semibold">
                    GENERAL campaigns
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <h4 className="font-medium">Government consultations</h4>
                      <ul className="ml-4 space-y-1 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            Respond to open consultations (0)
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            Request a consultation (0)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="font-medium">Petitions</h4>
                      <ul className="ml-4 space-y-1 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            Send a petition (1)
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Card>

                {/* Electoral Campaigns */}
                <Card className="p-4">
                  <h3 className="mb-4 text-lg font-semibold">
                    ELECTORAL campaigns
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <h4 className="font-medium">Vote</h4>
                      <ul className="ml-4 space-y-1 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            Vote for candidates (0)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="font-medium">MPs</h4>
                      <ul className="ml-4 space-y-1 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            Appeal to your MP (offline) (1)
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            Appeal to your MP (online) (10)
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Card>

                {/* Public Engagement */}
                <Card className="p-4">
                  <h3 className="mb-4 text-lg font-semibold">
                    PUBLIC ENGAGEMENT campaigns
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <h4 className="font-medium">
                        Public discussions & debates
                      </h4>
                      <ul className="ml-4 space-y-1 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            Host or attend offline discussion (0)
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            Host or attend online discussion (0)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="font-medium">Public awareness</h4>
                      <ul className="ml-4 space-y-1 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            Talk about this offline (0)
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            Talk about this online (20)
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Information Feed */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Information feed</h2>
              <p className="text-muted-foreground">
                The Information feed is updated by Bia, your AI virtual
                assistant.{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  [...]
                </Link>
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4">
                  <h3 className="mb-4 font-semibold">
                    Verified recent information & news
                  </h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <p
                        key={i}
                        className="text-sm italic text-muted-foreground"
                      >
                        Description Text Description Text Description Text
                        Description Text Description Text
                      </p>
                    ))}
                  </div>
                </Card>
                <Card className="p-4">
                  <h3 className="mb-4 font-semibold">
                    Unverified recent information & news
                  </h3>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <p
                        key={i}
                        className="text-sm italic text-muted-foreground"
                      >
                        Description Text Description Text Description Text
                        Description Text Description Text
                      </p>
                    ))}
                  </div>
                </Card>
              </div>
            </section>
          </div>

          <div className="space-y-4">
            <Card className="p-4">
              <h3 className="mb-2 font-semibold">Call for Change snapshot</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm">Supporting Beliefs</p>
                  <p className="text-xs text-muted-foreground">
                    2. Factual Supporting Belief
                  </p>
                  <p className="text-xs text-muted-foreground">
                    1. Opinion-based Supporting Beliefs
                  </p>
                </div>
                <div>
                  <p className="text-sm">Soundness score</p>
        
                  <p className="text-right text-sm">62</p>
                </div>
                <div>
                  <p className="text-sm">Topics</p>
                  <ul className="ml-4 list-disc text-xs text-muted-foreground">
                    <li>TOPIC 8</li>
                    <li>TOPIC 21</li>
                    <li>TOPIC 23</li>
                  </ul>
                </div>
              </div>
            </Card>
            <Button variant="outline" className="w-full justify-between">
              Leave this <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
