import React from "react";
import imga from "../assets/img/1706714290731.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formattedDate from "../utilities/formattedDate";
import Slider from "react-slick";
import PublishesImage from "../assets/img/PublishesImage.jpg";
import PublishesImage1 from "../assets/img/publish_1.jpg";
import PublishesImage2 from "../assets/img/publish_2.jpg";
import PublishesImage3 from "../assets/img/publish_3.jpg";
import PublishesImage4 from "../assets/img/publish_4.jpg";
import writerImagePlaceholder from "../assets/img/IMG_9024.jpg";
import { Link } from "react-router-dom";
interface publishesDataCard {
  img: string;
  type: string;
  title: string;
  date: Date;
  link: string;
  writer?:
    | {
        img: string;
        name: string;
      }
    | undefined;
}

const Cards: publishesDataCard[] = [
  {
    img: PublishesImage1,
    type: "الاخبار",
    link: "https://www.facebook.com/share/p/VzeHNxT5exEnUjuD/ ",
    title:
      "مدير عام شركة عالم الأعمال للاستثمار والدراسات ورئيس مؤسسة حاضنة بناء لريادة الأعمال يزور الغرفة التجارية والصناعية في مدينة عدن",
    date: new Date("2024-11-9"),
    writer: { name: "إعلام الشركة والمؤسسة", img: writerImagePlaceholder },
  },

  {
    img: PublishesImage2,
    type: "الاخبار",
    link: "https://www.facebook.com/share/p/EMDAez298MYM8kR4/",
    title:
      "مدير الصندوق الاجتماعي للتنمية -- حضرموت يزور شركة عالم الأعمال للاستثمار والدراسات وأكاديمية بريميوم للقيادة والإدارة",
    date: new Date("2024-12-5"),
    writer: { name: "إعلام الشركة والمؤسسة", img: writerImagePlaceholder },
  },

  {
    img: PublishesImage3,
    type: "منشور",
    link: "https://www.facebook.com/share/p/eookDQbmwzhNWGY7/",
    title:
      "زيارة مؤسسة صنائع المعروف الإنسانية إلى شركة عالم الأعمال للاستثمار والدراسات وأكاديمية بريميوم للقيادة والإدارة ومؤسسة حاضنة بناء لريادة الأعمال.",
    date: new Date("2024-2-20"),
    writer: { name: "إعلام الشركة والمؤسسة", img: writerImagePlaceholder },
  },

  {
    img: PublishesImage4,
    type: "منشور",
    link: "https://www.facebook.com/share/p/7YwHJFty8vKTYuq7/",
    title:
      "توقيع مذكرة تعاون مشترك بين شركة عالم الأعمال للاستثمار والدراسات المحدودة ومنتدى طلاب المشقاص ",
    date: new Date("2024-2-22"),
    writer: { name: "إعلام الشركة والمؤسسة", img: writerImagePlaceholder },
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
          <Link
            target="_blank"
            to={item.link}
            className="max-w-sm rounded h-[500px]  overflow-hidden shadow-lg cursor-pointer hover:bg-[#FFDAA0]/[.35] hover:scale-105 hover:duration-300 "
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
              <p dir="rtl" className="publishesTitle">
                {item.title}
              </p>
              <div className="font-bold text-sm mb-2 mt-2">
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
          </Link>
        ))}
      </Slider>
    </div>
  );
}
