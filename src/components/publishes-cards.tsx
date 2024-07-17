import React from "react";
import imga from "../assets/img/1706714290731.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formattedDate from "../utilities/formattedDate";
import Slider from "react-slick";
import PublishesImage from "../assets/img/PublishesImage.jpg";
import writerImagePlaceholder from "../assets/img/IMG_9024.jpg";
import image1 from "../assets/img/1706714290731.jpg";
import image2 from "../assets/img/1706714564880.jpg";
import image3 from "../assets/img/IMG_9024.jpg";
import image4 from "../assets/img/logo.png";
interface publishesDataCard {
  img: string;
  type: string;
  title: string;
  date: Date;
  writer?:
    | {
        img: string;
        name: string;
      }
    | undefined;
}

const Cards: publishesDataCard[] = [
  {
    img: PublishesImage,
    type: "منشور",
    title:
    "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    date: new Date(),
    writer: { name: "حمود احمد سيف العطاس", img: writerImagePlaceholder },
  },
 
  {
    img: PublishesImage,
    type: "منشور",
    title:
    "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    date: new Date(),
    writer: { name: "حمود احمد سيف العطاس", img: writerImagePlaceholder },
  },
 
  {
    img: PublishesImage,
    type: "منشور",
    title:
    "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    date: new Date(),
    writer: { name: "حمود احمد سيف العطاس", img: writerImagePlaceholder },
  },
 
  {
    img: PublishesImage,
    type: "منشور",
    title:
    "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    date: new Date(),
    writer: { name: "حمود احمد سيف العطاس", img: writerImagePlaceholder },
  },
 
];
export default function PublishesCards() {
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
          <div
            className="max-w-sm rounded h-[500px]  overflow-hidden shadow-lg "
            key={idx}
          >
            <div className="md:w-full md:h-60 sm:w-full sm:h-52">
              <img
                className="object-cover w-full h-full"
                src={item.img}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="px-6 pt-4 pb-2 text-end">
              <span
                className={
                  item.type === "منشور"
                    ? "inline-block bg-[#FFDAA0]/[.35] rounded-[5px] px-5  text-sm font-semibold text-[#CEA461] mr-2 mb-2"
                    : item.type === "الاخبار"
                    ? "inline-block bg-[#C5FFBC]/[.35] rounded-[5px] px-5  text-sm font-semibold text-[#69DB57] mr-2 mb-2"
                    : item.type === "تحليلات"
                    ? "inline-block bg-[#DBDBDB]/[.35] rounded-[5px] px-5  text-sm font-semibold text-[#979797] mr-2 mb-2"
                    : ""
                }
              >
                {item.type}
              </span>
            </div>
            <div className="px-6 py-4 text-end">
              <p className="text-gray-700 text-base">{item.title}</p>
              <div className="font-bold text-sm mb-2">
                {formattedDate(item.date)}
              </div>
            </div>
            <div
              className={item?.writer ? "w-11/12 m-auto h-[1px] bg-black" : ""}
            ></div>
            <div className="flex justify-end px-4 py-4 w-full h-full ">
              <p className="mr-3">{item?.writer?.name}</p>
              <img
                src={item?.writer?.img}
                className={
                  item?.writer?.img
                    ? "w-[40px] h-[40px] bg-cover rounded-full outline outline-offset-0.5 outline-[#CCA972]"
                    : ""
                }
                alt=""
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
