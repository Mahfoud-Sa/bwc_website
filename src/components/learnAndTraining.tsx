import React from "react";
import imga from "../assets/img/1706714290731.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formattedDate from "../utilities/formattedDate";
import Slider from "react-slick";
import image1 from "../assets/img/عالم الأعمال خلفية أبيض.png";
import image2 from "../assets/img/treaningImagePlaceholder.jpg";
interface publishesDataCard {
  img: string;
  title: string;
  subTitle: string;
}

const Cards: publishesDataCard[] = [
  {
    img: image2,
    title:"عنوان المنشاء التعليمة",
    subTitle:
      "وصف بسيط عن هذه المنشاه التعليمية",
  },
  {
    img: image2,
    title:"عنوان المنشاء التعليمة",
    subTitle:
      "وصف بسيط عن هذه المنشاه التعليمية",
  },
  {
    img: image2,
    title:"عنوان المنشاء التعليمة",
    subTitle:
      "وصف بسيط عن هذه المنشاه التعليمية",
  },
  {
    img: image2,
    title:"عنوان المنشاء التعليمة",
    subTitle:
      "وصف بسيط عن هذه المنشاه التعليمية",
  },
  
];
export default function LeariningAndTraning() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        <div
          className=" rounded-xl  h-[250px] overflow-hidden mt-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] "
          key={idx}
        >
          <div className=" flex-row-reverse w-[100%] h-[100%] flex">
            <div className="flex justify-center items-center w-[40%] h-full p-5">
              <img
                src={image2}
                className="object-contain w-[100%] h-[100%]"
                alt=""
              />
            </div>
            <div className=" w-[60%] flex justify-center items-center">
              <div className="text-end px-3 text-sm w-[95%]">
                <h1 className="text-xl mb-2">{item.title}</h1>
                <div className="bg-black w-[100%] h-[1px] "></div>
                <p className="text-[12px] font-black mt-2 leading-6 text-[#525252]">
               { item.subTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
}
