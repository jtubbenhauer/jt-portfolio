import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#2b3545] text-slate-200 h-12 mt-14 flex items-center justify-center text-center p-10 text-sm md:text-base">
      <p>
        Designed by Jack Tubbenhauer | Built with React & Tailwind |{" "}
        <a
          href="https://github.com/jtubbenhauer/jt-portfolio"
          className="text-pink"
          target="_blank"
        >
          GitHub Repo
        </a>
      </p>
    </div>
  );
}

export default Footer;
