import React, { useEffect, useState } from "react";
import imga from "../assets/img/1706714290731.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formattedDate from "../utilities/formattedDate";
import { motion } from "framer-motion";
import image1 from "../assets/img/عالم الأعمال خلفية أبيض.png";
import { useTranslation } from "react-i18next";
interface publishesDataCard {
  img: string;
  title: string;
  subTitle: string;
}

const Cards: publishesDataCard[] = [
  {
    img: image1,
    title: "التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
    subTitle:
      "بينما يتطلع العالم نحو التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
  },
  {
    img: image1,
    title: "التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
    subTitle:
      "بينما يتطلع العالم نحو التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
  },
  {
    img: image1,
    title: "التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
    subTitle:
      "بينما يتطلع العالم نحو التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
  },
  {
    img: image1,
    title: "التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
    subTitle:
      "بينما يتطلع العالم نحو التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
  },
  {
    img: image1,
    title: "التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
    subTitle:
      "بينما يتطلع العالم نحو التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
  },
  {
    img: image1,
    title: "التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
    subTitle:
      "بينما يتطلع العالم نحو التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
  },
  {
    img: image1,
    title: "التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
    subTitle:
      "بينما يتطلع العالم نحو التطورات في البحر الأحمر وتأثير هجمات جماعة الحوثيين",
  },
];
export default function OurPartners() {
  const slides = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ];

  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const duplicatedSlides = [...Cards, ...Cards];
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
    <>
      {widthScreen.winWidth <= 980 ? (
        <div className="relative w-full overflow-hidden">
          {/* Wrapping div for seamless looping */}
          <motion.div
            className="flex w-[250%]"
            animate={{
              x: ["-100%", "0"],
              transition: {
                ease: "linear",
                duration: 10,
                repeat: Infinity,
              },
            }}
          >
            {/* Render duplicated slides */}
            {duplicatedSlides.map((slide, index) => (
              <div
                // key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / slides.length}%` }}
              >
                <div className=" flex rounded-xl sm:w-[80%] h-[150px] mx-10 overflow-hidden mt-2 bg-white">
                  <div className=" flex-row-reverse w-[100%] h-[100%]">
                    <div className="flex justify-center items-center w-[100%] h-full p-2">
                      <img
                        src={slide.img}
                        className="object-contain w-[100%] h-[100%]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden">
          {/* Wrapping div for seamless looping */}
          <motion.div
            className="flex "
            animate={dir === "ltr" ?{
              x: ["-100%", "0"],
              transition: {
                ease: "linear",
                duration: 10,
                repeat: Infinity,
              },
            } :{
              x: ["100%", "0%"],
              transition: {
                ease: "linear",
                duration: 10,
                repeat: Infinity,
                animationDirection: "reverse",
              },
            }}
          >
            {/* Render duplicated slides */}
            {duplicatedSlides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / slides.length}%` }}
              >
                <div className=" inline-block rounded-xl lg:w-[80%] sm:w-[80%] h-[150px] mx-10 overflow-hidden mt-2 bg-white">
                  <div className=" flex-row-reverse w-[100%] h-[100%] ">
                    <div className="flex justify-center items-center w-[100%] h-full p-2">
                      <img
                        src={slide.img}
                        className="object-contain w-[100%] h-[100%]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
}
