const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const User = require("./user.model")(sequelize, Sequelize);
const Instructor = require("./instructor.model")(sequelize, Sequelize);
const Student = require("./student.model")(sequelize, Sequelize);
const Profile = require("./profile.model")(sequelize, Sequelize);
const Course = require("./course.model")(sequelize, Sequelize);
const Enrollment = require("./enrollment.model")(sequelize, Sequelize);

/* Relationships */
Student.hasOne(Profile);
Profile.belongsTo(Student);

Instructor.hasMany(Course);
Course.belongsTo(Instructor);

Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });

module.exports = {
  sequelize,
  User,
  Instructor,
  Student,
  Profile,
  Course,
  Enrollment
};