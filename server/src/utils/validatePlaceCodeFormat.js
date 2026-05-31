export function validatePlaceCodeFormat(placeCode) {
  if (!placeCode) {
    return {
      isValid: false,
      message: "placeCode query parameter is required",
    };
  }

  if (typeof placeCode !== "string") {
    return {
      isValid: false,
      message: "placeCode must be a string",
    };
  }

  const normalizedPlaceCode = placeCode.trim().toLowerCase();

  if (!normalizedPlaceCode) {
    return {
      isValid: false,
      message: "placeCode cannot be empty",
    };
  }

  if (normalizedPlaceCode.length > 80) {
    return {
      isValid: false,
      message: "placeCode is too long",
    };
  }

  if (!/^[a-z0-9-]+$/.test(normalizedPlaceCode)) {
    return {
      isValid: false,
      message: "placeCode contains invalid characters",
    };
  }

  return {
    isValid: true,
    placeCode: normalizedPlaceCode,
  };
}
