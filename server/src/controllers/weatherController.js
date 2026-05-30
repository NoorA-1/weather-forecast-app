import { validatePlaceCode } from "../utils/validatePlaceCode.js";
import { logPlaceSelection } from "../services/actionLogService.js";
import { getWeatherByPlace } from "../services/weatherService.js";

export async function getWeather(req, res, next) {
  try {
    const validation = validatePlaceCode(req.query.placeCode);

    if (!validation.isValid) {
      return res.status(400).json({
        message: validation.message,
      });
    }

    const { place } = validation;

    logPlaceSelection(place);

    const weather = await getWeatherByPlace(place);

    res.status(200).json(weather);
  } catch (error) {
    next(error);
  }
}
