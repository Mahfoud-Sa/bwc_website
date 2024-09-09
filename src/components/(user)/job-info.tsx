import { Calendar, Clock10, FileArchive } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import jobs from "../../assets/img/jobs-image.png";
import { Button } from "src/ui/button";

export default function JobInfo() {
  return (
    <div className="w-full min-h-[100vh] border-2 border-gray-200 rounded-lg p-6 ">
      <div>
        <div className="w-[100%]  h-[20vh]  flex justify-between">
          <div className="flex">
            <div className=" w-20 h-20">
              <img src={jobs} alt="" />
            </div>

            <div className="mr-2">
              <div className=" w-full  flex items-center ">
                <h1 className="text-2xl">محاسب مالي</h1>

                <div className=" pb-2 text-end translate-y-3">
                  <span className="inline-block bg-[#C5FFBC]/[.35] rounded-[5px] px-5  text-sm font-semibold text-[#69DB57] mr-2 mb-2">
                    متاحة
                  </span>
                </div>
              </div>
              {/*  */}
              <div className="flex items-center mt-2 h-6 ">
                <div className="flex">
                  <FileArchive className="ml-2" />
                  <h6>96533025</h6>
                </div>
                <div className="flex mr-2">
                  <Clock10 className="ml-2" />
                  <h6>96533025</h6>
                </div>
                <div className="flex mr-2">
                  <Calendar className="ml-2" />
                  <h6>96533025</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden md:block">
            <Button className="text-lg mb-10 inline-flex h-14 px-14 items-center  justify-center whitespace-nowrap rounded-lg bg-[#000] py-2  font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              تقدم للوظيفة
            </Button>
          </div>
          {/*  */}
        </div>
      </div>

      {/*  */}

      <div>
        <h1 className="text-3xl mb-4">وصف الوظيفة</h1>
        <p>
          نبحث عن أخصائي تسويق إلكتروني، سيعمل إعداد الخطط التسويقية وتنسيق
          وتنظيم الحملات الترويجية والدعائية، وإعداد المحتوى، وادارة مواقع
          التواصل الاجتماعي لزيادة معرفة العملاء والجمهور المستهدف بالخدمات
          التييتقدمها المكتب. فيحدد أخصائي التسويق الأسلوب المناسب الذي تتحدث به
          الحملات إلى الجمهور ليشعر بالخصوصية والتميز. كما ينسق حملات تربط
          موضوعات رائجة بمايقدمه المكتب من خدمات لتجذب العملاء المستهدفين.
        </p>
      </div>

      {/*  */}

      <div className="mt-7">
        <h1 className="text-3xl mb-4">المهام الوظيفية</h1>
        <ul>
          <li>. إعداد الخطط التسويقية</li>
          <li>. إعداد المحتوى التسويقي  ينشر بمواقع التواصل الاجتماعي</li>
          <li>. إدارة مواقع التواصل الاجتماعي</li>
        </ul>
      </div>
      {/*  */}
      <div className="mt-7">
        <h1 className="text-3xl mb-4">المؤهلات والخبرات</h1>
        <ul>
          <li>. خبرة في صناعة المحتوى الإلكتروني</li>
          <li>. إجادة الكتابة والتحرير وصياغة المحتوى</li>
          <li>. خبرة في التسويق عبر محركات البحث SEM</li>
          <li>. خبرة في جمع وتحليل البيانات</li>
          <li>. خبرة في إدارة علاقات العملاء CRM</li>
          <li>. خبرة في عمليات المبيعات وشرائح العملاء المحتملين</li>
          <li>. مهارات التواصل الفعال النصية والمرئية</li>
          <li>. خبرة باستخدام أدوات التواصل وإدارة المهام</li>
        </ul>
      </div>
      {/*  */}
      <div className="mt-7">
        <h1 className="text-3xl mb-4">مميزات العمل</h1>
        <ul>
          <li>. خبرة في صناعة المحتوى الإلكتروني</li>
          <li>. إجادة الكتابة والتحرير وصياغة المحتوى</li>
          <li>. خبرة في التسويق عبر محركات البحث SEM</li>
          <li>. خبرة في جمع وتحليل البيانات</li>
          <li>. خبرة في إدارة علاقات العملاء CRM</li>
          <li>. خبرة في عمليات المبيعات وشرائح العملاء المحتملين</li>
          <li>. مهارات التواصل الفعال النصية والمرئية</li>
          <li>. خبرة باستخدام أدوات التواصل وإدارة المهام</li>
        </ul>
      </div>
      {/*  */}
      <div className="mt-7">
        <h1 className="text-3xl mb-4">المعلومات المطلوبة</h1>
        <ul>
          <li>. خبرة في صناعة المحتوى الإلكتروني</li>
          <li>. إجادة الكتابة والتحرير وصياغة المحتوى</li>
          <li>. خبرة في التسويق عبر محركات البحث SEM</li>
          <li>. خبرة في جمع وتحليل البيانات</li>
          <li>. خبرة في إدارة علاقات العملاء CRM</li>
          <li>. خبرة في عمليات المبيعات وشرائح العملاء المحتملين</li>
          <li>. مهارات التواصل الفعال النصية والمرئية</li>
          <li>. خبرة باستخدام أدوات التواصل وإدارة المهام</li>
        </ul>
      </div>
      <div className="sm:block md:hidden mt-10  ">
        <div className="flex justify-center items-center">
          <Button className="text-lg mb-10 inline-flex h-14 px-24 items-center  justify-center whitespace-nowrap rounded-lg bg-[#000] py-2  font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            تقدم للوظيفة
          </Button>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
