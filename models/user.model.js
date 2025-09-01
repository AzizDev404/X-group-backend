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
    nickname: {
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
