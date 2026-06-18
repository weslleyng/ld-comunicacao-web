import Hero from "@/components/sections/Hero";
import Press from "@/components/sections/Press";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import Cases from "@/components/sections/Cases";
import Offer from "@/components/sections/Offer";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  // Hero stays unwrapped so it renders instantly (best LCP); the sections
  // below the fold reveal on scroll.
  return (
    <>
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
        <Cases />
      </Reveal>
      <Reveal>
        <Offer />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
    </>
  );
}
