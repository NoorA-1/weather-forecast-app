import { describe, expect, it } from "vitest";
import { normalizeForecastDetails } from "../utils/normalizeForecastDetails.js";

describe("normalizeForecastDetails", () => {
  it("normalizes place and groups daily forecast", () => {
    const apiResponse = {
      place: {
        code: "vilnius",
        name: "Vilnius",
        administrativeDivision: "Vilniaus miesto savivaldybė",
        countryCode: "LT",
      },
      forecastType: "long-term",
      forecastCreationTimeUtc: "2026-05-31 08:00:00",
      forecastTimestamps: [
        {
          forecastTimeUtc: "2026-05-31 12:00:00",
          airTemperature: 18,
          feelsLikeTemperature: 17,
          windSpeed: 4,
          relativeHumidity: 60,
          totalPrecipitation: 0,
          conditionCode: "partly-cloudy",
        },
        {
          forecastTimeUtc: "2026-05-31 15:00:00",
          airTemperature: 20,
          feelsLikeTemperature: 19,
          windSpeed: 5,
          relativeHumidity: 70,
          totalPrecipitation: 0.2,
          conditionCode: "partly-cloudy",
        },
      ],
    };

    const result = normalizeForecastDetails(apiResponse);

    expect(result.place).toEqual({
      code: "vilnius",
      name: "Vilnius",
      administrativeDivision: "Vilniaus miesto savivaldybė",
      countryCode: "LT",
    });

    expect(result.forecast).toHaveLength(1);

    expect(result.forecast[0]).toEqual({
      date: "2026-05-31",
      minTemperature: 18,
      maxTemperature: 20,
      conditionCode: "partly-cloudy",
      averageRelativeHumidity: 65,
      averageWindSpeed: 4.5,
      totalPrecipitation: 0.2,
    });
  });
});
