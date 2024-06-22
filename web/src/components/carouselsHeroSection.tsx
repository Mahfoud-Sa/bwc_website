import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
interface Props {
  imgs: string[];
}
// export default function CarouselsHeroSection({ imgs }: Props) {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   function handlePrevious() {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? imgs.length - 1 : prevIndex - 1
//     );
//   }

//   function handleNext() {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === imgs.length ? 0 : prevIndex + 1
//     );
//   }
//   return (
//     <div className="carousel">
//       <div className="carousel-images">
//         {imgs.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             className={currentIndex === index ? "active" : "inactive"}
//           />
//         ))}
//       </div>
//       <div className="carousel-controls">
//         <button className="left-btn" onClick={handlePrevious}>
//           l
//         </button>

//         <button className="right-btn" onClick={handleNext}>
//           n
//         </button>
//       </div>
//       {/*  */}
//       <div className="carousel-indcator">
//         {imgs.map((_, index) => (
//           <div
//             key={index}
//             className={`dot ${currentIndex === index ? "active" : ""}`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
export default function CarouselsHeroSection({ imgs }: Props) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === imgs.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? imgs.length - 1 : slide - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000);
  }, [slide]);

  return (
    <div className="carousel_parant">
      <div className="carousel">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {imgs.map((item, idx) => {
          return (
            <img
              src={item}
              // alt={item.alt}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <span className="indicators">
          {imgs.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
}
