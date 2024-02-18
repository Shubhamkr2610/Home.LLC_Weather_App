import React from "react";
import { getFormattedDate } from "../scripts/utils";

const FiveDaysForecast = ({ forecastData }) => {
  if(!forecastData?.list?.length) return
  const uniqueForecastDays = new Set();

  const uniqueForecastData = forecastData?.list?.filter((item) => {
    const forecastDate = new Date(item.dt_txt).getDate();
    if (!uniqueForecastDays.has(forecastDate)) {
      uniqueForecastDays.add(forecastDate);
      return true;
    }
    return false;
  });

  return (
    <div className="w-full lg:w-6/12 h-full p-4 lg:p-6 flex flex-col items-center justify-start gap-2 rounded-[30px] text-white bg-[#0f62fe] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="text-3xl xl:text-4xl font-bold">
        {uniqueForecastData?.slice(1)?.length} Days Forecast :
      </div>

      <div className="">
        {uniqueForecastData?.slice(1)?.map((item, index) => {
          return (
            <div key={index} className="grid grid-cols-4 lg:grid-cols-2 justify-center items-center">
            {/* flex justify-center items-center gap-3 */}
              <p className=" text-lg xl:text-2xl font-bold text-center">
                {Math.trunc(item?.main?.temp)} &deg;C
              </p>
              <p className="col-span-3 lg:col-span-1 text-base xl:text-xl font-bold text-center">
                {getFormattedDate(item?.dt).day},{" "}
                {getFormattedDate(item?.dt).date}{" "}
                {getFormattedDate(item?.dt).month}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiveDaysForecast;
