const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  restaurant: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  openingHours: {
    mondayFriday: {
      type: String,
      default: "9 :00 AM - 10:00 PM"
    },
    saturdaySunday: {
      type: String,
      default: "11:00 AM - 11:00 PM"
    },
  },
  qrCodeImageUrl: {
    type: String,
    default: ""
  },
});

module.exports = mongoose.model("User", UserSchema);