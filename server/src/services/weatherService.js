import { fetchLongTermForecast } from "./weatherApiService.js";
import { normalizeForecastDetails } from "../utils/normalizeForecastDetails.js";

export async function getWeatherByPlaceCode(placeCode) {
  const forecastData = await fetchLongTermForecast(placeCode);

  return normalizeForecastDetails(forecastData);
}
