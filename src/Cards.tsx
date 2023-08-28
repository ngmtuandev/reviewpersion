import React, { useState, useEffect } from "react";
import { data } from "./data";
import Card from "./Card";
import Direction from "./Direction";
import Button from "./Button";

const Cards = () => {
  const [dataPerson, setDataPerson] = useState(data);
  const [dataCurrent, setDataCurrent] = useState([dataPerson[0]]);
  const [curr, setCurr] = useState(1);
  console.log(dataCurrent);
  useEffect(() => {
    let perSonCurr = dataPerson.filter((item) => +item.id === +curr);
    setDataCurrent(perSonCurr);
  }, [curr]);

  const handleRandomPerson = () => {
    const idRandom = Math.floor(Math.random() * 4) + 1;
    if (+idRandom === +curr) {
      setCurr(idRandom + 1);
    }
    setCurr(idRandom);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Card index={1} data={dataCurrent}></Card>

      <Direction index={curr} setCurr={setCurr}></Direction>
      <Button
        onRandomPerson={handleRandomPerson}
        text={"Subscribe Me"}
      ></Button>
    </div>
  );
};

export default Cards;
