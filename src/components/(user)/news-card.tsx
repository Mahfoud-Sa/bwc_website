import React from "react";
interface INews {
  title: string;
  description: string;
  imgUrl: string;
}

export default function NewsCard({ imgUrl, title, description }: INews) {
  return (
    <div className="p-4 flex items-center">
      <div className="size-20  min-w-[80px] ">
        <img
          src={imgUrl} // Replace with actual image path
          alt="Report cover"
          className="w-full   object-cover h-full rounded-lg"
        />
      </div>
      <div className="overflow-hidden p-4">
        <h3>{title}</h3>
        <p className="line-clamp-2 font-light text-xs">{description}</p>
      </div>
    </div>
  );
}
