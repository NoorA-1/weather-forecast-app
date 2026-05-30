export function getDateFromUtc(timestamp) {
  if (!timestamp) {
    return null;
  }

  return timestamp.includes("T")
    ? timestamp.split("T")[0]
    : timestamp.split(" ")[0];
}

export function parseUtcDate(timestamp) {
  if (!timestamp) {
    return null;
  }

  const isoTimestamp = timestamp.includes("T")
    ? timestamp
    : timestamp.replace(" ", "T");

  return new Date(`${isoTimestamp}Z`);
}
