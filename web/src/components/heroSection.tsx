import React from "react";
import CarouselsHeroSection from "./carouselsHeroSection";

import image1 from "../assets/img/1706714290731.jpg";
import image2 from "../assets/img/1706714564880.jpg";
import image3 from "../assets/img/IMG_9024.jpg";
import image4 from "../assets/img/logo.png";

interface publish {
  imgs : string;
  title: string;
  publish_date: Date;
  writers: {
    name: string;
    img: string;
  };
}
const publishes: publish[] = [
  {
    imgs: image1,
    title: "يناير",
    publish_date: new Date("dd/mm/yyyy"),
    writers: { name: "ahmed", img: image1 },
  },
  {
    imgs: image2,
    title: "يناير",
    publish_date: new Date("dd/mm/yyyy"),
    writers: { name: "ahmed", img: image2 },
  },
  {
    imgs: image3,
    title: "يناير",
    publish_date: new Date("dd/mm/yyyy"),
    writers: { name: "ahmed", img: image3 },
  },
  {
    imgs: image4,
    title: "يناير",
    publish_date: new Date("dd/mm/yyyy"),
    writers: { name: "ahmed", img: image4 },
  }
];
export default function HeroSection() {
  return (
    <div className="w-full  text-white text-center">
      <CarouselsHeroSection publishes={publishes} />
    </div>
  );
}
