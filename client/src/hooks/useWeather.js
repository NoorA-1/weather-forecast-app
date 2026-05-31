import { useState } from "react";
import { getWeatherByPlaceCode } from "../services/weatherService";

export function useWeather() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [weatherError, setWeatherError] = useState("");

  async function loadWeather(place) {
    if (!place?.code) {
      return;
    }

    try {
      setSelectedPlace(place);
      setLoadingWeather(true);
      setWeatherError("");

      const data = await getWeatherByPlaceCode(place.code);

      setWeather(data);
    } catch (error) {
      setWeather(null);
      setWeatherError(
        error.response?.data?.message ||
          "Could not load weather forecast. Please try again.",
      );
    } finally {
      setLoadingWeather(false);
    }
  }

  return {
    selectedPlace,
    weather,
    loadingWeather,
    weatherError,
    loadWeather,
  };
}
