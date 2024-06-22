import React from "react";
import CarouselsHeroSection from "./carouselsHeroSection";

import image1 from "../resourses/img/1706714290731.jpg";
import image2 from "../resourses/img/1706714564880.jpg";
import image3 from "../resourses/img/IMG_9024.jpg";
import image4 from "../resourses/img/logo.png";

const imgs = [image1, image2, image3, image4];
export default function HeroSection() {
  return (
    <div className="w-full  text-white text-center">
      <CarouselsHeroSection imgs={imgs} />
    </div>
  );
}
