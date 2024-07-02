import React, { useState } from "react";
import adminLogo from "../../assets/img/admin_admin.png";
import Avter from "../../assets/img/avtar.png";
import { useTranslation } from "react-i18next";
import LanguageWorld from "../../assets/icons/language-world";
import DropDownLang from "./../dropDownLang";
import ArrowDowm from "../../assets/icons/arrow-dowm";
export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [isdropDownOpen, setIsdropDownOpen] = useState(false);
  const [isLogoutDropDown, setLogoutDropDown] = useState(false);
  const dir = i18n.dir();
  return (
    <>
      <div className="w-[15%] h-full flex">
        <div className="w-[75%] flex text-white justify-center  items-center ">
          <div
            className="w-[24%] mr-1 flex justify-end cursor-pointer relative"
            onClick={() => setLogoutDropDown((prvIndex) => !prvIndex)}
          >
            <ArrowDowm />
            {isLogoutDropDown && (
              <div
              className={
                dir === "ltr"
                  ? "flex flex-col logout"
                  : "flex flex-col logout-rigth"
              }
            >
              <ul className="flex flex-col gap-4">
                <li>Logout</li>
              </ul>
            </div>
            )}
          </div>
          <div className="w-[20%] h-[50%] rounded-full ">
            <img
              src={Avter}
              alt=""
              className="rounded-full h-[100%] w-[100%]"
            />
          </div>
          <div className="w-[54%] ml-1 m-auto text-sm text-black">
            محفوظ بن سباح
          </div>
        </div>
        <div className="w-[25%]  flex justify-center items-center relative">
          <div
            className={dir === "ltr" ? "cursor-pointer mr-5 text-2xl font-black" : "cursor-pointer ml-5 text-xl font-black"}
            onClick={() => setIsdropDownOpen((prevValue) => !prevValue)}
          >
            {dir === "ltr" ? "EN" : "عربي"}
            {isdropDownOpen && <DropDownLang />}
          </div>

          <div
            className="cursor-pointer"
            onClick={() => setIsdropDownOpen((prevValue) => !prevValue)}
          >
            <LanguageWorld color="black" />
          </div>
        </div>
      </div>
      <div className="w-[70%]  h-full"></div>
      <div className="w-[15%] h-full flex justify-between items-center">
        <div className="w-[1px] h-[70%] bg-[#D4D4D4] float-end"></div>
        <div className="w-[80%] mr-7">
          <img src={adminLogo} alt="" className="w-[100%] h-[80%]" />
        </div>
      </div>
    </>
  );
}
