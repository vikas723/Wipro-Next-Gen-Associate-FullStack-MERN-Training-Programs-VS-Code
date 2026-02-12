const express =require("express");

require("dotenv").config(); // Load environment variables from .env file

const apiRoutes = require("./routes/apiRoutes");
const {sequelize} = require("./models") // Import user routes

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use("/api", apiRoutes); // Use the user routes for any requests to "/api/user" endpoint

sequelize.sync({alter:true})
.then(()=>{
    console.log("DataBase is Synchronize")
})

app.use((error,req,res,next) => {
    console.error(error);
    res.status(500).json({error: "Internal Server Error"});
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

/*sequelize.sync() tells Sequelize:

“Check my models and make my database tables match them.”

It creates tables if they don’t exist.

sequelize.sync({ alter: true })
This means: “If table already exists, modify it to match the model.” */