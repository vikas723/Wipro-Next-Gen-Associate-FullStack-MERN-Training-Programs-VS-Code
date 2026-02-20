const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/courses", courseRoutes);
app.use("/api/enroll", enrollmentRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);