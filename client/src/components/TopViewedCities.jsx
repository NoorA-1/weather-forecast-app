import { Button, Stack, Typography } from "@mui/material";

function TopViewedCities({ cities, onCityClick }) {
  if (!cities.length) {
    return null;
  }

  return (
    <Stack spacing={1}>
      <Typography variant="body2" className="secondary-text">
        Most viewed cities
      </Typography>

      <Stack direction="row" spacing={1}>
        {cities.map((city) => (
          <Button
            key={city.code}
            variant="outlined"
            size="small"
            onClick={() => onCityClick(city)}
          >
            {city.name}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}

export default TopViewedCities;
