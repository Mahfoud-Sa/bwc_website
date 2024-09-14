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
import { NavLink } from "react-router-dom";
export default function SideNab() {
  const [publishes, setPublishes] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  return (
    <div className="w-full h-full text-end overflow-y-auto">
      {dir === "ltr" ? (
        <>
          <ul
            className={`w-full mb-5 px-3 duration-500 ease-in-out ${"min-h-[30%]"} `}
          >
            <div className="float-end w-[90%] h-[1px] bg-[#E5E5E5] mb-3"></div>
            <p className="text-[12px] text-end text-[#9E9E9E]">Publications</p>
            <NavLink to="/admin-dashboard/en-references">
              <li className="mt-1 p-2 rounded-md flex justify-end items-center">
                References
                <i className="mr-2">
                  <Refernce />
                </i>
              </li>
            </NavLink>

            <NavLink to={"/admin-dashboard/reports"}>
              <li className="mt-1 py-2 px-1 rounded-md flex justify-end items-center">
                Reports
                <i className="mr-2">
                  <Reports />
                </i>
              </li>
            </NavLink>

            <h1
              className="hover:bg-[rgb(213,174,120)]/[.20] rounded-md p-2  hover:text-[#D5AE78] cursor-pointer flex justify-between items-center"
              onClick={() => setPublishes((open) => !open)}
            >
              <div>
                {publishes === false ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              <div className="flex">
                Publications
                <i className="mr-2">
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
                <NavLink to={"/admin-dashboard/publications"}>
                  <li className="px-5 mt-1 p-2 rounded-md flex justify-end items-center">
                    Publications
                    <i className="mr-2">
                      <img src={NewsIcon} alt="" />
                    </i>
                  </li>
                </NavLink>
                <NavLink to={"/admin-dashboard/news"}>
                  <li className="px-5 mt-1 p-2 rounded-md flex justify-end items-center">
                    News
                    <i className="mr-2">
                      <img src={NewsIcon2} alt="" />
                    </i>
                  </li>
                </NavLink>
                <NavLink to={"/admin-dashboard/analysis"}>
                  <li className="px-5 mt-1 p-2 rounded-md flex justify-end items-center">
                    Analysis
                    <i className="mr-2">
                      <StudiesIcon />
                    </i>
                  </li>
                </NavLink>
              </ul>
            )}
          </ul>

          <ul className="w-full min-h-[25%]  mb-5 px-3">
            <div className="float-end w-[90%] h-[1px] bg-[#E5E5E5] mb-3"></div>
            <p className="text-[12px] text-end text-[#9E9E9E]">
              Organizations and Employees
            </p>
            <NavLink to={"/admin-dashboard/taskforce"}>
              <li className="px-3 mt-1 p-2 flex justify-end items-center">
                Task Force
                <i className="mr-2">
                  <img src={Teams} alt="" />
                </i>
              </li>
            </NavLink>
            <NavLink to={"/admin-dashboard/organization"}>
              <li className="px-3 mt-1 p-2 flex justify-end items-center">
                Institutions We Manage
                <i className="mr-2">
                  <Orgnaztion />
                </i>
              </li>
            </NavLink>
            <li className="px-3 mt-1 p-2 flex justify-end items-center">
              Our Partners
              <i className="mr-2">
                <Massage />
              </i>
            </li>
            <NavLink to={"/admin-dashboard/writer"}>
              <li className="px-3 mt-1 p-2 flex justify-end items-center">
                Writers
                <i className="mr-2">
                  <Massage />
                </i>
              </li>
            </NavLink>
          </ul>

          <ul className="w-full min-h-[30%] px-3">
            <div className="float-end w-[90%] h-[1px] bg-[#E5E5E5] mb-3"></div>
            <p className="text-[12px] text-end text-[#9E9E9E]">Features</p>
            <NavLink to={"/admin-dashboard/jobs"}>
              <li className="px-3 mt-1 p-2 rounded-md flex justify-end items-center">
                Job
                <i className="mr-2">
                  <img src={Busniess} alt="" />
                </i>
              </li>
            </NavLink>
            <NavLink to={"/admin-dashboard/services"}>
              <li className="px-3 mt-1 p-2 rounded-md flex justify-end items-center">
                Our Services
                <i className="mr-2">
                  <img src={Service} alt="" />
                </i>
              </li>
            </NavLink>
            <NavLink to={"/admin-dashboard/profile"}>
              <li className="px-3 mt-1 p-2 flex justify-end items-center">
                Portfolio
                <i className="mr-2">
                  <OurFiles />
                </i>
              </li>
            </NavLink>
          </ul>
        </>
      ) : (
        <>
          <ul
            className={`w-full mb-5 px-3 duration-500 ease-in-out ${"min-h-[30%]"} `}
          >
            <div className="float-start w-[90%] h-[1px] bg-[#E5E5E5] mb-3"></div>
            <p className="text-[12px] text-right text-[#9E9E9E]">المنشورات</p>
            <NavLink to="/admin-dashboard/references">
              <li className="mt-1 p-2 rounded-md flex justify-start items-center">
                <i className="ml-2">
                  <Refernce />
                </i>
                المراجع
              </li>
            </NavLink>
            <NavLink to={"/admin-dashboard/reports"}>
              <li className="mt-1 py-2 px-1 rounded-md flex justify-start items-center">
                <i className="ml-2">
                  <Reports />
                </i>
                التقارير
              </li>
            </NavLink>
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
                <NavLink to={"/admin-dashboard/publications"}>
                  <li className="px-5 mt-1 p-2 rounded-md flex justify-start items-center">
                    <i className="ml-2">
                      <img src={NewsIcon} alt="" />
                    </i>
                    المنشورات
                  </li>
                </NavLink>
                <NavLink to={"/admin-dashboard/news"}>
                  <li className="px-5 mt-1 p-2 rounded-md flex justify-start items-center">
                    <i className="ml-2">
                      <img src={NewsIcon2} alt="" />
                    </i>
                    الاخبار
                  </li>
                </NavLink>
                <NavLink to={"/admin-dashboard/analysis"}>
                  <li className="px-5 mt-1 p-2 rounded-md flex justify-start items-center">
                    <i className="ml-2">
                      <StudiesIcon />
                    </i>
                    التحاليل
                  </li>
                </NavLink>
              </ul>
            )}
          </ul>

          <ul className="w-full min-h-[25%]  mb-5 px-3">
            <div className="float-start w-[90%] h-[1px] bg-[#E5E5E5] mb-3"></div>
            <p className="text-[12px] text-start text-[#9E9E9E]">
              المؤسسات و الموظفين
            </p>
            <NavLink to={"/admin-dashboard/taskforce"}>
              <li className="px-3 mt-1 p-2 flex justify-start items-center">
                <i className="ml-2">
                  <img src={Teams} alt="" />
                </i>
                فريق العمل
              </li>
            </NavLink>
            <NavLink to={"/admin-dashboard/organization"}>
              <li className="px-3 mt-1 p-2 flex justify-start items-center">
                <i className="ml-2">
                  <Orgnaztion />
                </i>
                المؤسسات التي نديرها
              </li>
            </NavLink>
            <li className="px-3 mt-1 p-2 flex justify-start items-center">
              <i className="ml-2">
                <Massage />
              </i>
              شركائنا
            </li>
            <NavLink to={"/admin-dashboard/writer"}>
              <li className="px-3 mt-1 p-2 flex justify-start items-center">
                <i className="ml-2">
                  <Massage />
                </i>
                الكُتَّاب
              </li>
            </NavLink>
          </ul>

          <ul className="w-full min-h-[30%] px-3">
            <div className="float-start w-[90%] h-[1px] bg-[#E5E5E5] mb-3"></div>
            <p className="text-[12px] text-start text-[#9E9E9E]">المزايا</p>
            <NavLink to={"/admin-dashboard/jobs"}>
              <li className="px-3 mt-1 p-2 rounded-md flex justify-start items-center">
                <i className="ml-2">
                  <img src={Busniess} alt="" />
                </i>
                الوظائف
              </li>
            </NavLink>
            <NavLink to={"/admin-dashboard/services"}>
              <li className="px-3 mt-1 p-2 rounded-md flex justify-start items-center">
                <i className="ml-2">
                  <img src={Service} alt="" />
                </i>
                خدماتنا
              </li>
            </NavLink>
            <NavLink to={"/admin-dashboard/profile"}>
              <li className="px-3 mt-1 p-2 flex justify-start items-center">
                <i className="ml-2">
                  <OurFiles />
                </i>
                ملف تعريقي لاعمالنا
              </li>
            </NavLink>
          </ul>
        </>
      )}
    </div>
  );
}
