//* src/app.js
//! Dependencies
import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

//! Routes
// import authRouter from "./routes/auth";
import projectsRouter from "./routes/projectRoutes.js";
// import { errorHandler } from "./middleware/errorHandler.js";

//! Config
const app = express();
const PORT = process.env.PORT;

//! Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//! api Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

//! api routes
// app.use(errorHandler);
app.use("/api/projects", projectsRouter);
// app.use('/api/auth', authRouter);

//! Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
