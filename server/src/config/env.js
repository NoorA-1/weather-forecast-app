import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 5000,
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  weatherApiBaseUrl:
    process.env.WEATHER_API_BASE_URL || "https://api.meteo.lt/v1",
  mongoDbUri: process.env.MONGODB_URI || "",
  enableDbLogging: process.env.ENABLE_DB_LOGGING === "true",
};
