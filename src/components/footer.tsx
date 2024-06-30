import React from "react";
import Instgram from "../assets/icons/instgram";
import Whatsapp from "../assets/icons/whatsapp";
import X from "../assets/icons/x";
import Facebook from "../assets/icons/facebook";
import Linkedin from "../assets/icons/linkedin";
import LogoWhite from "../assets/img/logo-white.png";
export default function Footer() {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="h-[35vh]">
          <div className="mb-6 md:mb-0 hidden">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
          </div>
          <ul className="flex items-start mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-white ">
            <li>
              <a href="">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="">
                <X />
              </a>
            </li>
            <li>
              <a href="">
                <Whatsapp />
              </a>
            </li>
            <li>
              <a href="">
                <Instgram />
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-1 sm:gap-6 text-end sm:grid-cols-5 h-[35vh]">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              من نحن
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              من نحن
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              من نحن
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              المنشورات
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              الاقـــــــســـــــــام
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  التعليم و التدريب
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  التطوير البرمجي
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  ريادة الاعمال
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  إدارة مشاريع
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  دراسات
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex items-center justify-between text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <div className=" w-[35%] text-start">
          <a href="">شروط الاستخدام</a>
          <a href="">سياسة الخصوصية</a>
        </div>
        <div className="w-[30%] ">
          <img src={LogoWhite} alt="" className="m-auto" />
        </div>
        <div className="w-[35%] text-end">
          © {(new Date().getFullYear())}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
          شركة عالم
          </a>
           جميع الحقوق محفوظة لـ 
        </div>
      </div>
    </div>
  );
}
