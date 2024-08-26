import React from "react";
const Button = (props: any) => {
  return (
    <div className="flex justify-center mx-2">
      <div className="outline outline-offset-1 outline-1 outline-[#ccc]/60 rounded-full w-[7.1rem] h-[2.8rem] flex justify-center items-center">
        <button
          className="inline-flex w-[7rem] h-[2.8rem] outline outline-1 outline-[#CCA972]/80 bg-black text-white items-center justify-center whitespace-nowrap rounded-full text-md font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          {props.children}
        </button>
      </div>
    </div>
  );
};

export default Button;
