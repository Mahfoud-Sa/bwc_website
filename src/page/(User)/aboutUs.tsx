import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import AboutUsHeader from "../../components/(user)/aboutUs-header";
import OutMission from "../../components/(user)/out-mission";
export default function AboutUs() {
  return (
    <div>
      <div className="w-full lg:h-[8.45vh] sm:h-[11vh]">
        <Navbar />
      </div>
      <div className="  lg:h-[80vh] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-4 relative sm:h-[140vh] lg:mt-8 sm:mt-0">
        <AboutUsHeader />
      </div>
      <div className="lg:w-[98%] lg:min-h-[80vh] m-auto mb-16">
        <OutMission/>
      </div>
    </div>
  );
}
