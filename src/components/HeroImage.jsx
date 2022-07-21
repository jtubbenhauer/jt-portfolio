import React from "react";
import cubePattern1 from "../assets/cube-pattern1.svg";
import cubePattern2 from "../assets/cube-pattern2.svg";
import dotMatrix from "../assets/dot-matrix.svg";

function HeroImage({ image }) {
  return (
    <div className="bg-pink mt-20 p-6 relative">
      <img
        src={dotMatrix}
        alt="Abstract Cube Pattern"
        className="absolute bottom-8"
      />
      <img
        src={image}
        alt="Jack Tubbenhauer Portrait Image"
        className="rounded-full w-44 h-44 object-cover mx-auto my-4"
      />
      <img
        src={cubePattern2}
        alt="Abstract Cube Pattern"
        className="absolute right-5 top-10"
      />
    </div>
  );
}

export default HeroImage;
