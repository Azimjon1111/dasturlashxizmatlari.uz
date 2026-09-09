import { Hero } from "@/components/sections/hero";
import {
  ServicesGrid,
  Stats,
  Process,
  WhyUs,
  TechStack,
  BlogPreview,
  Faq,
  FinalCta,
} from "@/components/sections/home";
import { JsonLd } from "@/components/ui/primitives";
import { faqSchema } from "@/lib/schema";
import { HOME_FAQ } from "@/content/landing";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQ)} />
      <Hero />
      <ServicesGrid />
      <Stats />
      <Process />
      <WhyUs />
      <TechStack />
      <BlogPreview />
      <Faq />
      <FinalCta />
    </>
  );
}
