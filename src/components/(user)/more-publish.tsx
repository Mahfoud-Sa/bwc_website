import React from "react";
import authorImgUrl from "../../assets/img/8H4A08688.jpg(1).jpg";

export default function MorePublish() {
  return (
    <div className="flex items-center gap-x-2 h-[50vh] relative px-3">
      <div className=" h-[100%] w-[30%] bg-black">
        <img
          src={authorImgUrl} // Replace with actual image path
          alt="Report cover"
          className=" object-contain w-full h-full "
        />
      </div>
      <span className="text-base font-bold absolute">
        حمود عبدالرقيب احمد سيف
      </span>
    </div>
  );
}
