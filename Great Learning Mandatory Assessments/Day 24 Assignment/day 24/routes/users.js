const express = require("express");
const router = express.Router();

let users = [{ id: 1, name: "John" }];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;
