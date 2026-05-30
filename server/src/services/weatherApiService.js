import axios from "axios";
import { env } from "../config/env.js";

export async function fetchLongTermForecast(placeCode) {
  const url = `${env.weatherApiBaseUrl}/places/${placeCode}/forecasts/long-term`;

  const response = await axios.get(url, {
    timeout: 10000,
  });

  return response.data;
}
