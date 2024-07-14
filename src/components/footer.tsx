import React, { useEffect, useState } from "react";
import { FaXTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import LogoWhite from "../assets/img/logo-white.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function Footer() {
  const { t, i18n } = useTranslation();
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
  const dir = i18n.dir();
  return (
    <>
      {widthScreen.winWidth <= 980 ? (
        <div
          dir={dir === "ltr" ? "rtl" : "ltr"}
          className="w-full max-w-screen-xl mx-auto p-4 md:py-8"
        >
          <div className="sm:flex sm:items-center sm: sm:justify-end">
            <div className=" grid grid-cols-2 gap-1 sm:gap-6 text-end sm:grid-cols-1 min-h-[35vh]">
              <div>
                <div className="w-[100%] sm:mb-8">
                  <img src={LogoWhite} alt="" className="m-auto" />
                </div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t("footerLink1")}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t("departmentLinks")}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t("departmentLinks1")}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t("departmentLinks2")}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t("departmentLinks3")}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t("departmentLinks4")}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t("footerLink2")}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      {t("Publications1")}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      {t("Publications2")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      {t("Publications3")}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t("footerLink3")}
                </h2>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t("footerLink4")}
                </h2>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t("footerLink5")}
                </h2>
              </div>
            </div>
          </div>
          <div className="h-[10vh]">
            <ul className="flex items-start mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-white ">
              <li>
                <a href="">
                  <FaLinkedinIn size={24} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF size={24} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaXTwitter size={24} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaWhatsapp size={24} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
            <h4 className="text-white flex items-center mt-3">
              info@bwiscompltd.com
            </h4>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-[#BA8D30] lg:my-8" />
          <div className=" text-sm text-gray-500 sm:text-start dark:text-gray-400 sm:mt-10">
            <div className=" w-[100%] sm:mb-5  text-end">
              <Link to={`/privacy-policy`} className=" sm:block sm:mb-5">
                {t("policy_privacy")}
              </Link>
              <Link
                to={`/terms-of-use`}
                className={
                  dir === "ltr"
                    ? "ml-2 sm:ml-0 sm:block sm:mt-5"
                    : "mr-2 sm:mr-0 "
                }
              >
                {t("terms_of_use")}
              </Link>
            </div>

            <div className="w-[100%] sm:mb-5 text-end sm:mt-2">
              © &nbsp;
              {t("rights")}
              <Link to={`/`} className="hover:underline">
                &nbsp; {t("rights1")} &nbsp;
              </Link>
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
      ) : (
        <div
          dir={dir === "ltr" ? "rtl" : "ltr"}
          className="w-full max-w-screen-xl mx-auto p-4 md:py-8"
        >
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="h-[35vh]">
              <div className="mb-6 md:mb-0 hidden">
                <a href="https://flowbite.com/" className="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 me-3"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Flowbite
                  </span>
                </a>
              </div>
              <ul className="flex items-start mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-white ">
                <li>
                  <a href="">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-1 sm:gap-6 text-end sm:grid-cols-5 h-[35vh]">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t("footerLink5")}
                </h2>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t("footerLink4")}
                </h2>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t("footerLink3")}
                </h2>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t("footerLink2")}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      {t("Publications1")}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      {t("Publications2")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      {t("Publications3")}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t("footerLink1")}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t("departmentLinks")}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t("departmentLinks1")}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t("departmentLinks2")}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t("departmentLinks3")}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t("departmentLinks4")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-[#BA8D30] lg:my-8" />
          <div className="flex items-center justify-between text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <div className=" w-[35%] text-start">
              <Link to={`/privacy-policy`} className="">
                {t("policy_privacy")}
              </Link>
              <Link
                to={`/terms-of-use`}
                className={dir === "ltr" ? "ml-2" : "mr-2"}
              >
                {t("terms_of_use")}
              </Link>
            </div>
            <div className="w-[30%] ">
              <img src={LogoWhite} alt="" className="m-auto" />
            </div>
            <div className="w-[35%] text-end">
              ©&nbsp;
              {t("rights")}
              <Link to={`/`} className="hover:underline">
                &nbsp; {t("rights1")} &nbsp;
              </Link>
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
