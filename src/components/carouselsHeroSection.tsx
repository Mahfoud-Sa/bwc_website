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
                <div className="bg-[#979CA1]/[.70] min-h-[30vh]" >
                    <div className="" key={idx}>
                      <h2 className="text-end pt-3 text-2xl px-2">{item.title}</h2>
                      <p className="text-end mt-5  px-2">
                        {}
                        {dir === "ltr"
                          ? formattedDateEn(item.publish_date)
                          : formattedDate(item.publish_date)}
                      </p>
                      <div className="flex items-center justify-end px-2 mt-3">
                        <p className={dir === "ltr" ? "mr-2":"ml-2"}>{item?.writers?.name}</p>
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
        <div className="w-full h-[30vh] bg-black">
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

                  <div className="info-carousel">
                    <div className="title-info-carousel" key={idx}>
                      <h2>{item.title}</h2>
                      <p>
                        {}
                        {dir === "ltr"
                          ? formattedDateEn(item.publish_date)
                          : formattedDate(item.publish_date)}
                      </p>
                      <div className="inside-image">
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
