import React from "react";
type TText = {
  text: string;
};
const Button = ({ text, onRandomPerson }: TText) => {
  return (
    <div
      onClick={onRandomPerson}
      className="px-2 py-1 w-[150px] flex justify-center items-center my-5 hover:bg-transparent hover:border-[1px]
      hover:text-gray-900 hover:border-gray-800 cursor-pointer rounded-md bg-red-600 text-gray-100"
    >
      <span className="font-bold">{text}</span>
    </div>
  );
};

export default Button;
