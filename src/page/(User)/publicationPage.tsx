import React, { useState } from "react";
import CarouselsReport from "src/components/carouselsReport";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import sliderImagePlaceholder from "../../assets/img/news_1.jpg";
import sliderImagePlaceholder1 from "../../assets/img/news_2.jpg";
import { CalendarMinus2Icon, MoveLeft, MoveRight } from "lucide-react";
import { Input } from "src/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/ui/select";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getApi } from "src/lib/http";
import { useTranslation } from "react-i18next";
import formattedDateEn from "src/utilities/formattedDateEn";
import formattedDate from "src/utilities/formattedDate";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ar";
interface publish {
  imgs: string;
  title: string;
  publish_date: Date;
  writers?:
    | {
        name?: string | undefined;
        img?: string | undefined;
      }
    | undefined;
}

const publishes: publish[] = [
  {
    imgs: sliderImagePlaceholder,
    title:
      "تعمل شركة عالم الأعمال للاستثمار والدراسات على تمكين المستثمرين وأصحاب الأعمال لإدارة وتشغيل مشاريعهم الاستثمارية في حضرموت وفق أحدث النظم والأساليب الإدارية الحديثة والمبتكرة",
    publish_date: new Date("2024-03-9"),
    // writers: { name: "حمود احمد سيف العطاس", img: writerImagePlaceholder },
  },
  {
    imgs: sliderImagePlaceholder1,
    title:
      "مدير عام بنك بن دول للتمويل الأصغر الإسلامي يزور شركة عالم الأعمال للاستثمار والدراسات وأكاديمية بريميوم للقيادة والإدارة. ",
    publish_date: new Date("2024-03-1"),
    // writers: { name: "حمود احمد سيف العطاس", img: writerImagePlaceholder },
  },
];

export interface sidInfo {
  id: number;
  ar_Title: string;
  en_Title: string;
  b_image: string;
  date_of_publish: Date;
  type: string;
}

interface PostCardProps {
  image: string;
  title: string;
  timeAgo: string;
  author: string;
  description: string;
}
export interface PublicationResp {
  id: number;
  type: Type;
  ar_Title: null | string;
  en_Title: null | string;
  b_image: string;
  images: string[];
  writers: Writer[];
  reportId: null;
  report: null;
  publish: boolean;
  t2read: number;
  tags: string[];
  date_of_publish: Date;
  ar_table_of_content: string[];
  en_table_of_content: string[];
  ar_description: null | string;
  en_description: null | string;
  ar_Note: null | string;
  en_Note: null | string;
  references: any[];
}
export interface Writer {
  id: number;
  ar_fullName: string;
  en_fullName: string;
  image: string;
  ar_description: string;
  en_description: string;
  ar_role: string;
  en_role: string;
  publication: null[];
  soicalmedia: any[];
}
export enum Type {
  Analysis = "analysis",
  News = "news",
  Publish = "publish",
}

