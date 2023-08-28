import React from "react";
type TData = {
  data: {
    id: number;
    img: string;
    name: string;
    work: string;
    desc: string;
  };
  index: number;
};
const Card = ({ data, index }: TData) => {
  console.log(data);
  return (
    <div className="flex justify-center items-center mb-10 mt-20">
      <div className="flex flex-col items-center justify-center w-[50%]">
        <div className="relative">
          <img className="w-36 h-36 rounded-full" src={data[0].img} alt="" />
          <div className="absolute w-36 h-36 bg-red-600 rounded-full -z-10 -right-2 shadow-lg -top-1"></div>
          <div
            className="absolute flex justify-center items-center w-10 h-10 bg-red-600 rounded-full 
          z-10 -left-0 shadow-lg -top-0"
          >
            <span className="text-gray-100 font-semibold text-[35px] mt-2">
              ''
            </span>
          </div>
        </div>
        <span
          className="my-2 font-semibold uppercase text-gray-100 px-3 mt-5 py-1 flex justify-center items-center 
        bg-red-600 rounded-md text-[15px]"
        >
          {data[0].name}
        </span>
        <span className="text-red-600 text-[23px] mb-2 font-bold">
          {data[0].work}
        </span>
        <span className="text-gray-700">{data[0].desc}</span>
      </div>
    </div>
  );
};

export default Card;
