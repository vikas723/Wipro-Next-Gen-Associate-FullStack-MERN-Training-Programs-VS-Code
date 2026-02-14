const router = require("express").Router();
const auth = require("../middleware/auth");
const c = require("../controllers/student.controller");

router.get("/", auth, c.list);
// SHOW FORM
router.get("/create", auth, (req, res) => {
  res.render("createStudent");
});
router.post("/create", auth, c.create);

module.exports = router;