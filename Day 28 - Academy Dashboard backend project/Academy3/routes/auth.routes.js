const router = require("express").Router();
const c = require("../controllers/auth.controller");

router.get("/login", c.showLogin);
router.post("/login", c.login);
router.get("/logout", c.logout);

module.exports = router;