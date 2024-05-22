import React from "react";
import { Badge } from "./ui/badge";
import { FigmaLogoIcon } from "@radix-ui/react-icons";
import Terraform from "./ui/terraform";
import Docker from "./ui/docker";
import Python from "./ui/python";
import Dart from "./ui/dart";
import Typescript from "./ui/typescript";
import ReactIcon from "./ui/react";
import NextJS from "./ui/nextjs";
import ReactNative from "./ui/react-native";
import JavaScript from "./ui/javascript";
import Jira from "./ui/jira";
import NodeJS from "./ui/nodejs";
import Kubernetes from "./ui/kubernetes";

const TechStack = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge>Tech Stack</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Powerful Tech Stack
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We leverage a wide range of cutting-edge technologies to deliver
              innovative solutions for our clients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <ReactIcon className="h-6 w-6" />
                React.js
              </div>
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <NextJS className="h-6 w-6" />
                Next.js
              </div>
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <ReactNative className="h-6 w-6" />
                React Native
              </div>
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <NodeJS className="h-6 w-6" />
                Node.js
              </div>
            </div>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <JavaScript className="h-6 w-6" />
                JavaScript
              </div>
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <Typescript className="h-6 w-6" />
                TypeScript
              </div>
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <Dart className="h-6 w-6" />
                Dart
              </div>
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <Python className="h-6 w-6" />
                Python
              </div>
            </div>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <FigmaLogoIcon className="h-6 w-6" />
                Figma
              </div>
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <Terraform className="h-6 w-6" />
                Terraform
              </div>
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <Docker className="h-6 w-6" />
                Docker
              </div>
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <Jira className="h-6 w-6" />
                Jira
              </div>
              <div className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-muted">
                <Kubernetes className="h-6 w-6" />
                Kubernetes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
