const express = require("express");
const multer = require("multer");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const fs = require("fs");

// Create upploads it not exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// File upload setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files allowed"));
    }
  }
});

// Middleware
app.use(express.static("public"));
app.use("/materials", express.static("uploads"));

// User Story 1 : File Upload
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully: " + req.file.filename);
});

// User Story 2: Serve static files
// already handled by express.static above

// User Story 3: Real-Time Chat
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start Server
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
