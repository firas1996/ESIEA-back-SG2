const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Email is not valid !!!"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  confirm_Password: {
    type: String,
    minlength: 8,
    required: true,
    validate: {
      validator: function (cPass) {
        return this.password === cPass;
      },
      message: "password does not match !!!",
    },
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  last_pass_update: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcryptjs.hash(this.password, 16);
  this.confirm_Password = undefined;
  return next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
