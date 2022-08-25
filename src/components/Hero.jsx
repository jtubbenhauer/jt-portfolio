import Button from "./Button.jsx";
import Typewriter from "typewriter-effect";
import HeroImage from "./HeroImage.jsx";
import Portrait from "../assets/portf1.jpg";
import React from "react";

export function Hero() {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 md:items-center md:-translate-y-8 md:my-16 max-w-[1200px] mx-auto">
      <div className="md:flex md:flex-col mx-auto ">
        {/* Headline block */}

        <div className="my-6 flex flex-col md:gap-2 lg:gap-4">
          <h1 className="text-pink text-4xl font-bold md:text-4xl lg:text-6xl">
            Jack Tubbenhauer
          </h1>
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-semibold text-slate-300">
            Web Developer
          </h2>
          <p className="text-slate-300 md:text-xl">Sydney, Australia</p>
        </div>

        {/* Typewriter list */}

        <div className="text-slate-300 mt-8 text-lg md:text-xl lg:text-2xl italic pl-2">
          <div className="whitespace-pre-line min-h-[115px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(400)
                  .changeDelay(100)
                  .typeString(
                    "Frontend Development\n UI/UX Design\n Ecommerce Specialist"
                  )
                  .start();
              }}
            />
          </div>
        </div>

        {/* Button section */}

        <a href="/#contact">
          <button className="rounded-lg mt-2 py-2 px-4 font-bold text-lg border-2 border-solid border-pink text-slate-200 transition-all hover:border-transparent hover:bg-pink ">
            Get In Touch
          </button>
        </a>
      </div>
      <HeroImage image={Portrait} />
    </section>
  );
}
