import { Card, CardContent, Stack, Typography } from "@mui/material";
import { getConditionLabel } from "../utils/weatherConditions";
import { formatForecastDate } from "../utils/formatDate";
import { getWeatherIconPath } from "../utils/weatherIcons";

function ForecastCard({ day }) {
  return (
    <Card>
      <CardContent>
        <Stack
          spacing={1.5}
          sx={{ paddingX: 5.3, justifyContent: "center", alignItems: "center" }}
        >
          <Typography variant="h6">{formatForecastDate(day.date)}</Typography>

          <img
            src={getWeatherIconPath(day.conditionCode)}
            alt={day.conditionCode || "Weather condition"}
            width="80"
            height="80"
          />

          <Typography
            variant="h4"
            sx={{ fontWeight: "500", textAlign: "center" }}
          >
            {Math.round(day.maxTemperature)}°C
          </Typography>

          <Typography
            className="primary-text"
            sx={{ fontWeight: "500", textAlign: "center" }}
          >
            {Math.round(day.minTemperature)}°C
          </Typography>

          <Typography className="secondary-text" sx={{ textAlign: "center" }}>
            {getConditionLabel(day.conditionCode)}
          </Typography>

          {/* <Typography variant="body2" className="secondary-text">
            Wind: {day.averageWindSpeed} m/s
          </Typography>

          <Typography variant="body2" className="secondary-text">
            Rain: {day.totalPrecipitation} mm
          </Typography> */}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ForecastCard;
