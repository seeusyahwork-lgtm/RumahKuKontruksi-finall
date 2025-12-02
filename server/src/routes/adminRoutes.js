//* src/routes/adminRoutes.js
import express from "express";
import { listAdmins, getAdminById } from "../controllers/adminController.js";

const router = express.Router();

// GET /api/admin
router.get("/", listAdmins);

// GET /api/admin/:id
router.get("/:id", getAdminById);

export default router;
