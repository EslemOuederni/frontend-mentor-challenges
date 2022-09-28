import React from "react";
import { BsMoon } from "react-icons/bs";
export const NavBar = ({ darkToggle, setDarkToggle, dark }) => {
  return (
    <header
      className={`flex flex-row justify-between py-6 px-8 shadow-md bg-lightMode-200 ${dark}`}
    >
      <div>
        <h1 className={`world font-bold text-2xl ${dark}`}>
          Where in the world?
        </h1>
      </div>
      <div>
        <button
          className="darkMode flex flex-row items-center"
          onClick={() => setDarkToggle(!darkToggle)}
        >
          <div>
            <BsMoon />
          </div>
          <div className=" font-semibold text-base ml-2"> Dark Mode</div>
        </button>
      </div>
    </header>
  );
};
