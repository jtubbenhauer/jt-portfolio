import React from "react";

function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Card({ title, description, image, tech, subtext, url }) {
  return (
    <div className="max-w-[80%] text-slate-200 bg-slate-700/60 mb-8 rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt="Project Screenshot" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="italic text-[15px] text-slate-200/80">{subtext}</p>
        <p className="">{description}</p>
      </div>
      {/*<div className="flex items-center justify-between p-4 max-w-[300px] mx-auto">*/}
      {/*  {tech.map((item) => {*/}
      {/*    return <img src={item} alt="" />;*/}
      {/*  })}*/}
      {/*</div>*/}
    </div>
  );
}

export default Card;
