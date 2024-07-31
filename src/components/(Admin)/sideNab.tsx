import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Refernce from "../../assets/icons/refernce";
import Reports from "../../assets/icons/reports";
import PublichesIcon from "../../assets/icons/publiches-icon";
import StudiesIcon from "../../assets/icons/studies-icon";
import NewsIcon from "../../assets/img/newspaper 1.png";
import NewsIcon2 from "../../assets/img/newspaper 2.png";
import Teams from "../../assets/img/team(2) 1.png";
import Busniess from "../../assets/img/businessman(1) 1.png";
import Service from "../../assets/img/service(1) 1.png";
import Orgnaztion from "../../assets/icons/orgnaztion";
import Massage from "../../assets/icons/massage";
import OurFiles from "../../assets/icons/files";
import { useTranslation } from "react-i18next";
export default function SideNab() {
  const [publishes, setPublishes] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  return (
    <div className="w-full h-full text-end overflow-y-auto">
      {dir === "ltr" ? (
        <>
          <ul
            className={`w-full mb-5 px-3 duration-500 ease-in-out ${
              publishes ? "min-h-[40%]" : "h-[20%]"
            } `}
          >
            <div className="float-end w-[90%] h-[1px] bg-[#E5E5E5] mb-3"></div>
            <p className="text-[12px] text-[#9E9E9E]">المنشورات</p>
            <li className="mt-1 p-2 rounded-md flex justify-end items-center">
              المراجع
              <i className="ml-2">
                <Refernce />
              </i>
            </li>
            <li className="mt-1 py-2 px-1 rounded-md flex justify-end items-center">
              التقارير
              <i className="ml-2">
                <Reports />
              </i>
            </li>
            <h1
              className="hover:bg-[rgb(213,174,120)]/[.20] rounded-md p-2  hover:text-[#D5AE78] cursor-pointer flex justify-between items-center"
              onClick={() => setPublishes((open) => !open)}
            >
              <div>
                {publishes === false ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              <div className="flex">
                المنشورات
                <i className="ml-2">
                  <PublichesIcon />
                </i>
              </div>
            </h1>
            {publishes && (
              <ul
                className={`w-full flex flex-col mt-1 transition-all duration-500 ease-in-out ${
                  publishes ? "max-height-[200px]" : "max-height-0"
                }`}
              >
                <li className="px-5 mt-1 p-2 rounded-md flex justify-end items-center">
                  المنشورات
                  <i className="ml-2">
                    <img src={NewsIcon} alt="" />
                  </i>
                </li>
                <li className="px-5 mt-1 p-2 rounded-md flex justify-end items-center">
                  الاخبار
                  <i className="ml-2">
                    <img src={NewsIcon2} alt="" />
                  </i>
                </li>
                <li className="px-5 mt-1 p-2 rounded-md flex justify-end items-center">
                  التحاليل
                  <i className="ml-2">
                    <StudiesIcon />
                  </i>
                </li>
              </ul>
            )}
          </ul>

          <ul className="w-full min-h-[25%]  mb-5 px-3">
            <div className="float-end w-[90%] h-[1px] bg-[#E5E5E5] mb-3"></div>
            <p className="text-[12px] text-[#9E9E9E]">المؤسسات و الموزفين</p>
            <li className="px-5 mt-1 p-2 flex justify-end items-center">
              فريق العمل
              <i className="ml-2">
                <img src={Teams} alt="" />
              </i>
            </li>
            <li className="px-5 mt-1 p-2 flex justify-end items-center">
              المؤسسات التي نديرها
              <i className="ml-2">
                <Orgnaztion />
              </i>
            </li>
            <li className="px-5 mt-1 p-2 flex justify-end items-center">
              شركائنا
              <i className="ml-2">
                <Massage />
              </i>
            </li>
            <li className="px-5 mt-1 p-2 flex justify-end items-center">
              الكُتَّاب
              <i className="ml-2">
                <Massage />
              </i>
            </li>
          </ul>

          <ul className="w-full min-h-[30%] px-3">
            <div className="float-end w-[90%] h-[1px] bg-[#E5E5E5] mb-3"></div>
            <p className="text-[12px] text-[#9E9E9E]">المزايا</p>
            <li className="px-5 mt-1 p-2 rounded-md flex justify-end items-center">
              الوظائف
              <i className="ml-2">
                <img src={Busniess} alt="" />
              </i>
            </li>
            <li className="px-5 mt-1 p-2 rounded-md flex justify-end items-center">
              خدماتنا
              <i className="ml-2">
                <img src={Service} alt="" />
              </i>
            </li>
            <li className="px-5 mt-1 p-2 flex justify-end items-center">
              ملف تعريقي لاعمالنا
              <i className="ml-2">
                <OurFiles />
              </i>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul
            className={`w-full mb-5 px-3 duration-500 ease-in-out ${"min-h-[40%]"} `}
          >
            <div className="float-start w-[90%] h-[1px] bg-[#E5E5E5] mb-3"></div>
            <p className="text-[12px] text-right text-[#9E9E9E]">المنشورات</p>
            <li className="mt-1 p-2 rounded-md flex justify-start items-center">
              <i className="ml-2">
                <Refernce />
              </i>
              المراجع
            </li>
            <li className="mt-1 py-2 px-1 rounded-md flex justify-start items-center">
              <i className="ml-2">
                <Reports />
              </i>
              التقارير
            </li>
            <h1
              className="hover:bg-[rgb(213,174,120)]/[.20] rounded-md p-2  hover:text-[#D5AE78] cursor-pointer flex justify-between items-center"
              onClick={() => setPublishes((open) => !open)}
            >
              <div className="flex">
                <i className="ml-2">
                  <PublichesIcon />
                </i>
                المنشورات
              </div>
              <div>
                {publishes === false ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </h1>
            {publishes && (
              <ul
                className={`w-full flex flex-col mt-1 transition-all duration-500 ease-in-out ${
                  publishes ? "max-height-[200px]" : "max-height-0"
                }`}
              >
                <li className="px-5 mt-1 p-2 rounded-md flex justify-start items-center">
                  <i className="ml-2">
                    <img src={NewsIcon} alt="" />
                  </i>
                  المنشورات
                </li>
                <li className="px-5 mt-1 p-2 rounded-md flex justify-start items-center">
                  <i className="ml-2">
                    <img src={NewsIcon2} alt="" />
                  </i>
                  الاخبار
                </li>
                <li className="px-5 mt-1 p-2 rounded-md flex justify-start items-center">
                  <i className="ml-2">
                    <StudiesIcon />
                  </i>
                  التحاليل
                </li>
              </ul>
            )}
          </ul>

          <ul className="w-full min-h-[25%]  mb-5 px-3">
            <div className="float-start w-[90%] h-[1px] bg-[#E5E5E5] mb-3"></div>
            <p className="text-[12px] text-start text-[#9E9E9E]">المؤسسات و الموزفين</p>
            <li className="px-3 mt-1 p-2 flex justify-start items-center">
              <i className="ml-2">
                <img src={Teams} alt="" />
              </i>
              فريق العمل
            </li>
            <li className="px-3 mt-1 p-2 flex justify-start items-center">
              <i className="ml-2">
                <Orgnaztion />
              </i>
              المؤسسات التي نديرها
            </li>
            <li className="px-3 mt-1 p-2 flex justify-start items-center">
              <i className="ml-2">
                <Massage />
              </i>
              شركائنا
            </li>
            <li className="px-3 mt-1 p-2 flex justify-start items-center">
              <i className="ml-2">
                <Massage />
              </i>
              الكُتَّاب
            </li>
          </ul>

          <ul className="w-full min-h-[30%] px-3">
            <div className="float-start w-[90%] h-[1px] bg-[#E5E5E5] mb-3"></div>
            <p className="text-[12px] text-start text-[#9E9E9E]">المزايا</p>
            <li className="px-3 mt-1 p-2 rounded-md flex justify-start items-center">
              <i className="ml-2">
                <img src={Busniess} alt="" />
              </i>
              الوظائف
            </li>
            <li className="px-3 mt-1 p-2 rounded-md flex justify-start items-center">
              <i className="ml-2">
                <img src={Service} alt="" />
              </i>
              خدماتنا
            </li>
            <li className="px-3 mt-1 p-2 flex justify-start items-center">
              <i className="ml-2">
                <OurFiles />
              </i>
              ملف تعريقي لاعمالنا
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
