const {Sequelize} = require("sequelize"); //Importing Sequelize
require("dotenv").config();

const sequelize = new Sequelize( //creating the objects
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {host:  process.env.DB_HOST, dialect:"mysql", logging:false}
);

module.exports = sequelize;
