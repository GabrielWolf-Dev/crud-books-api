const Books = require("../models/Books");

class BookController {
  static async showAllBooks(req, res) {
    const books = new Books();

    books.selectAll(res);
  }
}

module.exports = BookController;
