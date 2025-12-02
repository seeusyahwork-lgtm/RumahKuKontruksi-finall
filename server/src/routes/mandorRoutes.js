//* src/routes/mandorRoutes.js
import express from "express";
import { listMandor, getMandorById } from "../controllers/mandorController.js";

const router = express.Router();

// GET /api/mandor
router.get("/", listMandor);

// GET /api/mandor/:id
router.get("/:id", getMandorById);

export default router;
