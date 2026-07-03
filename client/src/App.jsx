import { useEffect, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import CityDropdown from "./components/CityDropdown";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import ForecastList from "./components/ForecastList";
import Loader from "./components/Loader";
import TopViewedCities from "./components/TopViewedCities";
import { usePlaces } from "./hooks/usePlaces";
import { useWeather } from "./hooks/useWeather";
import {
  getTopViewedCities,
  saveViewedCity,
} from "./utils/viewedCitiesStorage";

function App() {
  const { places, loadingPlaces, placesError } = usePlaces();
  const { selectedPlace, weather, loadingWeather, weatherError, loadWeather } =
    useWeather();

  const [topViewedCities, setTopViewedCities] = useState([]);

  useEffect(() => {
    setTopViewedCities(getTopViewedCities());
  }, []);

  function handlePlaceChange(place) {
    const updatedTopCities = saveViewedCity(place);

    setTopViewedCities(updatedTopCities);
    loadWeather(place);
  }

  return (
    <main className="app">
      <Container maxWidth="lg">
        <Stack spacing={4} py={5}>
          <Box sx={{ alignSelf: "center" }}>
            <Typography variant="h3" component="h1" fontWeight={500}>
              Weather Forecast
            </Typography>

            <Typography variant="h6" className="secondary-text">
              Lithuania
            </Typography>
          </Box>

          <CityDropdown
            places={places}
            selectedPlace={selectedPlace}
            loading={loadingPlaces}
            disabled={loadingPlaces}
            onPlaceChange={handlePlaceChange}
          />

          <TopViewedCities
            cities={topViewedCities}
            onCityClick={handlePlaceChange}
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

          <Typography color="text.secondary">
            Data provided by meteo.lt
          </Typography>
        </Stack>
      </Container>
    </main>
  );
}

export default App;
