import Hero from "@/components/sections/Hero";
import Press from "@/components/sections/Press";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Cases from "@/components/sections/Cases";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import FinalCta from "@/components/sections/FinalCta";
import Disclaimer from "@/components/sections/Disclaimer";
import Reveal from "@/components/ui/Reveal";
import { faqJsonLd } from "@/lib/faqs";

export default function Home() {
  // Hero stays unwrapped so it renders instantly (best LCP); the sections
  // below the fold reveal on scroll.
  return (
    <>
      {/* FAQPage lives only on the home page, where the FAQ section renders. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Reveal>
        <Press />
      </Reveal>
      <Reveal>
        <Problem />
      </Reveal>
      <Reveal>
        <Solution />
      </Reveal>
      <Reveal>
        <Benefits />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Cases />
      </Reveal>
      
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
      <Reveal>
        <Disclaimer />
      </Reveal>
    </>
  );
}
