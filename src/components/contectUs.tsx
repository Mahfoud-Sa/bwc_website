import React from "react";

export default function ContectUs() {
  return (
    <div className="flex w-full h-full">
      <div className="flex-1 w-[50%] h-full flex justify-center items-center relative">
        <div className="absolute w-[30%] h-[65%] bg-[#E4C189] -z-[10] top-[20px] left-[10px]"></div>
        <div className="w-[80%] h-[80%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d634.0013811751327!2d49.12067139261173!3d14.532088105942686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3de8e7a7ef4a3659%3A0x805ca06a13dfebf5!2z2YXYudmH2K8g2KjYsdmK2YXZitmI2YUgTUlJIFByZW1pdW0!5e0!3m2!1sar!2s!4v1719749824322!5m2!1sar!2s"
            width="600"
            height="450"
            className="border-0 w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
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
              className="w-full px-4 py-3 rounded-lg bg-white mt-2 border-2 border-[#cca972] focus:bg-white focus:outline-none focus:text-[#818080] placeholder:text-[#818080]"
            />
          </div>
          <button
            type="button"
            className="w-full block shadow-[0_05px_20px_5px_rgba(204,169,114,0.3)] bg-black hover:bg-[#cca972] focus:bg-gray-100 text font-semibold rounded-lg px-4 py-3 outline-2 outline-gray-500"
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
