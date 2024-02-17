import React from "react";
import WeatherCard from "../components/WeatherCard";
import MainInfos from "../components/MainInfos";
import FiveDaysForecast from "../components/FiveDaysForecast";

const HomePage = ({weatherData, forecastData}) => {
  return (
    <div className="w-full h-[88vh] px-24 flex flex-col gap-6">
      <WeatherCard temperature={weatherData?.main} windSpeed={weatherData?.wind} sunCycle={weatherData?.sys} weatherPng={weatherData?.weather} />
      <div className="h-2/5 flex justify-between items-center gap-6">
        <MainInfos cityName={weatherData?.name} cityDateTime={weatherData?.dt} />
        <FiveDaysForecast forecastData={forecastData}/>
      </div>


    </div>
  );
};

export default HomePage;
