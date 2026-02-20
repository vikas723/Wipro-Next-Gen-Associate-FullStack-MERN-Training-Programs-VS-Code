const express = require("express");
const { body, validationResult } = require("express-validator");
const Course = require("../models/Course");

const router = express.Router();

router.post(
  "/",
  [
    body("courseId").notEmpty(),
    body("title").notEmpty(),
    body("category").notEmpty(),
    body("price").isFloat({ min: 0 })
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation Error",
          data: errors.array()
        });
      }

      const course = await Course.create(req.body);

      res.status(201).json({
        success: true,
        message: "Course Created",
        data: course
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get("/", async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.json({
      success: true,
      data: courses,
      message: "Courses fetched"
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;