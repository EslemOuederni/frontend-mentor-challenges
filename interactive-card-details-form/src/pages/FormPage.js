import React from "react";
import { Input } from "../components/Input";
import { useState } from "react";
export const FormPage = () => {
  const [num, setNum] = useState(true);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCVC] = useState("");

  const handleChange = (event) => {
    let number = event.target.value;
    console.log(!isNaN(Number(event.target.value)));
    if (isNaN(Number(event.target.value))) {
      setNum(false);
    } else {
      setNum(true);
    }
  };
  const handleEmptyMonth = (event) => {
    if (event.target.value === "") {
      setMonth("not empty");
    } else {
      setMonth("");
    }
  };
  const handleEmptyYear = (event) => {
    if (event.target.value === "") {
      setYear("not empty");
    } else {
      setYear("");
    }
  };
  const handleEmptyCVC = (event) => {
    if (event.target.value === "") {
      setYear("not empty");
    } else {
      setYear("");
    }
  };
  return (
    <div className="white-bg">
      <div className="md:ml-32">
        <div className="mb-4">
          <Input
            name="CARDHOLDERNAME"
            type="text"
            placeholder="e.g. Jane Appleseed"
            style="w-4/5 md:w-80"
          />
        </div>
        <div className="mb-4">
          <Input
            name="CARDNUMBER"
            placeholder="e.g. Jane Appleseed"
            style="w-4/5 md:w-80"
            onChange={handleChange}
          />
        </div>
        {num ? (
          <span className="hidden"></span>
        ) : (
          <span className=" text-primary-100 text-xs">
            wrong format, numbers only
          </span>
        )}
      </div>
      <div className="flex flex-row md:ml-32">
        <div>
          <Input
            name="EXP. DATE "
            type="text"
            placeholder="MM"
            style="mr-px w-14 "
            onChange={handleEmptyMonth}
          />
          {month === "" ? (
            ""
          ) : (
            <span className="text-sm text-primary-100">can't be blank</span>
          )}
        </div>
        <div className="mb-2">
          <Input
            name="(MM/YY)"
            type="text"
            placeholder="YY"
            style="w-14 "
            onChange={handleEmptyYear}
          />
          {year === "" ? (
            ""
          ) : (
            <span className="text-sm text-primary-100">can't be blank</span>
          )}
        </div>
        <div>
          <Input
            name="CVC"
            type="text"
            placeholder="e.g 123"
            style="w-32 ml-2"
            onChange={handleEmptyCVC}
          />
          {cvc === "" ? (
            ""
          ) : (
            <span className="text-sm text-primary-100">can't be blank</span>
          )}
        </div>
      </div>
    </div>
  );
};
