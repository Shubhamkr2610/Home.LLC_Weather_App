import React from "react";
import WeatherCard from "../components/WeatherCard";
import MainInfos from "../components/MainInfos";
import FiveDaysForecast from "../components/FiveDaysForecast";

const HomePage = ({wheatherData}) => {
console.log(wheatherData)
  return (
    <div className="w-full h-[88vh] px-24 flex flex-col gap-6">
      <WeatherCard temperature={wheatherData?.main} windSpeed={wheatherData.wind} sunCycle={wheatherData.sys}  />
      <div className="h-2/5 flex justify-between items-center gap-6">
        <MainInfos cityName={wheatherData.name} cityDateTime={wheatherData.dt} />
        <FiveDaysForecast />
      </div>


    </div>
  );
};

export default HomePage;
