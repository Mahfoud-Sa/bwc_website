import React from "react";
import imga from "../assets/img/1706714290731.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formattedDate from "../utilities/formattedDate";
import Slider from "react-slick";
import image1 from "../assets/img/عالم الأعمال خلفية أبيض.png";
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
];
export default function LeariningAndTraning() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rtl: true,
  };
  return (
    <Slider {...settings}>
      {Cards.map((item, idx) => (
        <div
          className=" rounded-xl  h-[250px] overflow-hidden mt-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] "
          key={idx}
        >
          <div className=" flex-row-reverse w-[100%] h-[100%] flex">
            <div className="flex justify-center items-center w-[40%] h-full p-5">
              <img
                src={image1}
                className="object-contain w-[100%] h-[100%]"
                alt=""
              />
            </div>
            <div className=" w-[60%] flex justify-center items-center">
              <div className="text-end px-3 text-sm w-[95%]">
                <h1 className="text-xl mb-2">المعهد الدولي</h1>
                <div className="bg-black w-[100%] h-[1px] "></div>
                <p className="text-[12px] font-black mt-2 leading-6 text-[#525252]">
                التنمية قادمة: توخوا الحذر في تطلعاتكم التنمية قادمة: توخوا الحذر في تطلعاتكم...
                </p>
              </div>
            </div>
          </div>
          {/* <div className="px-6 mt-6 text-end">
            <p className="text-black text-xl font-extrabold">{item.title}</p>
          </div>          
          <div className="px-6 py-4 text-end">
            <p className="text-[#525252] text-sm">{item.subTitle}</p>
          </div>
          <div className="w-full h-60 px-3">
            <img
              className="object-cover w-full h-full rounded-xl"
              src={item.img}
              alt="Sunset in the mountains"
            />
          </div> */}
        </div>
      ))}
    </Slider>
  );
}
