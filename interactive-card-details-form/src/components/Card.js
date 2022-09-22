import React from "react";

export const Card = () => {
  return (
    <div className="bg-image w-96 h-52 rounded-md text-white">
      <div className="ml-4 mt-4 absolute">
        <div className="flex flex-row items-center">
          <div className=" bg-white rounded-full h-8 w-8 relative"></div>
          <div className=" border-gray-200 border rounded-full h-4 w-4 ml-4 z-40"></div>
        </div>

        <div class="number mt-12">
          <span class="tracking-widest font-medium text-2xl">
            0000 0000 0000 0000
          </span>
        </div>
        <div class="flex flex-row justify-between text-sm mt-8">
          <div>
            <p>Jane Appleseed</p>
          </div>
          <div class="date">
            <p>00/00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
