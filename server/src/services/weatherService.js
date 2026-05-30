import { fetchLongTermForecast } from "./weatherApiService.js";
import { normalizeForecastDetails } from "../utils/normalizeForecastDetails.js";

export async function getWeatherByPlace(place) {
  const forecastData = await fetchLongTermForecast(place.code);

  return normalizeForecastDetails(forecastData);
}
