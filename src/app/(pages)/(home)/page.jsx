import Contact from "@/components/section/contact";
import FAQ from "./faq";
import Hero from "./hero";
import WhoWeAre from "./who-we-are";
import WhatWeDo from "./what-we-do";
import Method from "@/components/section/method";

export default function page() {
  return (
    <main className="flex-1">
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Method />
      <FAQ />
      <Contact />
    </main>
  )
}
