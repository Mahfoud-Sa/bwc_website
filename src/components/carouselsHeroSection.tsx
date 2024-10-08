import React, { useEffect, useState } from "react";
import ArrowRight from "../assets/icons/arrow-right";
import ArrowLeft from "../assets/icons/arrow-left";
import formattedDate from "../utilities/formattedDate";
import formattedDateEn from "../utilities/formattedDateEn";
import { useTranslation } from "react-i18next";

interface publish {
  imgs: string;
  title: string;
  publish_date: Date;
  writers?:
    | {
        name?: string | undefined;
        img?: string | undefined;
      }
    | undefined;
}

interface CarouselProps {
  publishes: publish[];
}

export default function CarouselsHeroSection({ publishes }: CarouselProps) {
  const [slide, setSlide] = useState(0);
  const { t, i18n } = useTranslation();

  const nextSlide = () => {
    setSlide(slide === publishes.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? publishes.length - 1 : slide - 1);
  };

  const dir = i18n.dir();
  //
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
    setTimeout(() => {
      nextSlide();
    }, 5000);

    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [slide, widthScreen]);
  const d = new Date("2022-03-25");
  return (
    <>
      {widthScreen.winWidth <= 980 ? (
        <>
        <div className="carousel_parant">
          <div className="carousel">
            <div className="arrow arrow-left" onClick={prevSlide}>
              <ArrowLeft className="cursor-pointer" />
            </div>
            {publishes.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={slide === idx ? "slide" : "slide slide-hidden"}
                >
                  <img
                    src={item.imgs}
                    key={idx}
                    className={slide === idx ? "slide" : "slide slide-hidden"}
                  />
                <div className="bg-[#979CA1]/[.70] md:min-h-[20vh] sm:min-h-[30vh]" >
                    <div className="" key={idx}>
                      <h2 className={dir === "ltr" ? "md:text-end md:pt-3 md:text-3xl md:px-2 sm:text-start sm:pt-3 sm:text-xl sm:px-2" : "md:text-end md:pt-3 md:text-3xl md:px-2 sm:text-start sm:pt-3 sm:text-xl sm:px-2"}>{item.title}</h2>
                      <p className={dir === "ltr" ? "md:text-end md:text-xl md:mt-5  md:px-2 sm:text-start sm:mt-3  sm:px-2" : "md:text-end md:text-xl md:mt-5  md:px-2 sm:text-start sm:mt-3  sm:px-2"}>
                        {}
                        {dir === "ltr"
                          ? formattedDateEn(item.publish_date)
                          : formattedDate(item.publish_date)}
                      </p>
                      <div className={dir === "ltr" ? "flex items-center justify-end flex-row-reverse px-2 mt-3" : "flex items-center flex-row-reverse justify-end px-2 mt-3"}>
                        <p className={dir === "ltr" ? "sm:ml-2 md:text-2xl":"sm:mr-2 md:text-2xl"}>{item?.writers?.name}</p>
                        <img
                          src={item?.writers?.img}
                          className={
                            item?.writers?.img
                              ? "w-[50px] h-[50px] bg-cover rounded-full outline outline-offset-0.5 outline-[#CCA972]"
                              : ""
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
              );
            })}

            <div className="arrow arrow-right">
              <ArrowRight color="white" onClick={nextSlide} />
            </div>

            <span className="indicators">
              {publishes.map((_, idx) => {
                return (
                  <button
                    key={idx}
                    className={
                      slide === idx
                        ? "indicator"
                        : "indicator indicator-inactive"
                    }
                    onClick={() => setSlide(idx)}
                  ></button>
                );
              })}
            </span>
          </div>

        </div>
        <div className="w-full md:h-[20vh] sm:h-[30vh] bg-black">
        {/* {publishes.map((item, idx) => {
          return(
            
          )
        })} */}
        </div>
        </>
      ) : (
        <div className="carousel_parant">
          <div className="carousel">
            <div className="arrow arrow-left" onClick={prevSlide}>
              <ArrowLeft className="cursor-pointer" />
            </div>
            {publishes.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={slide === idx ? "slide" : "slide slide-hidden"}
                >
                  <img
                    src={item.imgs}
                    key={idx}
                    className={slide === idx ? "slide" : "slide slide-hidden"}
                  />

                  <div className={dir === "ltr" ? "info-carousel-end": "info-carousel"}>
                    <div className={dir === "ltr" ? "title-info-carousel-end" : "title-info-carousel"} key={idx}>
                      <h2 className="publishesHero">{item.title}</h2>
                      <p className="mt-4">
                        {}
                        {dir === "ltr"
                          ? formattedDateEn(item.publish_date)
                          : formattedDate(item.publish_date)}
                      </p>
                      <div className={dir === "ltr" ? "inside-image-en" : "inside-image"}>
                        <p>{item?.writers?.name}</p>
                        <img
                          src={item?.writers?.img}
                          className={
                            item?.writers?.img
                              ? "w-[50px] h-[50px] bg-cover rounded-full outline outline-offset-0.5 outline-[#CCA972]"
                              : ""
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="arrow arrow-right">
              <ArrowRight color="white" onClick={nextSlide} />
            </div>

            <span className="indicators">
              {publishes.map((_, idx) => {
                return (
                  <button
                    key={idx}
                    className={
                      slide === idx
                        ? "indicator"
                        : "indicator indicator-inactive"
                    }
                    onClick={() => setSlide(idx)}
                  ></button>
                );
              })}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
