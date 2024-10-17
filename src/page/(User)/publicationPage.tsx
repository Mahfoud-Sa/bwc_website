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
  writers: any[];
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

export enum Type {
  Analysis = "analysis",
  News = "news",
  Publish = "publish",
}

const posts: PostCardProps[] = [
  {
    image: sliderImagePlaceholder,
    title: "التنمية قادمة: توخوا الحذر في تطلعاتكم",
    timeAgo: "قبل 22 ساعه",
    author: "حمود عبدالرقيب احمد سيف",
    description:
      "شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها الدكتور ربيع بن علي العوبثاني...",
  },
  {
    image: sliderImagePlaceholder,
    title: "التنمية قادمة: توخوا الحذر في تطلعاتكم",
    timeAgo: "قبل 22 ساعه",
    author: "حمود عبدالرقيب احمد سيف",
    description:
      "شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها الدكتور ربيع بن علي العوبثاني...",
  },
  {
    image: sliderImagePlaceholder,
    title: "التنمية قادمة: توخوا الحذر في تطلعاتكم",
    timeAgo: "قبل 22 ساعه",
    author: "حمود عبدالرقيب احمد سيف",
    description:
      "شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها الدكتور ربيع بن علي العوبثاني...",
  },
  {
    image: sliderImagePlaceholder,
    title: "التنمية قادمة: توخوا الحذر في تطلعاتكم",
    timeAgo: "قبل 22 ساعه",
    author: "حمود عبدالرقيب احمد سيف",
    description:
      "شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها الدكتور ربيع بن علي العوبثاني...",
  },
  {
    image: sliderImagePlaceholder,
    title: "التنمية قادمة: توخوا الحذر في تطلعاتكم",
    timeAgo: "قبل 22 ساعه",
    author: "حمود عبدالرقيب احمد سيف",
    description:
      "شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها الدكتور ربيع بن علي العوبثاني...",
  },
  {
    image: sliderImagePlaceholder,
    title: "التنمية قادمة: توخوا الحذر في تطلعاتكم",
    timeAgo: "قبل 22 ساعه",
    author: "حمود عبدالرقيب احمد سيف",
    description:
      "شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها الدكتور ربيع بن علي العوبثاني...",
  },
  {
    image: sliderImagePlaceholder,
    title: "التنمية قادمة: توخوا الحذر في تطلعاتكم",
    timeAgo: "قبل 22 ساعه",
    author: "حمود عبدالرقيب احمد سيف",
    description:
      "شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها الدكتور ربيع بن علي العوبثاني...",
  },
  {
    image: sliderImagePlaceholder,
    title: "التنمية قادمة: توخوا الحذر في تطلعاتكم",
    timeAgo: "قبل 22 ساعه",
    author: "حمود عبدالرقيب احمد سيف",
    description:
      "شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها الدكتور ربيع بن علي العوبثاني...",
  },
  {
    image: sliderImagePlaceholder,
    title: "التنمية قادمة: توخوا الحذر في تطلعاتكم",
    timeAgo: "قبل 22 ساعه",
    author: "حمود عبدالرقيب احمد سيف",
    description:
      "شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها الدكتور ربيع بن علي العوبثاني...",
  },
  {
    image: sliderImagePlaceholder,
    title: "التنمية قادمة: توخوا الحذر في تطلعاتكم",
    timeAgo: "قبل 22 ساعه",
    author: "حمود عبدالرقيب احمد سيف",
    description:
      "شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها الدكتور ربيع بن علي العوبثاني...",
  },

  {
    image: sliderImagePlaceholder,
    title: "00000000000",
    timeAgo: "قبل 22 ساعه",
    author: "حمود عبدالرقيب احمد سيف",
    description:
      "شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها الدكتور ربيع بن علي العوبثاني...",
  },

  // Add more objects as needed
];
const PublicationPage = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const [searchQuery, setSearchQuery] = useState("");
  const [isPublish, setIsPublish] = useState(false);
  const [isAscending, setIsAscending] = useState(true);
  // const [date, setDate] = React.useState<Date>();

  // const { control } = useForm({
  //   defaultValues: {
  //     dateField: new Date("2024-01-01"), // set a static date value here
  //   },
  // });
  const { data: PubResp } = useQuery({
    queryKey: ["ManagingPublications", searchQuery, isPublish, isAscending],
    queryFn: () =>
      getApi<PublicationResp[]>(
        `api/ManagingPublications?query=${searchQuery}&type=all&ascending=${isAscending}&publish=${isPublish}`
      ),
  });
  console.log("PubResp", PubResp?.data);
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
              <div className=" col-span-3 md:col-span-1">
                <div className="p-3 bg-[#D5AE78] rounded-[8px]">
                  <h1 className="font-bold">اقرأ أيضًا في التقارير</h1>
                </div>
                <div className="flex mt-4 gap-2 shadow-sm">
                  <img
                    src={sliderImagePlaceholder}
                    className="w-[92px] h-[70.18px] object-cover rounded-sm"
                  />
                  <div className="flex flex-col">
                    <span>التنمية قادمة: توخوا الحذر في تطلعاتكم</span>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </div>
                </div>
                <div className="flex mt-4 gap-2 shadow-sm">
                  <img
                    src={sliderImagePlaceholder}
                    className="w-[92px] h-[70.18px] object-cover rounded-sm"
                  />
                  <div className="flex flex-col">
                    <span>التنمية قادمة: توخوا الحذر في تطلعاتكم</span>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </div>
                </div>
                <div className="flex mt-4 gap-2 shadow-sm">
                  <img
                    src={sliderImagePlaceholder}
                    className="w-[92px] h-[70.18px] object-cover rounded-sm"
                  />
                  <div className="flex flex-col">
                    <span>التنمية قادمة: توخوا الحذر في تطلعاتكم</span>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </div>
                </div>
                <div className="flex mt-4 gap-2 shadow-sm">
                  <img
                    src={sliderImagePlaceholder}
                    className="w-[92px] h-[70.18px] object-cover rounded-sm"
                  />
                  <div className="flex flex-col">
                    <span>التنمية قادمة: توخوا الحذر في تطلعاتكم</span>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </div>
                </div>
                <div className="flex mt-4 gap-2 shadow-sm">
                  <img
                    src={sliderImagePlaceholder}
                    className="w-[92px] h-[70.18px] object-cover rounded-sm"
                  />
                  <div className="flex flex-col">
                    <span>التنمية قادمة: توخوا الحذر في تطلعاتكم</span>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </div>
                </div>
              </div>
              <div className=" col-span-3 md:col-span-2">
                <CarouselsReport publishes={publishes} />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-3">
              <div className=" col-span-4 md:col-span-1">
                <Input dir="ltr" type="date" />
              </div>
              <div className=" col-span-4 md:col-span-1">
                <Select dir="ltr">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Search by Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">2024</SelectItem>
                    <SelectItem value="dark">2023</SelectItem>
                    <SelectItem value="system">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className=" col-span-4 md:col-span-2">
                <Input
                  dir="ltr"
                  className=" rounded-[32.5px]"
                  placeholder="Search by the name of the publication"
                />
              </div>
            </div>

            <div className="">
              {/* Render currentItems */}
              {currentItems?.map((item, index) => (
                <div
                  key={index}
                  dir="ltr"
                  className="grid grid-cols-2 gap-3 mt-3"
                >
                  <div className="col-span-3 shadow p-3 rounded-sm ">
                    <div className="flex flex-col md:flex-row gap-3 ">
                      <img
                        src={item.b_image}
                        className="rounded-md object-fill w-full md:w-[455px] h-full md:h-[337px]"
                        alt="Post Image"
                      />
                      <div className="w-full">
                        <h1 className="text-[40px] font-bold">
                          {item.en_Title} + ${item.id}
                        </h1>
                        <p>
                          <span className="flex font-normal text-sm gap-2 mt-2">
                            <CalendarMinus2Icon size={19} />
                            {formattedDateEn(new Date(item.date_of_publish))}
                          </span>
                          <span
                            className={
                              item.type === "publish"
                                ? "inline-block bg-[#FFDAA0]/[.35] rounded-[5px] px-5  text-sm font-semibold text-[#CEA461] mr-2 mb-2"
                                : item.type === "news"
                                ? "inline-block bg-[#C5FFBC]/[.35] rounded-[5px] px-5  text-sm font-semibold text-[#69DB57] mr-2 mb-2"
                                : item.type === "analysis"
                                ? "inline-block bg-[#DBDBDB]/[.35] rounded-[5px] px-5  text-sm font-semibold text-[#979797] mr-2 mb-2"
                                : ""
                            }
                          >
                            {item.type}
                          </span>
                        </p>
                        <div className="flex items-center gap-2 my-4">
                          <img
                            src={item.b_image}
                            className="rounded-full object-cover w-[40px] h-[40px]"
                            alt="Author"
                          />
                          <h1>{item.ar_Title}</h1>
                        </div>
                        <p className="text-base publication">
                          {item?.en_description && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.en_description,
                              }}
                            />
                          )}
                        </p>
                        <Link to={`/publish-details/${item.id}`}>
                          <button className="bg-[#E3E3E3] text-center w-full mt-6 py-3">
                            Read more...
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
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
                <CarouselsReport publishes={publishes} />
              </div>
              <div className=" col-span-3 md:col-span-1">
                <div className="p-3 bg-[#D5AE78] rounded-[8px]">
                  <h1 className="font-bold">اقرأ أيضًا في التقارير</h1>
                </div>
                <div className="flex mt-4 gap-2 shadow-sm">
                  <img
                    src={sliderImagePlaceholder}
                    className="w-[92px] h-[70.18px] object-cover rounded-sm"
                  />
                  <div className="flex flex-col">
                    <span>التنمية قادمة: توخوا الحذر في تطلعاتكم</span>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </div>
                </div>
                <div className="flex mt-4 gap-2 shadow-sm">
                  <img
                    src={sliderImagePlaceholder}
                    className="w-[92px] h-[70.18px] object-cover rounded-sm"
                  />
                  <div className="flex flex-col">
                    <span>التنمية قادمة: توخوا الحذر في تطلعاتكم</span>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </div>
                </div>
                <div className="flex mt-4 gap-2 shadow-sm">
                  <img
                    src={sliderImagePlaceholder}
                    className="w-[92px] h-[70.18px] object-cover rounded-sm"
                  />
                  <div className="flex flex-col">
                    <span>التنمية قادمة: توخوا الحذر في تطلعاتكم</span>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </div>
                </div>
                <div className="flex mt-4 gap-2 shadow-sm">
                  <img
                    src={sliderImagePlaceholder}
                    className="w-[92px] h-[70.18px] object-cover rounded-sm"
                  />
                  <div className="flex flex-col">
                    <span>التنمية قادمة: توخوا الحذر في تطلعاتكم</span>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </div>
                </div>
                <div className="flex mt-4 gap-2 shadow-sm">
                  <img
                    src={sliderImagePlaceholder}
                    className="w-[92px] h-[70.18px] object-cover rounded-sm"
                  />
                  <div className="flex flex-col">
                    <span>التنمية قادمة: توخوا الحذر في تطلعاتكم</span>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-3">
              <div className=" col-span-4 md:col-span-2">
                <Input
                  className=" rounded-[32.5px]"
                  placeholder="بحث باسم التقارير"
                />
              </div>
              <div className=" col-span-4 md:col-span-1">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="ابحث بالسنة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">2024</SelectItem>
                    <SelectItem value="dark">2023</SelectItem>
                    <SelectItem value="system">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className=" col-span-4 md:col-span-1">
                <Input type="date" />
              </div>
            </div>

            <div className="">
              {/* Render currentItems */}
              {currentItems?.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-3 mt-3">
                  <div className="col-span-3 shadow p-3 rounded-sm ">
                    <div className="flex flex-col md:flex-row gap-3 ">
                      <img
                        src={item.b_image}
                        className="rounded-md object-fill w-full md:w-[455px] h-full md:h-[337px]"
                        alt="Post Image"
                      />
                      <div className="w-full">
                        <h1 className="text-[40px] font-bold">
                          {item.ar_Title} + ${item.id}
                        </h1>
                        <p>
                          <span className="flex font-normal text-sm gap-2 mt-2">
                            <CalendarMinus2Icon size={19} />
                            {formattedDate(new Date(item.date_of_publish))}
                          </span>
                          <span
                            className={
                              item.type === "publish"
                                ? "inline-block bg-[#FFDAA0]/[.35] rounded-[5px] px-5  text-sm font-semibold text-[#CEA461] mr-2 mb-2"
                                : item.type === "news"
                                ? "inline-block bg-[#C5FFBC]/[.35] rounded-[5px] px-5  text-sm font-semibold text-[#69DB57] mr-2 mb-2"
                                : item.type === "analysis"
                                ? "inline-block bg-[#DBDBDB]/[.35] rounded-[5px] px-5  text-sm font-semibold text-[#979797] mr-2 mb-2"
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
                          </span>
                        </p>
                        <div className="flex items-center gap-2 my-4">
                          <img
                            src={item.b_image}
                            className="rounded-full object-cover w-[40px] h-[40px]"
                            alt="Author"
                          />
                          <h1>{item.ar_Title}</h1>
                        </div>
                        <p className="text-base publication">
                          {item?.ar_description && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.ar_description,
                              }}
                            />
                          )}
                        </p>
                        <Link to={`/publish-details/${item.id}`}>
                          <button className="bg-[#E3E3E3] text-center w-full mt-6 py-3">
                            قرأ المزيد...
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
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
