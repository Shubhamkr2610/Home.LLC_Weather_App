import React from "react";

const WeatherCard = ({ temperature, windSpeed, sunCycle }) => {
  const getFormattedDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Ensure two digits
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour format to 12-hour format
    hours = (hours % 12) || 12;

    return `${hours}:${minutes} ${period}`;
  };
  return (
    <div className="w-full h-1/2 p-6 flex items-center justify-around gap-8 rounded-[30px] text-white bg-[#0f62fe]  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div>
        <div>
          <p className="text-8xl font-bold">
            {Math.trunc(temperature?.temp)} &deg;C
          </p>

          <p className="text-xl font-semibold">
            Feels like :{" "}
            <span className="text-4xl font-semibold">
              {Math.trunc(temperature?.feels_like)} &deg;C
            </span>{" "}
          </p>
        </div>
        <div>
          <div>
            <p className="text-xl font-bold">Sunrise</p>
            <p className="text-base font-semibold">
              {getFormattedDate(sunCycle.sunrise)}
            </p>
          </div>
          <div>
            <p className="text-xl font-bold">Sunset</p>
            <p className="text-base font-semibold"> {getFormattedDate(sunCycle.sunset)}</p>
          </div>
        </div>
      </div>
      <div className="text-4xl font-bold ">Sunny</div>
      <div className="h-full grid gap-6 grid-cols-2 items-center ">
        <div className="text-center">
          <p className="text-xl font-semibold">{temperature?.humidity}%</p>
          <p className="text-base font-medium">humidithy</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold">{windSpeed?.speed} km/h</p>
          <p className="text-base font-medium">windspeed</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold">{temperature?.pressure} hPa</p>
          <p className="text-base font-medium">pressure</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold">8</p>{" "}
          <p className="text-base font-medium">uv</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
