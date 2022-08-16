import React from "react";
import js from "../assets/js.svg";
import ts from "../assets/ts.svg";
import ng from "../assets/angular.svg";
import next from "../assets/nextjs.svg";
import git from "../assets/git.svg";
import react from "../assets/react.svg";
import firebase from "../assets/firebase.svg";
import wordpress from "../assets/wordpress.svg";
import shopify from "../assets/shopify.svg";
import arrow from "../assets/arrow-down.svg";

function TechStack() {
  return (
    <>
      <div className="flex flex-wrap gap-3 items-center justify-center max-w-[350px] max-h-[120px] md:my-auto mx-auto mt-4 relative md:w-1/2">
        <img src={js} alt="JavaScript Icon" width="50" height="40" />
        <img src={ts} alt="TypeScript Icon" width="50" height="40" />
        <img src={react} alt="React Icon" width="50" height="40" />
        <img src={next} alt="NextJs Icon" width="65" height="52" />
        <img src={ng} alt="Angular Icon" width="58" height="48" />
        <img src={wordpress} alt="Wordpress Icon" width="50" height="40" />
        <img src={shopify} alt="Shopify Icon" width="50" height="40" />
        <img src={git} alt="GitHub Icon" width="70" height="52" />
        <img src={firebase} alt="Firebase Icon" width="35" height="36" />
        <div className="absolute right-0 bottom-[-5rem]">
          <img
            src={arrow}
            alt="Curved Arrow Pointing Down"
            height="30"
            width="30"
          />
        </div>
      </div>
    </>
  );
}

export default TechStack;
