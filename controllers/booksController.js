const booksModel = require("../models/books");

const showAllBooks = async (req, res) => {
  try {
    const books = await booksModel.selectAll();

    res.status(200).json({
      message: "Request for all books succeeded",
      status: 200,
      results: books,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "An error occurred on the server",
      status: 500,
      error: error.message,
    });
  }
};

const createBook = async (req, res) => {
  const book = req.body;
  const defaultImg =
    "https://raw.githubusercontent.com/GabrielWolf-Dev/crud-books-api/main/public/svg/default_img_book.svg";
  const searchBook = await booksModel.selectSpecificBook(book.title);

  try {
    if (book.title !== searchBook.title) {
      const bookResult = await booksModel.insertBook(book);

      res.status(201).json({
        message: `Book: ${bookResult.title} inserted successfully!`,
        status: 201,
        results: {
          ...bookResult,
          image: bookResult.image === "" && defaultImg,
        },
      });
    } else {
      res.status(400).json({
        status: 400,
        message:
          "This book is already in the database, please insert a different one.",
      });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "An error occurred on the server",
      status: 500,
      error: error.message,
    });
  }
};

module.exports = { showAllBooks, createBook };