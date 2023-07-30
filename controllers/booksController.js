const booksModel = require("../models/books");

const showAllBooks = async (req, res) => {
  try {
    const books = await booksModel.selectAll();

    res
      .status(200)
      .json({
        message: "Request for all books succeeded",
        status: 200,
        results: books,
      });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "An error occurred on the server",
      status: 200,
      error: error.message,
    });
  }
};

module.exports = { showAllBooks };
