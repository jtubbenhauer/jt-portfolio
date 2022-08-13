import React from "react";

function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Card({ title, description, image, subtext, url }) {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="max-w-[80%] text-slate-200 bg-slate-700/60 mb-8 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all hover:transform hover:scale-[101%]"
    >
      <img src={image} alt="Project Screenshot" />
      <div className="p-4 flex flex-col justify-center items-center gap-2 min-h-[10rem]">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="italic text-[15px] text-slate-200/80 text-center">
          {subtext}
        </p>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}

export default Card;
