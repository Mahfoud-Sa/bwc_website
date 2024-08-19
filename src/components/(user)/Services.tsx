import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  return (
    <div className="">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase "></span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase "></span>
      </div>
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

  const x = useTransform(scrollYProgress, [0, 1], ["84%", "-1%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["95%", "-1%"]);

  return (
    <section ref={targetRef} className="relative h-[180vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "design strategies",
    subTitle:"Design effective strategies and develop business plans for businesses and business enterprises",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "design strategies",
    subTitle:"Design effective strategies and develop business plans for businesses and business enterprises",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "design strategies",
    subTitle:"Design effective strategies and develop business plans for businesses and business enterprises",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "design strategies",
    subTitle:"Design effective strategies and develop business plans for businesses and business enterprises",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "design strategies",
    subTitle:"Design effective strategies and develop business plans for businesses and business enterprises",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "design strategies",
    subTitle:"Design effective strategies and develop business plans for businesses and business enterprises",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "design strategies",
    subTitle:"Design effective strategies and develop business plans for businesses and business enterprises",
    id: 7,
  },
];

const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-white rounded-lg shadow-[0_05px_20px_0px_rgba(0,0,0,0.3)] services"
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

export default Services;
