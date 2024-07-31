import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components"; // Optional for styling
import { FaArrowRightLong , FaArrowLeftLong } from "react-icons/fa6";

interface CarouselProps {
  items: string[];
  itemsToShow: number;
}

const CarouselContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 60%;
  margin: auto;
  overflow-x: hidden;
`;

const CarouselItem = styled.div`
  flex-shrink: 0;
  width: 90%;
  height: 100%;
  background: black;
  /* Add your desired styles here */
`;

export default function Carousel({ items, itemsToShow }: CarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft =
        (startIndex * carouselRef.current.offsetWidth) / itemsToShow;
    }
  }, [startIndex, itemsToShow]);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, items.length - itemsToShow)
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const visibleItems = items.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className="h-[50vh] w-[98%] m-auto">
      <CarouselContainer ref={carouselRef}>
        {visibleItems.map((item, index) => (
          <CarouselItem key={index}>
            {<div className="w-full h-full bg-slate-600">{item}</div>}
          </CarouselItem>
        ))}
      </CarouselContainer>
      <div className="h-[2px] mt-10 w-[90%] m-auto bg-[#CECECE]"></div>
      <div className="h-[2px] m-auto w-[90%] ">
      <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
