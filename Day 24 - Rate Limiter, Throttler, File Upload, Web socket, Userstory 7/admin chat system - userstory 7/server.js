const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const multer = require("multer");
const cors = require("cors");


const { limiter, speedLimiter } = require("./middleware/rateLimiter");
const auth = require("./middleware/auth");

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(limiter);
app.use(speedLimiter);

//file uploading 
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req,file,cb)=>{
    cb(null, Date.now()+"-"+file.originalname);
  }
});

const upload = multer({ storage });

app.post("/upload", auth("admin"), upload.single("file"), (req,res)=>{
  res.send("File uploaded");
});

//socket connection
io.on("connection", socket=>{
  console.log("User connected");

  socket.on("announcement", msg=>{
    io.emit("announcement", msg);
  });

  socket.on("chat", msg=>{
    io.emit("chat", msg);
  });

  socket.on("disconnect", ()=>{
    console.log("User left");
  });
});

server.listen(5000, ()=> console.log("Server Running"));
