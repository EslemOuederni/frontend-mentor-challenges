import React from "react";
import { Input } from "../components/Input";
import { Card } from "../components/Card";
import { CardBack } from "../components/CardBack";
export const FormPage = () => {
  return (
    <div className="white-bg">
      <div className="md:ml-32">
        <div className="mb-4">
          <Input
            name="CARDHOLDER NAME"
            type="text"
            placeholder="e.g. Jane Appleseed"
            style="w-4/5 md:w-80"
          />
        </div>
        <div className="mb-4">
          <Input
            name="CARD NUMBER"
            type="number"
            placeholder="e.g. Jane Appleseed"
            style="w-4/5 md:w-80"
          />
        </div>
      </div>
      <div className="flex flex-row md:ml-32">
        <div>
          <Input
            name="EXP. DATE "
            type="text"
            placeholder="MM"
            style="mr-px w-14 "
          />
        </div>
        <div className="mb-2">
          <Input name="(MM/YY)" type="text" placeholder="YY" style="w-14 " />
        </div>
        <div>
          <Input
            name="CVC"
            type="text"
            placeholder="e.g 123"
            style="w-32 ml-2"
          />
        </div>
      </div>
    </div>
  );
};
