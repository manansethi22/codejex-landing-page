import React from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";

const ProductDevelopment = () => {
  return (
    <section className="w-full py-12 md:py-24 min-h-full">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge>Product Development</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Choose Your Product Development Path
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Whether you need an MVP, a Proof-of-Concept, or a full-fledged
              prototype, our team can help you bring your vision to life.
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
          <Link href="#">
            <Button className="px-4">Create an MVP</Button>
          </Link>
          <Link href="#">
            <Button className="px-4" variant="secondary">
              Build a Proof-of-Concept
            </Button>
          </Link>
          <Link href="#">
            <Button className="px-4" variant="secondary">
              Develop a Prototype
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopment;
