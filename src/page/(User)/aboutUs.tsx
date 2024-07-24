import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import AboutUsHeader from "../../components/(user)/aboutUs-header";
import OutMission from "../../components/(user)/out-mission";
import OurPortfolio from "../../components/(user)/ourportfolio";
export default function AboutUs() {
  return (
    <div>
      <div className="w-full lg:h-[8vh] md:h-[8vh]  sm:h-[11vh]">
        <Navbar />
      </div>
      <div className="w-full lg:h-[80vh] md:h-[150vh] sm:h-[150vh] md:mt-11 sm:mt-8">
        <AboutUsHeader />
      </div>
      <div className="lg:w-[98%] lg:min-h-[80vh] md:min-h-[80vh] md:pb-4 m-auto mb-16  lg:mt-16 sm:mt-40">
        <OutMission />
      </div>
      
        <OurPortfolio />
      
    </div>
  );
}
