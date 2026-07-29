import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { GrowthJourney } from "@/components/sections/GrowthJourney";
import { WhyTracky } from "@/components/sections/WhyTracky";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <GrowthJourney />
      <WhyTracky />
      <FAQ />
      <FinalCTA />
    </>
  );
}
