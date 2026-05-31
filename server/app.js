import express from "express";
import cors from "cors";
import { env } from "./src/config/env.js";
import healthRoutes from "./src/routes/healthRoutes.js";
import weatherRoutes from "./src/routes/weatherRoutes.js";
import placeRoutes from "./src/routes/placeRoutes.js";
import {
  notFoundHandler,
  errorHandler,
} from "./src/middleware/errorHandlers.js";

const app = express();

app.use(
  cors({
    origin: env.clientUrl,
  }),
);

app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/places", placeRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
