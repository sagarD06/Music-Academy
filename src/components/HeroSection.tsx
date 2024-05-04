"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const words = [
  {
    text: "Master",
    className:
      "text-center mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
  },
  {
    text: "the",
    className:
      "text-center mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400",
  },
  {
    text: "art",
    className:
      "text-center mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
  },
  {
    text: "of",
    className:
      "text-center mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400",
  },
  {
    text: "Music.",
    className:
      "text-center mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-amber-500 dark:text-amber-500",
  },
];

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gold" />
      <div className="relative text-center p-4 z-10 w-full">
        <TypewriterEffectSmooth
          className="flex items-center justify-center"
          words={words}
        />

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine skills,
          join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
