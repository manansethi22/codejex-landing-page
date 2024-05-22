import React from "react";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <section className="w-full py-12 md:py-24 min-h-full" id="faqs">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge>FAQs</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <Accordion
          type="multiple"
          className="w-full mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>What services do you offer?</AccordionTrigger>
            <AccordionContent className="space-y-3">
              <span>
                We offer a comprehensive range of services including:
              </span>
              <ul className="list-disc list-inside">
                <li>App development for iOS and Android</li>
                <li>Website development</li>
                <li>UI/UX design</li>
                <li>Cloud expertise</li>
                <li>Data & analytics</li>
                <li>Cybersecurity</li>
                <li>DevOps & automation</li>
                <li>Artificial intelligence solutions</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do you approach a new project?
            </AccordionTrigger>
            <AccordionContent>
              Our approach involves understanding your requirements through initial consultations followed by detailed planning, design, development, testing, and finally deployment. We maintain constant communication throughout the process to ensure your vision is realized.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can you redesign or update my existing website/app?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer redesign and update services for existing websites and apps. Our team will evaluate your current digital assets and suggest improvements to enhance performance and user experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you offer post-launch support and maintenance?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! We offer comprehensive post-launch support and maintenance packages to ensure your app or website remains up-to-date, secure, and functioning smoothly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              How much does a typical project cost?
            </AccordionTrigger>
            <AccordionContent>
              The cost varies depending on the project's complexity, features, and specific requirements. We provide customized quotes after our initial consultation to ensure you receive a fair and transparent pricing structure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What is your approach to UI/UX design?
            </AccordionTrigger>
            <AccordionContent>
              Our approach to UI/UX design is user-centric, focusing on creating intuitive and engaging interfaces. We conduct user research, create wireframes and prototypes, and perform usability testing to ensure the best possible user experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              How do you handle project management and communication?
            </AccordionTrigger>
            <AccordionContent>
              We use agile project management methodologies to ensure efficient and transparent workflows. Our project managers keep you informed with regular updates, progress reports, and meetings to ensure your project stays on track and meets your expectations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              What are the key benefits of choosing your company for app and website development?
            </AccordionTrigger>
            <AccordionContent>
              Choosing us means you get a dedicated team of experts who are committed to delivering high-quality, innovative solutions. We offer end-to-end services from initial consultation to post-launch support, ensuring a seamless experience and exceptional results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              How do you handle user feedback and iterations during development?
            </AccordionTrigger>
            <AccordionContent>
              We value user feedback and incorporate it throughout the development process. We use agile methodologies that allow for iterative development, incorporating user feedback in each sprint to continually improve the product.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              How do you handle intellectual property and ownership of the developed solutions?
            </AccordionTrigger>
            <AccordionContent>
              Upon project completion and full payment, you will have full ownership and intellectual property rights of the developed solutions. We provide all source code, documentation, and necessary assets.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>
              What methodologies do you use for project development?
            </AccordionTrigger>
            <AccordionContent>
              We primarily use agile methodologies such as Scrum and Kanban, which allow for flexibility, iterative progress, and continuous feedback. This ensures that we can adapt to changes and deliver high-quality results efficiently.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger>
              How do you handle confidentiality and data privacy?
            </AccordionTrigger>
            <AccordionContent>
              We take confidentiality and data privacy very seriously. We sign non-disclosure agreements (NDAs) with our clients and implement strict data protection measures to safeguard your sensitive information throughout the project lifecycle.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
