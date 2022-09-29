import React from "react";
import { BsSearch } from "react-icons/bs";
export const SearchBox = ({ dark }) => {
  return (
    <div
      className={`relative block bg-lightMode-200 ml-12 w-96 rounded-md shadow-md ${dark}`}
    >
      <BsSearch className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-9" />
      <input
        className={`form-input px-4 appearance-none block pl-14 focus:outline-none w-full py-4 px-8s rounded-md ml-6 bg-lightMode-200  ${dark}`}
        type="text"
        name="country"
        id="country"
        placeholder="search for a country..."
      />
    </div>
  );
};
