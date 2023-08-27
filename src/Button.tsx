import React from "react";
type TText = {
  text: string;
};
const Button = ({ text, onRandomPerson }: TText) => {
  return (
    <div onClick={onRandomPerson} className="text-red-700">
      <span className="font-bold">{text}</span>
    </div>
  );
};

export default Button;
