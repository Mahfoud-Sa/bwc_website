import React from "react";
import imga from "../assets/img/1706714290731.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formattedDate from "../utilities/formattedDate";
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
export default function OurPartners() {
  return (
    <div className="whitespace-nowrap ">
      {Cards.map((item, idx) => (
        <div className=" inline-block rounded-xl w-[15%] h-[150px] mx-10 overflow-hidden mt-2 bg-white">
          <div className=" flex-row-reverse w-[100%] h-[100%] ">
            <div className="flex justify-center items-center w-[100%] h-full p-2">
              <img
                src={item.img}
                className="object-contain w-[100%] h-[100%]"
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
