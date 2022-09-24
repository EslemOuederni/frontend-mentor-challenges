import React from "react";

export const Input = ({ name, type, placeholder, style }) => {
  return (
    <div className="flex flex-col">
      <label
        for={name}
        className="md:w-auto text-secondary-400 font-medium tracking-widest mr-2 mb-2"
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`p-2 border border-secondary-200 :w-80 rounded-md ${style}`}
      />
    </div>
  );
};
