const router = require("express").Router();
const BookController = require("../controllers/BookController");

router.get("/books", BookController.showAllBooks);

module.exports = router;
