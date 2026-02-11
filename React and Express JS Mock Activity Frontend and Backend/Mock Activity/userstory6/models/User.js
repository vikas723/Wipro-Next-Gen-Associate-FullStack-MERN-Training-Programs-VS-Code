// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   role: { type: String, default: "admin" }
// });

// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

module.exports = mongoose.model("User", {
  username: String,
  password: String,
  role: { type: String, default: "user" }
});
