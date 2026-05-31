export const WEATHER_CONDITIONS = {
  clear: "Clear",
  "partly-cloudy": "Partly cloudy",
  "cloudy-with-sunny-intervals": "Cloudy with sunny intervals",
  cloudy: "Cloudy",
  "light-rain": "Light rain",
  rain: "Rain",
  "heavy-rain": "Heavy rain",
  thunder: "Thunderstorm",
  "isolated-thunderstorms": "Isolated thunderstorms",
  thunderstorms: "Thunderstorms",
  "heavy-rain-with-thunderstorms": "Heavy rain with thunderstorms",
  "light-sleet": "Light sleet",
  sleet: "Sleet",
  "freezing-rain": "Freezing rain",
  hail: "Hail",
  "light-snow": "Light snow",
  snow: "Snow",
  "heavy-snow": "Heavy snow",
  fog: "Fog",
};

export function getConditionLabel(conditionCode) {
  return WEATHER_CONDITIONS[conditionCode] || "Unknown conditions";
}
