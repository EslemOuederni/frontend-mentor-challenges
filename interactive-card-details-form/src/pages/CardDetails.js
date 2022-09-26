import React from "react";
import { Card } from "../components/Card";
import { CardBack } from "../components/CardBack";
import { useLocation } from "react-router-dom";
export const CardDetails = () => {
  const { first, card } = useLocation();
  console.log(card);
  return (
    <div className="flex flex-col items-center overflow-hidden md:flex-row md:home">
      <div className="bg-mobile md:hidden">
        <div className=" ml-8 mt-2 mt-4 scale-75 top-6">
          <CardBack />
        </div>
        <div className=" pt-20 mt-0 scale-75 float-left md:ml-24 md:mt-24">
          <Card cardnumber={card} firstName={first} />
        </div>
      </div>
      {/* desktop */}
      <div className="hidden md:block bg-desktop w-80">
        <div className=" ml-2 pt-20 mt-0 md:ml-24 md:mt-24">
          <Card />
        </div>
        <div className="ml-12 mt-2  top-6">
          <CardBack />
        </div>
      </div>
      <div className="flex flex-col items-center ml-2 md:ml-40">
        <img
          src={"/icon-complete.svg"}
          alt=""
          width="20%"
          className=" text-center md:ml-32"
        />
        <p className=" font-medium text-3xl text-center text-secondary-400 md:ml-32 mt-4 tracking-widest">
          THANK YOU !
        </p>
        <p className=" text-center md:ml-32 text-secondary-300 font-bold mt-2 mb-2">
          We've added your card details
        </p>
        <button className=" bg-secondary-400 text-secondary-200 w-80 md:ml-32 mt-6 p-2 rounded-md">
          Continue
        </button>
      </div>
    </div>
  );
};
