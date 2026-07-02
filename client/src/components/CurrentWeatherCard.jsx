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
            <Typography variant="h4">{place.name}</Typography>
            <Typography color="text.secondary">
              {place.administrativeDivision}
            </Typography>
          </Box>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Box>
              <Typography variant="h2" sx={{ fontWeight: "500" }}>
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
            </Box>

            <Divider orientation="vertical" flexItem />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              flexWrap="wrap"
            >
              <WeatherStat label="Wind" value={`${current.windSpeed} m/s`} />

              <WeatherStat
                label="Humidity"
                value={`${current.relativeHumidity}%`}
              />

              <WeatherStat
                label="Pressure"
                value={`${current.seaLevelPressure} hPa`}
              />

              <WeatherStat
                label="Precipitation"
                value={`${current.totalPrecipitation} mm`}
              />
            </Stack>
          </Stack>

          <Divider />

          <Typography className="secondary-text">
            Updated: {formatUpdatedTime(weather.forecastCreationTimeUtc)}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

function WeatherStat({ label, value }) {
  return (
    <Box>
      <Typography variant="body2" className="secondary-text">
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
}

export default CurrentWeatherCard;
