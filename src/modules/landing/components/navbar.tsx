"use client";

import { Log } from "@/src/core";
import { useMemo } from "react";

type NavbarProps = {
  scrolled: boolean;
};

export const Navbar = ({ scrolled = false }: NavbarProps) => {
  const scrollClasses = useMemo(() => {
    let classes = "h-[70px]";

    if (scrolled === true) classes += " bg-black";

    classes += " bg-transparent";

    return classes;
  }, [scrolled]);

  Log.info({ scrolled });

  return <div className={scrollClasses}>Navigation Bar Component</div>;
};
