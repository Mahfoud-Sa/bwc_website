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
    <div style={{ display: "flex", marginTop: "100px" }}>
      {/* Scrollable Right Div */}
      <div
        ref={containerRef}
        style={{
          marginLeft: "300px",
          padding: "20px",
          flex: 1,
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            width: "100%",
            height: "400px",
            marginBottom: "30px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "blue",
            width: "100%",
            height: "400px",
            marginBottom: "30px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "green",
            width: "100%",
            height: "400px",
            marginBottom: "30px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "yellow",
            width: "100%",
            height: "400px",
            marginBottom: "30px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "purple",
            width: "100%",
            height: "400px",
            marginBottom: "30px",
          }}
        ></div>
      </div>
    </div>
  );
}
export default Try;
