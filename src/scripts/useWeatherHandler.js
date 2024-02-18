import axios from "axios";
import {
  GEO_CODING_API_BASE_URL,
  GEO_CODING_API_KEY,
  endpoints,
} from "../constants";

const useWeatherHandler = () => {
  const getWeatherReport = async (
    searchCity,
    setWeatherData,
    setForecastData,
    setIsLoading,
    setErrorMessage
  ) => {
    const cityName = searchCity.trim();
    if (!cityName) return;

    try {
      setIsLoading(true);
      const response = await axios.get(
        `${GEO_CODING_API_BASE_URL}${endpoints.weather}?q=${cityName}&appid=${GEO_CODING_API_KEY}&units=metric`
      );
      if (response.status !== 200) {
        // setIsLoading(false);
        return;
      }
      setWeatherData(response?.data);
      if (response?.data) {
        const data = await axios.get(
          `${GEO_CODING_API_BASE_URL}${endpoints.forecast}?q=${cityName}&appid=${GEO_CODING_API_KEY}&units=metric`
        );
        setForecastData(data?.data);
      }
      setIsLoading(false);
    } catch (error) {
      setWeatherData(null)
      setErrorMessage(error.response.data.message);
      setIsLoading(false);
    }
  };
  return getWeatherReport;
};

export default useWeatherHandler;
