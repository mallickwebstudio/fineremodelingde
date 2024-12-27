import Contact from "@/components/section/contact";
import FAQ from "./faq";
import Hero from "./hero";
import HowItWorks from "./how-it-works";

export default function page() {
  return (
    <main className="flex-1">
      <Hero />
      <HowItWorks />
      <FAQ />
      <Contact />
    </main>
  )
}
