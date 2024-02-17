import axios from "axios";

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
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0378eac035083a0436a721453604ca94&units=metric`
      );
      setWeatherData(response?.data);
      if (response?.data) {
        const data = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=0378eac035083a0436a721453604ca94&units=metric`
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
