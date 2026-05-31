import axios from "axios";
import { env } from "../config/env.js";

export async function getPlaces() {
  const response = await axios.get(`${env.weatherApiBaseUrl}/places`, {
    timeout: 10000,
  });

  return response.data;
}
