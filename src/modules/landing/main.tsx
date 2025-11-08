"use client";

import { useEffect, useState } from "react";
import { Hero, Movies, Navbar } from "./components";

export const LandingModule = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-red-200">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Movies />
    </div>
  );
};
