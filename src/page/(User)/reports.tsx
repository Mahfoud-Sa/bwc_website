import React from "react";
import CarouselsReport from "src/components/carouselsReport";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import sliderImagePlaceholder from "../../assets/img/news_1.jpg";
import sliderImagePlaceholder1 from "../../assets/img/news_2.jpg";
import { CalendarIcon, CalendarMinus2Icon } from "lucide-react";
import { Input } from "src/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "src/ui/popover";
import { Calendar } from "src/ui/calendar";
import Button from "src/components/button";
import { format } from "date-fns";
import { cn } from "src/lib/utils";
import { Link } from "react-router-dom";
import { InputDatePicker } from "src/ui/date-picker";
import { Controller, useForm } from "react-hook-form";

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
const Reports = () => {
  const [date, setDate] = React.useState<Date>();

  const { control } = useForm({
    defaultValues: {
      dateField: new Date("2024-01-01"), // set a static date value here
    },
  });
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
            <Controller
              name="dateField"
              control={control}
              render={({ field }) => (
                <InputDatePicker field={field} dateFormat="yyyy-MM-dd" />
              )}
            />
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="col-span-3 shadow p-3 rounded-sm">
              <div className="flex flex-col md:flex-row gap-3">
                <img
                  src={sliderImagePlaceholder}
                  className=" rounded-md object-cover w-full md:w-[455px] h-full md:h-[337px]"
                />
                <div>
                  <h1 className="text-[40px] font-bold">
                    التنمية قادمة: توخوا الحذر في تطلعاتكم
                  </h1>
                  <p>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </p>
                  <div className="flex items-center gap-2 my-4">
                    <img
                      src={sliderImagePlaceholder}
                      className=" rounded-full object-cover w-[40px] h-[40px]"
                    />
                    <h1>حمود عبدالرقيب احمد سيف</h1>
                  </div>

                  <p className="text-base">
                    شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها
                    الدكتور ربيع بن علي العوبثاني في مدينة المكلاو حضرموت في
                    مارس 2021م تحمل سجل تجاري رقم(21/2831) وتعمل على إدارة
                    وتشغيل المشاريع الاستثمارية وتقديم الدراسات الاقتصادية
                    والاستشارات الادارية والمالية والتسويقية وحلول تكنولوجيا
                    المعلومات وتقدم خدماتها من خلال مجموعة من الحبراء
                    والاستشاريين المتخصصين الذين
                  </p>

                  <Link to={"#"}>
                    <button className="bg-[#E3E3E3] text-center w-full mt-6 py-3">
                      قرأ المزيد...
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="col-span-3 shadow p-3 rounded-sm">
              <div className="flex flex-col md:flex-row gap-3">
                <img
                  src={sliderImagePlaceholder}
                  className=" rounded-md object-cover w-full md:w-[455px] h-full md:h-[337px]"
                />
                <div>
                  <h1 className="text-[40px] font-bold">
                    التنمية قادمة: توخوا الحذر في تطلعاتكم
                  </h1>
                  <p>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </p>
                  <div className="flex items-center gap-2 my-4">
                    <img
                      src={sliderImagePlaceholder}
                      className=" rounded-full object-cover w-[40px] h-[40px]"
                    />
                    <h1>حمود عبدالرقيب احمد سيف</h1>
                  </div>

                  <p className="text-base">
                    شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها
                    الدكتور ربيع بن علي العوبثاني في مدينة المكلاو حضرموت في
                    مارس 2021م تحمل سجل تجاري رقم(21/2831) وتعمل على إدارة
                    وتشغيل المشاريع الاستثمارية وتقديم الدراسات الاقتصادية
                    والاستشارات الادارية والمالية والتسويقية وحلول تكنولوجيا
                    المعلومات وتقدم خدماتها من خلال مجموعة من الحبراء
                    والاستشاريين المتخصصين الذين
                  </p>

                  <Link to={"#"}>
                    <button className="bg-[#E3E3E3] text-center w-full mt-6 py-3">
                      قرأ المزيد...
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="col-span-3 shadow p-3 rounded-sm">
              <div className="flex flex-col md:flex-row gap-3">
                <img
                  src={sliderImagePlaceholder}
                  className=" rounded-md object-cover w-full md:w-[455px] h-full md:h-[337px]"
                />
                <div>
                  <h1 className="text-[40px] font-bold">
                    التنمية قادمة: توخوا الحذر في تطلعاتكم
                  </h1>
                  <p>
                    <span className="flex font-normal text-sm gap-2 mt-2">
                      <CalendarMinus2Icon size={19} />
                      قبل 22 ساعه
                    </span>
                  </p>
                  <div className="flex items-center gap-2 my-4">
                    <img
                      src={sliderImagePlaceholder}
                      className=" rounded-full object-cover w-[40px] h-[40px]"
                    />
                    <h1>حمود عبدالرقيب احمد سيف</h1>
                  </div>

                  <p className="text-base">
                    شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة. أسسها
                    الدكتور ربيع بن علي العوبثاني في مدينة المكلاو حضرموت في
                    مارس 2021م تحمل سجل تجاري رقم(21/2831) وتعمل على إدارة
                    وتشغيل المشاريع الاستثمارية وتقديم الدراسات الاقتصادية
                    والاستشارات الادارية والمالية والتسويقية وحلول تكنولوجيا
                    المعلومات وتقدم خدماتها من خلال مجموعة من الحبراء
                    والاستشاريين المتخصصين الذين
                  </p>

                  <Link to={"#"}>
                    <button className="bg-[#E3E3E3] text-center w-full mt-6 py-3">
                      قرأ المزيد...
                    </button>
                  </Link>
                </div>
              </div>
            </div>
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
