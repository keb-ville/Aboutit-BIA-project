"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Chatbox() {
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      text: "Hi, I’m Bia, your virtual assistant. I’m here to help you Find & Express your beliefs, Communicate & Demand change, and Connect with like-minded people to work together, making your Democratic Engagement easier & more effective. What's your name?",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: input },
      ]);
      setInput("");
    }
  };

  const resetChat = () => {
    setMessages([
      {
        sender: "assistant",
        text: "Hi, I’m Bia, your virtual assistant. I’m here to help you Find & Express your beliefs, Communicate & Demand change, and Connect with like-minded people to work together, making your Democratic Engagement easier & more effective. What's your name?",
      },
    ]);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100 w-5/12">
      <div className="w-full max-w-6xl mx-auto rounded-lg shadow-lg border-2 border-green-600 flex-col">
        <div className="h-80 overflow-y-auto p-2 space-y-2 flex flex-col">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-green-600 text-white self-end"
                  : "bg-gray-300 text-black self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="p-2 border-t border-green-600">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 bg-white border"
            />
            <Button onClick={sendMessage} className="text-white">
              Send
            </Button>
            <Button onClick={resetChat} className="text-white">
              Reset Conversation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
