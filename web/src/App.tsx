import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import PublishesCards from "./components/publishes-cards";
import SideCircle from "./assets/icons/side-circle";
import FullCircle from "./assets/icons/full-circle";
import Borad from "./assets/icons/borad";
import Image1 from "./assets/img/اعلان خدمة الفايبر.jpg";
import anlyisit from "./assets/img/whiteboard.png";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {/*  */}
      <div className="w-full h-36 flex justify-end items-center ">
        <div className="flex p-5">
          <h1 className="text-3xl">اخر المنشورات</h1>
          <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
        </div>
      </div>
      {/*  */}
      <div className="w-full h-screen p-2 overflow-hidden relative">
        <PublishesCards />
        <div className="w-full h-8 mt-16 flex justify-center items-center ">
          <h1 className="text-3xl text-[#CCA972]">أعرض المزيد</h1>
        </div>
        <div className=" absolute bottom-0 right-0">
          <SideCircle />
        </div>
      </div>
      {/*  */}
      <div className="w-full h-[70vh] grid grid-cols-12 px-2 relative">
        <div className=" w-full h-full col-span-6 p-4">
          <div className="flex items-start justify-end py-16">
            <h1 className="text-xl font-extrabold">من نحن</h1>
            <div className="w-2 h-7 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
          </div>
          <div>
            <p className="text-end  text-[#5B5B5B] leading-7">
              شركه عالم الاعمال هي شركه وطنية ذات مسؤولية محدودة.أسسها الدكتور
              ربيع بن علي العوبثاني في مدينة المكلا و حضرموت في مارس 2021م تحمل
              سجل تجاري رقم(21/2831).
            </p>
            <p className="text-end  mt-6 text-[#5B5B5B] leading-8">
              تعمل على إدارة وتشغيل المشاريع الاستثمارية وتقديم الدراسات
              الاقتصادية والاستشارات الادارية والمالية والتسويقية وحلول
              تكنولوجيا المعلومات وتقدم خدماتها من خلال مجموعة من الخبراء
              والاستشاريين المتخصصين الذين يعملون في الشركة ومجموعة اخرى من
              الخبراء والاستشاريين المتعاقدين.
            </p>
          </div>
          <div className="flex justify-end mt-10">
            <div className="outline outline-offset-1 outline-1 outline-[#ccc]/60 rounded-full w-[9rem] h-[3.8rem] flex justify-center items-center">
              <button className="inline-flex w-[9rem] h-[3.8rem] outline outline-1 outline-[#CCA972]/80 bg-black text-white items-center justify-center whitespace-nowrap rounded-full text-md font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                أعرف عنا أكثر
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full h-full col-span-6  flex justify-start items-center">
          <img
            src={Image1}
            className=" object-cover rounded-lg relative z-[1] w-[90%] h-[90%]"
            alt=""
          />
        </div>

        <div className=" absolute top-[-18px] right-0">
          <FullCircle />
        </div>
        <div className=" flex justify-around items-center flex-row-reverse backdrop-blur-md bg-white/30 border border-black w-[90%]  h-36 text-white absolute p-4 text-center transform -translate-x-1/2 rounded-[2rem] bottom-[-220px] z-10 left-1/2">
          {/*  */}
          <div className="">
            <span>
              <Borad />
            </span>
            <h1 className="text-black">+1</h1>
            <p className="text-black">تعليم و تدريب</p>
          </div>
          {/*  */}
          <div className="translate-y-4">
            <div className="h-[60px] w-[58px] -translate-y-4">
              <img src={anlyisit} alt="" className="w-full h-full" />
            </div>
            <h1 className="text-black">1+</h1>
            <p className="text-black">دراسات</p>
          </div>
          {/*  */}
          <div>
            <span>
              <Borad />
            </span>
            <h1 className="text-black">1+</h1>
            <p className="text-black">ريادة إعمال</p>
          </div>
          {/*  */}
          <div>
            <span>
              <Borad />
            </span>
            <h1 className="text-black">1+</h1>
            <p className="text-black">إدارة مشاريع</p>
          </div>
          {/*  */}
          <div>
            <span>
              <Borad />
            </span>
            <h1 className="text-black">1+</h1>
            <p className="text-black">التطوير البرمجي</p>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default App;
