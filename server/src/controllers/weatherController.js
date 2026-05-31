import { validatePlaceCodeFormat } from "../utils/validatePlaceCodeFormat.js";
import { logPlaceSelection } from "../services/actionLogService.js";
import { getWeatherByPlaceCode } from "../services/weatherService.js";

export async function getWeather(req, res, next) {
  try {
    const validation = validatePlaceCodeFormat(req.query.placeCode);

    if (!validation.isValid) {
      return res.status(400).json({
        message: validation.message,
      });
    }

    const { placeCode } = validation;

    logPlaceSelection(placeCode);

    const weather = await getWeatherByPlaceCode(placeCode);

    res.status(200).json(weather);
  } catch (error) {
    next(error);
  }
}
