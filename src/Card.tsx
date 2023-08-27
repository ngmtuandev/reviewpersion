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
    <div>
      <div>
        <span className="text-red-500 text-[20px]">{data[0].name}</span>
      </div>
    </div>
  );
};

export default Card;
