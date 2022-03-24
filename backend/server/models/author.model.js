const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: String,
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
