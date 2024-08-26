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
                    <Link to="/InProucation" className="hover:underline">
                      {t("departmentLinks")}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/InProucation" className="hover:underline">
                      {t("departmentLinks1")}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/InProucation" className="hover:underline">
                      {t("departmentLinks2")}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/InProucation" className="hover:underline">
                      {t("departmentLinks3")}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/InProucation" className="hover:underline">
                      {t("departmentLinks4")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t("footerLink2")}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/InProucation" className="hover:underline ">
                      {t("Publications1")}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/InProucation" className="hover:underline">
                      {t("Publications2")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/InProucation" className="hover:underline">
                      {t("Publications3")}
                    </Link>
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
                <Link to="/InProucation">
                  <FaLinkedinIn size={24} />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.facebook.com/bwiscompltd/"
                >
                  <FaFacebookF size={24} />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://x.com/bwiscompltd?t=kvtAioCB94muIDpQOzXcpA&s=09"
                >
                  <FaXTwitter size={24} />
                </Link>
              </li>
              <li>
                <Link to="/InProucation">
                  <FaWhatsapp size={24} />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.instagram.com/bwiscompltd?igsh=cjc1dTRqczkxMGV5"
                >
                  <FaInstagram size={24} />
                </Link>
              </li>
            </ul>
            <h4 className="text-white flex items-center mt-3">
              <Link to="/InProucation">info@bwiscompltd.com</Link>
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
              <ul className="flex items-start mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-white ">
                <li>
                  <Link to="/InProucation">
                    <FaLinkedinIn size={23} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/bwiscompltd/"
                  >
                    <FaFacebookF size={23} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://x.com/bwiscompltd?t=kvtAioCB94muIDpQOzXcpA&s=09"
                  >
                    <FaXTwitter size={23} />
                  </Link>
                </li>
                <li>
                  <Link to="/InProucation">
                    <FaWhatsapp size={23} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/bwiscompltd?igsh=cjc1dTRqczkxMGV5"
                  >
                    <FaInstagram size={23} />
                  </Link>
                </li>
              </ul>
              <Link
                to="/InProucation"
                className="text-white flex items-center mt-7 underline hover:no-underline "
              >
                info@bwiscompltd.com
              </Link>
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
                    <Link to="/InProucation" className="hover:underline ">
                      {t("Publications1")}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/InProucation" className="hover:underline">
                      {t("Publications2")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/InProucation" className="hover:underline">
                      {t("Publications3")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t("footerLink1")}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/InProucation" className="hover:underline">
                      {t("departmentLinks")}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/InProucation" className="hover:underline">
                      {t("departmentLinks1")}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/InProucation" className="hover:underline">
                      {t("departmentLinks2")}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/InProucation" className="hover:underline">
                      {t("departmentLinks3")}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/InProucation" className="hover:underline">
                      {t("departmentLinks4")}
                    </Link>
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
