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
    tech: [iconWordpress, iconHtml, iconCss, iconJs],
  },
  {
    title: "PlantGirl",
    description:
      "Custom Shopify theme with Instagram feed and client specific sections",
    image: plantgirlImage,
    tech: [iconShopify, iconHtml, iconCss, iconJs],
  },
  {
    title: "Undrink",
    description:
      "Customised Shopify theme for non-alcoholic beer and wine store",
    image: undrinkImage,
    tech: [iconShopify, iconHtml, iconCss, iconJs],
  },
];

function CardSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl text-pink font-bold m-6">My Work</h2>
      {projects.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          tech={item.tech}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default CardSection;
