import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({
      message: "City query parameter is required",
    });
  }

  const selectedAt = new Date().toISOString();

  console.log(`[${selectedAt}] City selected: ${city}`);

  res.status(200).json({
    city,
    current: {
      temperature: 16,
      humidity: 72,
      windSpeed: 4.2,
      condition: "Cloudy",
      observedAt: selectedAt,
    },
    forecast: [
      {
        date: "2026-05-30",
        minTemperature: 11,
        maxTemperature: 18,
        humidity: 70,
        windSpeed: 4.5,
        condition: "Cloudy",
      },
      {
        date: "2026-05-31",
        minTemperature: 10,
        maxTemperature: 19,
        humidity: 68,
        windSpeed: 3.8,
        condition: "Partly cloudy",
      },
      {
        date: "2026-06-01",
        minTemperature: 12,
        maxTemperature: 21,
        humidity: 65,
        windSpeed: 4.1,
        condition: "Sunny",
      },
      {
        date: "2026-06-02",
        minTemperature: 13,
        maxTemperature: 20,
        humidity: 71,
        windSpeed: 5.0,
        condition: "Rain",
      },
      {
        date: "2026-06-03",
        minTemperature: 12,
        maxTemperature: 18,
        humidity: 75,
        windSpeed: 4.7,
        condition: "Cloudy",
      },
    ],
  });
});

export default router;
