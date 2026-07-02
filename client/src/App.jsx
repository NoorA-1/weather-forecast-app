import { Container, Stack, Typography, Box } from "@mui/material";
import CityDropdown from "./components/CityDropdown";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import ForecastList from "./components/ForecastList";
import Loader from "./components/Loader";
import { usePlaces } from "./hooks/usePlaces";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { places, loadingPlaces, placesError } = usePlaces();
  const { selectedPlace, weather, loadingWeather, weatherError, loadWeather } =
    useWeather();

  return (
    <main className="app">
      <Container maxWidth="lg">
        <Stack spacing={4} py={5}>
          <Box sx={{ alignSelf: "center" }}>
            <Typography variant="h3" component="h1" fontWeight={500}>
              Weather Forecast
            </Typography>

            <Typography
              variant="h6"
              className="secondary-text"
              textAlign="left"
            >
              Lithuania
            </Typography>
          </Box>

          <CityDropdown
            places={places}
            selectedPlace={selectedPlace}
            loading={loadingPlaces}
            disabled={loadingPlaces}
            onPlaceChange={loadWeather}
          />

          {loadingPlaces && <Loader message="Loading places..." />}

          <ErrorMessage message={placesError} />

          {loadingWeather && <Loader message="Loading weather forecast..." />}

          <ErrorMessage message={weatherError} />

          {!loadingWeather && weather && (
            <>
              <CurrentWeatherCard weather={weather} />
              <ForecastList forecast={weather.forecast} />
            </>
          )}

          <Typography textAlign="center" color="text.secondary">
            Data provided by meteo.lt
          </Typography>
        </Stack>
      </Container>
    </main>
  );
}

export default App;
