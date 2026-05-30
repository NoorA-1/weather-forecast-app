import { LITHUANIAN_CITIES } from "../constants/cities.js";

export function validatePlaceCode(placeCode) {
  if (!placeCode) {
    return {
      isValid: false,
      message: "placeCode query parameter is required",
    };
  }

  const normalizedPlaceCode = placeCode.trim().toLowerCase();

  const matchedPlace = LITHUANIAN_CITIES.find(
    (place) => place.code === normalizedPlaceCode,
  );

  if (!matchedPlace) {
    return {
      isValid: false,
      message: "Selected place is not supported",
    };
  }

  return {
    isValid: true,
    place: matchedPlace,
  };
}
