import { useEffect, useState } from "react";
import { getPlaces } from "../services/placeService";

export function usePlaces() {
  const [places, setPlaces] = useState([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);
  const [placesError, setPlacesError] = useState("");

  useEffect(() => {
    async function loadPlaces() {
      try {
        setLoadingPlaces(true);
        setPlacesError("");

        const data = await getPlaces();

        setPlaces(data);
      } catch (error) {
        setPlacesError(
          error.response?.data?.message ||
            "Could not load places. Please try again.",
        );
      } finally {
        setLoadingPlaces(false);
      }
    }

    loadPlaces();
  }, []);

  return {
    places,
    loadingPlaces,
    placesError,
  };
}
