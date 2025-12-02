//* src/app.js
//! Dependencies
import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

//! Routes
// import authRouter from "./routes/auth";
import projectRouter from "./routes/projectRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import pengawasRouter from "./routes/pengawasRoutes.js";
import mandorRouter from "./routes/mandorRoutes.js";
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
app.use("/api/project", projectRouter);
app.use("/api/admin", adminRouter);
app.use("/api/pengawas", pengawasRouter);
app.use("/api/mandor", mandorRouter);
// app.use('/api/auth', authRouter);

//! Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
