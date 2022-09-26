import React from "react";
import { Input } from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const FormPage = ({ cardN, cvcN }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [num, setNum] = useState(true);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCVC] = useState("");
  const [invalid, setInvalid] = useState("");
  const [firstName, setFirstName] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    if (isNaN(Number(event.target.value))) {
      setNum(false);
    } else {
      setNum(true);
      setCardNumber(event.target.value);
      console.log(cardNumber);
    }
  };
  const handleEmptyMonth = (event) => {
    if (event.target.value === "") {
      setMonth("not empty");
    } else {
      setMonth(event.target.value);
    }
  };
  const handleEmptyYear = (event) => {
    if (event.target.value === "") {
      setYear("not empty");
    } else {
      setYear(event.target.value);
    }
  };
  const handleEmptyCVC = (event) => {
    if (event.target.value === "") {
      setCVC("not empty");
    } else {
      setCVC(event.target.value);
    }
  };
  const handleCard = () => {
    if (cvc && year && month) {
      navigate("/cardDetails", {
        firstName: firstName,
        cardNumber: cardNumber,
      });
    } else {
      console.log("no");
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
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            value={firstName}
          />
        </div>
        <div className="mb-4">
          <Input
            name="CARDNUMBER"
            placeholder="e.g. Jane Appleseed"
            style="w-4/5 md:w-80"
            onChange={handleChange}
            value={cardNumber}
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
          {month != "" ? (
            ""
          ) : (
            <span className="text-sm text-primary-100">{invalid}</span>
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
          {year != "" ? (
            ""
          ) : (
            <span className="text-sm text-primary-100">{invalid}</span>
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
          {cvc != "" ? (
            ""
          ) : (
            <span className="text-sm text-primary-100">{invalid}</span>
          )}
        </div>
      </div>
      <button
        className=" bg-secondary-400 text-secondary-200 w-80 md:ml-32 mt-6 p-2 rounded-md"
        onClick={handleCard}
      >
        Confirm
      </button>
    </div>
  );
};
