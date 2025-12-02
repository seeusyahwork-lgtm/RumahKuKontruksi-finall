//* src/routes/pengawasRoutes.js
import express from "express";
import {
  listPengawas,
  getPengawasById,
} from "../controllers/pengawasController.js";

const router = express.Router();

// GET /api/pengawas
router.get("/", listPengawas);

// GET /api/pengawas/:id
router.get("/:id", getPengawasById);

export default router;
