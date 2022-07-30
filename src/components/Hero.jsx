import Button from "./Button.jsx";
import Typewriter from "typewriter-effect";
import HeroImage from "./HeroImage.jsx";
import Portrait from "../assets/ph-headshot.jpg";

export function Hero() {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 md:items-center md:-translate-y-8 md:my-16 ">
      <div className="md:flex md:flex-col mx-auto lg:translate-x-12">
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
                  .typeString(
                    "Frontend Development\n UI/UX Design\n Ecommerce Specialist"
                  )
                  .start();
              }}
            />
          </div>
        </div>

        {/* Button section */}

        <div className="mt-2">
          <Button
            text={"Get In Touch"}
            url={"#contact"}
            borderColor={"border-pink"}
            textColor={"text-slate-200"}
          />
        </div>
      </div>
      <HeroImage image={Portrait} />
    </section>
  );
}
