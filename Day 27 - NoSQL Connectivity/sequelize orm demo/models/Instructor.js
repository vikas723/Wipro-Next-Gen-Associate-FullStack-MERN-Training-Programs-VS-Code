//Defining a Schema for Instructor

const {DataTypes} = require("sequelize");
const sequelize =require("../db/connection.js");

const Instructor=sequelize.define("Instructor",{
    name:{
        type:DataTypes.STRING,
        allowNull:false // not allowing the null values
    }
})
module.exports=Instructor;

