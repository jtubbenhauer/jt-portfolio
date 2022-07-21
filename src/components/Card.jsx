import React from "react";

function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Card({ title, description, image, tech }) {
  return (
    <div className="max-w-[80%] text-slate-200 bg-slate-700/60 mb-8 rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt="Project Screenshot" />
      <h3 className="text-xl font-bold p-4">{title}</h3>
      <p className="p-4">{description}</p>
      <div className="flex items-center justify-between p-4">
        {tech.map((item) => {
          return <img src={item} alt="" />;
        })}
      </div>
    </div>
  );
}

export default Card;
