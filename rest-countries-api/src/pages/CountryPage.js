import React from "react";
import { NavBar } from "../components/NavBar";
import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
export const CountryPage = () => {
  const params = useParams();
  const navigation = useNavigate();
  let location = useLocation();
  let country = location.state;

  let name;
  let capital;
  let flag;
  let population;
  let region;
  let currencies;
  let languages = [];

  if (country.alpha3Code === params.country) {
    name = country.name;
    capital = country.capital;
    flag = country.flag;
  }

  const goBack = () => {
    navigation("/");
  };
  return (
    <div>
      <NavBar />
      <div className="h-auto">
        <button
          className=" backButton inline-flex items-center mt-8 ml-12 mb-5 bg-lightMode-100 w-auto px-8 py-2 rounded-md"
          onClick={goBack}
        >
          <BiArrowBack className="mr-4" />
          back
        </button>
        <div className="flex flex-row justify-center">
          <div className="">
            <img src={flag} alt={`flag of ${name}`} width="50%" />
          </div>
          <div className="float-left">
            <h1 className="font-bold text-2xl">{name}</h1>
            <p>name: {name}</p>
            <p>capital:{capital}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
