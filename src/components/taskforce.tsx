import React from "react";
import imga from "../assets/img/1706714290731.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formattedDate from "../utilities/formattedDate";
import Slider from "react-slick";
import PublishesImage from "../assets/img/PublishesImage.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
interface publishesDataCard {
  img: string;
  writer?:
    | {
        name: string;
        major: string;
        role: string;
        nameEng: string;
        majorEng: string;
        roleEng: string;
      }
    | undefined;
}

const Cards: publishesDataCard[] = [
  {
    img: PublishesImage,
    writer: {
      name: "حمود احمد سيف العطاس",
      major: "بكلاريوس علوم الكمبيوتر",
      role: "مهندس برمجيات",
      nameEng: "Hamood Abudrqeb Ahmed Saif",
      majorEng: "Computer Information System",
      roleEng: "Front-End",
    },
  },

  {
    img: PublishesImage,
    writer: {
      name: "حمود احمد سيف العطاس",
      major: "بكلاريوس علوم الكمبيوتر",
      role: "مهندس برمجيات",
      nameEng: "Hamood Abudrqeb Ahmed Saif",
      majorEng: "Computer Information System",
      roleEng: "Front-End",
    },
  },

  {
    img: PublishesImage,
    writer: {
      name: "حمود احمد سيف العطاس",
      major: "بكلاريوس علوم الكمبيوتر",
      role: "مهندس برمجيات",
      nameEng: "Hamood Abudrqeb Ahmed Saif",
      majorEng: "Computer Information System",
      roleEng: "Front-End",
    },
  },

  {
    img: PublishesImage,
    writer: {
      name: "حمود احمد سيف العطاس",
      major: "بكلاريوس علوم الكمبيوتر",
      role: "مهندس برمجيات",
      nameEng: "Hamood Abudrqeb Ahmed Saif",
      majorEng: "Computer Information System",
      roleEng: "Front-End",
    },
  },
];
export default function TaskForce() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {Cards.map((item, idx) => (
          <Link
            to={"/InProucation"}
            className="max-w-sm rounded h-[500px] ml-[5rem] overflow-hidden shadow-lg cursor-pointer hover:bg-[#FFDAA0]/[.35]  relative"
            key={idx}
          >
            <img
              className="object-cover w-full h-full "
              src={item.img}
              alt="Sunset in the mountains"
            />
            {dir === "ltr" ? (
              <div className="w-full h-[15vh] bg-[rgb(49,51,53)]/[.55] absolute rounded-t-md bottom-0 z-10 text-white hover:h-full hover:duration-500 hover:ease-in-out text-center hover:text-start hover:px-3 hover:pt-44">
                <h3 className="text-2xl">{item.writer?.nameEng}</h3>
                <h5 className="leading-[70px]">{item.writer?.majorEng}</h5>
                <p>{item.writer?.roleEng}</p>
              </div>
            ) : (
              <div className="w-full h-[15vh] bg-[rgb(49,51,53)]/[.55] absolute rounded-t-md bottom-0 z-10 text-white hover:h-full hover:duration-500 hover:ease-in-out text-center hover:text-end hover:px-3 hover:pt-44">
                <h3 className="text-2xl">{item.writer?.name}</h3>
                <h5 className="leading-[70px]">{item.writer?.major}</h5>
                <p>{item.writer?.role}</p>
              </div>
            )}
          </Link>
        ))}
      </Slider>
    </div>
  );
}
