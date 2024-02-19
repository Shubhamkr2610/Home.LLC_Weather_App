import axios from "axios";
import {
  GEO_CODING_API_KEY,
  GEO_LOCATION_API_BASE_URL,
  endpoints,
} from "../constants";

const useLocationHandler = () => {
  const getCityByLatLong = async (
    latitude,
    longitude,
    setSearchCity,
    setIsLoading,
    setErrorMessage
  ) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${GEO_LOCATION_API_BASE_URL}${endpoints.reverse}?lat=${latitude}&lon=${longitude}&appid=${GEO_CODING_API_KEY}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
          },
        }
      );
      if (response.status !== 200) {
        return;
      }
      setSearchCity(response?.data[0]?.name);
      setIsLoading(false);
    } catch (error) {
      if (error?.response?.status == 401) {
        setErrorMessage(error.response.data.message);
        setIsLoading(false);
        return;
      }
      setErrorMessage(error?.message);
      setIsLoading(false);
    }
  };
  return getCityByLatLong;
};
export default useLocationHandler;
