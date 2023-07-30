const router = require("express").Router();
const booksController = require("../controllers/booksController");

router.get("/books", booksController.showAllBooks);

module.exports = router;
