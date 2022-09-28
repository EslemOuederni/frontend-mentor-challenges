import React from "react";

export const CountryCard = ({
  flag,
  countryName,
  population,
  region,
  capital,
}) => {
  return (
    <div className=" w-60 h-80 bg-lightMode-100 shadow-md ml-12 mb-12 rounded-md cursor-pointer">
      <div className="img mb-2 overflow-hidden">
        <img src={flag} alt="" className="flag border-inherit" />
      </div>
      <div className="countryName font-bold ml-2">{countryName}</div>
      <div className=" ml-2">
        <p>Population: {population} </p>
        <p>Region:{region} </p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};
