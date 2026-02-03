const express = require("express");
const { server } = require("typescript");
const app = express();
const port = 4000;

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Welcome to Express Server");
});
app.get("/status", (req, res)=>{
    res.json({server: "running", uptime: "OK"});
});


app.get("/products", (req, res)=>{
    const name = req.query.name;
    if(name){
        res.json({query: name});
    }
    else{
        res.send("Please provide a product name");
    }
});

app.use((req, res, next)=>{
    const time = new Date().toLocaleString();
    console.log(`[${req.method}] ${req.url} - ${time}`);
    next();
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
