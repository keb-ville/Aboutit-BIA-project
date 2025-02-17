"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";

export default function Chatbox() {
  const [messages, setMessages] = useState([
    { sender: "assistant", text: "Hi, I'm Bia, your virtual assistant." },
    {
      sender: "assistant",
      text: "I'm here to help you make a difference about the causes you care about by making the process of democratic engagement easier & more effective.",
    },
    {
      sender: "assistant",
      text: "Can I tell you more about myself and About It?",
      options: ["Yes", "No"],
    },
  ]);

  const [showOptions, setShowOptions] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatEndRef]);

  const sendMessage = (text: string) => {
    setMessages((prevMessages) => [...prevMessages, { sender: "user", text }]);
    setShowOptions(false);

    setTimeout(() => {
      let response = "";
      if (text === "Yes") {
        response =
          "Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes. Description Text Yes.";
      } else if (text === "No") {
        response =
          "Description Text No. Description Text No. Description Text No. Description Text No. Description Text No. Description Text No. Description Text No. Description Text No. Description Text No.";
      } else {
        response =
          "I'm not sure how to respond to that. Can you please choose Yes or No?";
        setShowOptions(true);
      }
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "assistant", text: response },
      ]);
    }, 500);
  };

  const resetChat = () => {
    setMessages([
      { sender: "assistant", text: "Hi, I'm Bia, your virtual assistant." },
      {
        sender: "assistant",
        text: "I'm here to help you make a difference about the causes you care about by making the process of democratic engagement easier & more effective.",
      },
      {
        sender: "assistant",
        text: "Can I tell you more about myself and About It?",
        options: ["Yes", "No"],
      },
    ]);
    setShowOptions(true);
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
              {msg.options && showOptions && (
                <div className="mt-2 space-x-2">
                  {msg.options.map((option) => (
                    <Button
                      key={option}
                      onClick={() => sendMessage(option)}
                      className="bg-white text-green-600 hover:bg-green-100"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="p-2 border-t border-green-600">
          <div className="flex flex-col gap-2">
            <Button onClick={resetChat} className="text-white w-full">
              Reset conversation with Bia and start over
            </Button>
            <Button
              onClick={() => (window.location.href = "/trending-cfc")}
              className="text-white w-full"
            >
              Skip conversation with Bia and go straight to Trending Calls for
              Change
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
