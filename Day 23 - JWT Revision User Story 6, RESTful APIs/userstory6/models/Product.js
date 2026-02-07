// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   category: String
// });

// module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

module.exports = mongoose.model("Product", {
  name: String,
  price: Number,
  category: String
});
