"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function FeedbackPopover() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Feedback submitted:\nMessage: ${feedback}\nName: ${name}\nEmail: ${email}`
    );
    setFeedback("");
    setName("");
    setEmail("");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="capitalize bg-yellow-100 text-black hover:bg-yellow-100 hover:text-black focus:outline-none"
        >
          Give Feedback
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 shadow-lg rounded-lg bg-yellow-100">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Label htmlFor="feedback">Give us your feedback</Label>
            <Textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Type your feedback here..."
              required
              className="bg-white border"
            />
          </div>
          <div>
            <Label htmlFor="name">Name (Optional)</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="bg-white border"
            />
          </div>
          <div>
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-white border"
            />
          </div>
          <Button type="submit" className="w-full text-white">
            Submit
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
