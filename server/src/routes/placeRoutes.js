import { Router } from "express";
import { getAllPlaces } from "../controllers/placeController.js";

const router = Router();

router.get("/", getAllPlaces);

export default router;
