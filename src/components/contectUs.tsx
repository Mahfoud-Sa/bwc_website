import React from "react";

export default function ContectUs() {
  return (
    <div className="flex w-full h-full">
      <div className="flex-1 w-[50%] h-full bg-black"></div>
      <div className="flex-1 w-[50%] h-full">
        <form action="" className="px-10 text-end">
          <div>
            <label className="block text-balck font-black text-lg mb-2 mt-1">
              الاسم
            </label>
            <input
              type="text"
              name=""
              id=""
              dir="rtl"
              placeholder="ادخل الاسم ..."
              className="w-full px-4 py-3 rounded-lg bg-white mt-2 border-2 border-[#CCA972] focus:bg-white focus:outline-none focus:text-[#818080] placeholder:text-[#818080]"
            />

            <div>
              <label className="block text-balck font-black text-lg mb-2 mt-1">
                الموضوع
              </label>

              <input
                type="text"
                name=""
                id=""
                dir="rtl"
                placeholder="ادخل الموضوع ..."
                className="w-full px-4 py-3 rounded-lg mt-2 border-2 border-[#CCA972] focus:bg-white focus:outline-none focus:text-[#818080] placeholder:text-[#818080]"
              />
            </div>

            <div>
              <label className="block text-balck font-black text-lg mb-2 mt-1">
                البريد الإلكتروني
              </label>

              <input
                type="text"
                name=""
                id=""
                dir="rtl"
                placeholder="البريد الإلكتروني ..."
                className="w-full px-4 py-3 rounded-lg bg-white mt-2 border-2 border-[#CCA972] focus:bg-white focus:outline-none focus:text-[#818080] placeholder:text-[#818080]"
              />
            </div>
          </div>
          <div>
            <label className="block text-balck font-black text-lg mb-2 mt-1">
              التفاصيل
            </label>

            <textarea
              name=""
              id=""
              rows={10}
              cols={40}
              dir="rtl"
              placeholder="ادخل التفاصيل ..."
              className="w-full px-4 py-3 rounded-lg bg-white mt-2 border-2 border-[#CCA972] focus:bg-white focus:outline-none focus:text-[#818080] placeholder:text-[#818080]"
            />
          </div>
          <div className="outline outline-offset-1 outline-2 outline-[#ccc]/60 rounded-md w-full block">
          <button
            type="button"
            className="w-full block bg-black hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 outline-2 outline-gray-500"
          >
            <div className="flex items-center justify-center">
              <span className="ml-4 text-white">إرسـال</span>
            </div>
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}
