const { body, validationResult } = require("express-validator");

const validateOrderRules = [
  body("custname")
    .trim()
    .notEmpty()
    .withMessage("Customer name is required"),

  body("items")
    .isArray({ min: 1 })
    .withMessage("Items must be an array with at least one product"),

  body("items.*.product_id")
    .isInt()
    .withMessage("Product ID must be number"),

  body("items.*.quantity")
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1")
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  next();
};

module.exports = {
  validateOrderRules,
  validate
};
