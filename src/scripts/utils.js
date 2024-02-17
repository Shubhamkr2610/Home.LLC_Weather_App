export const getFormattedDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Ensure two digits
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour format to 12-hour format
  hours = hours % 12 || 12;

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
