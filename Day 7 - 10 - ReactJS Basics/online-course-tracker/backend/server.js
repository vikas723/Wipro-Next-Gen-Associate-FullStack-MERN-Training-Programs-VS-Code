const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const courseRoutes = require("./routes/courses");
app.use("/courses", courseRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
