"use client";
import Modal from "../components/modal/Modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = [
    "find your voice",
    "have a say",
    "work together",
    "build a campaign",
    "create change",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-3xl mt-6">Welcome to</h1>
      <Image src="/imagelogo.svg" alt="Logo" width={180} height={180} />
      <h1>
        Where you can{" "}
        <motion.span
          className="text-green-500 underline"
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.span>{" "}
        about it.
      </h1>
      <h2>
        <span className="text-green-500">How</span> About It{" "}
        <span className="text-green-500">works</span>
      </h2>

      <Image
        src="/public/staticImage1.png"
        alt="image"
        width={450}
        height={450}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <Button className="w-1/3">
        <Link href="/bia">Get started</Link>
      </Button>
    </div>
  );
}

export default HomePage;
