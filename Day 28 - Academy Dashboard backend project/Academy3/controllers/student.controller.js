const { sequelize, Student, Profile } = require("../models");

exports.list = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const offset = (page - 1) * limit;

  const students = await Student.findAll({ limit, offset });
  res.render("students", { students, page });
};

exports.create = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const student = await Student.create(req.body, { transaction: t });
    await Profile.create(
      { phone: req.body.phone, address: req.body.address, StudentId: student.id },
      { transaction: t }
    );
    await t.commit();
    res.redirect("/students");
  } catch {
    await t.rollback();
    res.send("Transaction Failed");
  }
};