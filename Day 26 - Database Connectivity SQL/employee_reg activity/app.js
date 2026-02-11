const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());   // IMPORTANT

// Routes
const employeeRoutes = require("./routes/employeeRoutes");
app.use("/api/employee", employeeRoutes);

// Global Error Handler
app.use((error, req, res, next) => {
  console.error("GLOBAL ERROR:", error);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
