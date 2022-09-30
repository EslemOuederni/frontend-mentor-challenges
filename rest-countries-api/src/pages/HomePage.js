import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { CountryCard } from "../components/CountryCard";
import { DropDown } from "../components/DropDown";
import { NavBar } from "../components/NavBar";
import { SearchBox } from "../components/SearchBox";

export const HomePage = () => {
  const [darkToggle, setDarkToggle] = useState(false);
  const [countries, setCountries] = useState([]);
  const [getCountry, setGetCountry] = useState("");
  const url = "https://restcountries.com/v2/all?limit=10";

  useEffect(() => {
    try {
      if (getCountry === "") {
        fetchData();
      } else {
        getCountryData();
      }
    } catch (error) {
      console.log(error);
    }
  });
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
  };

  // Getting Data for specific country
  const getCountryData = async () => {
    try {
      let res = await fetch(`https://restcountries.com/v2/name/${getCountry}`);
      let data = await res.json();
      //setCountries(data);
      if (data.length >= 1) {
        setCountries(data);
      } else {
        setCountries([]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={`content ${darkToggle && " bg-darkMode-200"}`}>
      <NavBar
        setDarkToggle={setDarkToggle}
        darkToggle={darkToggle}
        dark={`${darkToggle && " bg-darkMode-100 text-darkMode-100"}`}
      />
      <div>
        <div className="flex flex-row justify-between pt-8">
          <div className="">
            <SearchBox
              dark={`${darkToggle && " bg-darkMode-100 text-darkMode-100"}`}
              handleSearch={(term) => setGetCountry(term)}
            />
          </div>
          <div className="">
            <DropDown
              dark={`${darkToggle && " bg-darkMode-100 text-darkMode-100"}`}
            />
          </div>
        </div>

        <div className="countries flex flex-row flex-wrap justify-center mt-12 h-full">
          {countries.map((country) => (
            <Link
              to={`/countries/${country.alpha3Code}`}
              state={country}
              key={country.alpha3Code}
            >
              <CountryCard
                key={country.alpha3Code}
                flag={country.flag}
                population={country.population}
                countryName={country.name}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
