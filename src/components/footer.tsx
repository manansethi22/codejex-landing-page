import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";

const Footer = async () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-end justify-between py-2 px-4 font-light text-xs md:text-sm lg:text-base">
      <div className="flex items-center space-x-4">
        <span>&copy; {year} CodeJex Technologies. All rights reserved.</span>
        <Link
          href="/"
          className="hover:underline underline-offset-2 hidden lg:inline-block"
        >
          Home
        </Link>
        <Link
          href="#services"
          className="hover:underline underline-offset-2 hidden lg:inline-block"
        >
          Services
        </Link>
        <Link
          href="/clients"
          className="hover:underline underline-offset-2 hidden lg:inline-block"
        >
          Clients
        </Link>
        <Link
          href="/about"
          className="hover:underline underline-offset-2 hidden lg:inline-block"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:underline underline-offset-2 hidden lg:inline-block"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {/* Email */}
        <div className="hidden lg:flex items-center space-x-4">
          <Input
            type="email"
            placeholder="Enter your email..."
            className="h-9"
          />
          <Button variant="default" size={"sm"}>
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
