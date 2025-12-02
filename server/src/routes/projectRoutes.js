//* src/routes/projects.js
import express from "express";
import {
  listProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectsController.js";

const router = express.Router();

// GET /api/projects
router.get("/", listProjects);

// GET /api/projects/:id
router.get("/:id", getProjectById);

// POST /api/projects
router.post("/", createProject);

// PUT /api/projects/:id
router.put("/:id", updateProject);

// DELETE /api/projects/:id
router.delete("/:id", deleteProject);

export default router;
