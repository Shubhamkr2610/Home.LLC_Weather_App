import axios from "axios";
import { APP_BASE_URL, APP_ID, endpoints } from "../constants";

const useWeatherHandler = () => {

  const getWeatherReport = async (
    searchCity,
    setWeatherData,
    setForecastData,
    setIsLoading
  ) => {
    const cityName = searchCity.trim();
    if (!cityName) return;

    try {
      setIsLoading(true);
      const response = await axios.get(
        `${APP_BASE_URL}${endpoints.weather}?q=${cityName}&appid=${APP_ID}&units=metric`
      );
      setWeatherData(response?.data);
      if (response?.data) {
        const data = await axios.get(
          `${APP_BASE_URL}${endpoints.forecast}?q=${cityName}&appid=${APP_ID}&units=metric`
        );
        setForecastData(data?.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return getWeatherReport;
};

export default useWeatherHandler;
