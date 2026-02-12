const {DataTypes} = require("sequelize");
const sequelize =require("../db/connection.js");

const Student=sequelize.define("Student",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true, // email should be unique
        validate: {isEmail : true} // validating the email
    }
})
module.exports=Student;