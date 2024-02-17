import React from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { LuWind } from "react-icons/lu";
import {getFormattedDate} from '../scripts/utils'
import {
  LiaTemperatureHighSolid,
  LiaTemperatureLowSolid,
} from "react-icons/lia";
import { WiHumidity } from "react-icons/wi";

const WeatherCard = ({ temperature, windSpeed, sunCycle, weatherPng }) => {

  return (
    <div className="w-full h-1/2 p-6 flex items-center justify-around gap-8 rounded-[30px] text-white bg-[#0f62fe]  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-8xl font-bold">
            {Math.trunc(temperature?.temp)} &deg;C
          </p>

          <p className="text-xl font-semibold text-center">
            Feels like :{" "}
            <span className="text-4xl font-semibold">
              {Math.trunc(temperature?.feels_like)} &deg;C
            </span>{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex items-center gap-2">
            <FiSunrise size={"3em"} />
            <div>
              <p className="text-xl font-bold">Sunrise</p>
              <p className="text-base font-semibold">
                {getFormattedDate(sunCycle?.sunrise).time}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FiSunset size={"3em"} />
            <div>
              <p className="text-xl font-bold">Sunset</p>
              <p className="text-base font-semibold">
                {" "}
                {getFormattedDate(sunCycle?.sunset).time}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <img
          className="w-[120px] h-[120px] object-contain"
          src={`http://openweathermap.org/img/w/${weatherPng[0].icon}.png`}
        />
        <p className="text-4xl font-semibold">{weatherPng[0].main}</p>
      </div>
      <div className="h-full grid gap-6 grid-cols-2 items-center ">
        <div className="flex flex-col items-center">
          <WiHumidity size={"3em"} />
          <p className="text-xl font-semibold">{temperature?.humidity}%</p>
          <p className="text-base font-medium">humidithy</p>
        </div>
        <div className="flex flex-col items-center">
          <LuWind size={"3em"} />
          <p className="text-xl font-semibold">{windSpeed?.speed} km/h</p>
          <p className="text-base font-medium">windspeed</p>
        </div>
        <div className="flex flex-col items-center">
          <LiaTemperatureHighSolid size={"3em"} />
          <p className="text-xl font-semibold">
            {Math.trunc(temperature?.temp_max)} &deg;C
          </p>
          <p className="text-base font-medium">Max temperature</p>
        </div>
        <div className="flex flex-col items-center">
          <LiaTemperatureLowSolid size={"3em"} />
          <p className="text-xl font-semibold">
            {Math.trunc(temperature?.temp_min)} &deg;C
          </p>
          <p className="text-base font-medium">Min temperature</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
