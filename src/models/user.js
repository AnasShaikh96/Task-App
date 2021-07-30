const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    trim: true,

    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("age must be positive number");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("password cannot contain password");
      }
    },
  },
});

const work = new User({
  name: "beluga",
  email: "beluwuga@bonk.com",
  age: 14,
  password: "12233444455555",
});

module.exports = User;
