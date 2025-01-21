const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  UserName: {
    required: true,
    type: String,
  },
  Password: {
    required: true,
    type: String,
  },
  Role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
