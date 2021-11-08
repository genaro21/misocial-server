const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    avatar: {
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.statics.encrypt = async function (password) {
  return bcrypt.hash(password, 10);
};

userSchema.statics.compare = async function (password, hash) {
  return bcrypt.compare(password, hash);
};

module.exports = model("User", userSchema);
