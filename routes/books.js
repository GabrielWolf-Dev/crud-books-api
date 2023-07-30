const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.get("/books", bookController.showAllBooks);

module.exports = router;
