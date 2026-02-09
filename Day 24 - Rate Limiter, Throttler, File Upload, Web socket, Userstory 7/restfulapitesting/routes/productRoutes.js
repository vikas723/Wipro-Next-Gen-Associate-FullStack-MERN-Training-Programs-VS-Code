const express = require("express");
const { body, validationResult } = require("express-validator");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

let products = [{ id: 1, name: "laptop", email: "abc@gmail.com" }];

// health
router.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

// get products
router.get("/", auth, (req, res) => {
  res.json(products);
});

// create product
router.post(
  "/",
  auth,
  body("email").isEmail(),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    products.push(req.body);
    res.status(201).json({ message: "Product inserted" });
  }
);

// update
router.put("/:id", auth, (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Not found" });
  }

  product.name = req.body.name;
  res.json({ message: "Updated" });
});

// delete
router.delete("/:id", auth, (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
