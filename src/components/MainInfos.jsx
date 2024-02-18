import React from "react";
import { getFormattedDate } from "../scripts/utils";
const MainInfos = ({ cityName, cityDateTime }) => {
  return (
    cityName &&
    cityDateTime && (
      <div className="w-full lg:w-6/12 h-full p-4 lg:p-6 flex flex-col items-center justify-center gap-2 lg:gap-8 rounded-[30px] text-white bg-[#0f62fe] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        {cityName && <h1 className="text-4xl font-bold">{cityName}</h1>}
        {cityDateTime && (
          <div className="flex flex-col items-center justify-center gap-3">
            <h3 className="text-4xl lg:text-6xl xl:text-8xl font-bold">
              {" "}
              {getFormattedDate(cityDateTime).time}
            </h3>
            <h5 className="text-xl font-normal">
              {getFormattedDate(cityDateTime).day},{" "}
              {getFormattedDate(cityDateTime).date}{" "}
              {getFormattedDate(cityDateTime).month}
            </h5>
          </div>
        )}
      </div>
    )
  );
};

export default MainInfos;
