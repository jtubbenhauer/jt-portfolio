import React from "react";
import humbugImage from "../assets/humbug-screenshot.webp";
import plantgirlImage from "../assets/plantgirl-screenshot.webp";
import undrinkImage from "../assets/undrink-screenshot.webp";
import iconCss from "../assets/icon-css.png";
import iconHtml from "../assets/icon-html.png";
import iconJs from "../assets/icon-javascript.png";
import iconShopify from "../assets/icon-shopify.png";
import iconWordpress from "../assets/icon-wordpress.png";

import Card from "./Card.jsx";

const projects = [
  {
    title: "Humbug",
    description:
      "Custom WordPress site utilising Advanced Custom Fields for client input",
    image: humbugImage,
    subtext: "Restaurant & wine bar - Newcastle, NSW",
    url: "http://humbugnewcastle.com.au",
    tech: [iconWordpress, iconHtml, iconCss, iconJs],
  },
  {
    title: "PlantGirl",
    description:
      "Custom Shopify theme with Instagram feed and client specific sections",
    image: plantgirlImage,
    subtext: "Online & retail plant shop - Enmore, NSW",
    url: "https://plantgirl.com.au",
    tech: [iconShopify, iconHtml, iconCss, iconJs],
  },
  {
    title: "Undrink",
    description: "Customised Shopify theme for ecommerce store",
    image: undrinkImage,
    subtext: "Online non-alcoholic beer & wine store - Sydney, NSW",
    url: "https://undrink.com.au",
    tech: [iconShopify, iconHtml, iconCss, iconJs],
  },
];

function CardSection() {
  return (
    <>
      <h2 className="text-3xl text-pink font-bold mt-6 mb-4 text-center">
        My Work
      </h2>
      <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3 md:justify-items-center">
        {projects.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            tech={item.tech}
            image={item.image}
            subtext={item.subtext}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
}

export default CardSection;
