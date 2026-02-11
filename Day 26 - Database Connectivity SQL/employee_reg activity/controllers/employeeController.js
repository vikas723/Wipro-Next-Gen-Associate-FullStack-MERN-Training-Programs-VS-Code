const pool = require("../db/connection");
const { validationResult } = require("express-validator");

exports.registerEmployee = async (req, res, next) => {
  try {
    console.log("BODY:", req.body); // Debug

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, department } = req.body;

    const [result] = await pool.query(
      "INSERT INTO employees (name, email, department) VALUES (?, ?, ?)",
      [name, email, department]
    );

    res.status(201).json({
      message: "Employee registered successfully",
      id: result.insertId
    });

  } catch (error) {
    console.error("FULL ERROR:", error);

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ message: "Email already exists" });
    }

    next(error);
  }
};

exports.getAllEmployees = async (req, res, next) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employees");
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};
