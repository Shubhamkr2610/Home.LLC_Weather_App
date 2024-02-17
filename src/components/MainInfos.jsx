import React from "react";

const MainInfos = ({ cityName, cityDateTime }) => {
  const getFormattedDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Ensure two digits
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour format to 12-hour format
    hours = (hours % 12) || 12;


    // Get day, date, and month
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[date.getDay()]; // Get the day of the week

    const dateOfMonth = date.getDate().toString().padStart(2, "0"); // Ensure two digits
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[date.getMonth()]; // Get the month

    return {
      time: `${hours}:${minutes} ${period}`,
      day: `${day}`,
      date: `${dateOfMonth}`,
      month: `${month}`,
    };
  };
  // text-[#c8d9f9]
  return (
    <div className="w-6/12 h-full p-6  flex flex-col items-center justify-center gap-8 rounded-[30px] text-white bg-[#0f62fe]  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <h1 className="text-4xl font-bold">{cityName}</h1>

      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className="text-8xl font-bold"> {getFormattedDate(cityDateTime).time}</h3>
        <h5 className="text-xl font-normal">{getFormattedDate(cityDateTime).day}, {getFormattedDate(cityDateTime).date}{getFormattedDate(cityDateTime).month}</h5>
      </div>
    </div>
  );
};

export default MainInfos;
