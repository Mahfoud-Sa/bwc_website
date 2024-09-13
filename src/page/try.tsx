import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Try() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;

      if (!container) return;

      const rect = container.getBoundingClientRect();

      if (rect.top <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      if (rect.bottom <= window.innerHeight) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // <div
    //   ref={serversRef}
    //   className="w-full min-h-[150vh] mt-10 px-2  relative overflow-scroll"
    // >
    //   {dir === "ltr" ? (
    //     <div className=" absolute top-24 left-0">
    //       <FullCircle />
    //     </div>
    //   ) : (
    //     <div className=" absolute top-24 right-0">
    //       <FullCircle />
    //     </div>
    //   )}
    //   {widthScreen.winWidth <= 980 ? (
    //     <>{dir === "ltr" ? <Services /> : <ServicesArb />}</>
    //   ) : (
    //     <>
    //       {dir === "ltr" ? (
    //         <div className="w-full min-h-full bg-black flex overflow-x-hidden">
    //           <div className="w-[55%] mx-auto relative">
    //             {/* {isWithinRange ? (
    //               <div className="w-[50%]  h-[40rem] fixed top-80">
    //                 <img
    //                   src={services2}
    //                   alt=""
    //                   className="w-full h-full object-cover rounded-md"
    //                 />
    //               </div>
    //             ) : (
    //               <div className="w-full  h-[40rem] absolute bottom-0  overflow-hidden">
    //                 <img
    //                   src={services2}
    //                   alt=""
    //                   className="w-full h-full object-cover rounded-md"
    //                 />
    //               </div>
    //             )} */}
    //             {/*  */}
    //             <div
    //               className={`
    //               ${
    //                 isWithinRange
    //                   ? "w-[55%]  h-[40rem] fixed top-20"
    //                   : "w-[90%]   h-[40rem] absolute top-0   overflow-hidden"
    //               }

    //             `}
    //             >
    //               <img
    //                 src={services2}
    //                 alt=""
    //                 className={`${
    //                   scrolls
    //                     ? "w-full h-full object-cover rounded-md"
    //                     : "w-full h-full object-cover rounded-md"
    //                 }`}
    //               />
    //             </div>
    //           </div>
    //           <div className=" w-[40%]">
    //             <div className="w-full h-full  p-4">
    //               <div className="">
    //                 <div className=" w-full h-full grid gap-20">
    //                   {services?.map((item) => (
    //                     <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
    //                       <div className=" text-start w-[100%] h-[50%] p-4">
    //                         <h1 className="text-3xl mb-6">{item.ar_name}</h1>
    //                         <p className="text-xl text-[#525252]">
    //                           {item.ar_Description}
    //                         </p>
    //                       </div>
    //                     </div>
    //                   ))}

    //                   {/* <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
    //                     <div className=" text-start w-[100%] h-[50%] p-4">
    //                       <h1 className="text-3xl mb-6">دراسات الجدوى</h1>
    //                       <p className="text-xl text-[#525252]">
    //                         عمل دراسات الجدوى الاقتصادية المتكاملة للمشاريع
    //                         الاستثمارية.
    //                       </p>
    //                     </div>
    //                   </div> */}

    //                   {/* <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
    //                     <div className=" text-start w-[100%] h-[50%] p-4">
    //                       <h1 className="text-3xl mb-6">
    //                         تصميم الاستراتيجيات
    //                       </h1>
    //                       <p className="text-xl text-[#525252]">
    //                         تصميم الاستراتيجيات الفعالة وتطوير خطط العمل
    //                         للشركات والمؤسسات التجارية.
    //                       </p>
    //                     </div>
    //                   </div> */}

    //                   {/* <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
    //                     <div className=" text-start w-[100%] h-[50%] p-4">
    //                       <h1 className="text-3xl mb-6"> تقديم الاستشارات</h1>
    //                       <p className="text-xl text-[#525252]">
    //                         تقديم الاستشارات الإدارية والمالية والتسويقية
    //                         والتشغيلية والإنتاج وسلاسل الإمداد وأنظمة الجودة
    //                         للشركات والمؤسسات الخاصة والعامة.
    //                       </p>
    //                     </div>
    //                   </div> */}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ) : (
    //         <div className="w-full min-h-full bg-black flex overflow-x-hidden">
    //           <div className=" w-[40%]">
    //             <div className="w-full h-full  p-4">
    //               <div className="">
    //                 <div className=" w-full h-full grid gap-20">
    //                   {services?.map((item) => (
    //                     <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
    //                       <div className=" text-start w-[100%] h-[50%] p-4">
    //                         <h1 className="text-3xl mb-6">{item.ar_name}</h1>
    //                         <p className="text-xl text-[#525252]">
    //                           {item.ar_Description}
    //                         </p>
    //                       </div>
    //                     </div>
    //                   ))}

    //                   {/* <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
    //                       <div className=" text-start w-[100%] h-[50%] p-4">
    //                         <h1 className="text-3xl mb-6">دراسات الجدوى</h1>
    //                         <p className="text-xl text-[#525252]">
    //                           عمل دراسات الجدوى الاقتصادية المتكاملة للمشاريع
    //                           الاستثمارية.
    //                         </p>
    //                       </div>
    //                     </div> */}

    //                   {/* <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
    //                       <div className=" text-start w-[100%] h-[50%] p-4">
    //                         <h1 className="text-3xl mb-6">
    //                           تصميم الاستراتيجيات
    //                         </h1>
    //                         <p className="text-xl text-[#525252]">
    //                           تصميم الاستراتيجيات الفعالة وتطوير خطط العمل
    //                           للشركات والمؤسسات التجارية.
    //                         </p>
    //                       </div>
    //                     </div> */}

    //                   {/* <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
    //                       <div className=" text-start w-[100%] h-[50%] p-4">
    //                         <h1 className="text-3xl mb-6"> تقديم الاستشارات</h1>
    //                         <p className="text-xl text-[#525252]">
    //                           تقديم الاستشارات الإدارية والمالية والتسويقية
    //                           والتشغيلية والإنتاج وسلاسل الإمداد وأنظمة الجودة
    //                           للشركات والمؤسسات الخاصة والعامة.
    //                         </p>
    //                       </div>
    //                     </div> */}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="w-[55%] mx-auto relative">
    //             {/* {isWithinRange ? (
    //                 <div className="w-[50%]  h-[40rem] fixed top-80">
    //                   <img
    //                     src={services2}
    //                     alt=""
    //                     className="w-full h-full object-cover rounded-md"
    //                   />
    //                 </div>
    //               ) : (
    //                 <div className="w-full  h-[40rem] absolute bottom-0  overflow-hidden">
    //                   <img
    //                     src={services2}
    //                     alt=""
    //                     className="w-full h-full object-cover rounded-md"
    //                   />
    //                 </div>
    //               )} */}
    //             {/*  */}
    //             <div
    //               className={`
    //                 ${
    //                   isWithinRange
    //                     ? "w-[55%]  h-[40rem] fixed top-20"
    //                     : "w-[90%]   h-[40rem] absolute top-0   overflow-hidden"
    //                 }

    //               `}
    //             >
    //               <img
    //                 src={services2}
    //                 alt=""
    //                 className={`${
    //                   scrolls
    //                     ? "w-full h-full object-cover rounded-md"
    //                     : "w-full h-full object-cover rounded-md"
    //                 }`}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </>
    //   )}
    // </div>
    <></>
  );
}
export default Try;
