import React from "react";
import { Card } from "../components/Card";
import { CardBack } from "../components/CardBack";
import { Input } from "../components/Input";
import { FormPage } from "./FormPage";

export const Home = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden md:flex-row md:home">
      <div className="bg-mobile md:hidden">
        <div className=" ml-8 mt-2 mt-4 scale-75 top-6">
          <CardBack />
        </div>
        <div className=" pt-20 mt-0 scale-75 float-left md:ml-24 md:mt-24">
          <Card />
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
      <div className=" ml-2 md:ml-40">
        <FormPage />
      </div>
    </div>
  );
};
