const STORAGE_KEY = "weather_app_viewed_cities";

function getStorage() {
  if (typeof window !== "undefined" && window.localStorage) {
    return window.localStorage;
  }

  if (typeof globalThis !== "undefined" && globalThis.localStorage) {
    return globalThis.localStorage;
  }

  return null;
}

export function getViewedCities() {
  const storage = getStorage();

  if (!storage) {
    return [];
  }

  try {
    const savedCities = storage.getItem(STORAGE_KEY);

    if (!savedCities) {
      return [];
    }

    return JSON.parse(savedCities);
  } catch {
    return [];
  }
}

export function getTopViewedCities() {
  return getViewedCities()
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);
}

export function saveViewedCity(place) {
  const storage = getStorage();
  const viewedCities = getViewedCities();

  const existingCity = viewedCities.find((city) => city.code === place.code);

  let updatedCities;

  if (existingCity) {
    updatedCities = viewedCities.map((city) =>
      city.code === place.code
        ? {
            ...city,
            views: city.views + 1,
          }
        : city,
    );
  } else {
    updatedCities = [
      ...viewedCities,
      {
        code: place.code,
        name: place.name,
        administrativeDivision: place.administrativeDivision,
        views: 1,
      },
    ];
  }

  if (storage) {
    storage.setItem(STORAGE_KEY, JSON.stringify(updatedCities));
  }

  return updatedCities.sort((a, b) => b.views - a.views).slice(0, 3);
}
