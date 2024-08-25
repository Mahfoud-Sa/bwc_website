/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Label = (props: any) => {
  return (
    <div>
      <label
        htmlFor="{props.type}"
        className="text-md mb-1 block font-bold text-gray-950"
      >
        {props.text}
      </label>
    </div>
  );
};
export default Label;
