import React from "react";

function HeroImage({ image }) {
  return (
    <div className="bg-pink mt-6 p-6">
      <img
        src={image}
        alt="Jack Tubbenhauer Portrait Image"
        className="rounded-full w-44 h-44 object-cover"
      />
    </div>
  );
}

export default HeroImage;
