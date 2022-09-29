import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
export const CountryPage = () => {
  const [darkToggle, setDarkToggle] = useState(false);
  const params = useParams();
  const navigation = useNavigate();
  let location = useLocation();
  let country = location.state;

  let name;
  let nativeName;
  let capital;
  let flag;
  let population;
  let region;
  let subRegion;
  let domain;
  let currencies = [];
  let languages = [];
  let borderCountries = [];

  if (country != null && country.alpha3Code === params.country) {
    name = country.name;
    nativeName = country.nativeName;
    capital = country.capital;
    flag = country.flag;
    population = country.population;
    region = country.region;
    subRegion = country.subregion;
    domain = country.topLevelDomain;
    console.log(country.borders);
    country.languages.forEach((language) => languages.push(language.name));
    country.currencies.forEach((curreny) => currencies.push(curreny.name));

    if (country.borders === undefined) {
      borderCountries = [];
    } else {
      country.borders.map((border) => borderCountries.push(border));
    }
    console.log(borderCountries);
  } else {
    console.log("wait");
  }

  const goBack = () => {
    navigation("/");
  };
  return (
    <div
      className={`h-screen text-lightMode-100 ${
        darkToggle && " bg-darkMode-200"
      }`}
    >
      <NavBar
        setDarkToggle={setDarkToggle}
        darkToggle={darkToggle}
        dark={`${darkToggle && " bg-darkMode-100 text-darkMode-100"}`}
      />
      <div className={`h-full ${darkToggle && " bg-darkMode-200"}`}>
        <button
          className={` backButton inline-flex items-center mt-8 ml-12 mb-5 bg-lightMode-100 w-auto px-8 py-2 rounded-md ${
            darkToggle && " bg-darkMode-100 text-darkMode-100 shadow-slate-900"
          }`}
          onClick={goBack}
        >
          <BiArrowBack className="mr-4" />
          back
        </button>
        <div
          className={`content flex flex-row justify-center ${
            darkToggle && " bg-darkMode-200 text-darkMode-100"
          }`}
        >
          <div className=" w-1/3">
            <img src={flag} alt={`flag of ${name}`} width="100%" />
          </div>
          <div className=" ml-32 flex flex-col leading-8">
            <h1 className="font-bold text-2xl">{name}</h1>
            <div className="flex flex-row justify-between">
              <div className="mr-12">
                <p>Native name : {nativeName}</p>
                <p>name: {name}</p>
                <p>Population:{population}</p>
                <p>Region: {region}</p>
                <p>Sub Region: {subRegion}</p>
                <p>capital:{capital}</p>
              </div>
              <div>
                <p>Top Level Domain: {domain}</p>
                <p>
                  Currencies:{" "}
                  {currencies.map((currency) => {
                    if (currencies.indexOf() !== currencies.length - 1) {
                      return <span key={currency}> {currency},</span>;
                    } else {
                      return <span key={currency}>{currency}</span>;
                    }
                  })}
                </p>
                <p>
                  languages:{" "}
                  {languages.map((language, index) => {
                    if (languages.indexOf() !== languages.length - 1) {
                      return <span key={index}>{language},</span>;
                    } else {
                      return <span key={index}>{language}</span>;
                    }
                  })}
                </p>
              </div>
            </div>
            <div className="">
              {" "}
              Border Countries :
              {borderCountries.length ? (
                borderCountries.map((language, index) => (
                  <div
                    className={` inline-flex bg-lightMode-100 shadow-md ml-2 px-2 py-1 ${
                      darkToggle && " bg-darkMode-100 text-darkMode-100"
                    }`}
                  >
                    <span key={index} className=" ">
                      {language}{" "}
                    </span>
                  </div>
                ))
              ) : (
                <p>This country is an island</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
