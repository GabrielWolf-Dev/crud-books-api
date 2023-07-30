const books = require("../models/books");

const showAllBooks = (req, res) => {
  books.selectAll(res);
};

module.exports = { showAllBooks };
