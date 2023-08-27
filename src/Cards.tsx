import React, { useState, useEffect } from "react";
import { data } from "./data";
import Card from "./Card";
import Direction from "./Direction";
import Button from "./Button";
type TPerson = {
  id: number;
  img: string;
  name: string;
  work: string;
  desc: string;
};
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
    <div>
      <div>
        <Card index={1} data={dataCurrent}></Card>
      </div>

      <Direction index={curr} setCurr={setCurr}></Direction>
      <Button onRandomPerson={handleRandomPerson} text={"Nhấn"}></Button>
    </div>
  );
};

export default Cards;
