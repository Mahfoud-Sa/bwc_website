import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import AboutUsHeader from "../../components/(user)/aboutUs-header";
import OutMission from "../../components/(user)/out-mission";
import OurPortfolio from "../../components/(user)/ourportfolio";
import VideoCourse from "../../components/(user)/videocourse";
import { useTranslation } from "react-i18next";
import TaskForce from "../../components/taskforce";
import Footer from "../../components/footer";

export default function AboutUs() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const [widthScreen, setWidthScreen] = useState({
    winWidth: window.innerWidth,
    winHight: window.innerHeight,
  });

  const detectSize = () => {
    setWidthScreen({
      winWidth: window.innerWidth,
      winHight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [widthScreen]);
  return (
    <div>
      <div className="w-full lg:h-[8vh] md:h-[8vh]  sm:h-[11vh]">
        <Navbar />
      </div>
      <div className="w-full lg:h-[80vh] md:h-[150vh] sm:h-[150vh] md:mt-11 sm:mt-8">
        <AboutUsHeader />
      </div>
      <div className="lg:w-[98%] lg:min-h-[80vh] md:min-h-[80vh] md:pb-4 m-auto mb-16  lg:mt-16 sm:mt-40 ">
        <OutMission />
      </div>

      <OurPortfolio />

      <VideoCourse
        items={[
          "https://www.youtube.com/watch?v=kdeL2LwWDC4",
          "https://www.youtube.com/watch?v=AuLg79Th3xE",
          "https://www.youtube.com/watch?v=AuLg79Th3xE",
          "https://www.youtube.com/watch?v=AuLg79Th3xE",
          "https://www.youtube.com/watch?v=AuLg79Th3xE",
          "https://www.youtube.com/watch?v=AuLg79Th3xE",
          "https://www.youtube.com/watch?v=AuLg79Th3xE",
          "https://www.youtube.com/watch?v=AuLg79Th3xE",
          "https://www.youtube.com/watch?v=AuLg79Th3xE",
        ]}
        itemsToShow={3}
      />

      {widthScreen.winWidth <= 980 ? (
        <>
          {dir === "ltr" ? (
            <div className="w-full h-36 flex justify-end items-center ">
              <div className="flex p-5">
                <h1 className="text-3xl">{t("team-force")}</h1>
                <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
              </div>
            </div>
          ) : (
            <div className="w-full h-36 flex justify-start items-center ">
              <div className="flex p-5">
                <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                <h1 className="text-3xl">{t("team-force")}</h1>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {dir === "ltr" ? (
            <div className="w-full h-36 flex justify-end items-center ">
              <div className="flex p-5">
                <h1 className="text-3xl">{t("team-force")}</h1>
                <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
              </div>
            </div>
          ) : (
            <div className="w-full h-36 flex justify-start items-center ">
              <div className="flex p-5">
                <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                <h1 className="text-3xl">{t("team-force")}</h1>
              </div>
            </div>
          )}
        </>
      )}

      <div className="w-full lg:h-[80vh] sm:h-[100vh] p-2 overflow-hidden relative ">
        <TaskForce />
      </div>
      <footer className="min-h-[65vh] p-2 overflow-hidden relative bg-black mt-10">
        <Footer />
      </footer>
    </div>
  );
}
