import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { getConditionLabel } from "../utils/weatherConditions";
import { formatUpdatedTime } from "../utils/formatDate";
import { getWeatherIconPath } from "../utils/weatherIcons";

function CurrentWeatherCard({ weather }) {
  const current = weather?.current;
  const place = weather?.place;
  const todayForecast = weather?.forecast?.[0];

  if (!current || !place) {
    return null;
  }

  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" fontWeight={500}>
              {place.name}
            </Typography>

            <Typography className="secondary-text">
              {place.administrativeDivision}
            </Typography>
          </Box>

          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="stretch"
            sx={{
              width: "100%",
              gap: { xs: 3, md: 0 },
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={{ xs: "flex-start", md: "center" }}
              sx={{
                flex: { md: "0 0 330px" },
                pr: { md: 4 },
              }}
            >
              <Box
                component="img"
                src={getWeatherIconPath(current.conditionCode)}
                alt={getConditionLabel(current.conditionCode)}
                sx={{
                  width: { xs: 90, sm: 110, md: 125 },
                  height: { xs: 90, sm: 110, md: 125 },
                  objectFit: "contain",
                }}
              />

              <Stack spacing={0.5}>
                <Typography variant="h2" sx={{ fontWeight: "400" }}>
                  {Math.round(current.airTemperature)}°C
                </Typography>

                <Typography
                  variant="h5"
                  className="secondary-text"
                  sx={{ fontWeight: "400" }}
                >
                  {getConditionLabel(current.conditionCode)}
                </Typography>

                {todayForecast && (
                  <Typography className="secondary-text">
                    Min {Math.round(todayForecast.minTemperature)}°C / Max{" "}
                    {Math.round(todayForecast.maxTemperature)}°C
                  </Typography>
                )}
              </Stack>
            </Stack>

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: "none", md: "block" },
                height: "5rem",
                alignSelf: "center",
              }}
            />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    display: { xs: "none", sm: "block" },
                    height: "5rem",
                    alignSelf: "center",
                  }}
                />
              }
              sx={{
                flex: 1,
                minWidth: 0,
                alignItems: "center",
              }}
              spacing={2}
            >
              <WeatherStat
                icon="air"
                label="Wind"
                value={`${current.windSpeed} m/s`}
              />

              <WeatherStat
                icon="humidity_percentage"
                label="Humidity"
                value={`${current.relativeHumidity}%`}
              />

              <WeatherStat
                icon="speed"
                label="Pressure"
                value={`${current.seaLevelPressure} hPa`}
              />

              <WeatherStat
                icon="water_drop"
                label="Precipitation"
                value={`${current.totalPrecipitation} mm`}
              />
            </Stack>
          </Stack>

          <Divider />

          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "1em",
              }}
            >
              schedule
            </span>
            <Typography className="secondary-text">
              Updated: {formatUpdatedTime(weather.forecastCreationTimeUtc)}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function WeatherStat({ icon, label, value }) {
  return (
    <Stack
      direction="row"
      spacing={1.5}
      alignItems="center"
      justifyContent={{ xs: "flex-start", sm: "center" }}
      sx={{
        flex: 1,
        minWidth: 0,
        px: { xs: 0, sm: 2 },
        py: { xs: 1.5, sm: 0 },
      }}
    >
      <span className="material-symbols-outlined primary-text">{icon}</span>

      <Box>
        <Typography variant="body2" className="secondary-text">
          {label}
        </Typography>

        <Typography variant="body1" sx={{ fontWeight: "400" }}>
          {value}
        </Typography>
      </Box>
    </Stack>
  );
}

export default CurrentWeatherCard;
