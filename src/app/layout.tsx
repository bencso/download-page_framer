"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isVisible, setVisible] = useState(true);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current) {
        const gridPos = gridRef.current.offsetTop;
        setVisible(window.scrollY <= gridPos);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body className="font-sans bg-[#f2f9f9] text-blue-chill-900">
        <BackgroundLayer isVisible={isVisible} gridRef={gridRef} />
        <Navbar/>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

function BackgroundLayer({ isVisible, gridRef }: { isVisible: boolean; gridRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div className="background-layer fixed inset-0 -z-1 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#f2f9f9_40%,#bfe0e2_100%)]">
      <GridLayer isVisible={isVisible} gridRef={gridRef} />
    </div>
  );
}

function GridLayer({ isVisible, gridRef }: { isVisible: boolean; gridRef: React.RefObject<HTMLDivElement> }) {
  const gridVariants = {
    visible: { opacity: 1, y: 0, scale: 1 },
    hidden: { opacity: 0, y: 0, scale: 1 },
  };

  const gridTransition = {
    duration: 1,
    ease: "easeInOut",
  };

  return (
    <motion.div
      ref={gridRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={gridVariants}
      transition={gridTransition}
    >
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ddeff0_1px,transparent_1px),linear-gradient(to_bottom,#ddeff0_1px,transparent_1px)] bg-[size:28px_48px]"
        animate={{ y: [0, -50] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      ></motion.div>
    </motion.div>
  );
}
