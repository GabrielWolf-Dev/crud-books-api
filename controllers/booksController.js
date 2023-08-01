const booksModel = require("../models/books");

const defaultImg =
  "https://raw.githubusercontent.com/GabrielWolf-Dev/crud-books-api/main/public/svg/default_img_book.svg";

const showBooks = async (req, res) => {
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

const showSpecificBook = async (req, res) => {
  const { title } = req.params;

  try {
    const book = await booksModel.selectSpecificBook(title);

    if (book.title !== null) {
      res.status(200).json({
        message: `Request for '${title}' book succeeded`,
        status: 200,
        results: book,
      });
    } else {
      res.status(404).json({
        message: `The book you are looking for does not exist.`,
        status: 404,
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

const createBook = async (req, res) => {
  const book = req.body;
  const searchBook = await booksModel.selectSpecificBook(book.title);

  try {
    if (book.title !== searchBook.title) {
      const bookObj = {
        ...book,
        image: book.image === "" && defaultImg,
      };
      const bookResult = await booksModel.insertBook(bookObj);

      res.status(201).json({
        message: `Book: '${bookResult.title}' inserted successfully!`,
        status: 201,
        results: bookObj,
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

const removeBook = async (req, res) => {
  try {
    const { id } = req.params;

    await booksModel.deleteBook(id);
    res.status(204).json();
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "An error occurred on the server",
      status: 500,
      error: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const book = req.body;
  const isBookExists = await booksModel.selectBookId(id);
  const searchBook = await booksModel.selectSpecificBook(book.title);

  if (isBookExists === null) {
    res.status(404).json({
      status: 404,
      message: "The book you are looking for does not exist.",
    });

    return;
  }

  try {
    if (book.title !== searchBook.title) {
      const bookObj = {
        ...book,
        image: book.image === "" && defaultImg,
      };

      await booksModel.updateBook(id, bookObj);
      res.status(204).json();
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

module.exports = {
  showBooks,
  showSpecificBook,
  createBook,
  removeBook,
  updateBook,
};
