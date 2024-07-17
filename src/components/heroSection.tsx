import React from "react";
import CarouselsHeroSection from "./carouselsHeroSection";

import image1 from "../assets/img/1706714290731.jpg";
import image2 from "../assets/img/1706714564880.jpg";
import image3 from "../assets/img/IMG_9024.jpg";
import writerImagePlaceholder from "../assets/img/IMG_9024.jpg";
import sliderImagePlaceholder from "../assets/img/sliderImagePlaceholder.png";

interface publish {
  imgs : string;
  title: string;
  publish_date: Date;
  writers?: {
    name?: string | undefined;
    img?: string | undefined;
  } | undefined;
}
const publishes: publish[] = [
  {
    imgs: sliderImagePlaceholder,
    title: "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    publish_date: new Date(),
    writers: { name: "حمود احمد سيف العطاس", img: writerImagePlaceholder },
  },
  {
    imgs: sliderImagePlaceholder,
    title: "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    publish_date: new Date(),
    writers: { name: "حمود احمد سيف العطاس", img: writerImagePlaceholder },
  },
];
export default function HeroSection() {
  return (
    <div className="w-full  text-white text-center">
      <CarouselsHeroSection publishes={publishes} />
    </div>
  );
}
