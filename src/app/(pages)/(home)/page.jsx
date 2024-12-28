import Contact from "@/components/section/contact";
import FAQ from "./faq";
import Hero from "./hero";
import HowItWorks from "./how-it-works";
import WhoWeAre from "./who-we-are";
import WhatWeDo from "./what-we-do";

export default function page() {
  return (
    <main className="flex-1">
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <HowItWorks />
      <FAQ />
      <Contact />
    </main>
  )
}
