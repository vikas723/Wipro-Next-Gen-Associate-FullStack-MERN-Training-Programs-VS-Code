const express = require("express");
const router = express.Router();

const { placeOrder, getOrders } = require("../controllers/orderController");
const { validateOrderRules, validate } = require("../middleware/validateOrder");


router.post("/order", validateOrderRules, validate, placeOrder);
router.get("/orders", getOrders);

module.exports = router;
