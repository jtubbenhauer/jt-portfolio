import React from "react";
import cubePattern1 from "../assets/cube-pattern1.svg";
import cubePattern2 from "../assets/cube-pattern2.svg";
import dotMatrix from "../assets/dot-matrix.svg";

function HeroImage({ image }) {
  return (
    <div className="mt-8 p-6 relative md:mt-0 -z-10 max-w-lg mx-auto min-w-[80%]">
      <img
        src={dotMatrix}
        alt="Abstract Cube Pattern"
        className="absolute bottom-8 -z-10 left-2"
      />
      <img
        src={image}
        alt="Jack Tubbenhauer Portrait Image"
        className="rounded-full w-44 h-44 md:h-72 md:w-72 lg:h-96 lg:w-96 object-cover mx-auto my-4"
      />
      <img
        src={cubePattern2}
        alt="Abstract Cube Pattern"
        className="absolute right-5 top-10 -z-10"
      />
    </div>
  );
}

export default HeroImage;
