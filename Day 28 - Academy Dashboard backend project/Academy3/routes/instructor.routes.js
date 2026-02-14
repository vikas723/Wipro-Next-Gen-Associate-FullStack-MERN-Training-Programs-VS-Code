// const router = require("express").Router();
// const auth = require("../middleware/auth");
// const c = require("../controllers/instructor.controller");

// router.get("/dashboard", auth, c.dashboard);

// module.exports = router;
const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const c = require("../controllers/instructor.controller");

router.get("/dashboard", auth, role("instructor"), c.dashboard);

module.exports = router;