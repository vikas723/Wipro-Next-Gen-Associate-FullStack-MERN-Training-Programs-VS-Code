require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());

app.use("/products", productRoutes);

// error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log("Server running"));
}

module.exports = app;
