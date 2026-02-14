const router = require("express").Router();
const auth = require("../middleware/auth");
const c = require("../controllers/report.controller");

router.get("/", auth, c.reports);

module.exports = router;