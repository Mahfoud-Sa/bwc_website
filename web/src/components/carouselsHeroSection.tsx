import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import ArrowRight from "../assets/icons/arrow-right";
import ArrowLeft from "../assets/icons/arrow-left";

interface publish {
  imgs: string;
  title: string;
  publish_date: Date;
  writers: {
    name: string;
    img: string;
  };
}

interface CarouselProps {
  publishes: publish[];
}

export default function CarouselsHeroSection({ publishes }: CarouselProps) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === publishes.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? publishes.length - 1 : slide - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000);
  }, [slide]);
  const d = new Date("2022-03-25");
  return (
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
                <div key={idx}>
                  <h2>{item.title}</h2>
                  <p>{item.publish_date.toLocaleDateString()}</p>
                  <div className="inside-image">
                    <p>{item.writers.name}</p>
                    <img src={item.writers.img} alt="" />
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
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
}
