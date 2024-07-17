import React from "react";
import imga from "../assets/img/1706714290731.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formattedDate from "../utilities/formattedDate";
import Slider from "react-slick";
import image4 from "../assets/img/1706714290731.jpg";
interface publishesDataCard {
  img: string;
}

const Cards: publishesDataCard[] = [
  {
    img: image4,
  },
  {
    img: image4,
  },
  {
    img: image4,
  },
  {
    img: image4,
  },
  {
    img: image4,
  },
];
export default function OurOrgnaztion() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Cards.map((item, idx) => (
          <div className="whitespace-nowrap ">
            <div className=" inline-block rounded-xl w-[65%] h-[200px] mx-10 overflow-hidden mt-2 bg-white shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)]">
              <div className=" flex-row-reverse w-[100%] h-[100%] ">
                <div className="flex justify-center items-center w-[100%] h-full p-2 ">
                  <img
                    src={item.img}
                    className="object-contain w-[100%] h-[100%]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
