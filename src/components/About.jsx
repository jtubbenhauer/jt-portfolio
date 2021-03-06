import React from "react";

function About() {
  return (
    <div className="flex flex-col mt-4" id="about">
      <h2 className="text-3xl lg:text-4xl md:text-3xl text-pink font-bold pl-4 text-center">
        About Me
      </h2>
      <p className="text-slate-300 p-8 max-w-[450px] text-center mx-auto md:text-lg lg:text-xl md:max-w-2xl">
        I'm a web developer based in Sydney, Australia. I have a background in
        building and operating successful ecommerce stores, and have developed a
        passion for coding and web design along the way.
      </p>
    </div>
  );
}

export default About;
