import React, { useEffect } from "react";
import closeIcon from "../assets/icon-close.svg";

const menuItems = [
  {
    title: "About Me",
    href: "#about",
  },
  {
    title: "My Work",
    href: "#work",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

function MobileMenu({ toggleMenu }) {
  return (
    // Shadow div
    <section className="fixed top-0 left-0 h-screen w-screen bg-black/80 z-50">
      {/* Menu div */}
      <div className="absolute right-0" ref="menuRef">
        <div className="p-5 bg-[#20222c] h-screen w-[60vw] flex items-end flex-col">
          <img src={closeIcon} alt="Close Icon" onClick={toggleMenu} />
          <ul className="text-right text-slate-300 flex flex-col gap-8 mt-8 text-2xl font-bold">
            {menuItems.map((i) => (
              <a href={i.href} onClick={toggleMenu}>
                <li>{i.title}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MobileMenu;
