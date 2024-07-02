import React from "react";
import login from "../../assets/img/8H4A08688.jpg(1).jpg";
import login1 from "../../assets/img/عالم الأعمال خلفية أبيض 21.png";
export default function LoginPage() {
  return (
    <div className="h-[100vh] w-full flex">
      <div className="w-[60%] h-full flex justify-center items-center">
        <img src={login} alt="" className=" h-[100%] w-[100%]" />
      </div>
      <div className="w-[40%] h-full flex justify-center items-center">
        <div className="w-[70%] h-[70%]">
          {/*  */}
          <div className="w-full h-[50%] flex justify-center">
            <img src={login1} alt="" className=" h-[100%] w-[100]" />
          </div>
          {/*  */}
          <div className="text-center mt-10">
            <h1 className="text-3xl mb-5">مرحبا بعودتك</h1>
            <form action="" className="px-10 text-end">
              <div>
                <label className="block text-balck font-black text-lg  mt-1">
                كلمة المرور
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  dir="rtl"
                  placeholder="ادخل كلمة المرور ..."
                  className="w-full px-4 py-2 rounded-xl bg-white mt-2 border-2 border-[#797B7D] focus:bg-white focus:outline-none focus:text-[#818080] placeholder:text-[#818080]"
                />
              </div>
              <button
                type="button"
                className=" mt-10 w-full block shadow-[0_05px_20px_5px_rgba(204,169,114,0.3)] bg-black hover:bg-[#cca972] focus:bg-gray-100 text font-semibold rounded-lg px-4 py-3 outline-2 outline-gray-500"
              >
                <div className="flex items-center justify-center">
                  <span className="ml-4 text-white">تسجيل دخول</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
