export function notFoundHandler(req, res, next) {
  res.status(404).json({
    message: `Route not found: ${req.originalUrl}`,
  });
}

export function errorHandler(error, req, res, next) {
  console.error(error);

  if (error.response) {
    return res.status(error.response.status || 502).json({
      message: "Weather service returned an error",
    });
  }

  if (error.code === "ECONNABORTED") {
    return res.status(504).json({
      message: "Weather service request timed out",
    });
  }

  res.status(error.status || 500).json({
    message: error.message || "Internal server error",
  });
}
