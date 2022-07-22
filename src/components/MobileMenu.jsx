import React from "react";
import closeIcon from "../assets/icon-close.svg";

function MobileMenu({ toggleMenu }) {
  return (
    <section className="fixed top-0 left-0 h-screen w-screen bg-black/80 z-50">
      {/* Shadow div */}
      <div className="absolute right-0">
        {/* Menu dib */}
        <div className="p-4 bg-[#20222c] h-screen w-[60vw] flex items-end flex-col">
          <img src={closeIcon} alt="Close Icon" onClick={toggleMenu} />
        </div>
      </div>
    </section>
  );
}

export default MobileMenu;
