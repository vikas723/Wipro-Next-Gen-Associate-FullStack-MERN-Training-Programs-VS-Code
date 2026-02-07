// const router = require("express").Router();
// const Product = require("../models/Product");
// const auth = require("../middleware/auth");
// const admin = require("../middleware/authorizeAdmin");

// router.get("/dashboard", auth, admin, async (req, res) => {
//   const products = await Product.find();
//   res.render("dashboard", { products });
// });

// router.get("/add", auth, admin, (req, res) => {
//   res.render("addProduct");
// });

// router.post("/add", auth, admin, async (req, res) => {
//   await Product.create(req.body);
//   res.redirect("/dashboard");
// });

// module.exports = router;
const router = require("express").Router();
const Product = require("../models/Product");
const auth = require("../middleware/auth");
const admin = require("../middleware/authorizeAdmin");

// Admin Dashboard
router.get("/dashboard", auth, admin, async (req, res) => {
  const products = await Product.find();
  // res.render("dashboard", { products });
  res.json(products);
});

// Add Product via Thunder
router.post("/add", auth, admin, async (req, res) => {
  await Product.create(req.body);
  res.send("Product Added");
});

module.exports = router;
