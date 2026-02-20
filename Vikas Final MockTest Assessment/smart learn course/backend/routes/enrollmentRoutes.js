const express = require("express");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { userId, courseId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "UserId is required"
      });
    }

    const courseExists = await Course.findOne({ courseId });
    if (!courseExists) {
      return res.status(400).json({
        success: false,
        message: "Course does not exist"
      });
    }

    const enrollment = await Enrollment.create({ userId, courseId });

    res.status(201).json({
      success: true,
      message: "Enrollment successful",
      data: enrollment
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Duplicate enrollment not allowed"
      });
    }
    next(error);
  }
});
module.exports = router;