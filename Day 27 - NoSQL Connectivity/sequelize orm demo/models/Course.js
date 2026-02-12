// //Defining a Schema for Course

const {DataTypes} = require("sequelize");
const sequelize =require("../db/connection.js");
// const Instructor = require("./Instructor.js");

const Course=sequelize.define("Course",{
    title:{
        type:DataTypes.STRING,
        allowNull:false, 
        validate: {len: [5, 50]} // validating course length between 5 to 50
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull: false,
        validate: {min : 100} // validating the price
    }
  
})
module.exports=Course;


