import React from "react";
import { Card } from "../components/Card";
import { CardBack } from "../components/CardBack";
import { Input } from "../components/Input";
import { FormPage } from "./FormPage";

export const Home = () => {
  return (
    <div className="flex flex-row home">
      <div className="bg-desktop w-80">
        <div className="ml-24 mt-12">
          <Card />
        </div>
        <div className="ml-12 mt-16 ">
          <CardBack />
        </div>
      </div>
      <div className=" ml-40">
        <FormPage />
        <button className=" bg-secondary-400 text-secondary-200 w-80 ml-32 mt-6 p-2 rounded-md">
          Confirm
        </button>
      </div>
    </div>
  );
};
