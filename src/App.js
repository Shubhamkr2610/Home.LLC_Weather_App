import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import useWeatherHandler from "./scripts/useWeatherHandler";
import Loader from "./components/Loader";

function App() {
  const [searchCity, setSearchCity] = useState("Patna");
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const getWeatherReport = useWeatherHandler();

  useEffect(() => {
    getWeatherReport(searchCity, setWeatherData, setForecastData, setIsLoading);
  }, [searchCity]);

  return (
    <div className="bg-gradient-to-r from-white to-blue-200">
      <Header searchCity={searchCity} setSearchCity={setSearchCity} />
      {isLoading ? (
        <div className="h-[88vh] flex flex-col justify-center items-center bg-gradient-to-r from-white to-blue-200">
          <Loader />
        </div>
      ) : !!weatherData ? (
        <HomePage weatherData={weatherData} forecastData={forecastData} />
      ) : (
        <h1>No city found. Try searching again!!</h1>
      )}
    </div>
  );
}

export default App;
