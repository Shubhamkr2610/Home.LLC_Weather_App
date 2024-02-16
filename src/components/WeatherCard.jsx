import React from "react";

const WeatherCard = () => {
  return (
    <div className="w-full h-1/2 p-6 flex items-center justify-center gap-8 rounded-[30px] text-[#c8d9f9] bg-[#0f62fe]  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div>
        <div>
          <p>24 c</p>

          <p>Feels like : 22 </p>
        </div>
        <div>
          <p>Sunrise</p> <p>Sunset</p>{" "}
        </div>
      </div>
      <div>Sunny</div>
      <div>

        <p>humidithy</p>
        <p>windspeed</p>
        <p>pressure</p>
        <p>uv</p>
      </div>
    </div>
  );
};

export default WeatherCard;
