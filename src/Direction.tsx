import React from "react";
type TData = {
  index: number;
};
const Direction = ({ index, setCurr }: TData) => {
  const handleLeft = () => {
    if (index === 1) {
      setCurr(4);
    } else {
      setCurr(index - 1);
    }
  };

  const handleRight = () => {
    if (index === 4) {
      setCurr(1);
    } else {
      setCurr(index + 1);
    }
  };
  return (
    <div className="flex -mt-6 justify-center items-center">
      <div
        className="px-4 mx-4 w-[60px] rounded-md py-1 cursor-pointer hover:opacity-90
         bg-red-600 text-gray-100 flex justify-center items-center"
        onClick={handleLeft}
      >
        Left
      </div>
      <div
        className="px-4 mx-4 w-[60px] rounded-md py-1 cursor-pointer hover:opacity-90
         bg-red-600 text-gray-100 flex justify-center items-center"
        onClick={handleRight}
      >
        Right
      </div>
    </div>
  );
};

export default Direction;
