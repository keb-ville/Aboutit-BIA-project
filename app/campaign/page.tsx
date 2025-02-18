"use client";

import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { LeaveDialog } from "../../components/leave-dialogue/leave-dialogue";
import { useState } from "react";

export default function CampaignsPage() {
  const [showLeaveDialog, setShowLeaveDialog] = useState(false);
  const [isMember, setIsMember] = useState(true);
  const memberCount = isMember ? "1,035" : "1,034";

  const handleConfirmLeave = () => {
    setIsMember(false);
    setShowLeaveDialog(false);
  };

  const handleJoin = () => {
    setIsMember(true);
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-8">
      <main className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl text-green-600 md:text-5xl mb-4">
            <span className="font-bold ">Welcome</span> to the
          </h1>
          <Link href="/call-for-change-profile">
            <p className="italic underline font-bold">
              Call for Change 4 Text. Call for Change 4 Text. Call for Change 4
              Text. Call for Change 4 Text. Call for Change 4 Text. Call for
              Change 4 Text. Call for Change 4 Text. Call for Change 4 Text.
              Call for Change 4 Text.
            </p>
          </Link>
          <p className="text-3xl font-italic text-green-600">Campaigns page</p>
        </div>

        <div className="space-y-8">
          {isMember ? (
            <>
              <p className="text-3xl">
                Thanks for joining this{" "}
                <span className="italic">Call for Change</span>.
              </p>
              <p className="text-3xl">
                You are one of{" "}
                <span className="text-green-600 font-semibold">
                  {memberCount}
                </span>{" "}
                members.
              </p>
            </>
          ) : (
            <>
              <p className="text-3xl">
                Do you support this{" "}
                <span className="italic">Call for Change</span>? Join{" "}
                <span className="text-green-600 font-semibold">
                  {memberCount}
                </span>{" "}
                other members and start taking action.
              </p>
              <div className="flex justify-center">
                <Button
                  variant="default"
                  onClick={handleJoin}
                  className="text-white bg-green-600 border-2 border-black hover:bg-green-700 font-medium px-8 py-3 text-lg"
                >
                  Join this call for change
                </Button>
              </div>
            </>
          )}
          <div className="max-w-96">
            <p>
              Find out more about what it means to join a Call for Change at{" "}
              <span className="italic underline">
                What does it mean to join a{" "}
              </span>
              <span className="underline">Call for Change </span>on our{" "}
              <span className="underline">
                <a href="/about">About us (FAQs) </a>
              </span>
              page
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="col-span-3 grid gap-8">
            <section>
              <h2 className="mb-6 text-5xl font-bold">Start taking action:</h2>
              <div className="max-w-96">
                <p>
                  Find out more about the campaigns at{" "}
                  <span className="italic underline">
                    What campaigns do you faciliate?{" "}
                  </span>
                  on our <span className="underline">About us (FAQs) </span>page
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3 mt-4">
                <Card className="p-4 border-green-600">
                  <h3 className="mb-4 text-lg font-semibold text-black">
                    GENERAL campaigns
                  </h3>
                  <ul className="space-y-2 text-black">
                    <li>
                      <h4 className="font-medium">Government consultations</h4>
                      <ul className="ml-4 space-y-1 list-disc">
                        <li>
                          <Link href="#" className="underline text-black">
                            Respond to open consultations relating to this{" "}
                            <em>Call for Change</em> (0)
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="underline text-black">
                            Request a consultation relating to this{" "}
                            <em>Call for Change</em> to be initiated (0)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="font-medium">Petitions</h4>
                      <ul className="ml-4 space-y-1 list-disc">
                        <li>
                          <Link href="#" className="underline text-black">
                            Send a petition demanding for this{" "}
                            <em>Call for Change</em> (1)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="font-medium">UK Parliament</h4>
                      <ul className="ml-4 space-y-1 list-disc">
                        <li>
                          <Link href="#" className="underline text-black">
                            Watch debates and committee hearings relating to
                            this <em>Call for Change</em> (1)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="font-medium">Local council</h4>
                      <ul className="ml-4 space-y-1 list-disc">
                        <li>
                          <Link href="#" className="underline text-black">
                            Ask a question or make a statement at a council
                            meeting (1)
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Card>

                <Card className="p-4 border-green-600">
                  <h3 className="mb-4 text-lg font-semibold text-black">
                    ELECTORAL campaigns
                  </h3>
                  <ul className="space-y-2 text-black">
                    <li>
                      <h4 className="font-medium">Vote</h4>
                      <ul className="ml-4 space-y-1 list-disc">
                        <li>
                          <Link href="#" className="underline text-black">
                            Vote for candidates supporting this{" "}
                            <em>Call for Change</em> (0)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="font-medium">MPs</h4>
                      <ul className="ml-4 space-y-1 list-disc">
                        <li>
                          <Link href="#" className="underline text-black">
                            Appeal to your MP (offline) to support this{" "}
                            <em>Call for Change</em> (1)
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="underline text-black">
                            Appeal to your MP (online) to support this{" "}
                            <em>Call for Change</em> (10)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="font-medium">Local officials</h4>
                      <ul className="ml-4 space-y-1 list-disc">
                        <li>
                          <Link href="#" className="underline text-black">
                            Appeal to your local officials (offline) to support
                            this <em>Call for Change</em> (1)
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="underline text-black">
                            Appeal to your local officials (online) to support
                            this <em>Call for Change</em> (10)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="font-medium">Political parties</h4>
                      <ul className="ml-4 space-y-1 list-disc">
                        <li>
                          <Link href="#" className="underline text-black">
                            Appeal to your political party to support this{" "}
                            <em>Call for Change</em> (1)
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Card>
                <Card className="p-4 border-green-600">
                  <h3 className="mb-4 text-lg font-semibold text-black">
                    PUBLIC ENGAGEMENT campaigns
                  </h3>
                  <ul className="space-y-2 text-black">
                    <li>
                      <h4 className="font-medium">
                        Public discussions & debates
                      </h4>
                      <ul className="ml-4 space-y-1 list-disc">
                        <li>
                          <Link href="#" className="underline text-black">
                            Host or attend an offline public discussion about
                            this <em>Call for Change</em> (0)
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="underline text-black">
                            Host or attend an online public discussion about
                            this <em>Call for Change</em> (0)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="font-medium">Public awareness</h4>
                      <ul className="ml-4 space-y-1 list-disc">
                        <li>
                          <Link href="#" className="underline text-black">
                            Talk about this <em>Call for Change</em> offline (0)
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="underline text-black">
                            Talk about this <em>Call for Change</em> online (20)
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-5xl font-bold">Information feed</h2>
              <p className=" text-green-600">
                The Information feed is updated by Bia, your AI virtual
                assistant.{" "}
                <Link href="#" className="text-green-600 ">
                  [...]
                </Link>
              </p>
              <div className="max-w-96">
                <p>
                  Find out more about how this works at{" "}
                  <span className="italic underline">
                    What is the information feed?{" "}
                  </span>
                  on our <span className="underline">About us (FAQs) </span>page
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4 border-green-600">
                  <h3 className="mb-4 font-semibold">
                    Verified recent information & news relating to this{" "}
                    <span className="italic">Call for Change</span>
                  </h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <p key={i} className="text-sm italic underline">
                        Description Text Description Text Description Text
                        Description Text Description Text
                      </p>
                    ))}
                  </div>
                </Card>
                <Card className="p-4 border-green-600">
                  <h3 className="mb-4 font-semibold">
                    Unverified recent information & news relating to this{" "}
                    <span className="italic">Call for Change</span>
                  </h3>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <p key={i} className="text-sm italic underline">
                        Description Text Description Text Description Text
                        Description Text Description Text
                      </p>
                    ))}
                  </div>
                </Card>
              </div>
            </section>
          </div>

          <div className="w-full max-w-sm space-y-4">
            <Card className="divide-y divide-border">
              <div className="p-4">
                <h3 className="text-lg font-bold">
                  <span className="italic ">Call for Change</span> snapshot
                </h3>
              </div>

              <div className="p-4">
                <h4 className="mb-2 font-medium">Supporting Beliefs</h4>
                <div className="space-y-1">
                  <p className="text-sm text-green-600 underline">
                    <span className="font-bold">2</span> Factual Supporting
                    Beliefs
                  </p>
                  <p className="text-sm text-green-600 underline">
                    <span className="font-bold">1</span> Opinion-based
                    Supporting Belief
                  </p>
                </div>
              </div>

              <div className="bg-lime-500 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-white">Soundness score</h4>
                  <span className="text-3xl font-bold text-white">62</span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="mb-2 font-medium">Topics</h4>
                <div className="space-y-1 underline">
                  <p className="text-sm">TOPIC 8</p>
                  <p className="text-sm">TOPIC 21</p>
                  <p className="text-sm">TOPIC 23</p>
                </div>
              </div>
            </Card>
            <div className="text-right">
              <p>
                See the{" "}
                <span className="italic underline">Call for Change </span>
                <span className="underline">profile page </span>for full
                information.
              </p>
            </div>
            <Button
              variant={isMember ? "outline" : "default"}
              onClick={isMember ? () => setShowLeaveDialog(true) : handleJoin}
              className={`w-full justify-center border-2 font-medium ${
                isMember
                  ? "text-green-600 border-black "
                  : "text-white bg-green-600 border-black "
              }`}
            >
              {isMember
                ? "Leave this Call for Change"
                : "Join this call for change"}
            </Button>
            <LeaveDialog
              open={showLeaveDialog}
              onOpenChange={setShowLeaveDialog}
              onConfirmLeave={handleConfirmLeave}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
