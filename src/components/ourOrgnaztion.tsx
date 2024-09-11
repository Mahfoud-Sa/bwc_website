import React, { useEffect, useState } from "react";
import imga from "../assets/img/1724086550980.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formattedDate from "../utilities/formattedDate";
import Slider from "react-slick";
import image4 from "../assets/img/1724086550980.jpg";
import { axiosInstance } from "src/lib/http";
import { OgResp } from "src/types/validation";
import { Link } from "react-router-dom";
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

export interface OrgProp {
  id: number;
  name: string;
  img: string;
  link: string;
}
export default function OurOrgnaztion() {
  const [data, setData] = useState<OrgProp[]>([]);
  const fetchIssueById = async () => {
    try {
      const response = await axiosInstance.get<OgResp>(
        `/api/website/Home/OrgUndBWC`
      );
      return [response.data];
    } catch (error) {
      console.error("Error fetching issue:", error);
      throw error;
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchIssueById();
      setData(data);
    };

    getData();
  }, []);

  console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, idx) => (
          <div className="whitespace-nowrap  ">
            <Link
              to={``}
              className=" inline-block  rounded-xl w-[25%] h-[200px] bg-black mx-10 overflow-hidden mt-2  shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] hover:bg-[#FFDAA0]/[.35] hover:cursor-pointer hover:scale-105"
            >
              <div className=" flex-row-reverse w-[100%] h-[100%] ">
                <div
                  key={item.id}
                  className="flex justify-center items-center w-[100%] h-full p-2 "
                >
                  <img
                    src={item.img}
                    className="object-contain w-[100%] h-[100%]"
                    alt={item.name}
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
