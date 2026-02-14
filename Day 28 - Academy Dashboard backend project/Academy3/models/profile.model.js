module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Profile", {
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  });
};