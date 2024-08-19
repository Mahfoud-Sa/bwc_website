import React, { useEffect, useState } from "react";
import imga from "../assets/img/1706714290731.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from "../assets/img/ourpartines/haramoutCh_brand.png";
import image2 from "../assets/img/ourpartines/hadramoutUniversty_brand.png";
import image3 from "../assets/img/ourpartines/mii_brand.png";
import image4 from "../assets/img/ourpartines/ozonoor_brand.png";
import { useTranslation } from "react-i18next";
interface publishesDataCard {
  img: string;
 
}

const Cards: publishesDataCard[] = [
  {
    img:  image1,
   
  },
  {
    img: image2,
   
  },
  {
    img: image3,
   
  },
  {
    img: image4,
   
  },
]
export default function SecondOurPartners() {
  const slides = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ];
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
  const duplicatedSlides = [...Cards, ...Cards];
  return (
    <>
      {widthScreen.winWidth <= 980 ? (
        <div className="relative w-full overflow-hidden">
          {/* Wrapping div for seamless looping */}
          <motion.div
            className="flex w-[250%]"
            animate={
              dir === "ltr"
                ? {
                    x: ["0%", "-100%"],
                    transition: {
                      ease: "linear",
                      duration: 30,
                      repeat: Infinity,
                    },
                  }
                : {
                    x: ["0%", "100%"],
                    transition: {
                      ease: "linear",
                      duration: 30,
                      repeat: Infinity,
                      animationDirection: "reverse",
                    },
                  }
            }
          >
            {/* Render duplicated slides */}
            {duplicatedSlides.map((slide, index) => (
              <Link to={"InProucation"}
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
              </Link>
            ))}
          </motion.div>
        </div>
      ) : (
        <div  className="relative w-full overflow-hidden">
          {/* Wrapping div for seamless looping */}
          <motion.div
            className="flex"
            animate={
              dir === "ltr"
                ? {
                    x: ["0%", "-100%"],
                    transition: {
                      ease: "linear",
                      duration: 30,
                      repeat: Infinity,
                    },
                  }
                : {
                    x: ["0%", "100%"],
                    transition: {
                      ease: "linear",
                      duration: 30,
                      repeat: Infinity,
                      animationDirection: "reverse",
                    },
                  }
            }
          >
            {/* Render duplicated slides */}
            {duplicatedSlides.map((slide, index) => (
              <Link to={"InProucation"}
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
              </Link>
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
}