"use client";

import moonSVG from "@/app/assets/icons/moon.svg";
import sunSVG from "@/app/assets/icons/sun.svg";
import Image from "next/image";
import { useState } from "react";

export default function DisplayModeButton() {
  const [theme, setTheme] = useState("dark");
  const handleClick = () => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <button
      className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block'
      onClick={handleClick}
    >
      {theme === "dark" && (
        <Image src={sunSVG} width='24' height='24' alt='sun' />
      )}
      {theme === "light" && (
        <Image src={moonSVG} width='24' height='24' alt='moon' />
      )}
    </button>
  );
}
