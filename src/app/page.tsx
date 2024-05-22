import ContactUs from "@/components/contactus";
import FAQs from "@/components/faqs";
import Hero from "@/components/hero";
import ProductDevelopment from "@/components/product-development";
import TechExpertise from "@/components/tech-expertise";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main className="flex-1 min-h-[calc(100vh-3.5rem)] pt-14">
      <Hero />
      <TechExpertise />
      <ProductDevelopment />
      <TechStack />
      <ContactUs />
      <FAQs />
    </main>
  );
}
