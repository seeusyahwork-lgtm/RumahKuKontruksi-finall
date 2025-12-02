//* src/routes/projectRoutes.js
import express from "express";
import {
  listProjects,
  getProjectById,
  // createProject,
  // updateProject,
  // deleteProject,
} from "../controllers/projectsController.js";

const router = express.Router();

// GET /api/project
router.get("/", listProjects);

// GET /api/project/:id
router.get("/:id", getProjectById);

// POST /api/project
// router.post("/", createProject);

// PUT /api/project/:id
// router.put("/:id", updateProject);

// DELETE /api/project/:id
// router.delete("/:id", deleteProject);

export default router;
