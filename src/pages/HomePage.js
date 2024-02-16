import React from "react";
import WeatherCard from "../components/WeatherCard";
import MainInfos from "../components/MainInfos";
import FiveDaysForecast from "../components/FiveDaysForecast";

const HomePage = () => {
  return (
    <div className="w-full h-[90vh] px-24 flex flex-col gap-6">
      <div className="h-2/5 flex justify-between items-center">
        <MainInfos />
        <FiveDaysForecast />
      </div>

      <WeatherCard />
    </div>
  );
};

export default HomePage;
