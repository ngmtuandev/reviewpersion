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
    <div className="flex justify-center items-center">
      <div
        className="px-4 w-[30px] py-2 bg-red-600 text-gray-100"
        onClick={handleLeft}
      >
        Left
      </div>
      <div
        className="px-4 w-[30px] py-2 bg-red-600 text-gray-100"
        onClick={handleRight}
      >
        Right
      </div>
    </div>
  );
};

export default Direction;
