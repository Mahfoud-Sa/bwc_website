import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import logo2 from "../assets/img/no-name.png";
import logo3 from "../assets/img/logo3.png";
import job1 from "../assets/img/jobs-2.png";
import LanguageWorld from "../assets/icons/language-world";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";
import DropDownLang from "./dropDownLang";
import { CgMenuLeft } from "react-icons/cg";
import Button from "../components/button";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [fix, setFix] = useState<boolean>();
  const [language, setLanguage] = useState<string>("");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  });
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
  //
  const onChangeLanguage = () => {
    language === "ar" ? setLanguage("en") : setLanguage("ar");
  };

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };
  //
  const [isdropDownOpen, setIsdropDownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    changeLanguage(language);
    document.body.dir = i18n.dir();

    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [widthScreen, i18n, i18n.language, language]);

  const dir = i18n.dir();
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
      <div
        className={
          dir === "ltr"
            ? "md:flex items-center justify-between flex-row-reverse py-2 md:px-10 px-7"
            : "md:flex items-center justify-between py-2 md:px-10 px-7"
        }
      >
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <a href="/" className="site-title">
            <img
              src={fix && dir === "rtl" ? logo3 : fix ? logo2 : logo}
              alt=""
            />
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={
            dir === "ltr"
              ? "text-3xl absolute left-8 top-6 cursor-pointer md:hidden"
              : "text-3xl absolute left-8 top-6 cursor-pointer md:hidden"
          }
        >
          {open ? (
            <IoMdCloseCircleOutline size={40} />
          ) : (
            <CgMenuLeft size={40} />
          )}
        </div>

        {widthScreen.winWidth <= 980 ? (
          <ul
            className={
              dir === "ltr"
                ? `md:flex md:items-center md:pb-0 pb-0 absolute md:static bg-white md:z-auto z-[999px] right-0 w-full md:w-auto md:pl-0 pr-9 transition-all duration-500 ease-in ${
                    open ? "top-20 " : "top-[-590px]"
                  }`
                : `md:flex md:items-center md:pb-0 pb-0 absolute md:static bg-white md:z-auto z-[999px] left-0 w-full md:w-auto md:pl-0 pr-9 transition-all duration-500 ease-in ${
                    open ? "top-20 " : "top-[-590px]"
                  }`
            }
          >
            <li className="md:ml-8 sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[100%] sm:bg-[#e9eaed] sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md">
              <a className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                {t("depertment")}
              </a>
            </li>

            <li className="md:ml-8 sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[150%] sm:bg-[#e9eaed] sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md">
              <Link
                to={"/about-us"}
                className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
              >
                {t("About_us")}
              </Link>
            </li>

            <li className="md:ml-8 sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[100%] sm:bg-[#e9eaed] sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md">
              <a className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                {t("publishes")}
              </a>
            </li>
            <li className="md:ml-8 sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[100%] sm:bg-[#e9eaed] sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md">
              <a className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                {t("reports")}
              </a>
            </li>
            <li className="md:ml-8 sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[100%] sm:bg-[#e9eaed] sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md">
              <a className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                {t("archive")}
              </a>
            </li>
            <li className="lg:hidden md:ml-8 sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[100%]  sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md">
              <a className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer flex">
                <img
                  src={job1}
                  className={dir === "ltr" ? "sm:mr-2" : "sm:ml-2"}
                  alt=""
                />
                {t("jobs")}
              </a>
            </li>
            <li
              className=" lg:hidden md:ml-8 sm:flex sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[100%]  sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md "
              onClick={onChangeLanguage}
            >
              <a className="sm:flex text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                <div
                  className={
                    dir === "ltr"
                      ? "cursor-pointer mr-3"
                      : "cursor-pointer ml-3"
                  }
                >
                  <LanguageWorld color="black" />
                </div>
                <div className="cursor-pointer">
                  {dir === "ltr" ? "EN" : "عربي"}
                </div>
              </a>
            </li>
          </ul>
        ) : (
          <ul
            className={`md:flex md:items-center md:pb-0 pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-590px]"
            }`}
          >
            <li className="md:ml-8 sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[100%] sm:bg-[#e9eaed] sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md">
              <a className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                {t("depertment")}
              </a>
            </li>

            <li className="md:ml-8 sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[150%] sm:bg-[#e9eaed] sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md">
              <Link
                to={"/about-us"}
                className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
              >
                {t("About_us")}
              </Link>
            </li>

            <li className="md:ml-8 sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[100%] sm:bg-[#e9eaed] sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md">
              <a className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                {t("publishes")}
              </a>
            </li>
            <li className="md:ml-8 sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[100%] sm:bg-[#e9eaed] sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md">
              <a className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                {t("reports")}
              </a>
            </li>
            <li className="md:ml-8 sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[100%] sm:bg-[#e9eaed] sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md">
              <a className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                {t("archive")}
              </a>
            </li>
            <li className="lg:hidden md:ml-8 sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[100%] sm:bg-[#e9eaed] sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md">
              <a className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                {t("jobs")}
              </a>
            </li>
            <li
              className=" lg:hidden md:ml-8 sm:flex sm:text-start text-xl md:my-0 my-7 md:bg-[#fff] md:w-[100%] sm:bg-[#e9eaed] sm:w-[95%] sm:px-2 sm:py-3 sm:rounded-md "
              onClick={onChangeLanguage}
            >
              <a className="sm:flex text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                <div className="cursor-pointer mr-3">
                  <LanguageWorld color="black" />
                </div>
                <div className="cursor-pointer">
                  {dir === "ltr" ? "EN" : "عربي"}
                </div>
              </a>
            </li>
          </ul>
        )}

        <div className="flex items-center lg:flex sm:hidden">
          <Button>{t("jobs")}</Button>

          <div
            className={
              dir === "ltr" ? "language-icon lg:ml-4" : "language-icon"
            }
          >
            <div
              className="cursor-pointer"
              onClick={() => setIsdropDownOpen((prevValue) => !prevValue)}
            >
              <LanguageWorld color="black" />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setIsdropDownOpen((prevValue) => !prevValue)}
            >
              {dir === "ltr" ? "EN" : "عربي"}
              {isdropDownOpen && <DropDownLang />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
