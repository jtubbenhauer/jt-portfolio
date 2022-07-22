import Button from "./Button.jsx";
import Typewriter from "typewriter-effect";
import HeroImage from "./HeroImage.jsx";
import Portrait from "../assets/ph-headshot.jpg";

export function Hero() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2">
      <div>
        {/* Headline block */}

        <div className="pl-4 my-6">
          <h1 className="text-pink text-4xl font-bold">Jack Tubbenhauer</h1>
          <h2 className="text-3xl font-semibold text-slate-300">
            Web Developer
          </h2>
          <p className="text-slate-300">Sydney, Australia</p>
        </div>

        {/* Typewriter list */}

        <div className="text-slate-300 mt-8 text-lg italic pl-4">
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

        <div className="pl-4 mt-2">
          <Button
            text={"Get In Touch"}
            url={"/"}
            borderColor={"border-pink"}
            textColor={"text-slate-200"}
          />
        </div>
      </div>
      <HeroImage image={Portrait} />
    </div>
  );
}
