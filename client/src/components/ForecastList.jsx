import { Grid, Typography } from "@mui/material";
import ForecastCard from "./ForecastCard";

function ForecastList({ forecast }) {
  if (!forecast?.length) {
    return null;
  }

  return (
    <section>
      <Typography variant="h5" component="h2" gutterBottom>
        5-Day Forecast
      </Typography>

      <Grid container spacing={3}>
        {forecast.map((day) => (
          <Grid item xs={12} sm={6} md={2.4} key={day.date}>
            <ForecastCard day={day} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default ForecastList;
