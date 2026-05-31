import { Card, CardContent, Stack, Typography } from "@mui/material";
import { getConditionLabel } from "../utils/weatherConditions";
import { formatForecastDate } from "../utils/formatDate";

function ForecastCard({ day }) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1.5} alignItems="center">
          <Typography variant="h6">{formatForecastDate(day.date)}</Typography>

          <Typography variant="h4">
            {Math.round(day.maxTemperature)}°C
          </Typography>

          <Typography color="primary">
            {Math.round(day.minTemperature)}°C
          </Typography>

          <Typography textAlign="center" color="text.secondary">
            {getConditionLabel(day.conditionCode)}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Wind: {day.averageWindSpeed} m/s
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Rain: {day.totalPrecipitation} mm
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ForecastCard;
