const { sequelize, Course, Student, Instructor } = require("../models");

exports.reports = async (req, res) => {
  const studentsPerCourse = await Course.findAll({
    attributes: [
      "title",
      [sequelize.fn("COUNT", sequelize.col("Students.id")), "total"]
    ],
    include: { model: Student, attributes: [] },
    group: ["Course.id"]
  });

  res.render("reports", { studentsPerCourse });
};