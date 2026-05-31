export function logPlaceSelection(placeCode) {
  const selectedAt = new Date().toISOString();

  console.log(`[${selectedAt}] Place selected: ${placeCode}`);

  return {
    placeCode,
    selectedAt,
  };
}
