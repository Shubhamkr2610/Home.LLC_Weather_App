import React from "react";
import { getFormattedDate } from "../scripts/utils";

const FiveDaysForecast = ({ forecastData }) => {
  const uniqueForecastDays = new Set();

  // Filter out unique forecast dates
  const uniqueForecastData = forecastData.list.filter((item) => {
    const forecastDate = new Date(item.dt_txt).getDate();
    if (!uniqueForecastDays.has(forecastDate)) {
      uniqueForecastDays.add(forecastDate);
      return true;
    }
    return false;
  });

  return (
    <div className="w-full lg:w-6/12 h-full p-4 lg:p-6 flex flex-col items-center justify-start gap-2 rounded-[30px] text-white bg-[#0f62fe]  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="text-3xl xl:text-4xl font-bold">{uniqueForecastData.slice(1).length} Days Forecast:</div>
      {uniqueForecastData.slice(1).map((item, index) => {
        return (
          <div key={index} className="flex justify-center items-center gap-3">
            <p className="text-lg xl:text-2xl font-bold">
              {Math.trunc(item?.main?.temp)} &deg;C
            </p>
            <p className="text-base xl:text-xl font-bold">
              {getFormattedDate(item.dt).day}, {getFormattedDate(item.dt).date}{" "}
              {getFormattedDate(item.dt).month}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FiveDaysForecast;
