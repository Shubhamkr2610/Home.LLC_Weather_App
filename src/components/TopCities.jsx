import React from "react";
import { topCitiesName } from "../constants";

const TopCities = ({ setSearchCity, cityName, setInput }) => {
  const toggleCityHandler = (citiItem) => {
    if (cityName !== citiItem) {
      setInput("");
    }
    setSearchCity(citiItem);
  };

  return (
    <div className="w-full h-auto xl:h-20 px-4 py-[2px] flex justify-center items-center flex-wrap gap-[3px] md:gap-4 text-white bg-[#0f62fe] rounded-lg">
      {topCitiesName.map((citiItem) => {
        return (
          <button
            key={citiItem}
            onClick={() => toggleCityHandler(citiItem)}
            className={`w-20 md:w-24 h-10 text-xs lg:text-sm rounded-lg font-semibold cursor-pointer ${
              cityName === citiItem
                ? "bg-white text-[#0f62fe]"
                : "hover:bg-white hover:text-[#0f62fe]"
            }`}
          >
            {citiItem}
          </button>
        );
      })}
    </div>
  );
};

export default TopCities;
