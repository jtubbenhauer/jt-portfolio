import React, { useEffect } from "react";
import Vivus from "vivus";
import DesktopMenu from "./DesktopMenu.jsx";

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

export function Navbar({ toggleMenu }) {
  useEffect(() => {
    new Vivus("logo-anim", { duration: 100 }, () => console.log("works"));
  }, []);

  return (
    <nav className="flex px-4 justify-between items-center">
      <svg
        id="logo-anim"
        width="70"
        height="83"
        viewBox="0 0 150 83"
        fill="none"
      >
        <path
          d="M16.5 56L3 66.5C20 93 56 81.5 56 53.5V1.5H35V54.5C34 68.5 19 63 16.5 56Z"
          stroke="#F73D93"
          strokeWidth="5"
        />
        <path
          d="M128.5 1.5H67V19H87.5V79.5H108V19H128.5V1.5Z"
          stroke="#F73D93"
          strokeWidth="5"
        />
        <path
          d="M148.5 68.5C148.5 59.3 141 56 136.5 56C131.5 56 124.5 59 124.5 69C124.5 81.5 136 81 136.5 81C137 81 148.5 80 148.5 68.5Z"
          stroke="#F73D93"
          strokeWidth="5"
        />
      </svg>
      {/*Desktop Menu*/}
      <DesktopMenu items={menuItems} />
      {/*Hamburger menu*/}
      <div className="md:hidden" onClick={toggleMenu}>
        <svg
          id="hamburger-anim"
          width="35"
          height="30"
          viewBox="0 0 44 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="42"
            height="8"
            rx="2"
            stroke="#F73D93"
            strokeWidth="3"
          />
          <rect
            x="10"
            y="21"
            width="33"
            height="8"
            rx="2"
            stroke="#F73D93"
            strokeWidth="3"
          />
        </svg>
      </div>
    </nav>
  );
}
