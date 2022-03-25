const mongoose = require("mongoose");

const minLength = 3;

const AuthorSchema = new mongoose.Schema({
  // name: String,
  name: {
    type: String,
    required: [true, "Name is required"],
    // minLength: [minLength, "Name must be at least 3 characters"],
    minLength: [minLength, "Name must be at least ${minLength} characters"],
  },
  // minLength: [minLength, `Name must be at least ${minLength}`]},
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
