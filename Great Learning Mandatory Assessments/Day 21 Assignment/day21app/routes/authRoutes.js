const express = require("express");
const passport = require("passport");
const { isAdmin } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login.html"
  })
);

router.get("/admin", isAdmin, (req, res) => {
  res.send("Welcome, Admin!");
});

module.exports = router;
