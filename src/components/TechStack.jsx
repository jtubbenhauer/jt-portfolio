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

function TechStack() {
  return (
    <div className="flex flex-wrap gap-3 md:gap-5 items-center justify-center max-w-[300px] mx-auto mt-4 md:mt-0">
      <img src={js} alt="JavaScript Icon" width="40" height="40" />
      <img src={ts} alt="TypeScript Icon" width="40" height="40" />
      <img src={react} alt="React Icon" width="40" height="40" />
      <img src={next} alt="NextJs Icon" width="52" height="52" />
      <img src={ng} alt="Angular Icon" width="48" height="48" />
      <img src={git} alt="GitHub Icon" width="52" height="52" />
      <img src={firebase} alt="Firebase Icon" width="36" height="36" />
      <img src={wordpress} alt="Wordpress Icon" width="40" height="40" />
      <img src={shopify} alt="Shopify Icon" width="40" height="40" />
    </div>
  );
}

export default TechStack;
