import { apiClient } from "./apiClient";

export async function getPlaces() {
  const response = await apiClient.get("/places");
  return response.data;
}
