import React from "react";

function About() {
  return (
    <div className="flex flex-col mt-4 md:w-1/2" id="about">
      <h2 className="text-3xl lg:text-4xl md:text-3xl text-pink font-bold pl-4 text-center">
        About Me
      </h2>
      <p className="text-slate-300 p-8 max-w-[450px] text-center mx-auto md:text-lg lg:text-xl md:max-w-2xl">
        Hi, I'm a web developer based in Sydney, Australia. My background is in
        building and operating successful Shopify and WordPress ecommerce
        stores, though I love building UIs and websites for any industry.
      </p>
      <p
        className={
          "text-slate-300 px-8 max-w-[450px] text-center mb-12 md:mb-2 mx-auto md:text-lg lg:text-xl md:max-w-2xl"
        }
      >
        I am currently available for work on new or existing projects - so
        please{" "}
        <a href="/#contact" className={"text-pink"}>
          get in touch
        </a>{" "}
        if you'd like to chat.
      </p>
    </div>
  );
}

export default About;
