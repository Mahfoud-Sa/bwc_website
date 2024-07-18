import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { useTranslation } from "react-i18next";
import Image1 from "../../assets/img/اعلان خدمة الفايبر.jpg";
import partnership from "../../assets/img/partnership 1.png";
import golas from "../../assets/img/golas.png";
import chartBullish from "../../assets/img/chart-bullish.png";
export default function AboutUsHeader() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const [widthScreen, setWidthScreen] = useState({
    winWidth: window.innerWidth,
    winHight: window.innerHeight,
  });

  const detectSize = () => {
    setWidthScreen({
      winWidth: window.innerWidth,
      winHight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [widthScreen]);
  return (
    <>
      {widthScreen.winWidth <= 980 ? (
        <>
          {dir === "ltr" ? (
            <div className="flex items-start justify-start pt-10">
              <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
              <h1 className="text-3xl font-extrabold">{t("homePage2")}</h1>
            </div>
          ) : (
            <div className="flex items-start justify-start pt-10">
              <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
              <h1 className="text-3xl font-extrabold">{t("homePage2")}</h1>
            </div>
          )}
          <div
            className={
              dir === "ltr"
                ? "absolute sm:w-[30%]  sm:h-[30%] bg-[#E4C189] -z-[10] sm:top-[140px] lg:right-[10px] sm:left-[10px]"
                : "absolute sm:w-[30%]  sm:h-[30%] bg-[#E4C189] -z-[10] sm:top-[140px] lg:right-[10px] sm:right-[10px]"
            }
          ></div>
          <div className=" px-4 relative h-[70vh] flex items-center">
            <img
              src={Image1}
              className={
                dir === "ltr"
                  ? " object-cover  z-[1] w-[95%] h-[70%]"
                  : " object-cover  z-[1] w-[95%] h-[70%]"
              }
              alt=""
            />
            <div
              className={
                dir === "ltr"
                  ? "absolute flex justify-center lg:rounded-md items-center lg:w-[45%] sm:w-[60%]  sm:h-[45%] bg-[#fff] z-[10]  sm:-bottom-1  sm:-right-2"
                  : "absolute flex justify-center lg:rounded-md items-center lg:w-[45%] sm:w-[60%]  sm:h-[45%] bg-[#fff] z-[10]  sm:-bottom-1  sm:-left-2"
              }
            >
              <img src={Image1} className=" w-[95%] h-[90%]" alt="" />
            </div>
          </div>

          <div className=" px-4">
            <div className="text-end">
              <p className="text-justify text-[#5B5B5B] leading-7">
                شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة.أسسها الدكتور
                ربيع بن علي العوبثاني في مدينة المكلا و حضرموت في مارس 2021م
                تحمل سجل تجاري رقم(21/2831).
              </p>
              <p className="text-justify mt-6 text-[#5B5B5B] leading-8">
                تعمل على إدارة وتشغيل المشاريع الاستثمارية وتقديم الدراسات
                الاقتصادية والاستشارات الادارية والمالية والتسويقية وحلول
                تكنولوجيا المعلومات وتقدم خدماتها من خلال مجموعة من الخبراء
                والاستشاريين المتخصصين الذين يعملون في الشركة ومجموعة اخرى من
                الخبراء والاستشاريين المتعاقدين.
              </p>
            </div>

            <div className="grid grid-cols-3 mt-6">
              <div className="w-[95%] h-[100px] flex justify-center items-center">
                <div
                  className={
                    dir === "ltr"
                      ? "p-1 w-[32%] h-[50%] rounded-full bg-gradient-to-r from-[#997740] to-[#CCA972] flex justify-center items-center mr-4"
                      : "p-1 w-[32%] h-[50%] rounded-full bg-gradient-to-r from-[#997740] to-[#CCA972] flex justify-center items-center ml-4"
                  }
                >
                  <img
                    className="w-[100%] h-[100%] "
                    src={partnership}
                    alt=""
                  />
                </div>
                <p className="text-md">{t("our_mission")}</p>
              </div>
              <div className="w-[95%] h-[100px] flex justify-center items-center">
                <div
                  className={
                    dir === "ltr"
                      ? "p-1 w-[32%] h-[50%] rounded-full bg-gradient-to-r from-[#997740] to-[#CCA972] flex justify-center items-center mr-4"
                      : "p-1 w-[32%] h-[50%] rounded-full bg-gradient-to-r from-[#997740] to-[#CCA972] flex justify-center items-center ml-4"
                  }
                >
                  <img className="w-[100%] h-[100%] " src={golas} alt="" />
                </div>
                <p className="text-md ">{t("our_goals")}</p>
              </div>
              <div className="w-[97%] h-[100px] flex justify-center items-center">
                <div
                  className={
                    dir === "ltr"
                      ? "p-[0.35rem] w-[45%] h-[50%] rounded-full bg-gradient-to-r from-[#997740] to-[#CCA972] flex justify-center items-center mr-4"
                      : "p-[0.35rem] w-[45%] h-[50%] rounded-full bg-gradient-to-r from-[#997740] to-[#CCA972] flex justify-center items-center ml-4"
                  }
                >
                  <img
                    className="w-[100%] h-[100%] "
                    src={chartBullish}
                    alt=""
                  />
                </div>
                <p className="text-md w-full">{t("our_message")}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {dir === "ltr" ? (
            <>
              <div className="absolute lg:w-[15%] lg:h-[75%] sm:w-[30%]  sm:h-[50%] bg-[#E4C189] -z-[10] lg:top-[-20px] sm:top-[100px] lg:left-[10px] sm:left-[0px]"></div>
              <div className=" px-4 relative">
                <img
                  src={Image1}
                  className=" object-cover  z-[1] w-[70%] h-[80%]"
                  alt=""
                />
                <div className="absolute flex justify-center lg:rounded-md items-center lg:w-[45%] lg:h-[45%] sm:w-[30%]  sm:h-[50%] bg-[#fff] z-[10] lg:translate-y-[12rem] sm:top-[100px] lg:left-96 sm:left-[0px]">
                  <img src={Image1} className=" w-[95%] h-[90%]" alt="" />
                </div>
              </div>
              <div className=" px-4">
                <div className="flex items-start justify-start py-16">
                  <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                  <h1 className="text-3xl font-extrabold">{t("homePage2")}</h1>
                </div>
                <div>
                  <p className="text-start  text-[#5B5B5B] leading-7">
                    شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة.أسسها
                    الدكتور ربيع بن علي العوبثاني في مدينة المكلا و حضرموت في
                    مارس 2021م تحمل سجل تجاري رقم(21/2831).
                  </p>
                  <p className="text-start  mt-6 text-[#5B5B5B] leading-8">
                    تعمل على إدارة وتشغيل المشاريع الاستثمارية وتقديم الدراسات
                    الاقتصادية والاستشارات الادارية والمالية والتسويقية وحلول
                    تكنولوجيا المعلومات وتقدم خدماتها من خلال مجموعة من الخبراء
                    والاستشاريين المتخصصين الذين يعملون في الشركة ومجموعة اخرى
                    من الخبراء والاستشاريين المتعاقدين.
                  </p>
                </div>
                <div className="grid grid-cols-3 mt-6">
                  <div className="w-[95%] h-[100px] flex justify-center items-center">
                    <span className=" w-[35%] h-[100%] rounded-full bg-gradient-to-r from-[#997740] to-[#CCA972] flex justify-center items-center mr-4">
                      <img src={partnership} alt="" />
                    </span>
                    <p className="text-3xl">{t("our_mission")}</p>
                  </div>
                  <div className="w-[95%] h-[100px] flex justify-center items-center">
                    <span className=" w-[35%] h-[100%] rounded-full bg-gradient-to-r from-[#997740] to-[#CCA972] flex justify-center items-center mr-4">
                      <img src={golas} alt="" />
                    </span>
                    <p className="text-3xl">{t("our_goals")}</p>
                  </div>
                  <div className="w-[95%] h-[100px] flex justify-center items-center">
                    <span className=" w-[35%] h-[100%] rounded-full bg-gradient-to-r from-[#997740] to-[#CCA972] flex justify-center items-center mr-4">
                      <img src={chartBullish} alt="" />
                    </span>
                    <p className="text-3xl">{t("our_message")}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="absolute lg:w-[15%] lg:h-[75%] sm:w-[30%]  sm:h-[50%] bg-[#E4C189] -z-[10] lg:top-[-20px] sm:top-[100px] lg:right-[10px] sm:left-[0px]"></div>
              <div className=" px-4 relative">
                <img
                  src={Image1}
                  className=" object-cover  z-[1] w-[70%] h-[80%]"
                  alt=""
                />
                <div className="absolute flex justify-center lg:rounded-md items-center lg:w-[45%] lg:h-[45%] sm:w-[30%]  sm:h-[50%] bg-[#fff] z-[10] lg:translate-y-[12rem] sm:top-[100px] lg:left-16 sm:left-[0px]">
                  <img src={Image1} className=" w-[95%] h-[90%]" alt="" />
                </div>
              </div>

              <div className=" px-4 ">
                <div className="flex items-start justify-start py-16">
                  <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                  <h1 className="text-3xl font-extrabold">{t("homePage2")}</h1>
                </div>
                <div>
                  <p className="text-start  text-[#5B5B5B] leading-7">
                    شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة.أسسها
                    الدكتور ربيع بن علي العوبثاني في مدينة المكلا و حضرموت في
                    مارس 2021م تحمل سجل تجاري رقم(21/2831).
                  </p>
                  <p className="text-start  mt-8 text-[#5B5B5B] leading-8">
                    تعمل على إدارة وتشغيل المشاريع الاستثمارية وتقديم الدراسات
                    الاقتصادية والاستشارات الادارية والمالية والتسويقية وحلول
                    تكنولوجيا المعلومات وتقدم خدماتها من خلال مجموعة من الخبراء
                    والاستشاريين المتخصصين الذين يعملون في الشركة ومجموعة اخرى
                    من الخبراء والاستشاريين المتعاقدين.
                  </p>
                </div>
                <div className="grid grid-cols-3 mt-6">
                  <div className="w-[95%] h-[100px] flex justify-center items-center">
                    <span className=" w-[35%] h-[100%] rounded-full bg-gradient-to-r from-[#997740] to-[#CCA972] flex justify-center items-center ml-4">
                      <img src={partnership} alt="" />
                    </span>
                    <p className="text-3xl">{t("our_mission")}</p>
                  </div>
                  <div className="w-[95%] h-[100px] flex justify-center items-center">
                    <span className=" w-[35%] h-[100%] rounded-full bg-gradient-to-r from-[#997740] to-[#CCA972] flex justify-center items-center ml-4">
                      <img src={golas} alt="" />
                    </span>
                    <p className="text-3xl">{t("our_goals")}</p>
                  </div>
                  <div className="w-[95%] h-[100px] flex justify-center items-center">
                    <span className=" w-[35%] h-[100%] rounded-full bg-gradient-to-r from-[#997740] to-[#CCA972] flex justify-center items-center ml-4">
                      <img src={chartBullish} alt="" />
                    </span>
                    <p className="text-3xl">{t("our_message")}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
