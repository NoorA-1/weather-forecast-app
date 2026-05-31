import { getPlaces } from "../services/placeService.js";

export async function getAllPlaces(req, res, next) {
  try {
    const places = await getPlaces();

    res.status(200).json(
      places.map((place) => ({
        code: place.code,
        name: place.name,
        administrativeDivision: place.administrativeDivision,
        countryCode: place.countryCode,
        coordinates: place.coordinates,
      })),
    );
  } catch (error) {
    next(error);
  }
}
