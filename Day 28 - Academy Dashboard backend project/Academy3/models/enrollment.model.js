module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Enrollment", {
    paymentAmount: DataTypes.INTEGER
  });
};