import Link from "next/link";
import React from "react";
import CodeJex from "./ui/codejex";
import MobileNavbar from "./mobile-navbar";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center backdrop-blur-md justify-between border-b fixed w-full z-10">
      <Link className="flex items-center justify-center" href="#">
        <CodeJex className="h-12 w-12" />
        <h1 className="text-lg font-semibold">CodeJex</h1>
        <span className="sr-only">CodeJex Technologies</span>
      </Link>
      <nav className="ml-auto gap-4 sm:gap-6 hidden md:flex items-center">
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
        <ModeToggle />
      </nav>
      <MobileNavbar />
    </header>
  );
};

export default Header;
