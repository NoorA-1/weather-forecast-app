const WEATHER_ICON_MAP = {
  clear: "day.svg",

  "partly-cloudy": "cloudy-day-1.svg",
  "cloudy-with-sunny-intervals": "cloudy-day-2.svg",

  cloudy: "cloudy.svg",

  "light-rain": "rainy-2.svg",
  rain: "rainy-5.svg",
  "heavy-rain": "rainy-7.svg",

  thunder: "thunder.svg",
  "isolated-thunderstorms": "thunder.svg",
  thunderstorms: "thunder.svg",
  "heavy-rain-with-thunderstorms": "thunder.svg",

  "light-sleet": "snowy-2.svg",
  sleet: "snowy-5.svg",
  "freezing-rain": "snowy-5.svg",

  hail: "snowy-6.svg",

  "light-snow": "snowy-2.svg",
  snow: "snowy-5.svg",
  "heavy-snow": "snowy-6.svg",

  fog: "cloudy.svg",
};

export function getWeatherIconPath(conditionCode) {
  const iconFileName = WEATHER_ICON_MAP[conditionCode] || "weather.svg";

  return `/weather-icons/${iconFileName}`;
}
