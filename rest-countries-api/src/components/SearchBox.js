import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
export const SearchBox = ({ dark, handleSearch, onChange }) => {
  const searchCountry = (e) => {
    handleSearch(e.target.value);
  };
  return (
    <div
      className={`relative block bg-lightMode-200 ml-12 w-96 rounded-md shadow-md ${dark}`}
    >
      <BsSearch className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-9" />
      <form onSubmit={handleSearch}>
        <input
          className={`form-input px-4 appearance-none block pl-14 focus:outline-none w-full py-4 px-8s rounded-md ml-6 bg-lightMode-200  ${dark}`}
          type="search"
          name="country"
          id="country"
          placeholder="search for a country..."
          onChange={searchCountry}
        />
      </form>
    </div>
  );
};
