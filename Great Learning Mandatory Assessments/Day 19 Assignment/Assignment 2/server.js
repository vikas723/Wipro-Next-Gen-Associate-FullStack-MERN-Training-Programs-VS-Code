const express = require("express");
const app = express();
const PORT = 4000;

const courseRoutes = require("./routes/courses");

app.get("/", (req, res)=>{
    res.send("Welcome to SkillSphere LMS API");
});

app.use("/courses", courseRoutes);
app.listen(PORT, ()=>{
    console.log(`server running at http://localhost:${PORT}`);
})