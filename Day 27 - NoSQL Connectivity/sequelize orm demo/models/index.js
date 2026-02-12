// building relations and associations for instrucot and course 1-1, 1-n

const sequelize =require("../db/connection.js"); // building relation
const Course = require("./Course.js");
const Instructor = require("./Instructor.js");
const Enrollment = require("./Enrollment.js");
const Student = require("./Student.js");

Instructor.hasMany(Course) // hasmany is for 1 - n relation
Course.belongsTo(Instructor)



Student.belongsToMany(Course, {  // Many students enrolled to many courses
  through: "Enrollment",
});

Course.belongsToMany(Student, {
  through: "Enrollment",
});

module.exports={sequelize,Course,Instructor, Student, Enrollment};