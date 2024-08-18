import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import PublishesCards from "./components/publishes-cards";
import SideCircle from "./assets/icons/side-circle";
import FullCircle from "./assets/icons/full-circle";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Image1 from "./assets/img/about_us.png";
import anlyisit from "./assets/img/whiteboard.png";
import enterpnure from "./assets/img/enterpnure.png";
import projectManager from "./assets/img/project-manager.png";
import whiteboard2 from "./assets/img/whiteboard 2.png";
import educationLearning from "./assets/img/education-learning-24-svgrepo-com 1 (1).png";
import tech from "./assets/img/service(2) 1.png";
import LastProject from "./components/lastProject";
import LeariningAndTraning from "./components/learnAndTraining";
import OurPartners from "./components/ourPartners";
import services2 from "./assets/img/services-2.png";
import OurOrgnaztion from "./components/ourOrgnaztion";
import ContectUs from "./components/contectUs";
import Footer from "./components/footer";
import { useTranslation } from "react-i18next";
import SecondOurPartners from "./components/secoundPartner";
import Services from "./components/(user)/Services";
import ServicesArb from "./components/(user)/ServicesArb";
function App() {
  const serversRef = useRef<HTMLDivElement>(null);
  const [scrolls, setScrolls] = useState(false);
  const [topPos, setTopPos] = useState<number>(0);
  const [bottomPos, setBottomPos] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const topPosions = topPos;
  const bottomPosions = window.innerHeight - bottomPos;

  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  window.addEventListener("scroll", setScrollDiv);
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
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (serversRef.current) {
      const rect = serversRef.current.getBoundingClientRect();
      setTopPos(rect.top);
      setBottomPos(rect.bottom);
    }

    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [widthScreen, serversRef]);
  const isWithinRange =
    scrollPosition >= topPos &&
    scrollPosition <= bottomPos - window.innerHeight;

  function setScrollDiv() {
    if (window.scrollY >= topPos && window.scrollY <= bottomPos) {
      setScrolls(true);
    } else {
      setScrolls(false);
    }
  }

  return (
    <div className="App">
      {/*  */}
      <div className="w-full lg:h-[8.45vh] sm:h-[11vh]">
        <Navbar />
      </div>
      {/*  */}
      <HeroSection />
      {/*  */}
      {/*  */}
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
      )}
      {/*  */}
      <div className="w-full h-screen p-2 overflow-hidden relative">
        <PublishesCards />
        <div className="w-full h-8 mt-16 flex justify-center items-center ">
          <h1 className="text-3xl text-[#CCA972]">
            <Link target="_blank" to={"https://www.facebook.com/bwiscompltd/"}>{t("showMore")}</Link>
          </h1>
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
      {/*  */}
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
                  شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة.أسسها
                  الدكتور ربيع بن علي العوبثاني في مدينة المكلا و حضرموت في مارس
                  2021م تحمل سجل تجاري رقم(21/2831).
                </p>
                <p className="text-justify mt-6 text-[#5B5B5B] leading-8">
                  تعمل على إدارة وتشغيل المشاريع الاستثمارية وتقديم الدراسات
                  الاقتصادية والاستشارات الادارية والمالية والتسويقية وحلول
                  تكنولوجيا المعلومات وتقدم خدماتها من خلال مجموعة من الخبراء
                  والاستشاريين المتخصصين الذين يعملون في الشركة ومجموعة اخرى من
                  الخبراء والاستشاريين المتعاقدين.
                </p>
              </div>
              <div className="w-[100%] h-[50vh] rounded-[2rem] backdrop-blur-md p-7 bg-white/30 border border-black mt-8 ">
                <div className="flex items-center h-[30%] m-auto mt-2 rounded-[2rem] justify-between">
                  {" "}
                  <Link to={"InProucation"} className="translate-y-4">
                    <div
                      className={
                        dir === "ltr"
                          ? "h-[60px] w-[58px] -translate-y-4 translate-x-8"
                          : "h-[60px] w-[58px] -translate-y-4 -translate-x-2"
                      }
                    >
                      <img src={enterpnure} alt="" className="w-full h-full" />
                    </div>
                    <h1 className="text-black">1+</h1>
                    <p className="text-black">{t("entrepreneurship")}</p>
                  </Link>
                  <Link to={"InProucation"} className="translate-y-4">
                    <div
                      className={
                        dir === "ltr"
                          ? "h-[60px] w-[58px] -translate-y-4 translate-x-10"
                          : "h-[60px] w-[58px] -translate-y-4 -translate-x-4"
                      }
                    >
                      <img
                        src={projectManager}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <h1 className="text-black">1+</h1>
                    <p className="text-black">{t("project_management")}</p>
                  </Link>
                </div>
                <Link to={"InProucation"} className="flex items-center h-[30%] m-auto mt-2 rounded-[2rem] justify-center">
                  <div className="translate-y-4">
                    <div className="h-[60px] w-[58px] -translate-y-4">
                      <img src={anlyisit} alt="" className="w-full h-full" />
                    </div>
                    <h1 className="text-black">1+</h1>
                    <p className="text-black">{t("studies")}</p>
                  </div>
                </Link>
                <Link to={"InProucation"} className="flex items-center h-[30%] m-auto mt-2 rounded-[2rem] justify-between">
                  <div className="translate-y-4">
                    <div
                      className={
                        dir === "ltr"
                          ? "h-[60px] w-[58px] -translate-y-4 translate-x-10"
                          : "h-[60px] w-[58px] -translate-y-4 -translate-x-6"
                      }
                    >
                      <img
                        src={educationLearning}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <h1 className="text-black">+1</h1>
                    <p className="text-black">{t("Education_and_Training")}</p>
                  </div>

                  <div className="translate-y-4">
                    <div
                      className={
                        dir === "ltr"
                          ? "h-[60px] w-[58px] -translate-y-4 translate-x-12"
                          : "h-[60px] w-[58px] -translate-y-4 -translate-x-6"
                      }
                    >
                      <img src={tech} alt="" className="w-full h-full" />
                    </div>
                    <h1 className="text-black">1+</h1>
                    <p className="text-black">{t("software_development")}</p>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center mt-10">
                <div className="outline outline-offset-1 outline-1 outline-[#ccc]/60 rounded-full w-[9rem] h-[3.8rem] flex justify-center items-center">
                  <Link to={"InProucation"} className="inline-flex w-[9rem] h-[3.8rem] outline outline-1 outline-[#CCA972]/80 bg-black text-white items-center justify-center whitespace-nowrap rounded-full text-md font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    {t("knowMoreAboutUs")}
                  </Link>
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
                      شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة.أسسها
                      الدكتور ربيع بن علي العوبثاني في مدينة المكلا و حضرموت في
                      مارس 2021م تحمل سجل تجاري رقم(21/2831).
                    </p>
                    <p className="text-start  mt-6 text-[#5B5B5B] leading-8">
                      تعمل على إدارة وتشغيل المشاريع الاستثمارية وتقديم الدراسات
                      الاقتصادية والاستشارات الادارية والمالية والتسويقية وحلول
                      تكنولوجيا المعلومات وتقدم خدماتها من خلال مجموعة من
                      الخبراء والاستشاريين المتخصصين الذين يعملون في الشركة
                      ومجموعة اخرى من الخبراء والاستشاريين المتعاقدين.
                    </p>
                  </div>
                  <div className="flex justify-start mt-10">
                    <div className="outline outline-offset-1 outline-1 outline-[#ccc]/60 rounded-full w-[9rem] h-[3.8rem] flex justify-center items-center">
                      <Link to={"InProucation"} className="inline-flex w-[9rem] h-[3.8rem] outline outline-1 outline-[#CCA972]/80 bg-black text-white items-center justify-center whitespace-nowrap rounded-full text-md font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        {t("knowMoreAboutUs")}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-12 px-2 ">
                  <div className=" flex justify-around items-center flex-row-reverse backdrop-blur-md bg-white/30 border border-black w-[90%]  h-36 text-white absolute p-4 text-center transform -translate-x-1/2 rounded-[2rem] bottom-[-10px] z-10 left-1/2">
                    <Link to={"InProucation"} className="translate-y-3">
                      <div
                        className={
                          dir === "ltr"
                            ? "h-[60px] w-[58px] -translate-y-4 translate-x-10"
                            : "h-[60px] w-[58px] -translate-y-4 translate-x-4"
                        }
                      >
                        <img
                          src={educationLearning}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <h1 className="text-black">+1</h1>
                      <p className="text-black">
                        {t("Education_and_Training")}
                      </p>
                    </Link>

                    <Link to={"InProucation"} className="translate-y-3">
                      <div className="h-[60px] w-[58px] -translate-y-4">
                        <img
                          src={whiteboard2}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t("studies")}</p>
                    </Link>

                    <Link to={"InProucation"} className="translate-y-3">
                      <div
                        className={
                          dir === "ltr"
                            ? "h-[60px] w-[58px] -translate-y-4 translate-x-7"
                            : "h-[60px] w-[58px] -translate-y-4 translate-x-1"
                        }
                      >
                        <img
                          src={enterpnure}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t("entrepreneurship")}</p>
                    </Link>

                    <Link to={"InProucation"} className="translate-y-3">
                      <div
                        className={
                          dir === "ltr"
                            ? "h-[60px] w-[58px] -translate-y-4 translate-x-10"
                            : "h-[60px] w-[58px] -translate-y-4 translate-x-3"
                        }
                      >
                        <img
                          src={projectManager}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t("project_management")}</p>
                    </Link>

                    <Link to={"InProucation"} className="translate-y-3">
                      <div
                        className={
                          dir === "ltr"
                            ? "h-[60px] w-[58px] -translate-y-4 translate-x-12"
                            : "h-[60px] w-[58px] -translate-y-4 translate-x-5"
                        }
                      >
                        <img src={tech} alt="" className="w-full h-full" />
                      </div>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t("software_development")}</p>
                    </Link>
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
                      شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة.أسسها
                      الدكتور ربيع بن علي العوبثاني في مدينة المكلا و حضرموت في
                      مارس 2021م تحمل سجل تجاري رقم(21/2831).
                    </p>
                    <p className="text-start  mt-6 text-[#5B5B5B] leading-8">
                      تعمل على إدارة وتشغيل المشاريع الاستثمارية وتقديم الدراسات
                      الاقتصادية والاستشارات الادارية والمالية والتسويقية وحلول
                      تكنولوجيا المعلومات وتقدم خدماتها من خلال مجموعة من
                      الخبراء والاستشاريين المتخصصين الذين يعملون في الشركة
                      ومجموعة اخرى من الخبراء والاستشاريين المتعاقدين.
                    </p>
                  </div>
                  <div className="flex justify-start mt-10">
                    <div className="outline outline-offset-1 outline-1 outline-[#ccc]/60 rounded-full w-[9rem] h-[3.8rem] flex justify-center items-center">
                      <Link to={"InProucation"} className="inline-flex w-[9rem] h-[3.8rem] outline outline-1 outline-[#CCA972]/80 bg-black text-white items-center justify-center whitespace-nowrap rounded-full text-md font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        {t("knowMoreAboutUs")}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-12 px-2 ">
                  <div className=" flex justify-around items-center flex-row-reverse backdrop-blur-md bg-white/30 border border-black w-[90%]  h-36 text-white absolute p-4 text-center transform -translate-x-1/2 rounded-[2rem] bottom-[-10px] z-10 left-1/2">
                    <Link to={"InProucation"} className="translate-y-3">
                      <div className="h-[60px] w-[58px] -translate-y-4 -translate-x-6">
                        <img
                          src={educationLearning}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <h1 className="text-black">+1</h1>
                      <p className="text-black">
                        {t("Education_and_Training")}
                      </p>
                    </Link>

                    <Link to={"InProucation"} className="translate-y-3">
                      <div className="h-[60px] w-[58px] -translate-y-4">
                        <img
                          src={whiteboard2}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t("studies")}</p>
                    </Link>

                    <Link to={"InProucation"} className="translate-y-3">
                      <div className="h-[60px] w-[58px] -translate-y-4 -translate-x-2">
                        <img
                          src={enterpnure}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t("entrepreneurship")}</p>
                    </Link>

                    <Link to={"InProucation"} className="translate-y-3">
                      <div className="h-[60px] w-[58px] -translate-y-4 -translate-x-5">
                        <img
                          src={projectManager}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t("project_management")}</p>
                    </Link>

                    <Link to={"InProucation"} className="translate-y-3">
                      <div className="h-[60px] w-[58px] -translate-y-4 -translate-x-6">
                        <img src={tech} alt="" className="w-full h-full" />
                      </div>
                      <h1 className="text-black">1+</h1>
                      <p className="text-black">{t("software_development")}</p>
                    </Link>
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
          <h1 className="text-3xl text-[#CCA972]">{t("showMore")}</h1>
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
      {/* خدماتنا  */}
      <div
        ref={serversRef}
        className="w-full h-[250vh] mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 gap-2 relative"
      >
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
          <>{dir === "ltr" ? <Services /> : <ServicesArb />}</>
        ) : (
          <>
            {dir === "ltr" ? (
              <>
                <div className=" w-full h-full  p-4 overflow-hidden ">
                  <div className=" w-full h-full grid gap-20 ">
                    <div className="services h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                      <div className=" text-start w-[100%] h-[50%] p-4">
                        <h1 className="text-3xl mb-6">تشغيل المشاريع</h1>
                        <p className="text-xl text-[#525252]">
                        إدارة وتشغيل المشاريع التجارية في اليمن
                        </p>
                      </div>
                    </div>

                    <div className="services h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                      <div className=" text-start w-[100%] h-[50%] p-4">
                        <h1 className="text-3xl mb-6">دراسات الجدوى</h1>
                        <p className="text-xl text-[#525252]">
                        عمل دراسات الجدوى الاقتصادية المتكاملة للمشاريع الاستثمارية. 
                        </p>
                      </div>
                    </div>

                    <div className="services h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                      <div className=" text-start w-[100%] h-[50%] p-4">
                        <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                        <p className="text-xl text-[#525252]">
                        تصميم الاستراتيجيات الفعالة وتطوير خطط العمل للشركات والمؤسسات التجارية. 
                        </p>
                      </div>
                    </div>

                    <div className="services h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                      <div className=" text-start w-[100%] h-[50%] p-4">
                        <h1 className="text-3xl mb-6">تقديم الاستشارات</h1>
                        <p className="text-xl text-[#525252]">
                        تقديم الاستشارات الإدارية والمالية والتسويقية والتشغيلية والإنتاج وسلاسل الإمداد وأنظمة الجودة للشركات والمؤسسات الخاصة والعامة. 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`
                    ${
                      isWithinRange
                        ? "w-full h-full fixed top-[6%] left-[51%] "
                        : "w-[50%] h-full p-4 absolute bottom-0 left-[50%]"
                    }
                  `}
                >
                  <img
                    src={services2}
                    alt=""
                    className={`${scrolls ? "absolute bottom-0" : ""}`}
                  />
                </div>
              </>
            ) : (
              <>
                <div className=" w-full h-full  p-4">
                  <div className=" w-full h-full grid gap-20">
                    <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                      <div className=" text-start w-[100%] h-[50%] p-4">
                        <h1 className="text-3xl mb-6">تشغيل المشاريع</h1>
                        <p className="text-xl text-[#525252]">
                        إدارة وتشغيل المشاريع التجارية في اليمن
                        </p>
                      </div>
                    </div>

                    <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                      <div className=" text-start w-[100%] h-[50%] p-4">
                        <h1 className="text-3xl mb-6">دراسات الجدوى</h1>
                        <p className="text-xl text-[#525252]">
                        عمل دراسات الجدوى الاقتصادية المتكاملة للمشاريع الاستثمارية. 

                        </p>
                      </div>
                    </div>

                    <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                      <div className=" text-start w-[100%] h-[50%] p-4">
                        <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                        <p className="text-xl text-[#525252]">
                        تصميم الاستراتيجيات الفعالة وتطوير خطط العمل للشركات والمؤسسات التجارية. 
                        </p>
                      </div>
                    </div>

                    <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                      <div className=" text-start w-[100%] h-[50%] p-4">
                        <h1 className="text-3xl mb-6"> تقديم الاستشارات</h1>
                        <p className="text-xl text-[#525252]">
                        تقديم الاستشارات الإدارية والمالية والتسويقية والتشغيلية والإنتاج وسلاسل الإمداد وأنظمة الجودة للشركات والمؤسسات الخاصة والعامة. 
                        </p>
                      </div>
                    </div>
                    {/* <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                      <div className=" text-start w-[100%] h-[50%] p-4">
                        <h1 className="text-3xl mb-6">البناء والتطوير</h1>
                        <p className="text-xl text-[#525252]">
                        بناء وتطوير فرق عمل قوية ومتجانسة والاهتمام بالمورد البشري لخلق الميزة التنافسية للشركات والمؤسسات التجارية.
                        </p>
                      </div>
                    </div>
                    <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                      <div className=" text-start w-[100%] h-[50%] p-4">
                        <h1 className="text-3xl mb-6">تقديم الحلول</h1>
                        <p className="text-xl text-[#525252]">
                        تقديم الحلول في تكنولوجيا المعلومات وقيادة مشاريع التحول الرقمي للقطاع الخاص والعام. 
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div
                  className={`
                    ${
                      isWithinRange
                        ? "w-[70%] m-auto h-full fixed top-[6%] right-[51%] "
                        : "w-[50%] h-full p-4 absolute bottom-0 right-[50%]"
                    }
                  `}
                >
                  <img src={services2} alt="" className={`${scrolls ? "absolute bottom-0 " : ""}`}/>
                </div>
              </>
            )}
          </>
        )}
      </div>
      {/*  */}
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

        <div className="w-full h-screen p-2  overflow-hidden relative">
          <LastProject />
          <div className="w-full h-8 mt-16 flex justify-center items-center ">
            <h1 className="text-3xl text-[#CCA972]">
              <Link to={'/InProduction'}>  {t("showMore")}
              </Link>
            </h1>
          </div>
        </div>
      </div>
      {/*  */}
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
      {/*  */}
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
