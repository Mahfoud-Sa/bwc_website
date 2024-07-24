import React from "react";
import imga from "../assets/img/1706714290731.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formattedDate from "../utilities/formattedDate";
import Slider from "react-slick";
import image1 from "../assets/img/1706714290731.jpg";
import image2 from "../assets/img/1706714564880.jpg";
import image3 from "../assets/img/IMG_9024.jpg";
import image4 from "../assets/img/logo.png";
interface publishesDataCard {
  img: string;
  title: string;
  subTitle: string;
}

const Cards: publishesDataCard[] = [
  {
    img: image1,
    title:  "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    subTitle:
    "هذا النص مؤقت مؤقت لحين اكمال المؤقت سيتم استبداله عند الانتهاء من تطوير الموقع",
  },
  {
    img: image1,
    title:  "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    subTitle:
    "هذا النص مؤقت مؤقت لحين اكمال المؤقت سيتم استبداله عند الانتهاء من تطوير الموقع",
  },
  {
    img: image1,
    title:  "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    subTitle:
    "هذا النص مؤقت مؤقت لحين اكمال المؤقت سيتم استبداله عند الانتهاء من تطوير الموقع",
  },
  {
    img: image1,
    title:  "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    subTitle:
    "هذا النص مؤقت مؤقت لحين اكمال المؤقت سيتم استبداله عند الانتهاء من تطوير الموقع",
  },
  {
    img: image1,
    title:  "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    subTitle:
    "هذا النص مؤقت مؤقت لحين اكمال المؤقت سيتم استبداله عند الانتهاء من تطوير الموقع",
  },
  {
    img: image1,
    title:  "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    subTitle:
    "هذا النص مؤقت مؤقت لحين اكمال المؤقت سيتم استبداله عند الانتهاء من تطوير الموقع",
  },
  {
    img: image1,
    title:  "هذا النص موقت لحين اكتمال الموقع وبدايه نشر الاخبار على الموقع",
    subTitle:
    "هذا النص مؤقت مؤقت لحين اكمال المؤقت سيتم استبداله عند الانتهاء من تطوير الموقع",
  },
 
];
export default function LastProject() {
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
          className="max-w-sm rounded-xl my-5 h-[430px]  shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] hover:scale-105 hover:bg-[#FFDAA0]/[.35] hover:cursor-pointer  "
          key={idx}
        >
          <div className="px-6 mt-6 text-end">
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
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
}
