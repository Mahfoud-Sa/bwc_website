import {
  Calendar,
  Clock10,
  FileArchive,
  MoveLeft,
  MoveRight,
  Search,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Jobs() {
  // Generate a sample array of 30 divs
  const totalItems = Array.from({ length: 30 }, (_, i) => i + 1);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Updated to show 3 divs per page
  const totalPages = Math.ceil(totalItems.length / itemsPerPage);

  // Calculate the items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = totalItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full lg:h-[100vh] flex px-4 mt-5">
      <div className="w-[30%] h-full ">
        <div className="w-[95%] h-full border border-gray-200 px-4 rounded-lg shadow-md">
          {/*  */}
          <div className="flex items-center max-w-sm mx-auto mt-6">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search />
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#997740] focus:border-[#997740] block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-[#997740] dark:focus:border-[#997740]"
                placeholder="ابحث باسم الوظيفة ..."
                required
              />
            </div>
          </div>
          {/*  */}

          <div className="px-4 mt-4">
            <h3>تاريخ النشر</h3>
            <div className="flex items-center mb-4 mt-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-black">
                الاحدث
              </label>
            </div>

            <div className="flex items-center mb-4 mt-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-black">
                الاقدم
              </label>
            </div>
          </div>

          {/*  */}

          <div className="px-4 mt-4">
            <h3>حالة الوظيفة</h3>
            <div className="flex items-center mb-4 mt-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-black">
                متاحة
              </label>
            </div>

            <div className="flex items-center mb-4 mt-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-black">
                المتاحة
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[70%] h-full ">
        <div className=" h-full w-full ">
          {/* Displaying the divs */}
          <div className="">
            {currentItems.map((item) => (
              <div className="w-[100%] h-[100%] mt-8 bg-white border-2 border-gray-300 px-3 py-2 rounded-lg ">
                <Link to={"/job-details"}>
                  <div className=" w-full  flex items-center">
                    <h1 className="text-2xl">محاسب مالي</h1>

                    <div className=" pb-2 text-end translate-y-3">
                      <span className="inline-block bg-[#C5FFBC]/[.35] rounded-[5px] px-5  text-sm font-semibold text-[#69DB57] mr-2 mb-2">
                        متاحة{item}
                      </span>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex items-center mt-2 h-6">
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

                  {/*  */}
                  <div className="flex items-center mt-5">
                    <div className="w-[95%]">
                      <p className="text-[#5B5B5B] job">
                        أن تكون شركة عالم الاعمال للاستثمار والدراسات المحدودة
                        الشركة المتخصصة والرائد في إدارة وتشغيل المشاريع
                        الاستثمارية وتقديم الدراسات والاستشارات الإدارية دات
                        الجودة الشركة المتخصصة والرائد في إدارة وتشغيل المشاريع
                        الاستثمارية وتقديم الدراسات والاستشارات الإدارية دات
                        الجودة
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="mt-4 flex justify-between space-x-2 ">
            <button
              className="px-4 py-2 flex items-center border border-black text-black rounded-md hover:bg-[#d5ae78] hover:text-white"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MoveRight size={20} className="ml-2" />
              <h6>السابق</h6>
            </button>

            <div>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded ml-1 ${
                    currentPage === index + 1
                      ? "bg-[#d5ae78] rounded-md  text-white"
                      : "bg-white border border-black  rounded-md text-black hover:bg-[#d5ae78] hover:text-white"
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              className="px-4 py-2 border flex border-black text-black rounded-md hover:bg-[#d5ae78] hover:text-white"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <h6>التالي</h6>
              <MoveLeft className="mr-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
