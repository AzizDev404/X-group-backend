const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    telegram_id: {
      type: Number,
      unique: true,
    },
    full_name: {
      type: String,
    },
    class: {
      type: String,
      enum:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      default: null,
    },
    group: {
      type: String,
      enum:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      default: null,
    },
    student_parrent: {
      type: String,
      enum:["Mother", "Father"],
      default: null,
    },
    parnet_full_name: {
      type: String,
      default: null,
    },
    phone_number: {
      type: String,
      default: null,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      enum: ["uz", "ru"],
      default: "uz",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