const PublicationPage = () => {
  dayjs.extend(relativeTime);
  dayjs.locale("ar");
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState("all");
  const [isAscending, setIsAscending] = useState(false);
  // const [date, setDate] = React.useState<Date>();
  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleAscendingChange = (value: string) => {
    setIsAscending(value === "oldest");
  };

  const { data: PubResp } = useQuery({
    queryKey: ["ManagingPublications", searchQuery, isAscending, selectedValue],
    queryFn: () =>
      getApi<PublicationResp[]>(
        `/api/website/Publications?query=${searchQuery}&type=${selectedValue}&ascending=${isAscending}`
      ),
  });

  const { data: SidInfoResp } = useQuery({
    queryKey: ["ReadMore"],
    queryFn: () => getApi<sidInfo[]>(`/api/website/Publications/ReadMore/5`),
  });
  console.log("SidInfoResp", SidInfoResp?.data);
  const itemsPerPage = 3; // Display 3 posts per page
  const totalItems = PubResp?.data.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = PubResp?.data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Pagination button logic
  const getPaginationNumbers = () => {
    const pages = [];
    const maxPageButtons = 3;

    if (totalPages <= maxPageButtons + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 1) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };
  const getRelativeTime = (date: string | Date, language: string): string => {
    dayjs.locale(language);
    return dayjs().to(dayjs(date));
  };
  return (
    <>
      {dir === "ltr" ? (
        <>
          <div className="w-full lg:h-[8vh] md:h-[8vh]  sm:h-[11vh]">
            <Navbar />
          </div>
          <main className="px-5">
            <div className="w-full h-36 flex justify-end items-center ">
              <div className="flex py-5 ">
                <h1 className="text-3xl">Publications</h1>
                <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
              </div>
            </div>
            <div className=" grid grid-cols-3 gap-3">
              <div dir="ltr" className=" col-span-3 md:col-span-1">
                <div className="p-3 bg-[#D5AE78] rounded-[8px] text-start">
                  <h1 className="font-bold">Read also in publications</h1>
                </div>

                <div className="border-[2px] border-[#D2D2D2] rounded-lg p-2 mt-2">
                  {SidInfoResp?.data.map((item, index) => (
                    <Link
                      to={
                        item.type === "publish"
                          ? `/publish-details/${item.id}`
                          : item.type === "news"
                          ? `/news-details/${item.id}`
                          : item.type === "analysis"
                          ? `/Analysis-details/${item.id}`
                          : ""
                      }
                      className="flex mt-4 gap-2 shadow-sm hover:bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={item.b_image}
                        className="w-[92px] h-[70.18px] object-cover rounded-sm"
                      />
                      <div className="flex flex-col">
                        <span>{item.en_Title}</span>
                        <span className="flex font-normal text-sm gap-2 mt-2">
                          <CalendarMinus2Icon size={19} />
                          {`${getRelativeTime(item.date_of_publish, "en")} ago`}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className=" col-span-3 md:col-span-2">
                <CarouselsReport />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-3">
              <div className=" col-span-4 md:col-span-1">
                <div className=" col-span-4 md:col-span-1">
                  <Select dir="ltr" onValueChange={handleAscendingChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="select Publication order" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oldest">oldest</SelectItem>
                      <SelectItem value="newest">newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className=" col-span-4 md:col-span-1">
                <Select
                  dir="ltr"
                  onValueChange={(value) => setSelectedValue(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="search by type " />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="publish">publish</SelectItem>
                    <SelectItem value="news">news</SelectItem>
                    <SelectItem value="analysis">analysis</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className=" col-span-4 md:col-span-2">
                <Input
                  dir="ltr"
                  type="text"
                  id="simple-search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className=" rounded-[32.5px]"
                  placeholder="Search by the name of the publication"
                />
              </div>
            </div>

            <div className="">
              {/* Render currentItems */}
              {currentItems?.map((item, index) => (
                <div key={index} dir="ltr" className="mt-6">
                  <div className="shadow p-6 rounded-lg flex flex-col lg:flex-row gap-6 bg-white">
                    <div className="w-full h-[300px] md:w-[455px] md:h-[300px] overflow-hidden rounded-md">
                      <img
                        src={item.b_image}
                        className="object-cover w-full h-full"
                        alt="Post Image"
                      />
                    </div>

                    <div className="w-full">
                      <h1 className="text-2xl font-bold text-gray-800">
                        {item.en_Title}
                      </h1>
                      <p className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                        <CalendarMinus2Icon size={19} />
                        {formattedDateEn(new Date(item.date_of_publish))}
                      </p>
                      <p
                        className={
                          item.type === "publish"
                            ? "inline-block bg-[#FFDAA0]/[.35] rounded-[5px] px-3 text-sm font-semibold text-[#CEA461] mt-2"
                            : item.type === "news"
                            ? "inline-block bg-[#C5FFBC]/[.35] rounded-[5px] px-3 text-sm font-semibold text-[#69DB57] mt-2"
                            : item.type === "analysis"
                            ? "inline-block bg-[#DBDBDB]/[.35] rounded-[5px] px-3 text-sm font-semibold text-[#979797] mt-2"
                            : ""
                        }
                      >
                        {item.type}
                      </p>
                      {item.type === "news" ? (
                        <div className="h-20"></div>
                      ) : (
                        <div className="flex flex-wrap">
                          {item.writers.map((writersPub, index) => (
                            <div className="flex items-center gap-3 my-4">
                              <img
                                src={writersPub.image}
                                className="rounded-full object-cover w-[40px] h-[40px]"
                                alt="Author"
                              />
                              <h1 className="font-medium text-gray-700">
                                {writersPub.en_fullName}
                              </h1>
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="text-gray-600 text-base leading-6 publicationEn">
                        {item.type === "news" ? (
                          <>
                            {item?.en_description && (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.en_description,
                                }}
                              />
                            )}
                          </>
                        ) : (
                          <>{item.en_Note}</>
                        )}
                      </p>
                      <Link
                        to={
                          item.type === "publish"
                            ? `/publish-details/${item.id}`
                            : item.type === "news"
                            ? `/news-details/${item.id}`
                            : item.type === "analysis"
                            ? `/Analysis-details/${item.id}`
                            : ""
                        }
                      >
                        <button className="bg-[#E3E3E3] text-center w-full mt-6 py-3 rounded-md">
                          Read More ...
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-[#CCA972] h-1 w-full mt-4"></div>
                </div>
              ))}

              {/* Pagination controls */}
              <div dir="ltr" className="mt-4 flex justify-between space-x-2">
                <button
                  className="md:px-4 md:py-2 sm:px-4 sm:py-2 sm:h-10 flex items-center border border-black text-black rounded-md hover:bg-[#d5ae78] hover:text-white"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <h6>prev</h6>
                  <MoveLeft className="ml-2" />
                </button>

                <div className="md:pr-0 sm:pr-5">
                  {getPaginationNumbers().map((page, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded ml-1 ${
                        currentPage === page
                          ? "bg-[#d5ae78] rounded-md  text-white"
                          : "bg-white border border-black  rounded-md text-black hover:bg-[#d5ae78] hover:text-white"
                      }`}
                      onClick={() => typeof page === "number" && paginate(page)}
                      disabled={typeof page !== "number"}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  className="md:px-4 md:py-2 sm:px-4 sm:py-2 sm:h-10 border flex items-center border-black text-black rounded-md hover:bg-[#d5ae78] hover:text-white"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <h6>next</h6>
                  <MoveRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          </main>
          <footer className="min-h-[65vh] p-2 overflow-hidden relative bg-black mt-10">
            <Footer />
          </footer>
        </>
      ) : (
        <>
          <div className="w-full lg:h-[8vh] md:h-[8vh]  sm:h-[11vh]">
            <Navbar />
          </div>
          <main className="px-5">
            <div className="w-full h-36 flex justify-start items-center ">
              <div className="flex py-5 ">
                <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                <h1 className="text-3xl">المنشورات</h1>
              </div>
            </div>
            <div className=" grid grid-cols-3 gap-3">
              <div className=" col-span-3 md:col-span-2">
                <CarouselsReport />
              </div>
              <div className=" col-span-3 md:col-span-1">
                <div className="p-3 bg-[#D5AE78] rounded-[8px]">
                  <h1 className="font-bold">اقرأ أيضًا في المنشورات</h1>
                </div>
                <div className="border-[2px] border-[#D2D2D2] rounded-lg p-2 mt-2">
                  {SidInfoResp?.data.map((item, index) => (
                    <Link
                      to={
                        item.type === "publish"
                          ? `/publish-details/${item.id}`
                          : item.type === "news"
                          ? `/news-details/${item.id}`
                          : item.type === "analysis"
                          ? `/Analysis-details/${item.id}`
                          : ""
                      }
                      className="flex mt-4 gap-2 shadow-sm hover:bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={item.b_image}
                        className="w-[92px] h-[70.18px] object-cover rounded-sm"
                      />
                      <div className="flex flex-col">
                        <span>{item.ar_Title}</span>
                        <span className="flex font-normal text-sm gap-2 mt-2">
                          <CalendarMinus2Icon size={19} />
                          {`قبل ${getRelativeTime(item.date_of_publish, "ar")}`}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-3">
              <div className=" col-span-4 md:col-span-2">
                <Input
                  className=" rounded-[32.5px]"
                  placeholder="بحث باسم المنشور"
                  type="text"
                  id="simple-search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <div className=" col-span-4 md:col-span-1">
                <Select
                  dir="rtl"
                  onValueChange={(value) => setSelectedValue(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="ابحث بالنوع " />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="all">الكل</SelectItem>
                    <SelectItem value="publish">مشنورات</SelectItem>
                    <SelectItem value="news">الاخبار</SelectItem>
                    <SelectItem value="analysis">تحليلات</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className=" col-span-4 md:col-span-1">
                <div className=" col-span-4 md:col-span-1">
                  <Select dir="rtl" onValueChange={handleAscendingChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="فلتر بالتاريخ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oldest">الاقدم</SelectItem>
                      <SelectItem value="newest">الاحدث</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="">
              {/* Render currentItems */}
              {currentItems?.map((item, index) => (
                <div key={index} className="mt-6 ">
                  <div className="shadow p-6 rounded-lg flex flex-col lg:flex-row gap-6 min-h-80 ">
                    <div className="w-full h-[300px] md:w-[455px] md:h-[300px] overflow-hidden rounded-md">
                      <img
                        src={item.b_image}
                        className="object-cover w-full h-full"
                        alt="Post Image"
                      />
                    </div>

                    <div className="w-full h-[300px] relative ">
                      <h1 className="text-2xl font-bold text-gray-800">
                        {item.ar_Title}
                      </h1>
                      <p className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                        <CalendarMinus2Icon size={19} />
                        {formattedDateEn(new Date(item.date_of_publish))}
                      </p>
                      <p
                        className={
                          item.type === "publish"
                            ? "inline-block bg-[#FFDAA0]/[.35] rounded-[5px] px-3 text-sm font-semibold text-[#CEA461] mt-2"
                            : item.type === "news"
                            ? "inline-block bg-[#C5FFBC]/[.35] rounded-[5px] px-3 text-sm font-semibold text-[#69DB57] mt-2"
                            : item.type === "analysis"
                            ? "inline-block bg-[#DBDBDB]/[.35] rounded-[5px] px-3 text-sm font-semibold text-[#979797] mt-2"
                            : ""
                        }
                      >
                        {item.type === "publish"
                          ? "منشور"
                          : item.type === "news"
                          ? "الاخبار"
                          : item.type === "analysis"
                          ? "تحليلات"
                          : ""}
                      </p>
                      {item.type === "news" ? (
                        <div className="h-20"></div>
                      ) : (
                        <div className="flex flex-wrap">
                          {item.writers.map((writersPub, index) => (
                            <div className="flex items-center gap-3 my-4">
                              <img
                                src={writersPub.image}
                                className="rounded-full object-cover w-[40px] h-[40px]"
                                alt="Author"
                              />
                              <h1 className="font-medium text-gray-700">
                                {writersPub.ar_fullName}
                              </h1>
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="text-gray-600 text-base leading-6 publication">
                        {item.type === "news" ? (
                          <>
                            {item?.ar_description && (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.ar_description,
                                }}
                              />
                            )}
                          </>
                        ) : (
                          <>{item.ar_Note}</>
                        )}
                      </p>
                      <Link
                        to={
                          item.type === "publish"
                            ? `/publish-details/${item.id}`
                            : item.type === "news"
                            ? `/news-details/${item.id}`
                            : item.type === "analysis"
                            ? `/Analysis-details/${item.id}`
                            : ""
                        }
                        className="absolute bottom-4 w-full"
                      >
                        <button className="bg-[#E3E3E3] text-center w-full mt-6 py-3 rounded-md">
                          إقراء المزيد ...
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-[#CCA972] h-1 w-full mt-4"></div>
                </div>
              ))}

              {/* Pagination controls */}
              <div className="mt-4 flex justify-between space-x-2">
                <button
                  className="md:px-4 md:py-2 sm:px-4 sm:py-2 sm:h-10 flex items-center border border-black text-black rounded-md hover:bg-[#d5ae78] hover:text-white"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <MoveRight size={20} className="ml-2" />
                  <h6>السابق</h6>
                </button>

                <div className="md:pr-0 sm:pr-5">
                  {getPaginationNumbers().map((page, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded ml-1 ${
                        currentPage === page
                          ? "bg-[#d5ae78] rounded-md  text-white"
                          : "bg-white border border-black  rounded-md text-black hover:bg-[#d5ae78] hover:text-white"
                      }`}
                      onClick={() => typeof page === "number" && paginate(page)}
                      disabled={typeof page !== "number"}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  className="md:px-4 md:py-2 sm:px-4 sm:py-2 sm:h-10 border flex border-black text-black rounded-md hover:bg-[#d5ae78] hover:text-white"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <h6>التالي</h6>
                  <MoveLeft className="mr-2" />
                </button>
              </div>
            </div>
          </main>
          <footer className="min-h-[65vh] p-2 overflow-hidden relative bg-black mt-10">
            <Footer />
          </footer>
        </>
      )}
    </>
  );
};

export default PublicationPage;
