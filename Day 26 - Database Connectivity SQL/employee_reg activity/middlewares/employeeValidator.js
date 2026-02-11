const { body } = require("express-validator");

exports.employeeValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("department").notEmpty().withMessage("Department is required")
];
