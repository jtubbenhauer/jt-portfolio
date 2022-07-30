import React from "react";

function DesktopMenu({ items }) {
  return (
    <div className="hidden md:flex gap-8 pr-10">
      {items.map((i) => (
        <a
          href={i.href}
          className="text-slate-300 transition-all text-xl hover:text-pink relative before:absolute before:top-0 before:left-0 before:-bottom-2 before:right-0 hover:before:border-b-2 before:border-b-pink"
        >
          {i.title}
        </a>
      ))}
    </div>
  );
}

export default DesktopMenu;
