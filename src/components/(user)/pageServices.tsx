import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import services2 from "../../assets/img/services-2.png";
const PageServices = () => {
  return (
    <div className="">

      <HorizontalScrollCarousel />
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className="w-full h-[200vh] mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 gap-2 relative">
      <div className="sticky top-0 h-screen  bg-black overflow-hidden">
        <motion.div style={{ y }} className="flex gap-4">
          <div className=" w-full h-full  p-4">
            <div className=" w-full h-full grid gap-20">
              <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                <div className=" text-start w-[100%] h-[50%] p-4">
                  <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                  <p className="text-xl text-[#525252]">
                    تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                    للشركــــــــات والمؤسسات التجارية
                  </p>
                </div>
              </div>

              <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                <div className=" text-start w-[100%] h-[50%] p-4">
                  <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                  <p className="text-xl text-[#525252]">
                    تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                    للشركــــــــات والمؤسسات التجارية
                  </p>
                </div>
              </div>

              <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                <div className=" text-start w-[100%] h-[50%] p-4">
                  <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                  <p className="text-xl text-[#525252]">
                    تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                    للشركــــــــات والمؤسسات التجارية
                  </p>
                </div>
              </div>

              <div className="services-ar h-80 w-[100%] rounded-lg flex justify-center items-center shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] relative z-10  bg-white">
                <div className=" text-start w-[100%] h-[50%] p-4">
                  <h1 className="text-3xl mb-6">تصميم الاستراتيجيات</h1>
                  <p className="text-xl text-[#525252]">
                    تصميم الاستراتيجيات الفعالة وتطوير خطط العمــــــــل
                    للشركــــــــات والمؤسسات التجارية
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-full fixed -right-[1100px] overflow-auto ">
        <img src={services2} className=" fixed" alt="" />
      </div>
    </section>
  );
};
const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "design strategies",
    subTitle:
      "Design effective strategies and develop business plans for businesses and business enterprises",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "design strategies",
    subTitle:
      "Design effective strategies and develop business plans for businesses and business enterprises",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "design strategies",
    subTitle:
      "Design effective strategies and develop business plans for businesses and business enterprises",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "design strategies",
    subTitle:
      "Design effective strategies and develop business plans for businesses and business enterprises",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "design strategies",
    subTitle:
      "Design effective strategies and develop business plans for businesses and business enterprises",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "design strategies",
    subTitle:
      "Design effective strategies and develop business plans for businesses and business enterprises",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "design strategies",
    subTitle:
      "Design effective strategies and develop business plans for businesses and business enterprises",
    id: 7,
  },
];

const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-black rounded-lg shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] services "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <div className=" text-start w-[100%] h-[50%] p-4">
          <h1 className="text-3xl mb-6">{card.title}</h1>
          <p className="text-xl text-[#525252]">{card.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PageServices;
