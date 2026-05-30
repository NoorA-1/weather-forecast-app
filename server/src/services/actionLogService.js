export function logPlaceSelection(place) {
  const selectedAt = new Date().toISOString();

  console.log(`[${selectedAt}] Place selected: ${place.name} (${place.code})`);

  return {
    placeCode: place.code,
    placeName: place.name,
    selectedAt,
  };
}
