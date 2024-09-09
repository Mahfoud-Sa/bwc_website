import React from "react";
import Jobs from "src/components/(user)/jobs";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";

export default function JoinUs() {
  return (
    <div>
      <div className="w-full lg:h-[8vh] md:h-[8vh]  sm:h-[11vh]">
        <Navbar />
      </div>
      <div className="w-full lg:h-[25vh] flex justify-center items-center md:mt-11 sm:mt-8">
        <div className="md:w-[50%] md:h-[100%] sm:w-[80%] sm:h-[100%] bg-[#D5AE78]/[.5] rounded-lg px-2 py-1">
          <h1>لتعزيز فريق العمل في شركة عالم الاعمال للاستثمار والدراسات</h1>
          {/*  */}
          <div className="flex items-center mt-5">
            <div className="lg:w-[3%] md:w-[5%] lg:mr-0 sm:ml-2 md:mr-3 sm:w-[6%] ">
              <div className="w-4 h-4 border-2 border-[#333333] bg-gradient-to-r from-[#997740] to-[#CCA972]"></div>
            </div>
            <div className="w-[95%]">
              <p className="text-[#5B5B5B]">مقابل مادي ممتاز .</p>
            </div>
          </div>

          {/*  */}
          <div className="flex items-center mt-5">
            <div className="lg:w-[3%] md:w-[5%] lg:mr-0 sm:ml-2 md:mr-3 sm:w-[6%] ">
              <div className="w-4 h-4 border-2 border-[#333333] bg-gradient-to-r from-[#997740] to-[#CCA972]"></div>
            </div>
            <div className="w-[95%]">
              <p className="text-[#5B5B5B]">بيئة عمل محفزة .</p>
            </div>
          </div>

          {/*  */}
          <div className="flex items-center mt-5">
            <div className="lg:w-[3%] md:w-[5%] lg:mr-0 sm:ml-2 md:mr-3 sm:w-[6%] ">
              <div className="w-4 h-4 border-2 border-[#333333] bg-gradient-to-r from-[#997740] to-[#CCA972]"></div>
            </div>
            <div className="w-[95%]">
              <p className="text-[#5B5B5B]">تدريب وتأهيل مستمر .</p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <Jobs />
      <footer className="min-h-[65vh] p-2 overflow-hidden relative bg-black mt-10">
        <Footer />
      </footer>
    </div>
  );
}
