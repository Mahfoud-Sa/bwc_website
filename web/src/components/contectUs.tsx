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
                placeholder="ادخل الاسم"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:text-end"
              />
            
          

          <div>
            <label className="block text-balck font-black text-lg mb-2 mt-1">
              الموضوع
            </label>
            
              <input
                type="text"
                name=""
                id=""
                placeholder="ادخل الاسم"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:text-end"
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
                placeholder="ادخل الاسم"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border-2 border-red-500 focus:bg-white focus:outline-none placeholder:text-end"
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
                placeholder="ادخل التفاصيل"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none placeholder:text-end"
              />
            
          </div>

          <button
            type="button"
            className="w-full block bg-black hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <span className="ml-4 text-white">إرسـال</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
