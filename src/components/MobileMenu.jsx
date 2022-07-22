import React from "react";
import closeIcon from "../assets/icon-close.svg";

function MobileMenu({ toggleMenu }) {
  return (
    <section className="fixed top-0 left-0 h-screen w-screen bg-white/50 z-50">
      <div>
        <img src={closeIcon} alt="Close Icon" onClick={toggleMenu} />
      </div>
    </section>
  );
}

export default MobileMenu;
