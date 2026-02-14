// module.exports = (sequelize, DataTypes) => {
//   return sequelize.define("Instructor", {
//     name: DataTypes.STRING,
//     email: DataTypes.STRING
//   });
// };
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Instructor", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
};