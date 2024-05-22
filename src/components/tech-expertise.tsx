import React from "react";
import { Badge } from "./ui/badge";
import {
  BrainCircuit,
  Cloud,
  Code,
  DatabaseZap,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const TechExpertise = () => {
  return (
    <section className="w-full py-12 md:py-24 min-h-full" id="services">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge>Tech Expertise</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Trusted by Leading Brands
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our tech startup has worked with a wide range of clients, from
              startups to Fortune 500 companies, helping them leverage the
              latest technologies to drive growth and innovation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1 rounded-lg border p-4 group relative bg-background">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-5 group-hover:opacity-80 transition group-hover:duration-300 -z-10"></div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Cloud />
              Cloud Expertise
            </h3>
            <p className="text-sm text-muted-foreground">
              We have extensive experience working with leading cloud providers
              like AWS, Google Cloud, and Microsoft Azure.
            </p>
          </div>
          <div className="grid gap-1 rounded-lg border p-4 group relative bg-background">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-5 group-hover:opacity-100 transition group-hover:duration-300 -z-10"></div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Code />
              Full-Stack Development
            </h3>
            <p className="text-sm text-muted-foreground">
              Our team of experienced developers can build custom web and mobile
              applications using the latest technologies.
            </p>
          </div>
          <div className="grid gap-1 rounded-lg border p-4 group relative bg-background">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-5 group-hover:opacity-100 transition group-hover:duration-300 -z-10"></div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <DatabaseZap />
              Data & Analytics
            </h3>
            <p className="text-sm text-muted-foreground">
              We help businesses unlock the power of their data with
              cutting-edge analytics and business intelligence solutions.
            </p>
          </div>
          <div className="grid gap-1 rounded-lg border p-4 group relative bg-background">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-5 group-hover:opacity-100 transition group-hover:duration-300 -z-10"></div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <ShieldCheck />
              Cybersecurity
            </h3>
            <p className="text-sm text-muted-foreground">
              Our security experts can help you protect your business from cyber
              threats and ensure compliance with industry regulations.
            </p>
          </div>
          <div className="grid gap-1 rounded-lg border p-4 group relative bg-background">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-5 group-hover:opacity-100 transition group-hover:duration-300 -z-10"></div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Workflow />
              DevOps & Automation
            </h3>
            <p className="text-sm text-muted-foreground">
              We leverage DevOps practices and automation to streamline your
              software development and deployment processes.
            </p>
          </div>
          <div className="grid gap-1 rounded-lg border p-4 group relative bg-background">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-5 group-hover:opacity-100 transition group-hover:duration-300 -z-10"></div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <BrainCircuit />
              Artificial Intelligence
            </h3>
            <p className="text-sm text-muted-foreground">
              Our AI experts can help you build intelligent systems that enhance
              your business operations and customer experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechExpertise;
