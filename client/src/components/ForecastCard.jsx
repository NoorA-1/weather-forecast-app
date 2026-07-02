import { Card, CardContent, Stack, Typography } from "@mui/material";
import { getConditionLabel } from "../utils/weatherConditions";
import { formatForecastDate } from "../utils/formatDate";

function ForecastCard({ day }) {
  return (
    <Card sx={{ paddingX: 4 }}>
      <CardContent>
        <Stack spacing={1.5} alignItems="center">
          <Typography variant="h6">{formatForecastDate(day.date)}</Typography>

          <Typography variant="h4" sx={{ fontWeight: "500" }}>
            {Math.round(day.maxTemperature)}°C
          </Typography>

          <Typography className="primary-text" sx={{ fontWeight: "500" }}>
            {Math.round(day.minTemperature)}°C
          </Typography>

          <Typography textAlign="center" className="secondary-text">
            {getConditionLabel(day.conditionCode)}
          </Typography>

          <Typography variant="body2" className="secondary-text">
            Wind: {day.averageWindSpeed} m/s
          </Typography>

          <Typography variant="body2" className="secondary-text">
            Rain: {day.totalPrecipitation} mm
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ForecastCard;
