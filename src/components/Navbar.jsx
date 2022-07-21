import React, { useEffect } from "react";
import hamburger from "../assets/hamburger.svg";
import Vivus from "vivus";

export function Navbar() {
  useEffect(() => {
    new Vivus("logo-anim", { duration: 250 }, () => console.log("works"));
  }, []);

  return (
    <nav className="flex px-4 justify-between">
      <svg
        id="logo-anim"
        width="70"
        alt="Jack Tubbenhauer Animated Logo"
        height="83"
        viewBox="0 0 150 83"
        fill="none"
      >
        <path
          d="M16.5 56L3 66.5C20 93 56 81.5 56 53.5V1.5H35V54.5C34 68.5 19 63 16.5 56Z"
          stroke="#F73D93"
          stroke-width="5"
        />
        <path
          d="M128.5 1.5H67V19H87.5V79.5H108V19H128.5V1.5Z"
          stroke="#F73D93"
          stroke-width="5"
        />
        <path
          d="M148.5 68.5C148.5 59.3 141 56 136.5 56C131.5 56 124.5 59 124.5 69C124.5 81.5 136 81 136.5 81C137 81 148.5 80 148.5 68.5Z"
          stroke="#F73D93"
          stroke-width="5"
        />
      </svg>
      <img src={hamburger} alt="Hamburger Icon" />
    </nav>
  );
}