import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroimg1 from "../../public/heroimg1.png";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-12 border-b px-4 md:px-6 space-y-10 xl:space-y-16 text-balance min-h-full">
      {/* <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-center">
        CodeJex Technologies
      </h1> */}
      <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 animate-fade-up">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet-600 to-pink-600">
            Accelerate Your Business with Our Tech Expertise
          </h1>
          <p className="max-w-[700px] md:text-xl text-muted-foreground">
            Our tech startup specializes in helping businesses leverage the
            latest technologies to drive growth, improve efficiency, and stay
            ahead of the competition.
          </p>
          <div className="space-x-4">
            <Link href="#">
              <Button>Get Started</Button>
            </Link>
            <Link href="#">
              <Button variant={"secondary"}>Learn More</Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={heroimg1} alt="Tech Illustration" width={1000} height={1000} /> 
        </div>
      </div>
    </section>
  );
};


export default Hero;
