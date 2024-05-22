"use client";
import Link from "next/link";
import React, { useState } from "react";
import CodeJex from "./ui/codejex";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="flex-col justify-center flex z-40 w-6 h-8 md:hidden focus:outline-none transition-all duration-300 ease-out gap-1"
        onClick={handleClick}
        name="menu"
        aria-label="menu"
      >
        <span
          className={`bg-[#474747] dark:bg-white transition-all duration-300 ease-out block h-[2.5px] w-6 rounded-sm ${
            isOpen
              ? "rotate-45 translate-y-[3px] bg-[#1f1f1f] dark:bg-white"
              : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-[#474747] dark:bg-white transition-all duration-300 ease-out block h-[2.5px] w-6 rounded-sm ${
            isOpen
              ? "-rotate-45 -translate-y-[3px] bg-[#1f1f1f] dark:bg-white"
              : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full min-h-screen bg-accent/90 z-10 py-24 text-accent-foreground flex justify-between gap-4 flex-col items-center transition-all duration-300 ease-out`}
      >
        <nav className="h-full flex flex-col items-center text-xl gap-10">
          <Link
            className="font-medium hover:underline underline-offset-4"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="font-medium hover:underline underline-offset-4"
            href="#"
          >
            Clients
          </Link>
          <Link
            className="font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <div className="space-x-4 flex items-center justify-center">
          <CodeJex className="h-12 w-12" />
          <h1>CodeJex</h1>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
