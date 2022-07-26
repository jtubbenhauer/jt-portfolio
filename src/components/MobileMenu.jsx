import React from "react";
import closeIcon from "../assets/icon-close.svg";

function MobileMenu({ toggleMenu }) {
  return (
    // Shadow div
    <section className="fixed top-0 left-0 h-screen w-screen bg-black/80 z-50 transition-all">
      {/* Menu div */}
      <div className="absolute right-0 transition-all">
        <div className="p-5 bg-[#20222c] h-screen w-[60vw] flex items-end flex-col">
          <img src={closeIcon} alt="Close Icon" onClick={toggleMenu} />
        </div>
      </div>
    </section>
  );
}

export default MobileMenu;
