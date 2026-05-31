import { getDateFromUtc, parseUtcDate } from "./dateUtils.js";

function getCurrentForecast(forecastTimestamps) {
  const now = new Date();

  const nextForecast = forecastTimestamps.find((forecast) => {
    const forecastDate = parseUtcDate(forecast.forecastTimeUtc);
    return forecastDate && forecastDate >= now;
  });

  return nextForecast || forecastTimestamps[0] || null;
}

function groupByDate(forecastTimestamps) {
  return forecastTimestamps.reduce((groups, forecast) => {
    const date = getDateFromUtc(forecast.forecastTimeUtc);

    if (!date) {
      return groups;
    }

    if (!groups[date]) {
      groups[date] = [];
    }

    groups[date].push(forecast);

    return groups;
  }, {});
}

function average(values) {
  const validValues = values.filter((value) => typeof value === "number");

  if (!validValues.length) {
    return null;
  }

  const total = validValues.reduce((sum, value) => sum + value, 0);
  return Number((total / validValues.length).toFixed(1));
}

function sum(values) {
  const validValues = values.filter((value) => typeof value === "number");

  const total = validValues.reduce((sum, value) => sum + value, 0);
  return Number(total.toFixed(1));
}

function getMostFrequentConditionCode(forecasts) {
  const counts = {};

  forecasts.forEach((forecast) => {
    const conditionCode = forecast.conditionCode || "unknown";
    counts[conditionCode] = (counts[conditionCode] || 0) + 1;
  });

  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
}

function normalizeCurrentForecast(forecast) {
  if (!forecast) {
    return null;
  }

  return {
    forecastTimeUtc: forecast.forecastTimeUtc,
    airTemperature: forecast.airTemperature,
    feelsLikeTemperature: forecast.feelsLikeTemperature,
    windSpeed: forecast.windSpeed,
    windGust: forecast.windGust,
    windDirection: forecast.windDirection,
    cloudCover: forecast.cloudCover,
    seaLevelPressure: forecast.seaLevelPressure,
    relativeHumidity: forecast.relativeHumidity,
    totalPrecipitation: forecast.totalPrecipitation,
    conditionCode: forecast.conditionCode,
  };
}

function normalizeDailyForecast(date, forecasts) {
  const temperatures = forecasts.map((forecast) => forecast.airTemperature);

  return {
    date,
    minTemperature: Math.min(...temperatures),
    maxTemperature: Math.max(...temperatures),
    conditionCode: getMostFrequentConditionCode(forecasts),
    averageRelativeHumidity: average(
      forecasts.map((forecast) => forecast.relativeHumidity),
    ),
    averageWindSpeed: average(forecasts.map((forecast) => forecast.windSpeed)),
    totalPrecipitation: sum(
      forecasts.map((forecast) => forecast.totalPrecipitation),
    ),
  };
}

export function normalizeForecastDetails(apiResponse) {
  const forecastTimestamps = apiResponse.forecastTimestamps || [];
  const groupedForecasts = groupByDate(forecastTimestamps);

  return {
    place: {
      code: apiResponse.place.code,
      name: apiResponse.place.name,
      administrativeDivision: apiResponse.place.administrativeDivision,
      countryCode: apiResponse.place.countryCode,
    },
    forecastType: apiResponse.forecastType,
    forecastCreationTimeUtc: apiResponse.forecastCreationTimeUtc,
    current: normalizeCurrentForecast(getCurrentForecast(forecastTimestamps)),
    forecast: Object.entries(groupedForecasts)
      .slice(0, 5)
      .map(([date, forecasts]) => normalizeDailyForecast(date, forecasts)),
  };
}
