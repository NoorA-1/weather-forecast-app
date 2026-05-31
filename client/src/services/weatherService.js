import { apiClient } from "./apiClient";

export async function getWeatherByPlaceCode(placeCode) {
  const response = await apiClient.get("/weather", {
    params: {
      placeCode,
    },
  });
  return response.data;
}
