export function notFoundHandler(req, res, next) {
  res.status(404).json({
    message: `Route not found: ${req.originalUrl}`,
  });
}

export function errorHandler(error, req, res, next) {
  const statusCode = error.response?.status || error.status || 500;

  console.error({
    message: error.message,
    status: statusCode,
    method: req.method,
    path: req.originalUrl,
    upstreamUrl: error.config?.url,
  });

  if (error.response) {
    if (error.response.status === 404) {
      return res.status(404).json({
        message: "Place not found",
      });
    }

    return res.status(error.response.status || 502).json({
      message: "Weather service returned an error",
    });
  }

  if (error.code === "ECONNABORTED") {
    return res.status(504).json({
      message: "Weather service request timed out",
    });
  }

  res.status(statusCode).json({
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : error.message || "Internal server error",
  });
}
