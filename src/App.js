import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import axios from "axios";

function App() {
  const [searchCity, setSearchCity] = useState("Patna");
  const [isLoading, setIsLoading] = useState(false);
  const [wheatherData, setWeatherData] = useState(null);

  const myDebounce = (fn, delay) => {
    var timer;
   if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);

    // return () => {
    //   clearTimeout(timer);
    // };
  };
  const getWeatherReport = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=0378eac035083a0436a721453604ca94&units=metric`
      );
      setWeatherData(response?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    myDebounce(getWeatherReport, 3000);
  }, [searchCity]);
  return (
    <div className="bg-gradient-to-r from-white to-blue-200">
      <Header searchCity={searchCity} setSearchCity={setSearchCity} />
      {isLoading ? (
        <div>Loading...</div>
      ) : !!wheatherData ? (
        <HomePage wheatherData={wheatherData} />
      ) : (
        <h1>No city found. Try searching again!!</h1>
      )}
    </div>
  );
}

export default App;
