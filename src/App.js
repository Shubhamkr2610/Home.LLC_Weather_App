import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import useWeatherHandler from "./scripts/useWeatherHandler";
import Loader from "./components/Loader";
import useLocationHandler from "./scripts/useLocationHandler";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [input, setInput] = useState("");
  const [searchCity, setSearchCity] = useState("Mumbai");
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getWeatherReport = useWeatherHandler();
  const getCityByLatLong = useLocationHandler();
  const cityName = input ? input : searchCity;

  const getUserGeoLocation = () => {
    if (navigator?.geolocation) {
      navigator?.geolocation?.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position?.coords;
          getCityByLatLong(
            latitude,
            longitude,
            setSearchCity,
            setIsLoading,
            setErrorMessage
          );
        },
        (error) => {
          if (error?.code === error?.PERMISSION_DENIED) {
            toast.warn(
              "GeoLocation request denied. Please reset location permission to grant access again."
            );
          }
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getWeatherReport(
      cityName,
      setWeatherData,
      setForecastData,
      setIsLoading,
      setErrorMessage
    );
  }, [input, searchCity]);

  useEffect(() => {
    getUserGeoLocation();
  }, []);

  return (
    <div className="bg-gradient-to-r from-white to-blue-200">
      <Header input={input} setInput={setInput} />
      {isLoading ? (
        <div className="h-[88vh] flex flex-col justify-center items-center bg-gradient-to-r from-white to-blue-200">
          <Loader />
        </div>
      ) : !weatherData && errorMessage ? (
        <div className="h-[88vh] flex flex-col justify-center items-center bg-gradient-to-r from-white to-blue-200">
          <h1 className="w-4/5 text-2xl lg:text-4xl font-bold text-[#0f62fe] text-center break-words text-wrap">
            {errorMessage}
          </h1>
        </div>
      ) : (
        <HomePage weatherData={weatherData} forecastData={forecastData} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
