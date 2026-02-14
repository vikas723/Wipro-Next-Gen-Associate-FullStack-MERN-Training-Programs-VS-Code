const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const c = require("../controllers/admin.controller");

router.get("/dashboard", auth, role("admin"), c.dashboard);
router.get("/create-instructor", auth, role("admin"), c.showInstructorForm);
router.post("/create-instructor", auth, role("admin"), c.createInstructor);
router.get("/create-course", auth, role("admin"), c.showCourseForm);
router.post("/create-course", auth, role("admin"), c.createCourse);

module.exports = router;