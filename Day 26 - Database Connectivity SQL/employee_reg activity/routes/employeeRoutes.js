const express = require("express");
const controller = require("../controllers/employeeController");
const { employeeValidation } = require("../middlewares/employeeValidator");

const router = express.Router();

router.post("/register", employeeValidation, controller.registerEmployee);
router.get("/employees", controller.getAllEmployees);

module.exports = router;
