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
const Reports = () => {
  // const [date, setDate] = React.useState<Date>();

  // const { control } = useForm({
  //   defaultValues: {
  //     dateField: new Date("2024-01-01"), // set a static date value here
  //   },
  // });
  const itemsPerPage = 3; // Display 3 posts per page
  const totalItems = posts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

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
      <div className="w-full lg:h-[8vh] md:h-[8vh]  sm:h-[11vh]">
        <Navbar />
      </div>
      <main className="px-5">
        <div className="w-full h-36 flex justify-start items-center ">
          <div className="flex py-5 ">
            <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
            <h1 className="text-3xl">التقارير</h1>
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
          {currentItems.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-3 mt-3">
              <div className="col-span-3 shadow p-3 rounded-sm ">
                <div className="flex flex-col md:flex-row gap-3 ">
                  <img
                    src={item.image}
                    className="rounded-md object-cover w-full md:w-[455px] h-full md:h-[337px]"
                    alt="Post Image"
                  />
                  <div className="w-full">
                    <h1 className="text-[40px] font-bold">
                      {item.title} + {index}
                    </h1>
                    <p>
                      <span className="flex font-normal text-sm gap-2 mt-2">
                        <CalendarMinus2Icon size={19} />
                        {item.timeAgo}
                      </span>
                    </p>
                    <div className="flex items-center gap-2 my-4">
                      <img
                        src={item.image}
                        className="rounded-full object-cover w-[40px] h-[40px]"
                        alt="Author"
                      />
                      <h1>{item.author}</h1>
                    </div>
                    <p className="text-base">{item.description}</p>
                    <Link to={"#"}>
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
  );
};

export default Reports;
