//* src/middleware/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({
    error: {
      message: err.message || "Internal server error",
      details: err?.details || null,
    },
  });
};
