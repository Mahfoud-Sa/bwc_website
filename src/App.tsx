import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import PublishesCards from "./components/publishes-cards";
import SideCircle from "./assets/icons/side-circle";
import FullCircle from "./assets/icons/full-circle";
import { useMediaQuery } from "react-responsive";
import Borad from "./assets/icons/borad";
import Image1 from "./assets/img/اعلان خدمة الفايبر.jpg";
import anlyisit from "./assets/img/whiteboard.png";
import Vector from "./assets/icons/vector";
import LastProject from "./components/lastProject";
import LeariningAndTraning from "./components/learnAndTraining";
import OurPartners from "./components/ourPartners";
import CarouselsHeroSection from "./components/carouselsHeroSection";
import OurOrgnaztion from "./components/ourOrgnaztion";
import ContectUs from "./components/contectUs";
import Footer from "./components/footer";
import { useTranslation } from "react-i18next";
import SecondOurPartners from "./components/secoundPartner";
function App() {
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

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1022px)" });
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [widthScreen]);
  console.log(widthScreen.winWidth);
  return (
    <div className="App">
      {/* nav bar  */}
      <div className="w-full lg:h-[8.45vh] sm:h-[11vh]">
        <Navbar />
      </div>
      {/* hero section  */}
      <HeroSection />
    
      {/*Publishes Section Title */}
      {widthScreen.winWidth <= 980 ? (
        <div className="w-full h-36 flex justify-start items-center ">
          <div className="flex p-5">
            <div
              className={
                dir === "ltr"
                  ? "w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "
                  : "w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "
              }
            ></div>
            <h1 className="text-3xl">{t("homePage1")}</h1>
          </div>
        </div>
      ) : (
        <div className="w-full h-36 flex justify-start items-center ">
          <div className="flex p-5">
            <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
            <h1 className="text-3xl">{t("homePage1")}</h1>
          </div>
        </div>
      )}
     
     
      {/* Publishes Cards  */}
      <div className="w-full h-screen p-2 overflow-hidden relative">
        <PublishesCards />
        <div className="w-full h-8 mt-16 flex justify-center items-center ">
          <h1 className="text-3xl text-[#CCA972]">أعرض المزيد</h1>
        </div>
        {widthScreen.winWidth <= 980 ? (
          <div className=" absolute bottom-[60px] right-0">
            {/* <SideCircle /> */}
          </div>
        ) : (
          <>
            {dir === "ltr" ? (
              <div className=" absolute bottom-0 left-0">
                <SideCircle />
              </div>
            ) : (
              <div className=" absolute bottom-0 right-0">
                <SideCircle />
              </div>
            )}
          </>
        )}
      </div>


      {/* about us section */}
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-4 relative">
        {widthScreen.winWidth <= 980 ? (
          <>
            {dir === "ltr" ? (
              <div className="flex items-start justify-start py-10">
                <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                <h1 className="text-3xl font-extrabold">{t("homePage2")}</h1>
              </div>
            ) : (
              <div className="flex items-start justify-start py-10">
                <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                <h1 className="text-3xl font-extrabold">{t("homePage2")}</h1>
              </div>
            )}
            <div className="">
              <img
                src={Image1}
                className=" object-cover rounded-lg m-auto relative z-[1] w-[100%] h-[100%]"
                alt=""
              />
            </div>

            <div className=" px-4">
              <div className="text-end">
                <p className="text-justify text-[#5B5B5B] leading-7">
                {t(   "aboutUsText_1")}
                </p>
                <p className="text-justify mt-6 text-[#5B5B5B] leading-8">
                {t(   "aboutUsText_2")}

                </p>
              </div>
              <div className="w-[100%] h-[50vh] rounded-[2rem] backdrop-blur-md p-7 bg-white/30 border border-black mt-8 ">
                <div className="flex items-center h-[30%] m-auto mt-2 rounded-[2rem] justify-between">
                  {" "}
                  <div>
                    <span>
                      <Borad />
                    </span>
                    <h1 className="text-black">1+</h1>
                    <p className="text-black">{t("departmentLinks2")}</p>
                  </div>
                  <div>
                    <span>
                      <Borad />
                    </span>
                    <h1 className="text-black">1+</h1>
                    <p className="text-black">{t( "departmentLinks3")}</p>
                  </div>
                </div>
                <div className="flex items-center h-[30%] m-auto mt-2 rounded-[2rem] justify-center">
                  <div className="translate-y-4">
                    <div className="h-[60px] w-[58px] -translate-y-4">
                      <img src={anlyisit} alt="" className="w-full h-full" />
                    </div>
                    <h1 className="text-black">1+</h1>
                    <p className="text-black">{t( "departmentLinks4")}</p>
                  </div>
                </div>
                <div className="flex items-center h-[30%] m-auto mt-2 rounded-[2rem] justify-between">
                  <div className="">
                    <span>
                      <Borad />
                    </span>
                    <h1 className="text-black">+1</h1>
                    <p className="text-black">{t( "departmentLinks")}</p>
                  </div>

                  <div className="translate-y-4">
                    <div className="h-[60px] w-[58px] -translate-y-4">
                      <img src={anlyisit} alt="" className="w-full h-full" />
                    </div>
                    <h1 className="text-black">1+</h1>
                    <p className="text-black">{t( "departmentLinks")}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="outline outline-offset-1 outline-1 outline-[#ccc]/60 rounded-full w-[9rem] h-[3.8rem] flex justify-center items-center">
                  <button className="inline-flex w-[9rem] h-[3.8rem] outline outline-1 outline-[#CCA972]/80 bg-black text-white items-center justify-center whitespace-nowrap rounded-full text-md font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    أعرف عنا أكثر
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {dir === "ltr" ? (
              <>
                <div className=" absolute top-2 left-0">
                  <FullCircle />
                </div>
                <div className=" px-4">
                  <img
                    src={Image1}
                    className=" object-cover rounded-lg relative z-[1] w-[90%] h-[90%]"
                    alt=""
                  />
                </div>
                <div className=" px-4">
                  <div className="flex items-start justify-start py-16">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h1 className="text-3xl font-extrabold">
                      {t("homePage2")}
                    </h1>
                  </div>
                  <div>
                    <p className="text-start  text-[#5B5B5B] leading-7">
                    {t(   "aboutUsText_1")}

                    </p>
                    <p className="text-start  mt-6 text-[#5B5B5B] leading-8">
                    {t(   "aboutUsText_2")}
                    </p>
                  </div>
                  <div className="flex justify-start mt-10">
                    <div className="outline outline-offset-1 outline-1 outline-[#ccc]/60 rounded-full w-[9rem] h-[3.8rem] flex justify-center items-center">
                      <button className="inline-flex w-[9rem] h-[3.8rem] outline outline-1 outline-[#CCA972]/80 bg-black text-white items-center justify-center whitespace-nowrap rounded-full text-md font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        أعرف عنا أكثر
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-12 px-2 ">
                  <div className=" flex justify-around items-center flex-row-reverse backdrop-blur-md bg-white/30 border border-black w-[90%]  h-36 text-white absolute p-4 text-center transform -translate-x-1/2 rounded-[2rem] bottom-[-10px] z-10 left-1/2">
                    <div className="">
                      <span>
                        <Borad />
                      </span>
                      <h1 className="text-black">+1</h1>
                      <p className="text-black">{t( "departmentLinks")}</p>
                    </div>

                    <div className="translate-y-4">
                      <div className="h-[60px] w-[58px] -translate-y-4">
                        <img src={anlyisit} alt="" className="w-full h-full" />
                      </div>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t( "departmentLinks4")}</p>
                    </div>

                    <div>
                      <span>
                        <Borad />
                      </span>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t("departmentLinks2")}</p>
                    </div>

                    <div>
                      <span>
                        <Borad />
                      </span>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t( "departmentLinks3")}</p>
                    </div>

                    <div>
                      <span>
                        <Borad />
                      </span>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t( "departmentLinks1")}</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className=" absolute top-4 right-0">
                  <FullCircle />
                </div>
                <div className=" px-4">
                  <img
                    src={Image1}
                    className=" object-cover rounded-lg relative z-[1] w-[90%] h-[90%]"
                    alt=""
                  />
                </div>

                <div className=" px-4">
                  <div className="flex items-start justify-start py-16">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h1 className="text-3xl font-extrabold">
                      {t("homePage2")}
                    </h1>
                  </div>
                  <div>
                    <p className="text-start  text-[#5B5B5B] leading-7">
                    {t(   "aboutUsText_1")}
                    </p>
                    <p className="text-start  mt-6 text-[#5B5B5B] leading-8">
                    {t(   "aboutUsText_2")}

                    </p>
                  </div>
                  <div className="flex justify-start mt-10">
                    <div className="outline outline-offset-1 outline-1 outline-[#ccc]/60 rounded-full w-[9rem] h-[3.8rem] flex justify-center items-center">
                      <button className="inline-flex w-[9rem] h-[3.8rem] outline outline-1 outline-[#CCA972]/80 bg-black text-white items-center justify-center whitespace-nowrap rounded-full text-md font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        أعرف عنا أكثر
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-12 px-2 ">
                  <div className=" flex justify-around items-center flex-row-reverse backdrop-blur-md bg-white/30 border border-black w-[90%]  h-36 text-white absolute p-4 text-center transform -translate-x-1/2 rounded-[2rem] bottom-[-10px] z-10 left-1/2">
                    <div className="">
                      <span>
                        <Borad />
                      </span>
                      <h1 className="text-black">+1</h1>
                      <p className="text-black">{t( "departmentLinks")}</p>
                    </div>

                    <div className="translate-y-4">
                      <div className="h-[60px] w-[58px] -translate-y-4">
                        <img src={anlyisit} alt="" className="w-full h-full" />
                      </div>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t( "departmentLinks4")}</p>
                    </div>

                    <div>
                      <span>
                        <Borad />
                      </span>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t( "departmentLinks2")}</p>
                    </div>

                    <div>
                      <span>
                        <Borad />
                      </span>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t( "departmentLinks3")}</p>
                    </div>

                    <div>
                      <span>
                        <Borad />
                      </span>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t( "departmentLinks1")}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
     
      {/*  */}
      <div className="w-full h-[10vh] md:p-2  overflow-hidde relative">
        <div className="w-full h-8 mt-16 flex justify-center items-center ">
          <h1 className="text-3xl text-[#CCA972]">أعرض المزيد</h1>
        </div>
      </div>

      {/*  */}
      <div className="w-full h-[10vh] p-2 overflow-hidde relative">
        {dir === "ltr" ? (
          <div className="flex justify-start p-5">
            <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
            <h1 className="text-3xl">{t("homePage3")}</h1>
          </div>
        ) : (
          <div className="flex justify-start p-5">
            <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
            <h1 className="text-3xl">{t("homePage3")}</h1>
          </div>
        )}
      </div>
      {/*  */}
      <div className="w-full h-[110vh] mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 gap-2 relative">
        {dir === "ltr" ? (
          <div className=" absolute top-24 left-0">
            <FullCircle />
          </div>
        ) : (
          <div className=" absolute top-24 right-0">
            <FullCircle />
          </div>
        )}
        {widthScreen.winWidth <= 980 ? (
          <>
            <div className=" w-full h-full  p-4 overflow-hidden ">
              <div className=" w-full h-full grid gap-[5.5rem]">
                <div className="services h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                  <div className=" text-end w-[100%] h-[50%] p-4">
                    <h1 className="text-3xl mb-6">هذا العنوان مؤقت</h1>
                    <p className="text-xl text-[#525252]">
                     هذا النص مؤقت لحين تطوير الموقع الالكتورني حيث انه سيتم استبداله لاحقا.
                    </p>
                  </div>
                </div>

                <div className="services h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                  <div className=" text-end w-[100%] h-[50%] p-4">
                    <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                    <p className="text-xl text-[#525252]">
                      تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                      للشركــــــــات والمؤسسات التجارية
                    </p>
                  </div>
                </div>

                <div className="services h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                  <div className=" text-end w-[100%] h-[50%] p-4">
                    <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                    <p className="text-xl text-[#525252]">
                      تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                      للشركــــــــات والمؤسسات التجارية
                    </p>
                  </div>
                </div>

                <div className="services h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                  <div className=" text-end w-[100%] h-[50%] p-4">
                    <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                    <p className="text-xl text-[#525252]">
                      تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                      للشركــــــــات والمؤسسات التجارية
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {dir === "ltr" ? (
              <div className=" w-full h-full  p-4 overflow-hidden ">
                <div className=" w-full h-full grid gap-20">
                  <div className="services h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                    <div className=" text-start w-[100%] h-[50%] p-4">
                      <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                      <p className="text-xl text-[#525252]">
                        تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                        للشركــــــــات والمؤسسات التجارية
                      </p>
                    </div>
                  </div>

                  <div className="services h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                    <div className=" text-start w-[100%] h-[50%] p-4">
                      <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                      <p className="text-xl text-[#525252]">
                        تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                        للشركــــــــات والمؤسسات التجارية
                      </p>
                    </div>
                  </div>

                  <div className="services h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                    <div className=" text-start w-[100%] h-[50%] p-4">
                      <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                      <p className="text-xl text-[#525252]">
                        تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                        للشركــــــــات والمؤسسات التجارية
                      </p>
                    </div>
                  </div>

                  <div className="services h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                    <div className=" text-start w-[100%] h-[50%] p-4">
                      <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                      <p className="text-xl text-[#525252]">
                        تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                        للشركــــــــات والمؤسسات التجارية
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" w-full h-full  p-4 overflow-hidden ">
                <div className=" w-full h-full grid gap-20">
                  <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                    <div className=" text-start w-[100%] h-[50%] p-4">
                      <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                      <p className="text-xl text-[#525252]">
                        تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                        للشركــــــــات والمؤسسات التجارية
                      </p>
                    </div>
                  </div>

                  <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                    <div className=" text-start w-[100%] h-[50%] p-4">
                      <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                      <p className="text-xl text-[#525252]">
                        تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                        للشركــــــــات والمؤسسات التجارية
                      </p>
                    </div>
                  </div>

                  <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                    <div className=" text-start w-[100%] h-[50%] p-4">
                      <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                      <p className="text-xl text-[#525252]">
                        تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                        للشركــــــــات والمؤسسات التجارية
                      </p>
                    </div>
                  </div>

                  <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                    <div className=" text-start w-[100%] h-[50%] p-4">
                      <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                      <p className="text-xl text-[#525252]">
                        تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                        للشركــــــــات والمؤسسات التجارية
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className=" w-full h-full p-4">
              <Vector />
            </div>
          </>
        )}
      </div>

      {/* Last Projects Setcion Title */}
      <div className="w-full h-[80vh] sm:mt-5 relative">
        {dir === "ltr" ? (
          <div className="flex justify-start p-5">
            <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
            <h1 className="text-3xl">{t("homePage4")}</h1>
          </div>
        ) : (
          <div className="flex justify-start p-5">
            <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
            <h1 className="text-3xl">{t("homePage4")}</h1>
          </div>
        )}

        <div className="w-full h-screen p-2 overflow-hidden relative">
          <LastProject />
          <div className="w-full h-8 mt-16 flex justify-center items-center ">
            <h1 className="text-3xl text-[#CCA972]">أعرض المزيد</h1>
          </div>
        </div>
      </div>



      {/* Treaning Section Title  */}
      <div className="w-full h-[60vh] relative">
        {dir === "ltr" ? (
          <div className="flex justify-start p-5 sm:mt-20">
            <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
            <h1 className="text-3xl">{t("homePage5")}</h1>
          </div>
        ) : (
          <div className="flex justify-start p-5 sm:mt-20">
            <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
            <h1 className="text-3xl">{t("homePage5")}</h1>
          </div>
        )}

        <div className="h-[70vh] p-2 overflow-hidden relative ">
          <LeariningAndTraning />
        </div>
      </div>



      {/*work with Our Partners Title Section  */}
      <div className="w-full h-[70vh] relative bg-[#CBA871]">
        <div className="flex justify-center p-5">
          <h1 className="text-xl text-white">{t("homePage6")}</h1>
        </div>

        <div className="h-[30vh] w-full p-2 overflow-hidden relative ">
          <OurPartners />
        </div>
        <div className="h-[30vh] p-2 overflow-hidden relative ">
          <SecondOurPartners />
        </div>
      </div>

      {/*  */}

      <div className="w-full h-[50vh] relative mt-5">
        <div className="flex justify-center p-5">
          <h1 className="text-xl">{t("homePage7")}</h1>
        </div>

        <div className="h-[50vh] p-2 overflow-hidden relative">
          <OurOrgnaztion />
        </div>
      </div>
      {/*  */}
      <div className="w-full lg:h-[110vh] sm:h[300vh] relative">
        {dir === "ltr" ? (
          <div className="flex justify-start p-5">
            <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
            <h1 className="text-3xl">{t("homePage8")}</h1>
          </div>
        ) : (
          <div className="flex justify-start p-5">
            <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
            <h1 className="text-3xl">{t("homePage8")}</h1>
          </div>
        )}

        <div className="h-full p-2 overflow-hidden relative ">
          <ContectUs />
        </div>
      </div>
      <footer className="min-h-[65vh] p-2 overflow-hidden relative bg-black mt-10">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
